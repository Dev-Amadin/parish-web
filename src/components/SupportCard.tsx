import { CiHeart } from "react-icons/ci";
import Button from "./Button";
import { GiShiningHeart } from "react-icons/gi";

function SupportCard() {
  return (
    <div className="rounded-xl bg-primary p-4">
      <div className="flex items-center gap-2 text-white mt-4">
        <CiHeart className="text-3xl" />
        <h2 className="text-lg font-semibold">SUPPORT OUR PARISH</h2>
      </div>

      <div className="flex flex-col-reverse md:mt-8  md:flex-row md:justify-between gap-2">
        <div className="flex flex-col max-sm:items-center gap-4 mt-2 md:mt-6">
          <p className="text-md text-white text-pretty text-center md:text-left">
            Your generosity helps us to continue our mission and serve the
            community.
          </p>
          <div className="w-1/2">
          <Button
            type="donate"
            text="Donate Now"
          >
            <CiHeart />
          </Button>

          </div>
        </div>
        <div className="flex justify-center items-center p-4">
          <GiShiningHeart className="text-white text-9xl" />
        </div>
      </div>
    </div>
  );
}

export default SupportCard;
