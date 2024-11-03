"use server";
import { signOut } from "@/auth";

export const logout = async () => {
  console.log("Logged out");
  await signOut({ redirectTo: "/auth/login" });
  
};
