import { GlobeContainer } from "./GlobeContainer";
import { ContactForm } from "./contactForm";

export const Contact = () => {
  return (
    <div id="contact" className="max-w-screen-xl md:px-8 mx-auto mt-40">
      <h1 className="text-4xl text-gray-800 font-extrabold lg:text-5xl mb-[40px]">
        Contact
      </h1>
      <p className="text-gray-600 mb-[80px]">
        We are here to assist you with any questions or feedback you may have.
        Please reach out to us, and our team will respond promptly to address
        your needs and provide the necessary support. Your inquiries are
        important to us, and we are committed to ensuring your satisfaction.
      </p>
      <div className="flex justify-between lg:h-[30rem]">
        {/* <GlobeContainer /> */}
        <ContactForm />
      </div>
    </div>
  );
};
