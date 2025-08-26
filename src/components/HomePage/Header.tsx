import { PiArrowRightLight } from "react-icons/pi";

import box from "@/assets/box.png";

type Nav = {
  name: string;
  href: string;
};

const headerNavs: Nav[] = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "Pricing",
    href: "#",
  },
  {
    name: "Resources",
    href: "#",
  },
  {
    name: "About",
    href: "#",
  },
  {
    name: "Contact",
    href: "#",
  },
];

const Header = () => {
  return (
    <div className="bg-primary h-16 flex items-center justify-between bg-accent rounded-full text-primary font-medium px-4 sm:px-2">
      <div className="flex items-center justify-between gap-2 ">
        <div>
          <img
            src={box}
            alt="Box"
            className="w-15 h-15 md:w-20 md:h-20 lg:w-25 lg:h-25 object-contain p-2 md:p-3 lg:p-4"
          />
        </div>
        <div className="font-bold text-2xl md:text-3xl lg:text-4xl">
          Taskify
        </div>
      </div>
      <nav className="">
        <ul className="hidden lg:flex items-center justify-center gap-6 text-sm hover:cursor-pointer ">
          {headerNavs.map((nav: Nav) => (
            <li key={nav.name} className="hover:text-white">
              <a href={nav.href}>{nav.name}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="hidden sm:flex items-center justify-center">
        <button className="bg-accent text-secondary px-4 py-2 rounded-full text-sm hover:bg-secondary/80 transition">
          Sign In
        </button>
        <button className="ml-4 bg-primary text-primary px-4 py-2 rounded-full text-sm hover:bg-surface transition flex items-center gap-2">
          <span>Sign Up Free</span>
          <PiArrowRightLight
            size={20}
            className="rounded-full p-1 bg-secondary"
          />
        </button>
      </div>
    </div>
  );
};
export default Header;
