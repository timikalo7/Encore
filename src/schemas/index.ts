import { ReceivingOrganization, UserRole } from '@prisma/client';
import * as z from "zod";

export const ContactSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Email is required" }),
  subject: z.string().min(1, { message: "Subject is required" }),
  message: z.string().min(1, { message: "Message is required" }),
});

export const LoginSchema = z.object({
  email: z.string().email({ message: "Email is required" }),
  password: z.string().min(6, {
    message: "Minimum of 6 characters required",
  }),
  code: z.optional(z.string()),
});

export const MarkerSchema = z.object({
  primaryPartner: z.string().min(1, { message: "Primary Partner is required" }),
  secondaryPartner: z.string().min(1, { message: "Secondary Partner is required" }),
  receivingOrgName: z.string().min(1, { message: "Receiving Organisation is required" }), 
  receivingOrgIdNumber: z.string().min(1, { message: "Receiving Organisation ID Number is required" }),
  typeOfOrganization: z.string().min(1, { message: "Type of Organisation is required" }),
  receivingOrgAddress: z.string().min(1, { message: "Receiving Organisation Address is required" }),
  receivingOrgContactName: z.string().min(1, { message: "Receiving Organisation Contact Name is required" }),
  receivingOrgContactEmail: z.string().email({ message: "Receiving Organisation Contact Email is required" }),
  receivingOrgPhoneNumber: z.string().min(1, { message: "Receiving Organisation Phone Number is required" }),
  lng: z.number(),
  lat: z.number(),
  userEmail: z.string().email({ message: "User Email is required" }),
})

export const CreateAccountSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Email is required" }),
  password: z.string().min(6, {
    message: "Minimum of 6 characters required",
  }),
  role: z.nativeEnum(UserRole),
});

export const ChangePasswordSchema = z.object({
  password: z.string().min(6, {
    message: "Minimum of 6 characters required",
  }),
});

export const AddDonationSchema = z.object({
  assetNumber: z.string().min(1, { message: "Asset Number is required" }),
  donatedItem: z.string().min(1, { message: "Donated Item is required" }),
  userEmail: z.string().email({ message: "User Email is required" }),
  orgEmail: z.string().email({ message: "Organisation Email is required" }),
});

export const ResetSchema = z.object({
  email: z.string().email({ message: "Email is required" }),
});

export const NewPasswordSchema = z.object({
  password: z.string().min(6, {
    message: "Minimum of 6 characters required",
  }),
});