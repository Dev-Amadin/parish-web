import { LiaCopyright } from "react-icons/lia";
import { contactLinks, quickLinks, usefulLinks } from "../data/data";
import { CgArrowLongRight } from "react-icons/cg";
import { LiaFacebook } from "react-icons/lia";
import { SlSocialYoutube } from "react-icons/sl";
import { SiInstagram } from "react-icons/si";

function Footer() {
  return (
    <>
      <div className="mt-10 mb-0 px-8 bg-cream-highlight md:bg-primary">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
          <div className="max-md:border-b md:border-r-2 border-secondary-text md:border-rose-accent text-primary md:text-cream-highlight p-4">
            <h2 className="text-md font-semibold mb-2">CONTACT US</h2>
            {contactLinks.map((link, index) => (
              <div key={index} className="flex items-start gap-2 pt-2">
                {link.icon}
                <a
                  className="text-sm text-pretty text-secondary-text md:text-cream-highlight hover:text-primary-dark"
                  href=""
                >
                  {link.content}
                </a>
              </div>
            ))}
          </div>

          <div className="max-md:border-b lg:border-r-2 border-secondary-text md:border-rose-accent text-primary md:text-cream-highlight p-4">
            <h2 className="text-md font-semibold mb-2">QUICK LINKS</h2>
            {quickLinks.map((link, index) => (
              <div key={index} className="pt-2">
                <a
                  className="text-sm text-pretty text-secondary-text md:text-cream-highlight hover:text-primary-dark"
                  href=""
                >
                  {link}
                </a>
              </div>
            ))}
          </div>

          <div className="max-md:border-b md:border-r-2 border-secondary-text md:border-rose-accent text-primary md:text-cream-highlight p-4">
            <h2 className="text-md font-semibold mb-2">USEFUL LINKS</h2>
            {usefulLinks.map((link, index) => (
              <div key={index} className="pt-2">
                <a
                  className="text-sm text-pretty text-secondary-text md:text-cream-highlight hover:text-primary-dark"
                  href=""
                >
                  {link}
                </a>
              </div>
            ))}
          </div>

          <div className="text-primary md:text-cream-highlight p-4">
            <h2 className="text-md font-semibold mb-2">FOLLOW US</h2>

            <div className="flex items-center gap-2 mb-2 ">
              <LiaFacebook className="text-3xl hover:text-primary-dark" />
              <SlSocialYoutube className="text-3xl hover:text-primary-dark" />
              <SiInstagram className="text-2xl hover:text-primary-dark" />
            </div>

            <h2 className="text-md font-semibold mb-2">JOIN OUR NEWSLETTER</h2>
            <p className="text-sm text-pretty text-secondary-text md:text-cream-highlight">
              Stay up to date with parish news and events
            </p>

            <div className="flex item-center gap-2 mt-2">
              <input
                className="flex-1 bg-white border border-secondary-text md:border-none  rounded-md text-primary-text py-2 px-4"
                type="email"
                placeholder="Your email address"
              />
              <button
                className="bg-primary hover:bg-primary-accent md:bg-primary-accent md:hover:bg-primary md:border md:border-primary-accent py-2 px-4 rounded-md cursor-pointer justify-self-end"
                type="button"
              >
                <CgArrowLongRight className="text-cream-highlight" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:justify-between items-center bg-primary border-t-2 md:border-rose-accent py-6 px-10 text-cream-highlight">
        <p className="text-xs  text-pretty flex items-center gap-0.5">
          <span>
            <LiaCopyright />{" "}
          </span>{" "}
          2024 Holy Ghost Parish, Luton. All rights reserved.
        </p>
        <p className="text-xs  text-pretty">Website by Dev-Amadin</p>
      </div>
    </>
  );
}

export default Footer;
