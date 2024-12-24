"use client";

import { atom } from "recoil";

if (typeof window === "undefined") {
  console.log("The window object is not available in this environment.");
} else {
  console.log("This window is available");
}

export const userAuthState = atom({
  key: "userAuthKey",
  default: {
    email: "",
    role: "",
  },
});

export const userLoadingState = atom({
  key: "userLoadingKey",
  default: false,
});

export const userErrorState = atom({
  key: "userErrorKey",
  default: "",
});
