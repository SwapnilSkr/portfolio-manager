"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import CommonSidebar from "./commonSidebar";

const Sidebar = () => {
  const path = usePathname();
  return (
    <div className="px-[40px] py-[50px] min-h-screen h-full bg-gray-100">
      <Link
        href="/dashboard"
        className="flex items-center gap-4 cursor-pointer"
      >
        <div className="flex flex-col">
          <p className="text-[24px] text-green-500 font-[600] whitespace-nowrap">
            Admin Dashboard
          </p>
        </div>
      </Link>
      <CommonSidebar />
    </div>
  );
};

export default Sidebar;
