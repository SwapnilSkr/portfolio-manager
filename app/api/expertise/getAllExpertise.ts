"use server";

import { prisma } from "@/app/api/index";

export async function getAllExpertise() {
  try {
    const expertise = await prisma.expertise.findMany();
    if (!expertise) return { data: [] };
    return { data: expertise };
  } catch (error) {
    console.log("error", error);
    return { data: [], error: JSON.stringify(error) };
  }
}
