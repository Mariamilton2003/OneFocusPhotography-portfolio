import Image from "next/image";

const page = () => {
  return (
    <div className="w-sn flex flex-col">
      <div className="pb-12 flex flex-col bg-secondary-200">
        <div className="mt-20 text-center font-header font-extrabold text-5xl">
          About Us
        </div>
        <div className="mt-10 mx-4 md:mx-20 text-center font-body text-2xl leading-relaxed">
          At OneFocus Photography, we transform fleeting moments into timeless memories. 
          Our passion for visual storytelling and commitment to excellence drives us to 
          create stunning imagery that captures the essence of every special moment.
        </div>
      </div>
      <div className="mb-12 flex flex-col md:flex-row gap-12 justify-center items-center mt-12 px-6 w-full mx-auto">
        <div className="w-full md:w-[50vw] h-[600px] relative hover:scale-105 transition-transform duration-300">
          <Image
            src={"/ceo.jpg"}
            alt="CEO portrait"
            fill
            className="rounded-xl shadow-2xl object-cover"
            priority
          />
        </div>
        <div className="w-full md:w-1/2 h-full space-y-6 font-body text-lg leading-relaxed">
          <h2 className="text-3xl font-header font-bold text-primary-600 mb-4">
            CEO & Creative Visionary
          </h2>
          <p>
            Ajith Kumar .R, the creative force behind OneFocus Photography, 
            discovered his calling at the intersection of technology and artistic expression. 
            His unique vision and innovative approach have transformed the way we capture moments.
          </p>
          <p>
            What began as a pursuit of passion has evolved into a premier photography studio. 
            OneFocus Photography has grown from capturing intimate family moments to 
            delivering exceptional professional photography services across diverse portfolios.
          </p>
          <p>
            Our commitment to excellence is reflected in our state-of-the-art equipment and 
            personalized approach. We believe in creating a collaborative experience, working 
            closely with clients to bring their vision to life through our distinctive style 
            and technical expertise.
          </p>
          <p className="font-semibold text-primary-600">
            Ready to create something extraordinary? Let&apos;s collaborate and turn your vision 
            into stunning visual stories.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
