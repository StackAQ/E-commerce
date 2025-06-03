interface Four {
  head: string;
  cap: string;
}

interface Products {
  id: string;
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

export const theFour: Four[] = [
  { head: "Over 1000+", cap: "Trendsetting Styles" },
  { head: "99%", cap: "Customer Satisfaction Rate" },
  { head: "24/7", cap: "Shopping Convenience" },
  { head: "30-Day", cap: "Hassle-Free Returns" },
];

export const product: Products[] = [
  {
    id: "01",
    image: "/crazy-blue-jean.png",
    name: "Classic Denim Jeans",
    price: "$49.99",
  },
  {
    id: "02",
    image: "/green-hoodie.png",
    name: "Cozy Comfort Hoodie",
    price: "$39.99",
  },
  {
    id: "03",
    image: "/red-shirt.png",
    name: "Classic Polo Shirt",
    price: "$29.99",
  },
  {
    id: "04",
    image: "/normal-blue-jean.png",
    name: "Chino Pants",
    price: "$44.99",
  },
];

export const about: Abouts[] = [
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

export const testimonials: Abouts[] = [
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

export const questionOne: Questions[] = [
  { text: "Can I modify my order after placing it?" },
  { text: "How can I initiate a return?" },
  { text: "How can I unsubscribe from the newsletter?" },
  { text: "Do you offer exchanges for products?" },
];

export const questionTwo: Questions[] = [
  { text: "What payment methods do you accept?" },
  { text: "How can I track my order?" },
  { text: "What is your shipping policy?" },
];

export const questionThree: Questions[] = [
  { text: "Are there any additional fees for returns?" },
  { text: "How do I create an account on Klothink?" },
  { text: "Can I change my account information?" },
  { text: "Are my personal details secure on Klothink?" },
];

export const experience: Experience[] = [
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