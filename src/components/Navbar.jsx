import { useState } from "react";
import { FaSearch, FaShoppingBag, FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

import { MdPhonelinkSetup } from "react-icons/md";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    {id:1, label: "Home", value: "/" },
    { id:2, label: "Shop", value: "/shop" },
    { id:3, label: "Service", value: "/service" },
    { id:4, label: "About", value: "/about" },
    { id:5, label: "Contact", value: "/contact" },
  ];

  return (
    <>
      <style>
        {`
                    @import url('https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap');
                    *{
                        font-family: "Geist", sans-serif;
                    }
                `}
      </style>
      <div className="fixed w-full bg-white z-[9999]">
        <nav className="bg-white/40  px-6 md:px-12 lg:px-24 z-100 shadow-lg xl:px-40 py-4 flex items-center justify-between relative">
          <div className="flex gap-x-2 items-center">
            <MdPhonelinkSetup size={"35"} />
            <div className="flex flex-col space-y-0 ">
              <h1 className="md:text-2xl font-bold font-sans">
                Mobile<span className="text-orange-400 text-3xl">X</span>{" "}
              </h1>
              <p className="text-slate-500 uppercase">your world connected ?</p>
            </div>
          </div>

          <div className="hidden md:flex items-center bg-zinc-50 border border-zinc-200 rounded-lg px-1 py-1 gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.value}
                href="#"
                className={`px-4 font-bold py-1.5 rounded-full text-sm transition-colors ${item.label === "Products" ? "bg-white border border-zinc-200 font-medium text-zinc-800 hover:text-zinc-600" : "text-zinc-500 hover:text-zinc-400"}`}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-4 max-md:hidden">
            <div className="relative cursor-pointer">
              <FaShoppingBag size={"20"} />
              <button className="absolute -top-2 -right-3 text-xs text-white bg-blue-400 w-[18px] h-[18px] rounded-full">
                3
              </button>
            </div>
            <FaSearch size={"20"} />
            <FaUser size={"20"} />
          </div>
          <Link to={'/login'} className="cursor-pointer max-md:hidden px-7 py-2 bg-slate-500 hover:bg-slate-400 transition text-white duration-200 transition font-sans font-bold rounded-full">
            Login
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 cursor-pointer bg-transparent border-0 p-1"
          >
            <span
              className={`block w-6 h-0.5 bg-zinc-800 transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-zinc-800 transition-opacity ${menuOpen ? "opacity-0" : ""}`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-zinc-800 transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            ></span>
          </button>

          {menuOpen && (
            <div className="absolute top-full left-0 w-full bg-white border-t border-zinc-200 flex flex-col p-5 gap-1 md:hidden z-50">
              {navItems.map((item) => (
                <NavLink
                onClick={()=> setMenuOpen(false) }
                  key={item.id}
                  to={item.value}
                  className={`px-4 py-2.5 rounded-lg text-sm ${item.label === "Products" ? "bg-zinc-50 font-medium text-zinc-800" : "text-zinc-500 hover:bg-zinc-50"}`}
                >
                  {item.label}
                </NavLink>
              ))}
              <Link to={'/login'} className="cursor-pointer  px-7 py-2 bg-slate-500 hover:bg-slate-400 transition text-white duration-200 transition font-sans font-bold rounded-full">
                Login
              </Link>
            </div>
          )}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
