"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signInWithEmail } from "@/app/api/auth/useSignIn";
import Spinner from "@/components/ui/Spinner";
import Loading from "../loading";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [screenLoading, setScreenLoading] = React.useState(true);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const [userAuth, setUserAuth] = React.useState({
    email: "",
    role: "",
  });

  React.useEffect(() => {
    if (typeof window === "undefined") {
      console.log("The window object is not available in this environment.");
    } else {
      console.log("This window is available");
      const userInfo = window.localStorage.getItem("userInfo");
      const user = userInfo ? JSON.parse(userInfo) : null;
      setUserAuth(user);
      setScreenLoading(false);
    }
  }, []);

  React.useEffect(() => {
    if (userAuth && userAuth?.role === "authenticated") {
      router.push("/");
    }
  }, [userAuth]);

  const reset = () => {
    setEmail("");
    setPassword("");
  };

  const signInHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const response = await signInWithEmail({ email, password });
    console.log(response);
    if (response?.error) {
      setError(response.error?.message);
    }
    if (response?.data) {
      window.localStorage.setItem("userInfo", JSON.stringify(response.data));
      const userInfo = window.localStorage.getItem("userInfo");
      const parsedUserInfo = userInfo ? JSON.parse(userInfo) : null;
      setUserAuth(parsedUserInfo);
    }
    if (response?.message === "User signed in successfully") {
      router.push("/");
    }
    setLoading(false);
    reset();
  };

  if (screenLoading) {
    return <Loading className="w-full h-full" />;
  }

  return (
    <main className="w-full h-screen flex flex-col items-center justify-center px-4">
      <div className="max-w-sm w-full text-gray-600">
        <div className="text-center">
          <div className="mt-5 space-y-2">
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
              Log in to your account
            </h3>
            <p className="">
              Don't have an account?{" "}
              <Link
                href="/sign-up"
                className="font-medium text-emerald-500 hover:text-emerald-700 active:text-emerald-900 duration-150"
              >
                Sign up
              </Link>
            </p>
            {error && (
              <p className="text-red-500 text-sm font-medium">{error}</p>
            )}
          </div>
        </div>
        <form onSubmit={signInHandler} className="mt-8 space-y-5">
          <div>
            <label className="font-medium">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-emerald-500  shadow-sm rounded-lg"
            />
          </div>
          <div>
            <label className="font-medium">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-emerald-500  shadow-sm rounded-lg"
            />
          </div>
          <button className="w-full px-4 py-2 text-white font-medium bg-emerald-500 hover:bg-emerald-700 active:bg-emerald-900 rounded-lg duration-150">
            {loading ? <Spinner className="h-full w-full" /> : "Sign In"}
          </button>
          <div className="text-center">
            <a href="javascript:void(0)" className="hover:text-indigo-600">
              Forgot password?
            </a>
          </div>
        </form>
      </div>
    </main>
  );
}
