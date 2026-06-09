import { PiChurchBold } from "react-icons/pi";
import { RiNewspaperLine } from "react-icons/ri";
import { GiJeweledChalice } from "react-icons/gi";
import { GrGroup } from "react-icons/gr";
import { MdOutlineHouse } from "react-icons/md";
import { LuVideo } from "react-icons/lu";

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Mass & Sacraments", href: "#mass-sacraments" },
  { name: "Ministries", href: "#ministries" },
  { name: "Community", href: "#community" },
  { name: "Events", href: "#events" },
  { name: "Newsletters", href: "#newsletters" },
  { name: "Hall-Hire", href: "#hall-hire" },
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
