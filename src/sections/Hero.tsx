
import Button from "../components/Button";
import { PiCalendarXThin } from "react-icons/pi";
import { PiNewspaperThin } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import { CiMail } from "react-icons/ci";

function Hero() {
  return (
    <div className="bg-hero bg-cover bg-center h-fit flex justify-center sm:justify-start">
      <div className="mx-8 mt-10 md:mt-20 mb-10 px-10">
        <div className="flex flex-col gap-6 md:w-3/5 backdrop-blur-xs p-8 rounded">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-wide md:leading-16 text-balance sm:text-pretty">
              Serving all with justice, peace and love
            </h1>
            <p className="text-lg md:text-xl text-white text-balance sm:text-pretty mt-4">
              A welcoming Catholic community in Luton, walking together in faith
              and love.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <Button
              text="Mass Times"
              textColor="white"
              bgColor="bg-primary"
              hoverColor="bg-primary-dark"
            >
                <PiCalendarXThin />
            </Button>
            <Button
              text="Latest Newsletter"
              textColor="primary"
              bgColor="bg-btn-secondary"
              hoverColor="bg-primary"
              hoverText="btn-secondary"
            >
              <PiNewspaperThin />
            </Button>
            <Button
              text="Donate"
              bgColor="bg-primary"
              textColor="white"
              hoverColor="bg-primary-dark"
            >
              <CiHeart />
            </Button>
            <Button
              text="Contact Us"
              bgColor="bg-transparent"
              textColor="white"
              hoverColor="bg-btn-secondary"
              isBordered = {true}
              borderColor="bg-btn-secondary"
              hoverText="primary"
            >
              <CiMail />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
