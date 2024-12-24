import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

interface ExperienceCardProps {
  images: StaticImageData[];
  paragraphs: string[];
}

export const ExperienceCard = ({ images, paragraphs }: ExperienceCardProps) => {
  return (
    <div className="flex flex-col justify-center items-center gap-[50px] w-full font-monsterrat overflow-hidden relative h-full rounded-2xl p-10 bg-gradient-to-br from-emerald-500 to-emerald-700">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ ease: "easeOut", duration: 1.5 }}
        className="flex items-center xs:justify-center md:justify-between w-full h-full md:h-[40%]"
      >
        <div className="h-full w-[40%] hidden md:block rounded-2xl shadow-lg">
          <Image
            src={images[0]}
            alt="image1"
            width="500"
            height="500"
            className="object-cover rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-500 ease-in-out h-full w-full"
          />
        </div>
        <div className="w-full md:w-1/2 h-full text-white flex justify-center items-center xs:text-[14px] sm:text-[16px] md:text-[13px] lg:text-[16px] transform hover:scale-105 transition-transform duration-500 ease-in-out">
          {paragraphs[0]}
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ ease: "easeOut", duration: 1.5 }}
        className="flex items-center justify-between w-full h-[40%]"
      >
        <div className="hidden w-full md:w-1/2 h-full text-white md:flex justify-center items-center md:text-[13px] lg:text-[16px] transform hover:scale-105 transition-transform duration-500 ease-in-out">
          {paragraphs[1]}
        </div>
        <div className="h-full w-[40%] hidden md:block rounded-2xl shadow-lg">
          <Image
            src={images[1]}
            alt="image2"
            width="500"
            height="500"
            className="object-cover rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-500 ease-in-out h-full w-full"
          />
        </div>
      </motion.div>
    </div>
  );
};
