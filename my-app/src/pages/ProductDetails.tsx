import React, { useState } from "react";
import "../index.css";
import { Link } from "react-router-dom";
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
  FaCheck,
} from "react-icons/fa";

import {motion} from "framer-motion"

interface Questions {
  text: string;
}

interface Abouts {
  img: string;
  head: string;
  cap: string;
}

const testimonials: Abouts[] = [
  {
    img: "/testimonial-red.png",
    head: "Sarah Thomson",
    cap: "Klothink exceeded my expectations. The gown's quality and design made me feel like a queen. Fast shipping, too!",
  },
  {
    img: "/testimonial-white.png",
    head: "Rajesh Patel",
    cap: "Absolutely love the style and warmth of the jacket. A perfect blend of fashion and functionality",
  },
  {
    img: "/testimonial-yellow.png",
    head: "Emily Walker",
    cap: "Adorable and comfortable! My daughter loves her new outfit. Thank you, Klothink, for dressing our little fashionista.",
  },
];

const questionOne: Questions[] = [
  { text: "Can I modify my order after placing it?" },
  { text: "How can I initiate a return?" },
  { text: "How can I unsubscribe from the newsletter?" },
  { text: "Do you offer exchanges for products?" },
];

const questionTwo: Questions[] = [
  { text: "What payment methods do you accept?" },
  { text: "How can I track my order?" },
  { text: "What is your shipping policy?" },
];

const questionThree: Questions[] = [
  { text: "Are there any additional fees for returns?" },
  { text: "How do I create an account on Klothink?" },
  { text: "Can I change my account information?" },
  { text: "Are my personal details secure on Klothink?" },
];

import { useParams } from "react-router-dom";
import { product } from "../libs/data";
import Products from "./Products";

const ProductDetails: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const { id } = useParams<{ id: string }>()
  const productdetail = product.find((p) => p.id === id)

  if (!productdetail) {
    return <div className="text-3xl font-bold">Product not found</div>
  }

  return (
    <div className="font-manrope">
      {/* navbar */}
      <nav className="p-2 lg:px-10 flex justify-between items-center border-b border-gray-400 relative top-0">
        <div className="lg:flex items-center gap-4 hidden">
          <Link to="/">
            <button className="nav-btn hover:bg-gray-100 hover:bg-transparent">
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

      <div className="flex flex-col lg:flex-row item-start gap-8 layout">
        <motion.img
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          src="/dress-details-normal.png"
          className="hidden lg:grid h-fit"
          alt=""
        />
        <motion.img
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          src="/dress-details-mobile.png"
          className="block lg:hidden"
          alt=""
        />
        <div className="grid gap-4 w-full">
          <div className="flex items-start flex-col lg:flex-row justify-between gap-4 w-full">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="grid gap-2"
            >
              <div className="flex items-center gap-2">
                <span className="description">Men's Casual Outerwear</span>
                <span className="text-sm px-2 py-1 bg-yellow-400 rounded-3xl">
                  12 Left!
                </span>
              </div>
              <span className="subhead">Urban Explorer Denim Jacket</span>
              <span className="font-semibold text-[#262626] text-2xl">
                $69.99
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="flex items-center lg:gap-4 justify-around w-full lg:w-fit"
            >
              <button className="flex items-center gap-2 px-4 py-2 rounded-3xl hover:text-black text-white hover:bg-white hover:border hover:border-[#F1F1F3] bg-black">
                <FaShoppingBag /> Buy Now
              </button>
              <button className="flex items-center gap-2 px-4 py-2 rounded-3xl text-black hover:text-white hover:bg-black border border-[#F1F1F3]">
                <FaShoppingBag /> Buy Now
              </button>
            </motion.div>
          </div>
          <div className="border border-[#F1F1F3] p-6 rounded-md grid gap-4 grid-cols-2 text-sm lg:text-base">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="grid gap-1"
            >
              <span className="text-[#262626] font-semibold">Material</span>
              <span className="text-[#656567]">
                High-Quality Denim (100% Cotton)
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="grid gap-1"
            >
              <span className="font-semibold text-[#262626]">Fit</span>
              <span className="text-[#656567]">Classic fit</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="grid gap-1"
            >
              <span className="text-[#262626] font-semibold">Color</span>
              <div className="p-1 rounded-3xl flex items-center gap-1">
                <div className="size-6 bg-black text-white p-2 grid place-content-center rounded-full">
                  <FaCheck />
                </div>
                <div className="size-6 bg-[#DAA573] text-white p-2 grid place-content-center rounded-full"></div>
                <div className="size-6 bg-[#DAD673] text-white p-2 grid place-content-center rounded-full"></div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="grid gap-1"
            >
              <span className="font-semibold text-[#262626]">Sizes</span>
              <div className="flex items-center gap-2 font-medium">
                <div className="size-6 p-2 bg-[#F7F7F8] grid place-content-center">
                  S
                </div>
                <div className="size-6 p-2 bg-[#262626] grid place-content-center text-white">
                  M
                </div>
                <div className="size-6 p-2 bg-[#F7F7F8] grid place-content-center">
                  L
                </div>
                <div className="size-6 p-2 bg-[#F7F7F8] grid place-content-center">
                  XL
                </div>
                <div className="size-6 p-2 bg-[#F7F7F8] grid place-content-center">
                  XXL
                </div>
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="p-6 border border-[#F1F1F3] rounded-md grid gap-4"
          >
            <span className="subhead">Shipping Information</span>
            <ul className="pl-6 list-disc">
              <li className="text-[#656567]">
                Standard shipping: <b>3-5 business days</b>
              </li>
              <li className="text-[#656567]">
                Express shipping options available at checkout
              </li>
            </ul>
          </motion.div>
          <div className="p-6 border border-[#F1F1F3] rounded-md grid gap-4">
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="subhead"
            >
              Features
            </motion.span>
            <ul className="pl-6 list-disc">
              <motion.li
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-[#656567]"
              >
                Distressed detailing for a rugged look
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-[#656567]"
              >
                Button-up front closure with engraved metal buttons
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-[#656567]"
              >
                Two side pockets for added functionality
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-[#656567]"
              >
                Adjustable buttoned cuffs for a personalized fit
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-[#656567]"
              >
                Back waist tabs for customizable styling
              </motion.li>
            </ul>
          </div>
        </div>
      </div>

      <div className="layout grid gap-6">
        <div className="grid gap-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex items-start gap-1 flex-col-reverse lg:flex-row"
          >
            <h1 className="header-one">reviews</h1>
            <span className="normal-cap">product reviews</span>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="description"
          >
            At Klothink, our customers are the heartbeat of our brand. Explore
            the heartfelt testimonials shared by those who have experienced the
            magic of Klothink fashion.
          </motion.p>
        </div>

        <div className="flex items-center gap-2">
          <motion.button
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="size-8 p-2 rounded-full bg-white text-black grid place-content-center"
          >
            <FaLessThan />
          </motion.button>
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
          <motion.button
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="size-8 rounded-full bg-black text-white p-2 grid place-content-center"
          >
            <FaGreaterThan />
          </motion.button>
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
            <h1 className="header-one">Frequently asked questions</h1>
            <span className="normal-cap">faq</span>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="description"
          >
            Ease into the world of Klothink with clarity. Our FAQs cover a
            spectrum of topics, ensuring you have the information you need for a
            seamless shopping experience.
          </motion.p>
        </div>

        <div className="flex items-start gap-8">
          <div className="lg:grid hidden gap-4">
            {questionOne.map((e, index) => (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="question-div"
                key={index}
              >
                <span className="text-sm lg:text-base">{e.text}</span>
                <button>
                  <FaPlus />
                </button>
              </motion.div>
            ))}
          </div>
          <div className="grid gap-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="grid gap-3 bg-[#f1f1f3] rounded-2xl p-2"
            >
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
            </motion.div>

            {questionTwo.map((e, index) => (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="question-div"
                key={index}
              >
                <span className="text-sm lg:text-base">{e.text}</span>
                <button>
                  <FaPlus />
                </button>
              </motion.div>
            ))}
          </div>
          <div className="lg:grid hidden gap-4">
            {questionThree.map((e, index) => (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="question-div"
                key={index}
              >
                <span className="text-sm lg:text-base">{e.text}</span>
                <button>
                  <FaPlus />
                </button>
              </motion.div>
            ))}
          </div>
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

export default ProductDetails;
