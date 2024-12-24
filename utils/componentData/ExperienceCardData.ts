import { StaticImageData } from "next/image";
import Pulmonary from "@/public/images/pulmonary.jpg";
import Pulmonary2 from "@/public/images/pulmonary2.jpg";
import Allergy from "@/public/images/allergy1.jpg";
import Allergy2 from "@/public/images/allergy2.jpg";
import SleepApnea from "@/public/images/sleep1.jpg";
import SleepApnea2 from "@/public/images/sleep2.jpeg";

export const ExperienceImages: {
  title: string;
  images: StaticImageData[];
}[] = [
  {
    title: "Pulmonary",
    images: [Pulmonary, Pulmonary2],
  },
  {
    title: "Allergy",
    images: [Allergy, Allergy2],
  },
  {
    title: "Sleep Apnea",
    images: [SleepApnea, SleepApnea2],
  },
];

export const ExperienceParagraphs: {
  title: string;
  paraArray: string[];
}[] = [
  {
    title: "Pulmonary",
    paraArray: [
      "Dr. Kaushik Saha has dedicated over [number] years to the specialized field of pulmonary care, becoming a leading expert in the diagnosis, treatment, and management of respiratory conditions. His extensive experience encompasses a wide range of pulmonary disorders, including asthma, chronic obstructive pulmonary disease (COPD), interstitial lung disease, and pulmonary hypertension. Through his compassionate approach and commitment to patient-centered care, Dr. Kaushik Saha has successfully treated numerous patients, improving their quality of life and respiratory health.",
      "In addition to his clinical practice, Dr. Kaushik Saha actively contributes to the advancement of pulmonary medicine through ongoing research and participation in professional organizations. He has authored several peer-reviewed publications and frequently presents at national and international conferences, sharing his insights and findings with the broader medical community. Dr. Kaushik Saha's dedication to education extends to mentoring the next generation of pulmonologists, providing training and guidance to medical students, residents, and fellows.",
    ],
  },
  {
    title: "Allergy",
    paraArray: [
      "Dr. Kaushik Saha possesses extensive expertise in allergy care, offering comprehensive services for patients suffering from various allergic conditions. With a deep understanding of the immune system and its responses, Dr. Kaushik Saha specializes in diagnosing and managing allergies such as allergic rhinitis, asthma, food allergies, eczema, and drug allergies. Utilizing a patient-centered approach, he conducts thorough evaluations, including skin testing and blood tests, to accurately identify allergens and develop personalized treatment plans.",
      "Beyond his clinical practice, Dr. Kaushik Saha is dedicated to advancing the field of allergy care through research and professional collaboration. He has contributed to numerous peer-reviewed journals, sharing valuable insights and breakthroughs in allergy diagnosis and treatment. Dr. Kaushik Saha is an active member of several professional organizations, where he collaborates with colleagues to stay abreast of the latest advancements and innovations in allergy care.",
    ],
  },
  {
    title: "Sleep Apnea",
    paraArray: [
      "Dr. Kaushik Saha is a recognized expert in the diagnosis and management of sleep apnea, a condition that significantly impacts a patient's quality of life and overall health. With a focus on personalized care, Dr. Kaushik Saha employs comprehensive diagnostic evaluations, including overnight polysomnography and home sleep apnea testing, to accurately assess the severity and nature of each patient's condition. His extensive experience enables him to develop tailored treatment plans that may include continuous positive airway pressure (CPAP) therapy, oral appliances, lifestyle modifications, and, when necessary, surgical interventions. ",
      "In addition to his clinical expertise, Dr. Kaushik Saha is actively involved in sleep medicine research, contributing to the advancement of knowledge and treatment modalities for sleep apnea. He regularly publishes his findings in peer-reviewed journals and presents at national and international conferences, sharing his insights with the medical community. Dr. Kaushik Saha is also a member of several professional organizations focused on sleep medicine, where he collaborates with other experts to stay current with the latest developments in the field. ",
    ],
  },
];
