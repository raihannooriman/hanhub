"use server";

import { Resend } from "resend";
import { getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);
const isValid = (input: string, maxLength: number) =>
  typeof input === "string" && input.length <= maxLength;
export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail") as string;
  const message = formData.get("message") as string;
  if (!isValid(senderEmail, 500)) return { error: "Invalid sender email" };
  if (!isValid(message, 5000)) return { error: "Invalid message" };
  try {
    const data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "noorimanr@gmail.com",
      subject: "Pesan dari Hanhub",
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, { message, senderEmail }),
    });
    return { data };
  } catch (error) {
    return { error: getErrorMessage(error) };
  }
};
