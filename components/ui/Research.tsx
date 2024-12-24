"use client";
import React from "react";
import { LinkPreview } from "@/components/ui/link-preview";
import { AnimatedPin } from "./animatedPin";

export function Research() {
  return (
    <div id="research" className="max-w-screen-xl md:px-8 mx-auto mt-40">
      <h1 className="text-4xl text-gray-800 font-extrabold lg:text-5xl mb-[40px]">
        Research Publications
      </h1>
      <p className="text-gray-600 mb-[80px]">
        Our research publications reflect a commitment to advancing the field of
        pulmonary, allergy, and sleep medicine. Through rigorous research and
        collaboration, we contribute to the body of knowledge that drives
        innovation and improves patient care. Explore our extensive collection
        of peer-reviewed articles, studies, and findings to gain insights into
        our latest scientific contributions and their impact on clinical
        practice.
      </p>
      <div className="md:flex xs:hidden justify-between items-center mb-[180px]">
        <a
          href="https://erj.ersjournals.com/content/61/1/2200611"
          target="_blank"
          className="w-1/3"
        >
          <AnimatedPin
            title="https://erj.ersjournals.com"
            heading="Clinical outcomes of bronchiectasis in India : "
            description="data from the EMBARC/Respiratory Research Network of India registry"
          />
        </a>
        <a
          href="https://journals.lww.com/indianjcancer/pages/default.aspx"
          target="_blank"
          className="w-1/3"
        >
          <AnimatedPin
            title="https://journals.lww.com/indianjcancer"
            heading="Pleural effusions from Eastern India : "
            description="Demographic, clinical, biochemical, radiological and etiological characteristics"
          />
        </a>
        <a
          href="https://journals.lww.com/lungindia/fulltext/2014/31010/non_resolving_pneumonia__a_rare_presentation_of.18.aspx"
          target="_blank"
          className="w-1/3"
        >
          <AnimatedPin
            title="https://journals.lww.com/lungindia"
            heading="Non-resolving pneumonia : "
            description="A paper discussing the rare presentation of progressive disseminated histoplasmosis"
          />
        </a>
      </div>
      <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl">
        Visit{" "}
        <LinkPreview
          isPlain={true}
          url="https://researchid.co/drksaha"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-emerald-500 to-emerald-700"
        >
          My Research ID
        </LinkPreview>{" "}
        for detailed information on my research publications.
      </p>
    </div>
  );
}
