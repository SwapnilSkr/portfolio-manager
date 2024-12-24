"use server";

import { prisma } from "@/app/api/index";
import { ExpertiseType } from "@/utils/types";

export async function updateExpertise(data: ExpertiseType[]) {
  try {
    await prisma.expertise.deleteMany({});
    const expertise = await prisma.expertise.createMany({
      data: data,
    });
    return { response: expertise };
  } catch (error) {
    console.log("error", error);
    return { data: [], error: JSON.stringify(error) };
  }
}
