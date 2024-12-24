import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const CommonSidebar = () => {
  React.useEffect(() => {
    if (typeof window === "undefined") {
      console.log("The window object is not available in this environment.");
    } else {
      console.log("This window is available");
    }
  }, []);

  const path = usePathname();
  return (
    <div className="mt-[88px] flex flex-col justify-center gap-4">
      <Link
        href="/dashboard"
        className={`flex gap-4 px-[30px] items-center w-full h-[64px] rounded-2xl ${
          path === "/dashboard"
            ? "bg-green-500 text-white"
            : "duration-500 hover:scale-105 hover:bg-green-500 hover:text-white"
        }`}
      >
        <span>Dashboard</span>
      </Link>
      <Link
        href="/dashboard/expertise"
        className={`flex gap-4 px-[30px] items-center w-full h-[64px] rounded-2xl ${
          path === "/dashboard/expertise"
            ? "bg-green-500 text-white"
            : "duration-500 hover:scale-105 hover:bg-green-500 hover:text-white"
        }`}
      >
        <span>Expertise</span>
      </Link>
      <Link
        href="/dashboard/services"
        className={`flex gap-4 px-[30px] items-center w-full h-[64px] rounded-2xl ${
          path === "/dashboard/services"
            ? "bg-green-500 text-white"
            : "duration-500 hover:scale-105 hover:bg-green-500 hover:text-white"
        }`}
      >
        <span>Services</span>
      </Link>
      <Link
        href="/dashboard/chambers"
        className={`group flex gap-4 px-[30px] items-center w-full h-[64px] rounded-2xl ${
          path === "/dashboard/chambers"
            ? "bg-green-500 text-white"
            : "duration-500 hover:scale-105 hover:bg-green-500 hover:text-white"
        }`}
      >
        <span>Chambers</span>
      </Link>
      <Link
        href="/"
        className={`group flex gap-4 px-[30px] items-center w-full h-[64px] rounded-2xl ${
          path === "/"
            ? "bg-green-500 text-white"
            : "duration-500 hover:scale-105 hover:bg-green-500 hover:text-white"
        }`}
      >
        <span>Home</span>
      </Link>
      <Link
        href="/"
        onClick={() => {
          window.localStorage.removeItem("userInfo");
        }}
        className={`group flex gap-4 px-[30px] items-center w-full h-[64px] rounded-2xl ${
          path === "/"
            ? "bg-green-500 text-white"
            : "duration-500 hover:scale-105 hover:bg-green-500 hover:text-white"
        }`}
      >
        <span>Log Out</span>
      </Link>
    </div>
  );
};

export default CommonSidebar;
