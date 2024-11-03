import { reset } from "./../actions/reset";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { ResetSchema } from "@/schemas";
import { z } from "zod";
const domain = process.env.NEXT_PUBLIC_APP_URL;



export const sendPasswordResetEmail = async (email: string, token: string) => {
  try {
   const resetLink = `${domain}/auth/new-password?token=${token}`;

    console.log("Received form data:", { email });

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    console.log("Transporter created");

    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Reset your password",
      html: `
      
    <h1>Reset Password</h1>
    <p><strong>Email:</strong> ${email}</p>
    <p>Click <a href="${resetLink}">here</a> to reset your password.</p>
  `,
    });

    console.log("Message sent: %s", info.messageId);
    return NextResponse.json({ message: "Email sent" }, { status: 200 });
  } catch (error) {
    console.error("Failed to send email:", error);
    if (error instanceof z.ZodError) {
      return NextResponse.json({ message: "Invalid input" }, { status: 400 });
    }
    return NextResponse.json(
      { message: "Email Failed to send" },
      { status: 500 }
    );
  }
}


// export const sendPasswordResetEmail = async (email: string, token: string) => {
//   const resetLink = `http://localhost:3000/auth/new-password?token=${token}`;

//   await resend.emails.send({
//     from: "onboarding@resend.dev",
//     to: email,
//     subject: "Reset your password",
//     html: `<p>Click <a href="${resetLink}">here</a> to reset your password.</p>`,
//   });
// };
