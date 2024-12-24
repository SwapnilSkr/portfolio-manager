"use client";

import { Hamburger } from "@/components/ui/hamburger";
import Sidebar from "@/components/ui/Sidebar";
import Spinner from "@/components/ui/Spinner";
import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = React.useState({
    email: "",
    role: "",
  });
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(true);
    if (typeof window === "undefined") {
      console.log("The window object is not available in this environment.");
    } else {
      console.log("This window is available");
      const userInfo = window.localStorage.getItem("userInfo");
      const user = userInfo ? JSON.parse(userInfo) : null;
      setUser(user);
    }
    setLoading(false);
  }, []);

  if (loading) {
    return <Spinner className="w-full h-full" />;
  }

  if (user === null) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-2xl text-gray-800">Please login to continue</h1>
      </div>
    );
  } else if (user.email !== "admin@gmail.com") {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-2xl text-gray-800">
          You are not authorized to access this page
        </h1>
      </div>
    );
  }
  return (
    <div className="relative flex justify-center">
      <div className="xs:hidden lg:block">
        <Sidebar />
      </div>
      <div className="lg:hidden">
        <Hamburger />
      </div>
      <div className="flex flex-col w-full max-w-7xl">{children}</div>
    </div>
  );
}
