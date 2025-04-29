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

const ContactSupport: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="font-manrope">
      {/* navbar */}
      <nav className="p-2 lg:px-10 flex justify-between items-center border-b border-gray-400 relative top-0 left-0">
        <div className="lg:flex items-center gap-4 hidden">
          <Link to="/">
            <button className="nav-btn bg-gray-100 hover:bg-transparent">
              Home
            </button>
          </Link>
          <Link to="/products">
            <button className="nav-btn hover:bg-gray-100 text-gray-600">
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
              <Link to="/">
                <a className="hover:text-gray-700 transition">Home</a>
              </Link>

              <Link to="/products">
                <a className="hover:text-gray-700 transition">Products</a>
              </Link>

              <Link to="/contactsupport">
                <a className="hover:text-gray-700 transition">
                  Contact Support
                </a>
              </Link>
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
    </div>
  );
};

export default ContactSupport;
