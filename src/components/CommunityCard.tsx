import { CgArrowLongRight } from "react-icons/cg";

interface communityCardProps {
  image: string;
  title: string;
  description: string;
}

function CommunityCard({ image, title, description }: communityCardProps) {
  return (
    <div className="border-2 border-neutral bg-white rounded-xl">
      <div className="grid grid-cols-2 grid-rows-1 md:grid-cols-1 md:grid-rows-2 gap-4">
        <img
          className="rounded-l-xl md:rounded-t-xl md:rounded-bl-none w-full h-full object-cover"
          src={image}
          alt=""
        />
        <div className="flex flex-col gap-2 p-4">
          <h2 className="text-md md:text-lg font-semibold text-primary">{title}</h2>
          <p className="text-sm md:text-md text-secondary-text">{description}</p>
          <div className="flex gap-1 md:gap-2 items-center text-primary hover:text-primary-dark cursor-pointer transition-colors duration-300">
            <h5 className="text-sm md:text-lg font-semibold">Learn More</h5>
            <CgArrowLongRight />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommunityCard;
