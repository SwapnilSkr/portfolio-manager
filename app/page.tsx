"use client";

import React from "react";
import Hero from "@/components/ui/hero-section";
import { usePathname } from "next/navigation";
import Navbar from "@/components/ui/navbar";
import { Expertise } from "@/components/ui/tabsComponent";
import { Service } from "@/components/ui/Service";
import { Chambers } from "@/components/ui/Chambers";
import { Research } from "@/components/ui/Research";
import { Contact } from "@/components/ui/Contact";
import { Footer } from "@/components/ui/Footer";
import Loading from "./loading";

export default async function App() {
  const pathname = usePathname();
  const hideNavbarRoutes = ["/dashboard"];
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
      setUser({
        email: user?.email || "",
        role: user?.role || "",
      });
    }
    setLoading(false);
  }, []);

  if (loading) {
    return <Loading className="w-full h-full" />;
  }

  return (
    <div>
      {!hideNavbarRoutes.includes(pathname) && (
        <Navbar userAuth={user} setUserAuth={setUser} />
      )}
      <Hero />
      <Expertise />
      <Service />
      <Chambers />
      <Research />
      <Contact />
      <Footer />
    </div>
  );
}
