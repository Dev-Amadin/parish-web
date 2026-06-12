
import { GiPeaceDove } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import Button from "./Button";
import { CiHeart } from "react-icons/ci";
import { navLinks } from "../data/data";
import { IoMdMenu } from "react-icons/io";

function Navbar() {
  return (
    <div className="bg-primary w-full">
      <div className="mx-8">
        <div className="flex justify-between py-4 gap-8 text-white">
          <div className="flex items-center gap-2">
            <div className="text-5xl">
              <GiPeaceDove />
            </div>
            <div className="flex flex-col">
              <h2 className="text-2xl">HOLY GHOST</h2>
              <h2 className="text-2xl">PARISH, LUTON</h2>
              <p>Serving all with justice, peace and love</p>
            </div>
          </div>
          <div className="hidden xl:block flex-1">
            <div className="flex flex-col items-end gap-6 ">
              <div className="flex gap-2 items-center">
                <CiSearch className="text-2xl text-white" />
                <Button
                  text="Donate"
                  type="donate"
                >
                  <CiHeart />
                </Button>
              </div>
              <div className="flex md:gap-8 ">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className=" hover:underline hover:underline-offset-8 transition-all duration-300"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center xl:hidden">
              <IoMdMenu className="text-4xl text-white cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
