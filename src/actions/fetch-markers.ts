"use server";
import { db } from "@/lib/db";
import { currentUser } from "@/lib/auth";

export const fetchMarkers = async () => {
  const user = await currentUser();
  if (!user) throw new Error("get your sloppy fingers out of here");
  // Declare the 'tasks' variable here
  if (user?.role === "ADMIN") { 
    const data = await db.receivingOrganization.findMany();
    return data;
  }
  const data = await db.receivingOrganization.findMany({
    where : { userId: user.id}
  });
  return data;
};
