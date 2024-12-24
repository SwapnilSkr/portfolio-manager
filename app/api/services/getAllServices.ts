"use server";

import { prisma } from "@/app/api/index";

export async function getAllServices() {
  try {
    const services = await prisma.service.findMany();
    if (!services) return { data: [] };
    return { data: services };
  } catch (error) {
    console.log("error", error);
    return { data: [], error: JSON.stringify(error) };
  }
}
