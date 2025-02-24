import Image from "next/image"
import { Button } from "../ui/button"
import Link from "next/link"

interface PortfolioSectionCardProps {
    title: string
    description: string
    image: string
}

export const PortfolioSectionCard = ({ title, description, image }: PortfolioSectionCardProps) => {
    return (
      <div className="group relative flex h-[300px] w-full flex-col items-center justify-center gap-4 rounded-lg bg-secondary-300 md:h-[280px] md:w-[340px] lg:h-[20vw] lg:w-[18vw]">
          <div className="relative h-full w-full overflow-hidden rounded-lg">
            <Image 
              src={image} 
              alt={title} 
              fill 
              className="object-cover transition-transform duration-300 group-hover:scale-105" 
            />
          </div>
          <div className="absolute z-20 flex h-full w-full items-center justify-center rounded-lg bg-secondary-500/50 transition-all duration-300 ease-in-out group-hover:bg-secondary-500/70">
            <span className="flex h-full items-center justify-center px-4 text-center font-body font-bold text-white transition-opacity duration-300 group-hover:hidden">
              {title}
            </span>
            <Button 
              variant="primary" 
              className="hidden transform transition-all duration-300 group-hover:block group-hover:scale-105"
              asChild
            >
              <Link href={`/portfolio/${title}`}>View All</Link>
            </Button>
          </div>
      </div>
    )
}