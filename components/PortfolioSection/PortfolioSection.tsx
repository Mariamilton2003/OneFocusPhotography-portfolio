import { portfolioCards } from "@/constants";
import { PortfolioSectionCard } from "../PortfolioSectionCard/PortfolioSectionCard";

export const PortfolioSection = () => {

  return (
    <section className="mx-4 px-4 py-12">
      <h2 className="text-3xl font-header font-extrabold text-center mb-4">
        Our Portfolio
      </h2>
      <p className="text-xl font-body font-semibold text-center mb-8">
        Discover Our Outstanding Projects
      </p>      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {portfolioCards.map((card) => (
          <PortfolioSectionCard
            key={card.title}
            title={card.title}
            image={card.image}
          />
        ))}
      </div>
    </section>
  );
}