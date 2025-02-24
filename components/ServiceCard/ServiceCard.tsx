export const ServiceCard = ({ title, price, description, icon }: { 
  title: string
  price: string
  description: string[]
  icon: string
}) => {
    return (
      <div className="flex flex-col gap-4 w-full md:w-[40vw] lg:w-[30vw] min-h-[300px] md:h-[20vw] items-center justify-center bg-secondary-100 rounded-lg p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out">
          <span className="text-primary-600 font-bold text-xl md:text-2xl tracking-wide">{title}</span> 
          <span className="text-secondary-700 text-lg md:text-xl font-semibold">{price}</span>
          <div className="flex items-center justify-center">
          <ul className="text-secondary-600 list-disc space-y-2 w-full">
            {description.map((point, index) => (
              <li key={`service-point-${index}`} className="text-sm md:text-base marker:text-secondary-600">
                <span className="pl-2">{point}</span>
              </li>
            ))}
          </ul>
          </div>
      </div>
    )
}