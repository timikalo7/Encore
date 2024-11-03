"use server";
import { db } from "@/lib/db";
import { currentUser } from "@/lib/auth";
import { z } from "zod";
import { ChangePasswordSchema } from "@/schemas";
import bcrypt from "bcryptjs";

export const changepassword = async (values: z.infer<typeof ChangePasswordSchema>) => { 
    const validatedFields = ChangePasswordSchema.safeParse(values);
    const user = await currentUser();

    if (!validatedFields.success) {
      return { error: "Invalid fields!" };
    }

    if (!user) {
        return { error: "User not found" }
    }

    const { password } = validatedFields.data;

    const hashedPassword = await bcrypt.hash(password, 10);

    await db.user.update({
        where: {
            id: user.id
        },
        data: {
            password: hashedPassword
        }
    });

    return { success: "Password changed successfully" };

}