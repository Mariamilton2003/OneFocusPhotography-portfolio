import { ContactForm } from "../ContactForm/ContactForm";

export const ContactSection = () => {
  return (
    <div className="px-4 py-12">
      <div className="items-center text-center font-extrabold font-header text-4xl">
        Contact Us
      </div>
      <div className="mt-8 flex flex-col gap-8 lg:flex-row w-full flex-1">
        <div className="flex flex-1 w-full md:min-w-[45vw] h-full">
          <ContactForm />
        </div>
        <div className="flex flex-1 min-w-full md:min-w-[45vw]">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3888.593828811469!2d77.489432!3d12.9338068!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f1081bb012b%3A0xad7ca7250f19c7b3!2sOne%20Focus%20Photography!5e0!3m2!1sen!2sin!4v1740039194451!5m2!1sen!2sin" 
            width='100%'
            height='500'
            loading="lazy"
            className="rounded-lg "
          ></iframe>
        </div>
      </div>
    </div>
  );
};
