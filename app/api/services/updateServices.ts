"use server";

import { prisma } from "@/app/api/index";
import { ServiceType } from "@/utils/types";

export async function updateServices(data: ServiceType[]) {
  try {
    await prisma.service.deleteMany({});
    const service = await prisma.service.createMany({
      data: data,
    });
    return { response: service };
  } catch (error) {
    console.log("error", error);
    return { data: [], error: JSON.stringify(error) };
  }
}
