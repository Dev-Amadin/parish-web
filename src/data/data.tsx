import { PiChurchBold } from "react-icons/pi";
import { RiNewspaperLine } from "react-icons/ri";
import { GiJeweledChalice } from "react-icons/gi";
import { GrGroup } from "react-icons/gr";
import { MdOutlineHouse } from "react-icons/md";
import { LuVideo } from "react-icons/lu";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Quick Actions", href: "#quick-actions" },
  { name: "Mass & Events", href: "#masstimes-and-events" },
  { name: "Community", href: "#community" },
  { name: "Newsletters", href: "#newsletter-and-support" },
  { name: "Contact", href: "#contact" },
];

export const quickActions = [
  {
    icon: <PiChurchBold />,
    title: "Mass Times",
    description: "Find weekday, weekend and Holy Day Mass times.",
  },
  {
    icon: <RiNewspaperLine />,
    title: "Newsletter",
    description: "Read the latest updates and announcements.",
  },
  {
    icon: <GiJeweledChalice />,
    title: "Sacraments",
    description: "Inform on Baptism, Confirmation, Marriage and more.",
  },
  {
    icon: <GrGroup />,
    title: "Ministries",
    description: "Get involved in our ministries and parish groups.",
  },
  {
    icon: <MdOutlineHouse />,
    title: "Hall Hire",
    description: "Book our parish hall for your events and gatherings.",
  },
  {
    icon: <LuVideo />,
    title: "Livestream",
    description: "Join us online for Mass and special celebrations.",
  },
];

export const welcomeMessage = {
  title: "Holy Ghost Parish, Luton",
  description: [
    "We are a vibrant, multicultural Catholic community, united in our faith and rooted in love of Christ.Everyone is welcome here.",
    "Our parish is part of the Diocese of Northampton and serves the people of Luton through worship, community and service.",
  ],
};

export const massSacramentTimes = [
  { day: "Saturday (Vigil)", time: "6:00 PM" },
  { day: "Sunday", time: "8:30am, 10:00am, 11:30am" },
  { day: "Weekdays", time: "Mon - Sat 9:30am" },
  { day: "Holy Days", time: "9:30am, 7:00pm," },
  { day: "Confession", time: "Friday 8:00mm - 8:20pm, 0r by appointment" },
];

export const upcomingEvents = [
  {
    title: "Parish Community Lunch",
    date: "Sunday 19 May 2026",
    time: "After 11:30am Mass",
    venue: "Parish Hall",
    month: "MAY",
    day: "19",
  },
  {
    title: "Youth Group Gathering",
    date: "Sunday 26 May 2026",
    time: "4:00pm - 6:00pm",
    venue: "Parish Centre",
    month: "MAY",
    day: "26",
  },
  {
    title: "Corpus Christi Procession",
    date: "Sunday 7 June 2026",
    time: "After 11:30am Mass",
    venue: "Church",
    month: "JUN",
    day: "02",
  },
];

export const communityData = [
  {
    image: "src/assets/community1.jpg",
    title: "Polish Community",
    description:
      "Serving the Polish Catholic community with Mass and pastoral care.",
  },
  {
    image: "src/assets/community2.jpg",
    title: "Syro Malabar Community",
    description: "Growing together in faith and tradition.",
  },
  {
    image: "src/assets/community3.jpg",
    title: "Syro Malankara Community",
    description: "United in the love of Christ and our heritage.",
  },
  {
    image: "src/assets/community4.jpg",
    title: "Filipino Community",
    description: "Building faith, friendship and service together.",
  },
];

export const contactLinks = [
  {
    icon: <IoLocationSharp />,
    content: "2 Crawley Green Road, Luton. LU2 9BD",
  },
  {
    icon: <FaPhoneAlt />,
    content: "01582 661 443",
  },
  {
    icon: <FaEnvelope />,
    content: "parishoffice@holyghostparish.co.uk",
  },
  {
    icon: <IoLocationSharp />,
    content: "Get Directions",
  },
];

export const quickLinks = [
  "Mass Times",
  "Sacraments",
  "Ministries",
  "Events",
  "Newsletter",
  "Hall Hire",
];

export const usefulLinks = [
  "Diocese of Northampton",
  "Catholic Church in England & Wales",
  "Safeguarding",
  "Privacy Policy",
  "Accessibilty",
];
