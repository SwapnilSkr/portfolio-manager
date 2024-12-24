"use server";

import { prisma } from "@/app/api/index";
import { ChamberType } from "@/utils/types";

export async function updateChambers(data: ChamberType[]) {
  try {
    await prisma.chamber.deleteMany({});
    const chamber = await prisma.chamber.createMany({
      data: data,
    });
    return { response: chamber };
  } catch (error) {
    console.log("error", error);
    return { data: [], error: JSON.stringify(error) };
  }
}
