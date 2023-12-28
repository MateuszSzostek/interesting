import INavLink from "./NavLink/types";
import { v4 as uuidv4 } from "uuid";
import { Colors } from "../../../global-styles";

export const generalLinksData: INavLink[] = [
  {
    id: uuidv4(),
    name: "About Us",
    slug: "/about-us",
    hovercolor: "lightGray",
  },
  {
    id: uuidv4(),
    name: "Privacy Policy",
    slug: "/privacy-policy",
    hovercolor: "lightGray",
  },
];

export const navLinksData: INavLink[] = [
  {
    id: uuidv4(),
    name: "All",
    slug: "/",
    hovercolor: Colors._orange02,
  },
  {
    id: uuidv4(),
    name: "Science",
    slug: "/science",
    hovercolor: Colors._blue01,
  },
  {
    id: uuidv4(),
    name: "Funny",
    slug: "/funny",
    hovercolor: Colors._yellow01,
  },
  {
    id: uuidv4(),
    name: "Politics",
    slug: "/politics",
    hovercolor: Colors._red01,
  },
  {
    id: uuidv4(),
    name: "Music",
    slug: "/music",
    hovercolor: Colors._lilac01,
  },
  {
    id: uuidv4(),
    name: "Film",
    slug: "/film",
    hovercolor: Colors._violet01,
  },
  {
    id: uuidv4(),
    name: "Sport",
    slug: "/sport",
    hovercolor: Colors._orange02,
  },
  {
    id: uuidv4(),
    name: "Economy",
    slug: "/economy",
    hovercolor: Colors._sea01,
  },
  {
    id: uuidv4(),
    name: "History",
    slug: "/history",
    hovercolor: Colors._gray05,
  },
  {
    id: uuidv4(),
    name: "Quotes",
    slug: "/quotes",
    hovercolor: Colors._brown01,
  },
];
