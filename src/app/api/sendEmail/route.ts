import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { ContactSchema } from "@/schemas";
import { z } from "zod";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = ContactSchema.parse(body);

    console.log("Received form data:", { name, email, subject, message });

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
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: subject,
      text: message,
      html: `
    <h1>New Contact Form Submission</h1>
    <p><strong>Name:</strong> ${name}, <strong>Email:</strong> ${email}</p>
    <p><strong>Subject:</strong> ${subject}</p>
    <p><strong>Message:</strong></p>
    <p>${message}</p>
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
