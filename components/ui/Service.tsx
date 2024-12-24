import { BentoComponent } from "./BentoComponent";

export const Service = () => {
  return (
    <div id="services" className="max-w-screen-xl md:px-8 mx-auto">
      <h1 className="text-4xl text-gray-800 font-extrabold lg:text-5xl mb-[40px]">
        Services
      </h1>
      <p className="text-gray-600 mb-[40px]">
        We offer a wide array of specialized services tailored to address your
        unique pulmonary, allergy, and sleep health needs. Our dedicated team
        utilizes the latest advancements in medical science to provide
        exceptional care and support, ensuring that each patient receives
        personalized treatment plans designed for optimal health outcomes.
        Explore the variety of services we provide to see how we can assist you
        in achieving better respiratory and overall health.
      </p>
      <BentoComponent />
    </div>
  );
};
