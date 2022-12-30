import {
  BsCollectionFill,
  BsFillBookmarkFill,
  BsFillBarChartFill,
} from "react-icons/bs";
import { GiPieChart } from "react-icons/gi";
import { FaPlug, FaCog } from "react-icons/fa";
import { RiDashboardFill, RiHistoryFill } from "react-icons/ri";

export const menus = [
  { id: 1, name: "Dashboard", url: "/", icon: <RiDashboardFill /> },
  {
    id: 2,
    name: "Category",
    icon: <BsCollectionFill />,
    children: [
      { id: 2, name: "Category" },
      { id: 2, name: "CategoryDetail", url: "/category" },
      { id: 2, name: "JavaScript", url: "/users" },
      { id: 2, name: "PHP & MySQL", url: "/" },
    ],
  },
  {
    id: 3,
    name: "Posts",
    icon: <BsFillBookmarkFill />,
    children: [
      { id: 2, name: "Posts" },
      { id: 2, name: "Web Design", url: "/" },
      { id: 2, name: "Login Form", url: "/" },
      { id: 2, name: "Card Design", url: "/" },
    ],
  },
  { id: 4, name: "Analytics", url: "/analytics", icon: <GiPieChart /> },
  { id: 5, name: "Chart", url: "/chart", icon: <BsFillBarChartFill /> },
  {
    id: 6,
    name: "Plugins",
    icon: <FaPlug />,
    children: [
      { id: 2, name: "Plugins", url: "/plugins" },
      { id: 2, name: "UI Face", url: "/ui" },
      { id: 2, name: "Pigments", url: "/pigments" },
      { id: 2, name: "Box Icons", url: "/box" },
    ],
  },
  { id: 8, name: "History", url: "/history", icon: <RiHistoryFill /> },
  { id: 9, name: "Setting", url: "/setting", icon: <FaCog /> },
];
