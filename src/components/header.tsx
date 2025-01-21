import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import { useState } from "react";
import React from "react";

const navItems = [
  { name: "Acceuil", path: "/" },
  { name: "A Propos", path: "/about" },
  { name: "Catalogue", path: "/product" },
  { name: "Contacts", path: "/contact" },
];

function Header() {
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <div>
      <header className="bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/">
            {" "}
            <div className="text-2xl font-bold text-blue-600">Ikigai</div>
          </Link>
          <div className="hidden md:flex  space-x-4 ">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="hover:text-blue-600 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <button
            className="md:hidden"
            onClick={() => setShowNavbar(!showNavbar)}
          >
            {showNavbar ? <X /> : <Menu />}
          </button>
        </nav>
        <div
          className={`${
            showNavbar ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden transition-all duration-1000 ease-in-out md:hidden
        }`}
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className=" block py-1 px-4 text-blue-600"
              onClick={() => setShowNavbar(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </header>
    </div>
  );
}

export default Header;
