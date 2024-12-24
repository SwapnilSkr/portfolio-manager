import { getAllChambers } from "@/app/api/chambers/getAllChambers";
import { HoverEffect } from "./card-hover-effect";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";

export const projects = [
  {
    title: "KHUDIRAM BOSE HOSPITAL",
    address:
      "12, Barrackpore Trunk Rd, Rathtala, Belghoria, Kolkata, West Bengal -700056.",
    mobile: "Mobile: 7044067178.",
    timing: "Monday/Thursday/Saturday – 3.30 pm",
  },
  {
    title: "ZENITH SUPERSPECIALIST HOSPITAL",
    address: "9/3, Feeder Road, Rathtala, Belghoria, Kolkata – 700 056.",
    mobile: "Mobile- 7605098084/7605098083.",
    timing: "Monday/Thursday – 4.30 pm and Saturday – 2 pm",
  },
  {
    title: "PAUL MEDICAL",
    address:
      "8/1, Umesh Mukherjee Road, Belgharia, Kolkata – 700056, Near Belgharia High School.",
    mobile: "Mobile: 9007837920",
    timing: "Monday/Thursday – 6 pm",
  },
  {
    title: "NIMTA DIAGNOSTIC CENTER",
    address: "3, S L Chatterjee Street, Nimta, Kolkata – 700049",
    mobile: "Mobile : 03325394040/9903861611",
    timing: "Monday/Thursday – 7.30 pm",
  },
  {
    title: "AMRI SALTLAKE",
    address:
      "KB 24, KB Block, Sector III, Salt Lake City, Kolkata, West Bengal 700098.",
    mobile: "Mobile: 9831016037",
    timing: "Saturday – 12 pm",
  },
  {
    title: "APOLLO SODEPUR",
    address:
      "16, Barrackpore Trunk Rd, Sukchar, Girja, Sodepur, Kolkata, West Bengal 700115.",
    mobile: "Mobile: 8274051066",
    timing: "Tuesday/Friday – 4 pm",
  },
  {
    title: "SURAKSHA KHARDAH",
    address: "Khardaha, 98, Barrackpore Trunk Rd, Kolkata, West Bengal 700117.",
    mobile: "Mobile: 03366191000",
    timing: "Wednesday/Saturday – 5 pm",
  },
  {
    title: "APOLLO BARAKPORE",
    address:
      "321, Barasat – Barrackpore Rd, near Wireless More, besides SBI, Barrackpore, West Bengal -700122.",
    mobile: "Mobile: 8232076280",
    timing: "Tuesday/Friday – 6 pm",
  },
  {
    title: "SAHA MEDICAL SODEPUR",
    address: "Near Sodepur station, 1 no platform, besides Akash Caterer",
    mobile: "Mobile: 9038097357/9239045569",
    timing: "Wednesday/Saturday  – 6.30 pm",
  },
];

export function Chambers() {
  const [loading, setLoading] = useState<boolean>(false);
  const [newProjects, setNewProjects] = useState<
    {
      title: string;
      address: string;
      mobile: string;
      timing: string;
    }[]
  >([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    setLoading(true);
    const response = await getAllChambers();
    if (response.data && response.data.length > 0) {
      const responseObj = response.data.map((item) => {
        const { chamberName: title, address, mobile, timings: timing } = item;
        return {
          title,
          address,
          mobile: `Mobile: ${mobile}`,
          timing,
        };
      });
      setNewProjects(responseObj);
    }
    if (response.error) {
      setNewProjects(projects);
    }
    setLoading(false);
  }

  if (loading) return <Spinner className="w-full h-full" />;
  else
    return (
      <div id="chambers" className="max-w-screen-xl md:px-8 mx-auto mt-40">
        <h1 className="text-4xl text-gray-800 font-extrabold lg:text-5xl mb-[40px]">
          Chambers
        </h1>
        <p className="text-gray-600 mb-[40px]">
          Our state-of-the-art chambers are designed to provide the highest
          quality care and comfort for our patients. Each chamber is equipped
          with advanced medical technology and staffed by experienced
          professionals committed to delivering exceptional pulmonary, allergy,
          and sleep health services. Explore our chambers to learn more about
          the specialized environments where we offer personalized treatment and
          care.
        </p>
        <HoverEffect items={newProjects} />
      </div>
    );
}
