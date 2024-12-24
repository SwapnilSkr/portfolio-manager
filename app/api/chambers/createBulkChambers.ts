"use server";

import { prisma } from "@/app/api/index";
import { ChamberType } from "@/utils/types";

export async function createBulkChambers(data: ChamberType[]) {
  try {
    const chamber = await prisma.chamber.createMany({
      data: data,
    });
    return chamber;
  } catch (error) {
    console.log("error", error);
    return error;
  }
}
