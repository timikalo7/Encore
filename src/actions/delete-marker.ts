"use server";
import { db } from "@/lib/db";
import { currentUser } from "@/lib/auth";

export const deleteMarker = async ({ email }: { email: string }) => {
  try {
    const user = await currentUser(); // Adjust if the function signature is different

    if (!user) {
      return { error: "User not authenticated" };
    }

    if (user.role !== "ADMIN") {
      return { error: "You do not have permission to delete a Marker." };
    }

    const orgId = await db.receivingOrganization.findUnique({
      where: { receivingOrgContactEmail: email },
    });

    await db.donated.deleteMany({
      where: { orgId: orgId?.id },
    });

    await db.receivingOrganization.delete({
      where: { receivingOrgContactEmail: email },
    });
    return { success: "Marker Successfully Deleted" };
  } catch (error) {
    console.error("Error deleting Marker:", error);
    return { error: "An error occurred while deleting the Marker." };
  }
};
