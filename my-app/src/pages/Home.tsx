interface Four {
  head: string;
  cap: string;
}

interface Products {
  image: string;
  name: string;
  price: string;
}

interface Abouts {
  img: string;
  head: string;
  cap: string;
}

interface Questions {
  text: string;
}

interface Experience {
  num: string;
  head: string;
  cap: string;
}

const theFour: Four[] = [
  { head: "Over 1000+", cap: "Trendsetting Styles" },
  { head: "99%", cap: "Customer Satisfaction Rate" },
  { head: "24/7", cap: "Shopping Convenience" },
  { head: "30-Day", cap: "Hassle-Free Returns" },
];

const product: Products[] = [
  {
    image: "/crazy-blue-jean.png",
    name: "Classic Denim Jeans",
    price: "$49.99",
  },
  {
    image: "/green-hoodie.png",
    name: "Cozy Comfort Hoodie",
    price: "$39.99",
  },
  {
    image: "/red-shirt.png",
    name: "Classic Polo Shirt",
    price: "$29.99",
  },
  {
    image: "/normal-blue-jean.png",
    name: "Chino Pants",
    price: "$44.99",
  },
];

const about: Abouts[] = [
  {
    img: "/star-icon.png",
    head: "Passionate Craftsmanship",
    cap: "Every garment at Klothink is crafted with passion reflecting our commitment to quality and innovation.",
  },
  {
    img: "/fashion-icon.png",
    head: "Fashion Forward",
    cap: "We're trendsetters, curating styles that empower and inspire confidence.",
  },
  {
    img: "/loud-icon.png",
    head: "Customer-Centric Approach",
    cap: "At Klothink, our customers are at the heart of everything we do",
  },
  {
    img: "/bulb-icon.png",
    head: "Global Inspiration",
    cap: "Influenced by global trends, we bring you a diverse and dynamic collection",
  },
  {
    img: "/shine-icon.png",
    head: "Empowering Your Style",
    cap: "Beyond clothing, Klothink is a lifestyle. Join us on a journey of self-expression.",
  },
  {
    img: "/sun-icon.png",
    head: "Sustainable Practices",
    cap: "Klothink is committed to sustainability, integrating eco-friendly practices into our production process.",
  },
];

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

const experience: Experience[] = [
  {
    num: "01",
    head: "Discover Trends",
    cap: "Explore our curated collection of over 1000 styles.",
  },
  {
    num: "02",
    head: "Secure Checkout",
    cap: "Add your items to the cart and proceed to our secure checkout.",
  },
  {
    num: "03",
    head: "Swift Dispatch",
    cap: "Experience 95% same-day dispatch on orders.",
  },
  {
    num: "04",
    head: "Unbox Happiness",
    cap: "Receive your carefully packaged Klothink order.",
  },
];

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
          <div className="flex flex-col-reverse lg:flex-row items-start gap-1">
            <h1 className="header-one">Elevate Your Style with Klothink</h1>
            <span className="normal-cap">Style Redefined.</span>
          </div>
          <span className="description">
            Explore a world of fashion at Klothink, where trends meet
            affordability. Immerse yourself in the latest styles and seize
            exclusive promotions.
          </span>
          <div className="flex items-center gap-4 text-[#262626] w-full">
            <button className="flex items-center gap-2 yellow-btn">
              <FaShoppingBag /> Shop now
            </button>
            <button className="bg-[#f1f1f3] py-3 px-4 font-medium rounded-3xl">
              Contact us
            </button>
          </div>
          <div className="bg-[#F7F7F8] border-2 border-white p-2 lg:p-4 rounded-xl grid grid-cols-2 gap-4">
            {theFour.map((item, index) => (
              <div key={index} className="four">
                <span className="font-semibold text-[#1a1a1a] text-xl lg:text-2xl uppercase">
                  {item.head}
                </span>
                <span className="description text-balance text-sm">
                  {item.cap}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:w-1/2 bg-[#F7F7F8] p-2 rounded-md grid gap-4">
          <div className="flex justify-between items-center">
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
          </div>
          <img src="yellow-shirt.png" alt="" />
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-3 bg-white">
              <span className="text-[#262626]">Color</span>
              <div className="flex items-center gap-1">
                <button className="color-btn bg-[#739CDA]"></button>
                <button className="color-btn bg-[#DAA573]"></button>
                <button className="color-btn bg-[#DAD673]"></button>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white px-2 py-[2px] rounded-xl">
              <span className="text-[#262626]">Sizes</span>
              <div className="flex items-center gap-2">
                <button className="size-btn">S</button>
                <button className="size-btn">M</button>
                <button className="size-btn">L</button>
                <button className="size-btn">XL</button>
              </div>
            </div>
            <button className="text-[#262626] font-medium text-sm bg-white py-1 rounded-3xl px-2">
              View Similar
            </button>
          </div>
        </div>
      </div>

      {/* discover fashion */}
      <div className="layout grid gap-14">
        <div className="lg:flex grid items-center gap-10">
          <div className="grid gap-5">
            <div className="flex items-start gap-2 flex-col-reverse lg:flex-row">
              <h1 className="header-one">discover fashion.</h1>
              <span className="normal-cap">products</span>
            </div>
            <p className="description">
              Dive into a world of fashion innovation at Klothink. Our carefully
              curated collections bring together the latest trends and timeless
              classics, ensuring you find the perfect pieces for every occasion.
            </p>
          </div>
          <button className="yellow-btn w-56">View All Products</button>
        </div>
        <div className="border-y border-[#F1F1F3] p-6 lg:flex grid justify-between items-center gap-4">
          <div className="flex items-center gap-6 text-base font-medium uppercase lg:overflow-hidden overflow-scroll">
            <button className="text-[#98989A]">ALL</button>
            <button className="text-[#262626]">MENSWEAR</button>
            <button className="text-[#98989A]">WOMENSWEAR</button>
            <button className="text-[#98989A]">KIDSWEAR</button>
          </div>
          <div className="flex items-center justify-between gap-2 lg:overflow-hidden overflow-scroll">
            <button className="bg-[#262626] px-5 py-3 text-white rounded-xl">
              Casual
            </button>
            <button className="bg-white text-[#262626] px-5 py-3 rounded-xl">
              Formal
            </button>
            <button className="bg-white text-[#262626] px-5 py-3 rounded-xl">
              Party
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {product.map((each, index) => (
            <div className="grid gap-2 overflow-hidden" key={index}>
              <div className="relative">
                <img
                  src={each.image}
                  className="w-full bg-[#F7F7F8] p-4 rounded-2xl"
                  alt=""
                />
                <div
                  className="absolute left-[85%] bottom-1 rounded-full"
                  aria-label="View Cart"
                >
                  <Link to="/productsdetails">
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
                <span className="text-[#262626]">{each.name}</span>
                <span className="text-[#4C4C4D]">{each.price}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="lg:flex grid items-center gap-8">
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
        </div>
      </div>

      {/* klothink experience */}
      <div className="layout grid gap-8">
        <div className="grid gap-4">
          <div className="flex items-start gap-2 flex-col-reverse lg:flex-row">
            <h1 className="header-one">the Klothink experience</h1>
            <span className="normal-cap">about us</span>
          </div>
          <span className="description">
            At Klothink, we breathe life into fashion, blending creativity with
            commitment. Our journey is fueled by a dedicating to delivering
            unparalleled style and quality. Join us in redefining fashion and
            embracing a community where every purchase tells a story
          </span>
        </div>
        <div className="p-3 rounded-xl bg-[#f1f1f3] grid gap-4 grid-cols-1 lg:grid-cols-3">
          {about.map((e, index) => (
            <div
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
            </div>
          ))}
        </div>
      </div>

      {/* customer love */}
      <div className="layout grid gap-8">
        <div className="grid lg:flex justify-between gap-12 items-center">
          <div className="grid gap-4">
            <div className="flex items-start gap-2 flex-col-reverse lg:flex-row">
              <h1 className="header-one">customer love.</h1>
              <span className="normal-cap">testimonials</span>
            </div>
            <span className="description">
              At Klothink, our customers are the heartbeat of our brand. Explore
              the heartbeat testimonials shared by those who have experienced
              the magic of Klothink fashion.
            </span>
          </div>
          <button className="yellow-btn w-56">View All Testimonials</button>
        </div>
        <div className="flex items-center gap-2">
          <button className="size-8 grid place-content-center rounded-full bg-white text-black">
            <FaLessThan />
          </button>
          <div className="bg-[#f1f1f3] p-3 rounded-lg grid gap-4 grid-cols-1 lg:grid-cols-3">
            {testimonials.map((each, index) => (
              <div
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
              </div>
            ))}
          </div>
          <button className="size-8 grid place-content-center rounded-full bg-black text-white">
            <FaGreaterThan />
          </button>
        </div>
      </div>

      {/* questions */}
      <div className="layout grid gap-8">
        <div className="grid gap-4">
          <div className="flex flex-col-reverse lg:flex-row items-start gap-1">
            <h1 className="header-one">questions? we have answers</h1>
            <span className="normal-cap">faq</span>
          </div>
          <span className="description">
            Ease into the world of Klothink with clarity. Our FAQs cover a
            spectrum of topics, ensuring you have the information you need for a
            seemless shopping experience.
          </span>
        </div>
        <div className="flex items-center gap-8 py-4 border-y-2 border-[#f1f1f3] text-base lg:text-lg font-medium overflow-x-scroll lg:overflow-hidden">
          <button className="text-black">ALL</button>
          <button className="text-[#656567]">ORDERING</button>
          <button className="text-[#656567]">SHIPPING</button>
          <button className="text-[#656567]">RETURNS</button>
          <button className="text-[#656567]">CUSTOMER SUPPORT</button>
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

      {/* seamless experience */}
      <div className="layout grid gap-8">
        <div className="grid gap-4">
          <div className="flex items-start flex-col-reverse lg:flex-row gap-1">
            <h1 className="header-one">seamless experience.</h1>
            <span className="normal-cap">how it works?</span>
          </div>
          <p className="description">
            At Klothink, we've designed a straightforward shopping experience to
            make fashion accessible. Explore the journey from discovering the
            latest trends to receiving your handpicked styles with ease.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-[#f7f7f8] grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {experience.map((each, index) => (
            <div key={index} className="p-2 rounded-2xl bg-white grid gap-1">
              <h1 className="font-bold text-[#bbbbbd] text-lg md:text-xl lg:text-5xl">
                {each.num}
              </h1>
              <span className="text-base lg:text-lg text-black font-medium">
                {each.head}
              </span>
              <span className="text-[#98989A] text-xs lg:text-base">
                {each.cap}
              </span>
            </div>
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
