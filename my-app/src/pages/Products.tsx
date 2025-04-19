import React, { useState } from "react";
import "../index.css";
import {
  FaShoppingCart,
  FaBars,
  FaTimes,
  FaGreaterThan,
  FaLessThan,
  FaShoppingBag,
  FaPlus,
  FaMinus,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";

interface Discover {
  head: string;
  cap: string;
}

const discover: Discover[] = [
  { head: "Exclusive Offers", cap: "30% off on select items" },
  { head: "New Arrivals", cap: "50+ new arrivals Daily" },
  { head: "Over 1,500 +", cap: "curated fashion products." },
];

const Products: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="font-manrope">
      {/* navbar */}
      <nav className="p-2 lg:px-10 flex justify-between items-center border-b border-gray-400 relative">
        <div className="lg:flex items-center gap-4 hidden">
          <Link to="/">
            <button className="nav-btn hover:bg-gray-100 bg-transparent">
              Home
            </button>
          </Link>
          <Link to="/products">
            <button className="nav-btn bg-gray-100 hover:bg-transparent text-gray-600">
              Products
            </button>
          </Link>
        </div>

        <div className="size-10">
          <img src="logo.png" alt="Klothink Logo" className="h-10 w-auto" />
        </div>

        <div className="flex items-center gap-4">
          <Link to="/productsdetails">
            <button
              className="p-3 rounded-full bg-yellow-400 text-xl hover:bg-yellow-500 transition"
              aria-label="Shopping Cart"
            >
              <FaShoppingCart />
            </button>
          </Link>
          <a href="#" aria-label="View Cart"></a>

          <Link to="/contactsupport">
            <button
              className="nav-btn hover:bg-gray-100 text-gray-600 hidden lg:block"
              aria-label="Contact Support"
            >
              Contact Support
            </button>
          </Link>

          <button
            onClick={toggleMenu}
            className="lg:hidden text-lg p-2 rounded-md hover:bg-gray-200 transition"
            aria-label="Open Menu"
          >
            <FaBars />
          </button>
        </div>

        {isOpen && (
          <div className="bg-gray-200 rounded-md p-4 absolute top-0 left-0 w-full h-40 flex justify-between z-50">
            <div className="grid gap-2">
              <a href="" className="hover:text-gray-700 transition">
                Home
              </a>
              <a href="#" className="hover:text-gray-700 transition">
                Products
              </a>
              <a href="#" className="hover:text-gray-700 transition">
                Contact Support
              </a>
            </div>
            <button
              onClick={toggleMenu}
              className="absolute top-2 text-lg right-2 p-2 rounded-md hover:bg-gray-300 transition"
              aria-label="Close Menu"
            >
              <FaTimes />
            </button>
          </div>
        )}
      </nav>

      {/* discover now */}
      <div className="layout grid gap-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="grid gap-8">
            <div className="flex items-start gap-1 flex-col-reverse lg:flex-row">
              <h2 className="header-one">DISCOVER NOW</h2>
              <span className="normal-cap">products</span>
            </div>
            <p className="description lg:w-[550px] text-balance">
              Dive into the world of fashion excellence at Klothink. Our curated
              selection brings together the latest trends and timeless classics,
              offering you a diverse array of clothing items that resonate with
              your unique style.
            </p>
          </div>
          <div className="flex items-start flex-col lg:flex-row gap-5">
            {discover.map((e, index) => (
              <div className="p-4 grid gap-3" key={index}>
                <span className="text-[#262626] font-semibold text-xl">
                  {e.head}
                </span>
                <span className="text-[#656567] ">{e.cap}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
