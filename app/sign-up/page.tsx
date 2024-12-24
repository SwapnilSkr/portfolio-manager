"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signUpNewUser } from "@/app/api/auth/userSignUp";
import { useRecoilValue } from "recoil";
import { userAuthState } from "../state/atoms/userAtom";
import Spinner from "@/components/ui/Spinner";

export default function SignUp() {
  const router = useRouter();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const userAuth = useRecoilValue(userAuthState);

  React.useEffect(() => {
    if (userAuth && userAuth?.role === "authenticated") {
      router.push("/");
    }
  }, [userAuth]);

  const reset = () => {
    setName("");
    setEmail("");
    setPassword("");
  };

  const signUpHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const response = await signUpNewUser({ email, password, name });
    console.log(response);
    if (response?.error) {
      setError(response.error?.message);
    }
    if (response?.message === "User created successfully") {
      router.push("/login");
    }
    setLoading(false);
    reset();
  };

  return (
    <main className="w-full flex">
      <div className="relative flex-1 hidden items-center justify-center h-[90vh] bg-emerald-500 lg:flex">
        <div className="relative z-10 w-full max-w-md">
          <div className=" mt-16 space-y-3">
            <h3 className="text-white text-3xl font-bold">
              For increased interaction please sign up
            </h3>
            <p className="text-gray-300">
              Create an account and get access to my blogs, chat with me or
              create an appointment.
            </p>
            <div className="flex items-center -space-x-2 overflow-hidden">
              <img
                src="https://randomuser.me/api/portraits/women/79.jpg"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=a72ca28288878f8404a795f39642a46f"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="https://randomuser.me/api/portraits/men/86.jpg"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=3759e09a5b9fbe53088b23c615b6312e"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <p className="text-sm text-white font-medium translate-x-5">
                Join 5.000+ users
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center h-[90vh]">
        <div className="w-full max-w-md space-y-8 px-4 bg-white text-gray-600 sm:px-0">
          <div className="">
            <div className="mt-5 space-y-2">
              <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
                Sign up
              </h3>
              <p className="">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="font-medium text-emerald-500 hover:text-emerald-700"
                >
                  Log in
                </Link>
              </p>
              {error && (
                <p className="text-red-500 text-sm font-medium">{error}</p>
              )}
            </div>
          </div>
          {/* <div className="grid grid-cols-3 gap-x-3">
            <button className="flex items-center justify-center py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100">
              <svg
                className="w-5 h-5"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_17_40)">
                  <path
                    d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z"
                    fill="#34A853"
                  />
                  <path
                    d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z"
                    fill="#FBBC04"
                  />
                  <path
                    d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z"
                    fill="#EA4335"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_17_40">
                    <rect width="48" height="48" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
            <button className="flex items-center justify-center py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100">
              <svg
                className="w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                fill="none"
              >
                <path
                  fill="#039be5"
                  d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
                ></path>
                <path
                  fill="#fff"
                  d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
                ></path>
              </svg>
            </button>
            <button className="flex items-center justify-center py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100">
              <svg
                className="w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                fill="none"
              >
                <path
                  fill="#0288D1"
                  d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                ></path>
                <path
                  fill="#FFF"
                  d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
                ></path>
              </svg>
            </button>
          </div>
          <div className="relative">
            <span className="block w-full h-px bg-gray-300"></span>
            <p className="inline-block w-fit text-sm bg-white px-2 absolute -top-2 inset-x-0 mx-auto">
              Or continue with
            </p>
          </div> */}
          <form onSubmit={signUpHandler} className="space-y-5">
            <div>
              <label className="font-medium">Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-emerald-500  shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-emerald-500 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">Password</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-emerald-500 shadow-sm rounded-lg"
              />
            </div>
            <button className="w-full px-4 py-2 text-white font-medium bg-emerald-500 duration-150 hover:bg-emerald-700 active:bg-emerald-900 rounded-lg">
              {loading ? (
                <Spinner className="h-full w-full" />
              ) : (
                "Create account"
              )}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
