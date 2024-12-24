"use server";

import { supabase, prisma } from "@/app/api/index";
import { SignUpType } from "@/app/types/authType";

export async function signUpNewUser({ email, password, name }: SignUpType) {
  try {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      return {
        data: null,
        message: "User creation failed",
        error: { message: error.message },
      };
    }

    const user = await prisma.user.create({
      data: {
        email: email,
        name: name,
      },
    });
    return {
      data: { id: user.id, email: user.email, name: user.name },
      message: "User created successfully",
    };
  } catch (error) {
    return {
      data: null,
      message: "An unexpected error occurred",
      error: {
        message: error instanceof Error ? error.message : String(error),
      },
    };
  }
}
