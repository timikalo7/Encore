"use server";
import { currentUser } from './../lib/auth';
import { db } from "@/lib/db";
import bcrypt from "bcryptjs";
import { z } from "zod";
import { CreateAccountSchema } from "@/schemas";

export const createAccount = async (values: z.infer<typeof CreateAccountSchema>) => { 
    const validatedFields = CreateAccountSchema.safeParse(values);
    const user = await currentUser();

    if (!validatedFields.success) {
      return { error: "Invalid fields!" };
    }

    const { email, password, name, role } = validatedFields.data;
    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await db.user.findUnique({
        where: {
            email
        }
    })

    if (existingUser) {
        return { error: "User already exists!" };
    }

    if (!user) {
        return { error: "User not found" }
    }

    if (user.role !== "ADMIN") {
        return { error: "You do not have permission to create an account!" };
    }
    

    await db.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
        role,
      },
    });

    return { success: "Account created!" };
}