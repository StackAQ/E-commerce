import React, { useState } from "react";
import "../index.css";
import {
  FaShoppingCart,
  FaBars,
  FaTimes,
  FaPhone,
  FaGreaterThan,
  FaLessThan,
  FaShoppingBag,
  FaPlus,
  FaMinus,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const contacts = [
  { name: "Email", cap: "support@klothink.com" },
  { name: "Call Us on", cap: "+1 (555) 123-4567" },
  { name: "Working Hours", cap: "Available 24/7 " },
];

const locations = [
  {
    name: "New York City, USA",
    address: "123 Fashion Avenue, Suite 456, New York, NY 10001",
  },
  {
    name: "Paris, France",
    address: "789 Rue de la Mode, Paris 75001",
  },
  {
    name: "Tokyo, Japan",
    address: "456 Shibuya Fashion Street, Shibuya-ku, Tokyo",
  },
];

const questionOne = [
  { text: "Can I modify my order after placing it?" },
  { text: "How can I initiate a return?" },
  { text: "How can I unsubscribe from the newsletter?" },
  { text: "Do you offer exchanges for products?" },
];

const questionTwo = [
  { text: "What payment methods do you accept?" },
  { text: "How can I track my order?" },
  { text: "What is your shipping policy?" },
];

const questionThree = [
  { text: "Are there any additional fees for returns?" },
  { text: "How do I create an account on Klothink?" },
  { text: "Can I change my account information?" },
  { text: "Are my personal details secure on Klothink?" },
];

const returnpolicy = [
  {
    name: "Eligibility",
    meaning:
      "Items must be unused, with tags attached, and returned within 30 days of delivery.",
  },
  {
    name: "Process",
    meaning:
      "Initiate returns through our Return Center for a smooth and efficient process.",
  },
  {
    name: "Refund",
    meaning:
      "Expect a refund to your original payment method within 7-10 business days .",
  },
];

const cancelpolicy = [
  {
    name: "Cancellation Window",
    meaning:
      "Orders can be canceled within 24 hours of placement for a full refund.",
  },
  {
    name: "Cancellation Process",
    meaning:
      "Visit our Order Management section to cancel your order effortlessly.",
  },
  {
    name: "Refund Timeline",
    meaning:
      "Refunds for canceled orders are processed within 5-7 business days.",
  },
];

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

      <div className="layout grid gap-10">
        <div className="flex lg:justify-between flex-col lg:flex-row">
          <div className="grid gap-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="flex items-start gap-1 flex-col-reverse lg:flex-row"
            >
              <h1 className="header-one">Klothink Support.</h1>
              <span className="normal-cap">Your Fashion Ally</span>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="description"
            >
              24/7 Assistance for Seamless Shopping and Unmatched Customer
              Satisfaction.
            </motion.p>
          </div>

          <div className="rounded-xl p-4 border border-[#F1F1F3] flex items-center gap-4 flex-col lg:flex-row">
            {contacts.map((each, index) => (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="grid gap-1 font-semibold"
                key={index}
              >
                <span className="text-[#656567] text-sm">{each.name}</span>
                <span className="text-[#262626] text-base">{each.cap}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="description"
          >
            Office Locations
          </motion.h3>
          <div className="p-4 border border-[#F1F1F3] rounded-xl flex items-center gap-6 lg:justify-between flex-col lg:flex-row">
            {locations.map((each, index) => (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                key={index}
                className="grid gap-4 font-medium"
              >
                <div className="grid gap-1">
                  <span className="text-lg text-[#262626]">{each.name}</span>
                  <span className="text-sm text-[#656567]">{each.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-3xl border border-[#F1F1F3]">
                    <FaPhone /> Call Now
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-black text-white hover:bg-gray-800 rounded-3xl border border-[#F1F1F3]">
                    Get Direction <FaArrowRight />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="layout grid gap-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col lg:flex-row lg:justify-between w-full"
        >
          <div className="grid gap-4">
            <div className="flex lg:flex-row flex-col-reverse gap-2">
              <h1 className="header-one">return policy</h1>
              <span className="normal-cap">Easy Returns at Klothink</span>
            </div>
            <p className="description">
              Explore our hassle-free return policy designed to ensure your
              satisfaction with every purchase.
            </p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 h-fit bg-[#F7F7F8] font-semibold rounded-3xl border border-[#F7F7F8]">
            Read Return Policy <FaArrowRight />
          </button>
        </motion.div>

        <div className="p-4 border-[#F7F7F8] border rounded-2xl flex flex-col lg:flex-row items-center gap-4">
          {returnpolicy.map((e, index) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              key={index}
              className="grid gap-2 font-medium"
            >
              <span className="text-[#262626]">{e.name}</span>
              <span className="text-[#656567]">{e.meaning}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="layout grid gap-10">
        <div className="flex flex-col lg:flex-row lg:justify-between w-full">
          <div className="grid gap-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="flex lg:flex-row flex-col-reverse gap-2"
            >
              <h1 className="header-one">Cancellation Policy</h1>
              <span className="normal-cap">Flexible Ordering Experience</span>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="description"
            >
              Familiarize yourself with our cancellation policy to make changes
              to your order with ease.
            </motion.p>
          </div>
          <motion.button
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex items-center gap-2 px-4 py-2 h-fit bg-[#F7F7F8] font-semibold rounded-3xl border border-[#F7F7F8]"
          >
            Read Cancellation Policy <FaArrowRight />
          </motion.button>
        </div>

        <div className="p-4 border-[#F7F7F8] border rounded-2xl flex flex-col lg:flex-row items-center gap-4">
          {cancelpolicy.map((e, index) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              key={index}
              className="grid gap-2 font-medium"
            >
              <span className="text-[#262626]">{e.name}</span>
              <span className="text-[#656567]">{e.meaning}</span>
            </motion.div>
          ))}
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
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="description"
          >
            Ease into the world of Klothink with clarity. Our FAQs cover a
            spectrum of topics, ensuring you have the information you need for a
            seemless shopping experience.
          </motion.p>
        </div>

        <div className="flex items-start gap-8">
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

export default ContactSupport;
