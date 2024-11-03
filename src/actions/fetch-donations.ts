"use server";
import { db } from "@/lib/db";
import { currentUser } from "@/lib/auth";
import { ReceivingOrganization } from "@prisma/client";

export const fetchDonations = async () => {

  const user = await currentUser();
  if (!user) throw new Error("get your sloppy fingers out of here");
  // Declare the 'tasks' variable here

  if (user.role === "ADMIN") {
    const data = await db.donated.findMany();
    return data;
  }
  
  const data = await db.donated.findMany({
    where: { userId: user.id },
  });
  return data;
};
