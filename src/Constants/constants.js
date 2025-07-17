import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export const specs = [
    {id: 1, content: "Anti-acne & Pimples"},
    {id: 2, content: "Improves blood circulation"},
    {id: 3, content: "Removes dark spots"},
    {id: 4, content: "Soften the skin"},
    {id: 5, content: "Fights Sunburns"},
];

export const listings = [
    {id: 1, content: "Flipkart", photo: "./flipkart.png", url: "https://flipkart.com"},
    {id: 2, content: "Amazon", photo: "./amazon.png", url: "https://amazon.com"},
    {id: 3, content: "Meesho", photo: "./meesho.png", url: "https://meesho.com"},
];


export const customerReviews = [
  {
    id: 1,
    name: "Anjali Sharma",
    review: "Absolutely love this multani mitti! My skin feels so fresh and clean after every use. 100% organic and gentle on my sensitive skin."
  },
  {
    id: 2,
    name: "Ritika Verma",
    review: "The best face pack I’ve ever used! It reduced my acne and gave my skin a natural glow within a week. Totally recommend it!"
  },
  {
    id: 3,
    name: "Priya Desai",
    review: "This organic face pack has become part of my weekly skincare routine. It tightens my pores and removes excess oil beautifully."
  },
  {
    id: 4,
    name: "Sneha Kapoor",
    review: "No chemicals, just pure multani mitti. I mix it with rose water and it works like magic. My mom also loves it!"
  },
  {
    id: 5,
    name: "Megha Rathi",
    review: "I’ve tried many products but this one stands out. The texture is smooth and smells earthy—just how natural skincare should be."
  },
];

export const socials = [
  {id: 1, title: "Facebook", logo: FaFacebookSquare, href: "https://facebook.com"},
  {id: 2, title: "Instagram", logo: FaInstagram, href: "https://instagram.com"},
  {id: 3, title: "Youtube", logo: FaYoutube, href: "https://youtube.com"},
]

//faqs for accordion menu
export const faqs = [
  { id: 1, question: "What is your return policy?", answer: "We offer a 30-day return policy." },
  { id: 2, question: "Do you ship internationally?", answer: "Yes, we ship to over 50 countries." },
  { id: 3, question: "How can I track my order?", answer: "Tracking details are emailed after shipping." },
];