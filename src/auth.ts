import NextAuth, { DefaultSession } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { getUserById } from "@/data/user";
import authConfig from "./auth.config";
import { db } from "@/lib/db";
import { UserRole } from "@prisma/client";
import { Session } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      role: string;
    } & DefaultSession["user"];
  }
}

export const {
  auth,
  handlers: { GET, POST },
  signIn,
  signOut,
} = NextAuth({
  pages: {
    error: "/auth/error",
  },
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider !== "credentials") return true;
      if (!user?.id) return false;
      const existingUser = await getUserById(user.id);
      return !!existingUser;
    },
    async session({ session, token }): Promise<Session> {
      if (!session.user) {
        return session;
      }
      return {
        ...session,
        user: {
          ...session.user,
          id: token.sub,
          role: (token.role as UserRole) ?? "USER",
        },
      };
    },
    async jwt({ token, user }) {
      if (user) {
        token.exp = Math.floor(Date.now() / 1000) + 60 * 60; // 1 hour
      }
      if (!token.sub) return token;

      const existingUser = await getUserById(token.sub as string);

      if (!existingUser) return token;

      token.role = existingUser.role;

      return token;
    },
  },
  adapter: PrismaAdapter(db),
  session: {
    strategy: "jwt",
  },
  ...authConfig,
});
