
import Button from "../components/Button";
import { CgArrowLongRight } from "react-icons/cg";
import { welcomeMessage } from "../data/data";

const WelcomeMessage = () => {
  return (
    <div className="mx-8 my-10 px-8">
      <div className="grid lg:grid-flow-col grid-rows-3 gap-4 bg-cream-highlight p-2 rounded-xl ">
        <div className="md:row-span-3 bg-cover bg-center w-auto h-full lg:w-xl bg-[url(./assets/welcome_bg.jpg)] rounded-xl"></div>
        <div className="md:col-span-2 row-span-2 max-lg:order-first p-4">
            <h5 className="text-lg font-semibold text-primary">WELCOME TO</h5>
            <h2 className="text-3xl font-bold mt-2">{welcomeMessage.title}</h2>
             <div className="w-16 h-1 bg-primary mt-4"></div>
             {welcomeMessage.description.map((para, index) => (
               <p key={index} className="text-pretty mt-4">
                 {para}
               </p>
             ))}
        </div>
        <div className="md:col-span-2 order-last p-4 flex justify-center items-center lg:justify-start">
              <Button
              text="Learn More About Our Parish"
              type="primary"
              iconDirection="end"
            >
                <CgArrowLongRight />
            </Button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeMessage;
