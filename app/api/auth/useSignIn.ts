import { supabase } from "@/app/api/index";
import { SignInType } from "@/app/types/authType";

export async function signInWithEmail({ email, password }: SignInType) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      return {
        data: null,
        message: "User sign in failed",
        error: { message: error.message },
      };
    }
    return {
      data: { email: data?.user?.email, role: data?.user?.role },
      message: "User signed in successfully",
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
