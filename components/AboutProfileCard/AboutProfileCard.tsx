import Image from "next/image";

interface AboutProfileCardProps {
  image: string;
  name: string;
  role: string;
}

export const AboutProfileCard = ({
  image,
  name,
  role,
}: AboutProfileCardProps) => {
  return (
    <article className="w-full md:w-[40vw] bg-secondary-100 rounded-lg p-6 shadow-md">
      <div className="flex items-center space-x-4">
        <div className="relative w-16 h-16">
          <Image
            src={image}
            alt={name}
            fill
            className="rounded-full object-cover"
          />
        </div>
        <div>
          <h3 className="text-secondary-900 font-semibold text-lg">
            {name}
          </h3>
          <p className="text-secondary-900/80">{role}</p>
        </div>
      </div>
    </article>
  );
};
