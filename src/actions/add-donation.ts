"use server";
import { db } from "@/lib/db";
import { currentUser } from "@/lib/auth";
import { z } from "zod";
import { AddDonationSchema } from "@/schemas";

export const addDonation = async (values: z.infer<typeof AddDonationSchema>) => {
  console.log("addMarker");
  const validatedFields = AddDonationSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { assetNumber, donatedItem, userEmail, orgEmail } =
    validatedFields.data;

  try {
    const user = await currentUser(); // Adjust if the function signature is different

    if (!user) {
      return { error: "User not authenticated" };
    }

    if (user.role !== "ADMIN") {
      return { error: "You do not have permission to add a donation." };
    }

    const orguser = await db.user.findUnique({
      where: { email: userEmail },
    });

    if (!orguser) {
      return { error: "Email Not Found" };
    }

    const org = await db.receivingOrganization.findUnique({
      where: { receivingOrgContactEmail: orgEmail },
    });

    if (!org) {
      return { error: "Organisation Not Found" };
    }

    await db.donated.create({
      data: {
        assetNumber: assetNumber,
        donatedItem: donatedItem,

        user: {
          connect: { id: orguser.id },
        },
        receivingorganization: {
          connect: { receivingOrgContactEmail: orgEmail },
        },
      },
    });
    return { success: "Donation added successfully" };
  } catch (error) {
    console.error("Error adding Donation:", error);
    return { error: "An error occurred while adding the Donation." };
  }
};
