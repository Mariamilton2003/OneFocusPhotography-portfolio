import { services } from "@/constants";
import { ServiceCard } from "../ServiceCard/ServiceCard";

export const ServiceSection = () => {

  return (
    <section className="mx-auto px-4 py-12">
      <h2 className="text-4xl font-header font-extrabold text-center mb-12">
        Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            price={service.price}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
    </section>
  );
};
