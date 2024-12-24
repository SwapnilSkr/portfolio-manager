"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "./button";

const Navbar: React.FC<{
  userAuth: {
    email: string;
    role: string;
  };
  setUserAuth: (userAuth: { email: string; role: string }) => void;
}> = ({ userAuth, setUserAuth }) => {
  const router = useRouter();
  const [state, setState] = useState(false);

  const navigation = [
    { title: "Home", path: "/" },
    { title: "Expertise", path: "#expertise" },
    { title: "Services", path: "#services" },
    { title: "Chambers", path: "#chambers" },
    { title: "Research Publications", path: "#research" },
    { title: "Contact", path: "#contact" },
  ];

  return (
    <nav className="bg-white border-b w-full md:static md:text-sm md:border-none">
      <div className="items-center px-4 max-w-screen-xl mx-auto lg:flex md:px-8 ">
        <div className="flex items-center justify-between py-3 lg:py-5 lg:block">
          <Link href="/">
            <h1 className="text-[16px] xl:text-[24px]">Portfolio Manager</h1>
            <p className="lg:text-[10px] text-[12px] text-emerald-500">
              Enhance your portfolio
            </p>
          </Link>
          <div className="lg:hidden">
            <button
              className="text-gray-500 hover:text-gray-800"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-end items-center space-y-6 lg:flex lg:space-x-6 lg:space-y-0">
            {navigation.map((item, idx) => {
              return (
                <li key={idx} className="text-gray-700 hover:text-emerald-500">
                  <a href={item.path} className="block">
                    {item.title}
                  </a>
                </li>
              );
            })}
            <span className="hidden w-px h-6 bg-gray-300 lg:block"></span>

            <div className="space-y-3 items-center gap-x-6 lg:flex lg:space-y-0">
              {userAuth &&
              userAuth?.role === "authenticated" &&
              userAuth?.email === "admin@gmail.com" ? (
                <li>
                  <Button
                    onClick={() => {
                      router.push("/dashboard");
                    }}
                    className="block py-3 px-4 font-medium text-center text-white bg-emerald-500 duration-150 hover:bg-emerald-700 active:bg-emerald-900 active:shadow-none rounded-lg shadow md:inline"
                  >
                    Dashboard
                  </Button>
                </li>
              ) : userAuth && userAuth?.role === "authenticated" ? (
                <li>
                  <Button
                    onClick={() => {
                      setUserAuth({
                        email: "",
                        role: "",
                      });
                      window.localStorage.removeItem("userInfo");
                    }}
                    className="block py-3 px-4 font-medium text-center text-white bg-emerald-500 duration-150 hover:bg-emerald-700 active:bg-emerald-900 active:shadow-none rounded-lg shadow md:inline"
                  >
                    Sign Out
                  </Button>
                </li>
              ) : (
                <li>
                  <Link
                    href="/login"
                    className="block py-3 px-4 font-medium text-center text-white bg-emerald-500 duration-150 hover:bg-emerald-700 active:bg-emerald-900 active:shadow-none rounded-lg shadow md:inline"
                  >
                    Sign In
                  </Link>
                </li>
              )}
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
