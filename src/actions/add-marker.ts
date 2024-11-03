"use server";
import { db } from "@/lib/db";
import { currentUser } from "@/lib/auth";
import { z } from "zod";
import { MarkerSchema } from "@/schemas";

export const addMarker = async (values: z.infer<typeof MarkerSchema>) => {
    console.log("addMarker");
  const validatedFields = MarkerSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const {
    primaryPartner,
    secondaryPartner,
    receivingOrgName,
    receivingOrgIdNumber,
    typeOfOrganization,
    receivingOrgAddress,
    receivingOrgContactName,
    receivingOrgContactEmail,
    receivingOrgPhoneNumber,
    lng,
    lat,
    userEmail,
  } = validatedFields.data;

  try {
    const user = await currentUser(); // Adjust if the function signature is different

    if (!user) {
      return { error: "User not authenticated" };
    }

    if (user.role !== "ADMIN") {
      return { error: "You do not have permission to add a marker." };
    }


    const existingOrg = await db.receivingOrganization.findUnique({
      where: { receivingOrgContactEmail: receivingOrgContactEmail },
    });

    if (existingOrg) {
      return { error: "The contact email already exists in the database." };
    }

    const orguser = await db.user.findUnique({
      where: { email: userEmail },
    });


    if (!orguser) {
      return { error: "Email Not Found" };
    }

    console.log("orguser found");

    await db.receivingOrganization.create({
      data: {
        primaryPartner,
        secondaryPartner,
        receivingOrgName,
        receivingOrgIdNumber,
        typeOfOrganization,
        receivingOrgAddress,
        receivingOrgContactName,
        receivingOrgContactEmail,
        receivingOrgPhoneNumber,
        lat,
        lng,
        user: {
          connect: { id: orguser.id },
        },
      },
    });
    return { success: "Marker added successfully" };
  } catch (error) {
    console.error("Error adding marker:", error);
    return { error: "An error occurred while adding the marker." };
  }
};
