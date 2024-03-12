import React, { useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import LogoNav from "../assets/LogoNav.png";
// import BlackLogo from "./assets/BlackLogo.png";

import { Phone } from "lucide-react";

import AOS from "aos";
import "aos/dist/aos.css";
import { Link, useNavigate } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const AMNAvbar = () => {
  useEffect(() => {
    AOS.init({ duration: "1000" });
  }, []);
  const navigate = useNavigate();

  const navigation = [
    {
      name: "Home",
      href: "/",
      scrollName: "home",
      current: true,
    },
    {
      name: "About Us",
      href: "/",
      scrollName: "aboutus",
      current: false,
    },
    {
      name: "Services ",
      href: "/",
      scrollName: "services",

      current: false,
    },
    {
      name: "Blogs",
      href: "/",
      scrollName: "blogs",

      current: false,
    },
  ];
  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    let scrollValue = document.documentElement.scrollTop;
    if (scrollValue > 500) {
      setScroll(true);
      // console.log(scrollValue);
    } else {
      setScroll(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <>
      <Disclosure as="nav" className={"z-10 bg-transparent"}>
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-10 lg:px-14 pt-3 p-4  ">
              <div className="relative flex h-16 items-center justify-between ">
                {/* Mobile menu button */}
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-white underline hover:decoration-[#ffffff] underline-offset-8 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#2787b7]">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon
                        className="block h-6 w-6 bg-[#2787b7]"
                        aria-hidden="true"
                      />
                    ) : (
                      <Bars3Icon
                        className="block h-6 w-6 bg-[#2787b7]"
                        aria-hidden="true"
                      />
                    )}
                  </Disclosure.Button>
                </div>

                {/* Logo and Navigation */}
                <div className="flex items-center justify-center flex-grow">
                  <div
                    className="flex flex-shrink-0 items-center cursor-pointer"
                    onClick={() => navigate("/")}
                  >
                    <img
                      className="w-24 pt-4 h-2w-24 lg:h-52 lg:w-52 md:h-44 md:w-44"
                      src={scroll ? LogoNav : LogoNav}
                      alt="Logo"
                    />
                  </div>
                  <div className="hidden sm:flex flex-grow justify-center items-center lg:mx-12">
                    <div className="flex space-x-2 l:space-x-4 md:justify-center">
                      {navigation.map((item) => (
                        <Link
                          to={item.href}
                          key={item.name}
                          // href={item.href}
                          className={classNames(
                            item.current
                              ? `${scroll ? "text-white" : "text-white"}`
                              : scroll
                              ? "text-white"
                              : "text-white",
                            `rounded-md  px-3 py-2 text-sm md:text-lg md:font-medium hover:underline  underline-offset-8 uppercase ${
                              scroll ? "decoration-black" : "decoration-white"
                            } `
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Call-to-action Button */}
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <button
                    type="button"
                    className={` ${
                      scroll ? "bg-[#2787b7] text-black" : "text-white"
                    }relative outline outline-white text-white  p-2 flex items-center justify-center sm:justify-between 
                        sm:p-2 md:p-2 lg:px-6 xl:px-10 rounded-full font-bold text-sm w-[100%] `}
                    disabled
                  >
                    <Phone color="white" size={18} className="mx-2" />
                    <span className="hidden sm:inline text-white ">
                      <a href="#contactus">Lets Talk</a>
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Menu Panel */}
            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current ? "text-white" : "text-white",
                      "block rounded-md px-3 py-2 text-base font-medium hover:underline  underline-offset-8"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
};

export default AMNAvbar;
