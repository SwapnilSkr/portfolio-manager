"use server";

import { prisma } from "@/app/api/index";

export async function getAllChambers() {
  try {
    const chambers = await prisma.chamber.findMany();
    if (!chambers) return { data: [] };
    return { data: chambers };
  } catch (error) {
    console.log("error", error);
    return { data: [], error: JSON.stringify(error) };
  }
}
