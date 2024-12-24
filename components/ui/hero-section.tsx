import { HoverBorderGradient } from "./hover-border-gradient";
import { TextGenerateEffect } from "./text-generate-effect";
import { motion } from "framer-motion";
import { User } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-28">
      <div className="max-w-screen-xl mx-auto text-gray-600 md:gap-x-0 xl:gap-x-12 items-center sm:justify-center md:justify-between overflow-hidden md:flex md:px-8">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            ease: "easeOut",
            duration: 1.5,
          }}
          className="flex-none space-y-5 px-4 sm:max-w-lg md:max-w-sm md:px-0 lg:max-w-xl"
        >
          <h1 className="text-sm text-emerald-500 font-medium">
            Over thousands of satisfied patients
          </h1>
          <TextGenerateEffect
            words="I am a well known Pulmonologist from India."
            className="text-4xl text-gray-800 font-extrabold lg:text-5xl"
          />
          <p>
            I am known for my vast experience and work in the medical field.
          </p>
          <motion.div
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition={{
              ease: "easeOut",
              duration: 1.5,
            }}
            className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0"
          >
            <a
              href="https://blog.pulmocarecenter.com"
              target="_blank"
              className="block rounded-full py-2 px-4 text-center text-white font-medium bg-emerald-500 duration-150 hover:bg-emerald-700 active:bg-emerald-900 shadow-lg hover:shadow-none"
            >
              Read My Blogs
            </a>
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
            >
              <a
                href="#contact"
                className="w-full h-full flex items-center justify-center"
              >
                Chat with Me
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                  clipRule="evenodd"
                />
              </svg>
            </HoverBorderGradient>
          </motion.div>
        </motion.div>
        <motion.div
          className="flex-none mt-14 md:mt-0 md:max-w-sm"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ease: "easeOut", duration: 1.5 }}
        >
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-emerald-100 flex items-center justify-center shadow-lg">
            <User className="w-40 h-40 md:w-48 md:h-48 text-emerald-600" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
