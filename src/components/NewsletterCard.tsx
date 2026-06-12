import { CgArrowLongRight } from "react-icons/cg";
import { RiNewspaperLine } from "react-icons/ri";
import Button from "./Button";

function NewsletterCard() {
  return (
    <div className="rounded-xl p-4 bg-cream-highlight">
      <div className="flex flex-col md:flex-row justify-between text-primary mt-4">
        <div className="flex  gap-1 md:gap-2 max-md:items-center md:justify-center">
          <RiNewspaperLine className="text-lg md:text-2xl" />
          <h2 className="text-sm md:text-lg font-semibold">
            LATEST NEWSLETTER
          </h2>
        </div>
        <div className="flex gap-1 md:gap-2 items-center justify-end hover:text-primary-dark cursor-pointer transition-colors duration-300">
          <h5 className="text-sm md:text-lg font-semibold">
            View All Newsletter
          </h5>
          <CgArrowLongRight />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 content-start gap-4 mt-6">
        <div className="bg-white p-2 rounded-xl">

        <img
          className="w-full h-full object-cover"
          src="src/assets/newsletter.svg"
          alt=""
        />
        </div>
        <div className="p-6">
          <p className="text-secondary-text text-pretty text-md mb-4">
            Read the latest news, reflections and updates from our parish
            community.
          </p>
          <Button
            type="primary"
            text="Read Latest Issue"
          />
        </div>
      </div>
    </div>
  );
}

export default NewsletterCard;
