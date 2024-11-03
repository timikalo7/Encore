"use server";
import { db } from "@/lib/db";
import { currentUser } from "@/lib/auth";

export const deleteDonation = async ({ rowIds }: { rowIds: string[] }) => {
  console.log("deleteDonation server action called", rowIds);
  try {
    const user = await currentUser(); // Adjust if the function signature is different

    if (!user) {
      return { error: "User not authenticated" };
    }

    if (user.role !== "ADMIN") {
      return { error: "You do not have permission to delte a donation." };
    }

    await db.donated.deleteMany({
      where: { id: { in: rowIds } },
    });

    return { success: "Donation Successfully Deleted" };
  } catch (error) {
    console.error("Error deleting Donation:", error);
    return { error: "An error occurred while deleting the donation." };
  }
};
