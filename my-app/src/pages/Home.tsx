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

import { motion } from "framer-motion";

import {
  theFour,
  product,
  about,
  testimonials,
  questionOne,
  questionTwo,
  questionThree,
  experience,
} from "../libs/data";

const Home: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="font-manrope">
      <div className="p-1 bg-black text-white text-sm text-center">
        Subscribe to our Newsletter for the Latest Collections
      </div>
      {/* navbar */}
      <nav className="p-2 lg:px-10 flex justify-between items-center border-b border-gray-400 relative">
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

      {/* Elevate your style */}
      <div className="layout lg:flex grid lg:justify-between item-start gap-10 ">
        <div className="grid gap-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col-reverse lg:flex-row items-start gap-1"
          >
            <h1 className="header-one">Elevate Your Style with Klothink</h1>
            <span className="normal-cap">Style Redefined.</span>
          </motion.div>
          <span className="description">
            Explore a world of fashion at Klothink, where trends meet
            affordability. Immerse yourself in the latest styles and seize
            exclusive promotions.
          </span>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex items-center gap-4 text-[#262626] w-full"
          >
            <button className="flex items-center gap-2 yellow-btn">
              <FaShoppingBag /> Shop now
            </button>
            <button className="bg-[#f1f1f3] py-3 px-4 font-medium rounded-3xl">
              Contact us
            </button>
          </motion.div>
          <div className="bg-[#F7F7F8] border-2 border-white p-2 lg:p-4 rounded-xl grid grid-cols-2 gap-4">
            {theFour.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.4 }}
                key={index}
                className="four"
              >
                <span className="font-semibold text-[#1a1a1a] text-xl lg:text-2xl uppercase">
                  {item.head}
                </span>
                <span className="description text-balance text-sm">
                  {item.cap}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="lg:w-1/2 bg-[#F7F7F8] p-2 rounded-md grid gap-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-between items-center"
          >
            <button className="bg-white p-2 rounded-xl font-semibold">
              Best Seller
            </button>
            <div className="flex items-center gap-2">
              <button className="bg-white text-black p-2 rounded-full">
                <FaLessThan />
              </button>
              <button className="bg-black text-white p-2 rounded-full">
                <FaGreaterThan />
              </button>
            </div>
          </motion.div>
          <motion.img
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            src="yellow-shirt.png"
            alt=""
          />
          <div className="flex justify-between items-center text-sm">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="flex items-center gap-3 bg-white"
            >
              <span className="text-[#262626]">Color</span>
              <div className="flex items-center gap-1">
                <button className="color-btn bg-[#739CDA]"></button>
                <button className="color-btn bg-[#DAA573]"></button>
                <button className="color-btn bg-[#DAD673]"></button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="flex items-center gap-3 bg-white px-2 py-[2px] rounded-xl"
            >
              <span className="text-[#262626]">Sizes</span>
              <div className="flex items-center gap-2">
                <button className="size-btn">S</button>
                <button className="size-btn">M</button>
                <button className="size-btn">L</button>
                <button className="size-btn">XL</button>
              </div>
            </motion.div>
            <motion.button
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-[#262626] font-medium text-sm bg-white py-1 rounded-3xl px-2"
            >
              View Similar
            </motion.button>
          </div>
        </div>
      </div>

      {/* discover fashion */}
      <div className="layout grid gap-14">
        <div className="lg:flex grid items-center gap-10">
          <div className="grid gap-5">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="flex items-start gap-2 flex-col-reverse lg:flex-row"
            >
              <h1 className="header-one">discover fashion.</h1>
              <span className="normal-cap">products</span>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="description"
            >
              Dive into a world of fashion innovation at Klothink. Our carefully
              curated collections bring together the latest trends and timeless
              classics, ensuring you find the perfect pieces for every occasion.
            </motion.p>
          </div>
          <motion.button className="yellow-btn w-56">
            View All Products
          </motion.button>
        </div>
        <div className="border-y border-[#F1F1F3] p-6 lg:flex grid justify-between items-center gap-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex items-center gap-6 text-base font-medium uppercase lg:overflow-hidden overflow-scroll"
          >
            <button className="text-[#98989A]">ALL</button>
            <button className="text-[#262626]">MENSWEAR</button>
            <button className="text-[#98989A]">WOMENSWEAR</button>
            <button className="text-[#98989A]">KIDSWEAR</button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex items-center justify-between gap-2 lg:overflow-hidden overflow-scroll"
          >
            <button className="bg-[#262626] px-5 py-3 text-white rounded-xl">
              Casual
            </button>
            <button className="bg-white text-[#262626] px-5 py-3 rounded-xl">
              Formal
            </button>
            <button className="bg-white text-[#262626] px-5 py-3 rounded-xl">
              Party
            </button>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {product.map((product, index) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              className="grid gap-2 overflow-hidden"
              key={index}
            >
              <div className="relative">
                <img
                  src={product.image}
                  className="w-full bg-[#F7F7F8] p-4 rounded-2xl"
                  alt=""
                />
                <div
                  className="absolute left-[85%] top-[93%] rounded-full"
                  aria-label="View Cart"
                >
                  <Link to={`/product/${product.id}`} key={product.id}>
                    <button
                      className="p-3 rounded-full bg-yellow-400 text-xl hover:bg-yellow-500 transition"
                      aria-label="Shopping Cart"
                    >
                      <FaShoppingCart />
                    </button>
                  </Link>
                </div>
              </div>
              <div className="grid gap-1 font-medium text-base">
                <span className="text-[#262626]">{product.name}</span>
                <span className="text-[#4C4C4D]">{product.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="lg:flex grid items-center gap-8"
        >
          <div className="flex item-center overflow-scroll lg:overflow-hidden">
            <div className="lg:flex grid items-center gap-8">
              <div className="hidden lg:flex item-center overflow-scroll lg:overflow-hidden">
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
            </div>
          </div>
        </motion.div>
      </div>

      {/* klothink experience */}
      <div className="layout grid gap-8">
        <div className="grid gap-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex items-start gap-2 flex-col-reverse lg:flex-row"
          >
            <h1 className="header-one">the Klothink experience</h1>
            <span className="normal-cap">about us</span>
          </motion.div>
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="description"
          >
            At Klothink, we breathe life into fashion, blending creativity with
            commitment. Our journey is fueled by a dedicating to delivering
            unparalleled style and quality. Join us in redefining fashion and
            embracing a community where every purchase tells a story
          </motion.span>
        </div>
        <div className="p-3 rounded-xl bg-[#f1f1f3] grid gap-4 grid-cols-1 lg:grid-cols-3">
          {about.map((e, index) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              className="p-2 rounded-xl bg-white ring-1 ring-[#f1f1f3] grid gap-2"
              key={index}
            >
              <div className="flex items-center gap-2">
                <img src={e.img} alt="" />
                <span className="font-semibold text-base text-black">
                  {e.head}
                </span>
              </div>
              <span className="text-sm text-[#656567]">{e.cap}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* customer love */}
      <div className="layout grid gap-8">
        <div className="grid lg:flex justify-between gap-12 items-center">
          <div className="grid gap-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="flex items-start gap-2 flex-col-reverse lg:flex-row"
            >
              <h1 className="header-one">customer love.</h1>
              <span className="normal-cap">testimonials</span>
            </motion.div>
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="description"
            >
              At Klothink, our customers are the heartbeat of our brand. Explore
              the heartbeat testimonials shared by those who have experienced
              the magic of Klothink fashion.
            </motion.span>
          </div>
          <motion.button className="yellow-btn w-56">
            View All Testimonials
          </motion.button>
        </div>
        <div className="flex items-center gap-2">
          <button className="size-8 place-content-center rounded-full bg-white text-black hidden lg:grid">
            <FaLessThan />
          </button>
          <div className="bg-[#f1f1f3] p-3 rounded-lg grid gap-4 grid-cols-1 lg:grid-cols-3">
            {testimonials.map((each, index) => (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.2 }}
                className="border-1 border-[#656567] p-3 rounded-xl bg-white grid gap-3 text-xs"
                key={index}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1">
                    <img src={each.img} className="size-12 bg-" alt="" />
                    <div className="grid gap-1">
                      <span className="font-semibold">{each.head}</span>
                      <img src="five-star-icon.png" alt="" />
                    </div>
                  </div>
                  <img src="asteric-icon.png" className="size-10" alt="" />
                </div>
                <span className="">{each.cap}</span>
              </motion.div>
            ))}
          </div>

          <button className="size-8 lg:grid hidden place-content-center rounded-full bg-black text-white">
            <FaGreaterThan />
          </button>
        </div>
      </div>

      {/* questions */}
      <div className="layout grid gap-8">
        <div className="grid gap-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col-reverse lg:flex-row items-start gap-1"
          >
            <h1 className="header-one">questions? we have answers</h1>
            <span className="normal-cap">faq</span>
          </motion.div>
          <motion.span className="description">
            Ease into the world of Klothink with clarity. Our FAQs cover a
            spectrum of topics, ensuring you have the information you need for a
            seemless shopping experience.
          </motion.span>
        </div>
        <motion.div className="flex items-center gap-8 py-4 border-y-2 border-[#f1f1f3] text-base lg:text-lg font-medium overflow-x-scroll lg:overflow-hidden">
          <button className="text-black">ALL</button>
          <button className="text-[#656567]">ORDERING</button>
          <button className="text-[#656567]">SHIPPING</button>
          <button className="text-[#656567]">RETURNS</button>
          <button className="text-[#656567]">CUSTOMER SUPPORT</button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex items-start gap-8"
        >
          <div className="lg:grid hidden gap-4">
            {questionOne.map((e, index) => (
              <div className="question-div" key={index}>
                <span className="text-sm lg:text-base">{e.text}</span>
                <button>
                  <FaPlus />
                </button>
              </div>
            ))}
          </div>
          <div className="grid gap-4">
            <div className="grid gap-3 bg-[#f1f1f3] rounded-2xl p-2">
              <div className="question-div border-0 bg-transparent">
                <span className="text-sm lg:text-base">
                  How can I place an order on Klothink?
                </span>
                <button>
                  <FaMinus />
                </button>
              </div>
              <span className="text-xs lg:text-sm">
                Ordering is easy! Simply browse our website. add items to your
                cart, and proceed to{" "}
              </span>
            </div>

            {questionTwo.map((e, index) => (
              <div className="question-div" key={index}>
                <span className="text-sm lg:text-base">{e.text}</span>
                <button>
                  <FaPlus />
                </button>
              </div>
            ))}
          </div>
          <div className="lg:grid hidden gap-4">
            {questionThree.map((e, index) => (
              <div className="question-div" key={index}>
                <span className="text-sm lg:text-base">{e.text}</span>
                <button>
                  <FaPlus />
                </button>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* seamless experience */}
      <div className="layout grid gap-8">
        <motion.div className="grid gap-4">
          <div className="flex items-start flex-col-reverse lg:flex-row gap-1">
            <h1 className="header-one">seamless experience.</h1>
            <span className="normal-cap">how it works?</span>
          </div>
          <p className="description">
            At Klothink, we've designed a straightforward shopping experience to
            make fashion accessible. Explore the journey from discovering the
            latest trends to receiving your handpicked styles with ease.
          </p>
        </motion.div>

        <div className="p-4 rounded-2xl bg-[#f7f7f8] grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {experience.map((each, index) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              key={index}
              className="p-2 rounded-2xl bg-white grid gap-1"
            >
              <h1 className="font-bold text-[#bbbbbd] text-lg md:text-xl lg:text-5xl">
                {each.num}
              </h1>
              <span className="text-base lg:text-lg text-black font-medium">
                {each.head}
              </span>
              <span className="text-[#98989A] text-xs lg:text-base">
                {each.cap}
              </span>
            </motion.div>
          ))}
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

export default Home;
