import React, { useEffect, useState } from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { getAllServices } from "@/app/api/services/getAllServices";
import Spinner from "./Spinner";

const extraItems = [
  {
    name: "Pulmonary Function Tests",
    points: [
      "Spirometry Test",
      "Diffusion of Lung (DLCO)",
      "Forced oscillometry (FOT)",
      "FeNO",
      "6MWT",
    ],
  },
  {
    name: "Allergy Testing",
    points: [
      "Spirometry Test",
      "Diffusion of Lung (DLCO)",
      "Forced oscillometry (FOT)",
      "FeNO",
      "6MWT",
    ],
  },
  {
    name: "Sleep Study",
    points: [
      "Spirometry Test",
      "Diffusion of Lung (DLCO)",
      "Forced oscillometry (FOT)",
      "FeNO",
      "6MWT",
    ],
  },
  {
    name: "Pleural Fluid Tapping",
    points: [
      "Spirometry Test",
      "Diffusion of Lung (DLCO)",
      "Forced oscillometry (FOT)",
      "FeNO",
      "6MWT",
    ],
  },
  {
    name: "Pulmonary Rehabilitation",
    points: [
      "Exercise Training : Improve cardiovascular fitness and muscle strength",
      "Education : Teach disease management and lifestyle changes",
      "Nutritional Counseling : Optimize diet for respiratory health",
      "Breathing Techniques : Instruction on specific breathing exercises to enhance lung efficiency and reduce breathlessness",
      "Psychological Support : Counseling and support to help manage the emotional and psychological aspects of living with a chronic respiratory condition",
      "Medication Management : Education on the proper use of inhalers, nebulizers, and other medications to control symptoms and prevent exacerbations",
    ],
  },
];

export function BentoComponent() {
  const [loading, setLoading] = useState(true);
  const [pulmonaryParagraphs, setPulmonaryParagraphs] = useState<string[]>([]);
  const [allergyParagraphs, setAllergyParagraphs] = useState<string[]>([]);
  const [sleepParagraphs, setSleepParagraphs] = useState<string[]>([]);
  const [pleuralParagraphs, setPleuralParagraphs] = useState<string[]>([]);
  const [pulmonaryRehabParagraphs, setPulmonaryRehabParagraphs] = useState<
    string[]
  >([]);
  const items = [
    {
      name: "Pulmonary Function Tests",
      points: pulmonaryParagraphs,
    },
    {
      name: "Allergy Testing",
      points: allergyParagraphs,
    },
    {
      name: "Sleep Study",
      points: sleepParagraphs,
    },
    {
      name: "Pleural Fluid Tapping",
      points: pleuralParagraphs,
    },
    {
      name: "Pulmonary Rehabilitation",
      points: pulmonaryRehabParagraphs,
    },
  ];

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    setLoading(true);
    const response = await getAllServices();
    if (response.data && response.data.length > 0) {
      response.data.map((item) => {
        if (item.name === "pulmonary") {
          setPulmonaryParagraphs(item?.points);
        } else if (item.name === "allergy") {
          setAllergyParagraphs(item?.points);
        } else if (item.name === "sleep") {
          setSleepParagraphs(item?.points);
        } else if (item.name === "pleuralFluid") {
          setPleuralParagraphs(item?.points);
        } else {
          setPulmonaryRehabParagraphs(item?.points);
        }
      });
    }
    if (response.error) {
      setPulmonaryParagraphs(extraItems[0]?.points);
      setAllergyParagraphs(extraItems[1]?.points);
      setSleepParagraphs(extraItems[2]?.points);
      setPleuralParagraphs(extraItems[3]?.points);
      setPulmonaryRehabParagraphs(extraItems[4]?.points);
    }
    setLoading(false);
  }

  if (loading) return <Spinner className="w-full h-full" />;
  else
    return (
      <BentoGrid>
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.name}
            description={item.points}
            className={i === 4 || i === 6 ? "md:col-span-4" : ""}
          />
        ))}
      </BentoGrid>
    );
}
