"use client";
import React from "react";
import { PinContainer } from "./3d-pin";

export function AnimatedPin({
  className,
  title,
  heading,
  description,
}: {
  className?: string;
  title?: string;
  heading?: string;
  description?: string;
}) {
  return (
    <div
      className={`${className} h-full w-full flex items-center justify-center`}
    >
      <PinContainer title={title} href="https://google.com">
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 xl:w-[20rem] xl:h-[20rem] lg:w-[16rem] lg:h-[16rem] md:w-[12rem] md:h-[12rem]">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-white">
            {heading}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-white">{description}</span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-emerald-300 via-emerald-400 to-emerald-500" />
        </div>
      </PinContainer>
    </div>
  );
}
