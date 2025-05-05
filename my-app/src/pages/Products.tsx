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
  FaShoppingBasket,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import {motion} from "framer-motion"

interface Discover {
  head: string;
  cap: string;
}

interface Products {
  image: string;
  name: string;
  cap: string;
  price: string;
}

const discover: Discover[] = [
  { head: "Exclusive Offers", cap: "30% off on select items" },
  { head: "New Arrivals", cap: "50+ new arrivals Daily" },
  { head: "Over 1,500 +", cap: "curated fashion products." },
];

const casual: Products[] = [
  {
    image: "/crazy-blue-jean.png",
    name: "Classic Denim Jeans",
    cap: "Slim Fit",
    price: "$49.99",
  },
  {
    image: "/green-hoodie.png",
    name: "Cozy Comfort Hoodie",
    cap: "Relaxed Fit",
    price: "$39.99",
  },
  {
    image: "/red-shirt.png",
    name: "Classic Polo Shirt",
    cap: "Regular Fit",
    price: "$29.99",
  },
  {
    image: "/normal-blue-jean.png",
    name: "Chino Pants",
    cap: "Slim Fit",
    price: "$44.99",
  },
];

const formal: Products[] = [
  {
    image: "/charcoal-suit.png",
    name: "Classic Charcoal Suit",
    cap: "Slim Fit",
    price: "$199.99",
  },
  {
    image: "/black-shirt.png",
    name: "Black French Cuff Shirt",
    cap: "Regular Fit",
    price: "$39.99",
  },
  {
    image: "/leather-shoe.png",
    name: "Black Leather Oxford Shoes",
    cap: "Black",
    price: "$89.99",
  },
  {
    image: "/belt.png",
    name: "Classic Black Leather Belt",
    cap: "Genuine Leather",
    price: "$29.99",
  },
];

const lifestyle: Products[] = [
  {
    image: "/performance-jacket.png",
    name: "Performance Jacket",
    cap: "Athletic Fit",
    price: "$59.99",
  },
  {
    image: "/athletic-short.png",
    name: "Quick-Dry Athletic Shorts",
    cap: "Relaxed Fit",
    price: "$39.99",
  },
  {
    image: "/legging.png",
    name: "High-Performance Leggings",
    cap: "Compression Fit",
    price: "$44.99",
  },
  {
    image: "/running-shoe.png",
    name: "Lightweight Running Shoes",
    cap: "Black",
    price: "$69.99",
  },
];

const Products: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="font-manrope">
      {/* navbar */}
      <nav className="p-2 lg:px-10 flex justify-between items-center border-b border-gray-400 relative top-0 left-0">
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
          <img src="/logo.png" alt="Klothink Logo" className="h-10 w-auto" />
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

      {/* discover now */}
      <div className="layout grid gap-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="grid gap-8"
          >
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
          </motion.div>
          <div className="flex items-start flex-col lg:flex-row gap-5">
            {discover.map((e, index) => (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="p-4 grid gap-3"
                key={index}
              >
                <span className="subhead">{e.head}</span>
                <span className="text-[#656567] ">{e.cap}</span>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex items-center overflow-scroll lg:overflow-hidden justify-center font-medium gap-5 py-4 border-y border-[#f1f1f3]"
        >
          <button className="wear-white">ALL</button>
          <button className="yellow-btn flex items-center gap-1">
            <img src="men-wear.png" alt="" />
            <span>MEN'S WEAR</span>
          </button>
          <button className="wear-white">
            <img src="women-wear.png" alt="" />
            <span>WOMEN'S WEAR</span>
          </button>
          <button className="wear-white">
            <img src="kid-wear.png" alt="" />
            <span>KID'S WEAR</span>
          </button>
        </motion.div>
        <div className="grid gap-6">
          <motion.div className="grid gap-3">
            <span className="subhead">Casual Collection</span>
            <p className="description">
              Discover our versatile men's casual wear collection, where comfort
              meets contemporary fashion.
            </p>
          </motion.div>
          <div className="pt-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {casual.map((each, index) => (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="grid gap-5 overflow-hidden border border-[#F1F1F3] rounded-2xl "
                key={index}
              >
                <div className="relative">
                  <img
                    src={each.image}
                    className="w-full bg-[#F7F7F8] p-4"
                    alt=""
                  />
                  <div
                    className="absolute left-[68%] top-[93%] rounded-full"
                    aria-label="View Cart"
                  >
                    <Link to="/productsdetails">
                      <button
                        className="p-3 rounded-full bg-white text-2xl hover:scale-105 duration-300 transition"
                        aria-label="Shopping Cart"
                      >
                        <FaShoppingCart />
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="grid font-medium text-base p-3">
                  <span className="text-[#262626] text-lg lg:text-xl font-semibold">
                    {each.name}
                  </span>
                  <div className="flex items-center justify-between lg:text-lg">
                    <span className="text-[#98989A]">{each.cap}</span>
                    <span className="text-[#262626] font-semibold">
                      {each.price}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="lg:flex grid items-center gap-8"
          >
            <div className="flex item-center overflow-scroll lg:overflow-hidden">
              <div className="line"></div>
              <div className="line bg-[#262626]"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
            <div className="flex items-center gap-2">
              <button className="bg-white text-black p-2 rounded-full">
                <FaLessThan />
              </button>
              <button className="bg-black text-white p-2 rounded-full">
                <FaGreaterThan />
              </button>
            </div>
          </motion.div>
        </div>
        <div className="grid gap-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="grid gap-3"
          >
            <span className="subhead">Formal Elegance</span>
            <p className="description">
              Explore timeless elegance with our Formal Elegance collection,
              featuring refined pieces for a polished look.
            </p>
          </motion.div>
          <div className="pt-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {formal.map((each, index) => (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="grid gap-5 overflow-hidden border border-[#F1F1F3] rounded-2xl "
                key={index}
              >
                <div className="relative">
                  <img
                    src={each.image}
                    className="w-full bg-[#F7F7F8] p-4"
                    alt=""
                  />
                  <div
                    className="absolute left-[75%] top-[93%] rounded-full"
                    aria-label="View Cart"
                  >
                    <Link to="/productsdetails">
                      <button
                        className="p-3 rounded-full bg-white text-2xl hover:scale-105 duration-300 transition"
                        aria-label="Shopping Cart"
                      >
                        <FaShoppingCart />
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="grid font-medium text-base p-3">
                  <span className="text-[#262626] text-lg lg:text-xl font-semibold">
                    {each.name}
                  </span>
                  <div className="flex items-center justify-between lg:text-lg">
                    <span className="text-[#98989A]">{each.cap}</span>
                    <span className="text-[#262626] font-semibold">
                      {each.price}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="lg:flex grid items-center gap-8"
          >
            <div className="flex item-center overflow-scroll lg:overflow-hidden">
              <div className="line"></div>
              <div className="line bg-[#262626]"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
            <div className="flex items-center gap-2">
              <button className="bg-white text-black p-2 rounded-full">
                <FaLessThan />
              </button>
              <button className="bg-black text-white p-2 rounded-full">
                <FaGreaterThan />
              </button>
            </div>
          </motion.div>
        </div>
        <div className="grid gap-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="grid gap-3"
          >
            <span className="subhead">Active Lifestyle</span>
            <p className="description">
              Embrace an active lifestyle with our performance-driven men's
              wear, designed for comfort and flexibility.
            </p>
          </motion.div>
          <div className="pt-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {lifestyle.map((each, index) => (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="grid gap-5 overflow-hidden border border-[#F1F1F3] rounded-2xl "
                key={index}
              >
                <div className="relative">
                  <img
                    src={each.image}
                    className="w-full bg-[#F7F7F8] p-4"
                    alt=""
                  />
                  <div
                    className="absolute left-[75%] top-[93%] rounded-full"
                    aria-label="View Cart"
                  >
                    <Link to="/productsdetails">
                      <button
                        className="p-3 rounded-full bg-white text-2xl hover:scale-105 duration-300 transition"
                        aria-label="Shopping Cart"
                      >
                        <FaShoppingCart />
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="grid font-medium text-base p-3">
                  <span className="text-[#262626] text-lg lg:text-xl font-semibold">
                    {each.name}
                  </span>
                  <div className="flex items-center justify-between lg:text-lg">
                    <span className="text-[#98989A]">{each.cap}</span>
                    <span className="text-[#262626] font-semibold">
                      {each.price}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="lg:flex grid items-center gap-8"
          >
            <div className="flex item-center overflow-scroll lg:overflow-hidden">
              <div className="line"></div>
              <div className="line bg-[#262626]"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
            <div className="flex items-center gap-2">
              <button className="bg-white text-black p-2 rounded-full">
                <FaLessThan />
              </button>
              <button className="bg-black text-white p-2 rounded-full">
                <FaGreaterThan />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* normal footer */}
      <footer className="hidden lg:grid border-y border-[#F1F1F3] gap-4">
        <div className="layout flex items-center justify-between">
          <div className="grid gap-4">
            <img src="logo.png" className="size-8" alt="" />
            <div className="flex items-center gap-2">
              <input
                type="email"
                className="bg-[#FCFCFD] rounded-xl p-2"
                placeholder="Enter your Email"
              />
              <button className="yellow-btn">Subscribe</button>
            </div>
          </div>
          <div className="flex items-start gap-8">
            <ul className="grid gap-3">
              <a href="" className="text-lg font-medium text-[#262626] pb-2">
                Home
              </a>
              <a href="" className="text-base text-[#656567]">
                Features
              </a>
              <a href="" className="text-base text-[#656567]">
                Popular Products
              </a>
              <a href="" className="text-base text-[#656567]">
                Testimonials
              </a>
              <a href="" className="text-base text-[#656567]">
                FAQ
              </a>
            </ul>
            <ul className="grid gap-3">
              <a href="" className="font-medium text-lg text-[#262626] pb-2">
                Menswear
              </a>
              <a href="" className="text-base text-[#656567]">
                Casual
              </a>
              <a href="" className="text-base text-[#656567]">
                Formal
              </a>
              <a href="" className="text-base text-[#656567]">
                Party
              </a>
              <a href="" className="text-base text-[#656567]">
                Business
              </a>
            </ul>
            <ul className="grid gap-3">
              <a
                href=""
                className="font-medium text-lg mediumext-[#262626] pb-2"
              >
                Womenswear
              </a>
              <a href="" className="text-base text-[#656567]">
                Casual
              </a>
              <a href="" className="text-base text-[#656567]">
                Formal
              </a>
              <a href="" className="text-base text-[#656567]">
                Party
              </a>
              <a href="" className="text-base text-[#656567]">
                Business
              </a>
            </ul>
            <ul className="grid gap-3">
              <a
                href=""
                className="font-medium text-lg mediumext-[#262626] pb-2"
              >
                Kidswear
              </a>
              <a href="" className="text-base text-[#656567]">
                Casual
              </a>
              <a href="" className="text-base text-[#656567]">
                Formal
              </a>
              <a href="" className="text-base text-[#656567]">
                Party
              </a>
            </ul>
          </div>
        </div>
        <div className="layout flex items-center justify-between py-4 border-y border-[#f1f1f3]">
          <div className="flex items-center gap-4">
            <span className="description">Terms & Conditions</span>
            <span className="description">Privacy Policy</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="social-media">
              <FaFacebook />
            </button>
            <button className="social-media">
              <FaTwitter />
            </button>
            <button className="social-media">
              <FaLinkedin />
            </button>
          </div>
          <span className="description">
            &copy; 2024 klothink, All rights reserved.
          </span>
        </div>
      </footer>

      {/* mobile footer */}
      <footer className="grid lg:hidden border-y border-[#F1F1F3]">
        <div className="px-2 grid gap-4">
          <div className="flex items-center justify-between">
            <img src="logo.png" alt="" className="size-6" />
            <div className="flex items-center gap-4 text-lg">
              <button className="social-media">
                <FaFacebook />
              </button>
              <button className="social-media">
                <FaTwitter />
              </button>
              <button className="social-media">
                <FaLinkedin />
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <input
              type="email"
              className="bg-[#FCFCFD] rounded-xl p-2"
              placeholder="Enter your Email"
            />
            <button className="yellow-btn">Subscribe</button>
          </div>

          <div className="px-2 py-2 border border-[#f1f1f3] flex items-center justify-between">
            <a className="text-lg font-medium" href="">
              Home
            </a>
            <a className="text-lg font-medium" href="">
              About
            </a>
            <a className="text-lg font-medium" href="">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Products;
