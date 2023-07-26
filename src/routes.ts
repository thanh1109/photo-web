import { FC } from "react";
import Home from "./pages/Home";
import Animals from "./pages/Animals";
import Film from "./pages/Film";
import People from "./pages/People";
import Athletics from "./pages/Athletics";
import SearchPage from "./pages/SearchPage";
import Nature from "./pages/Nature";
import Blue from "./pages/Blue";
interface Route {
  key: string;
  title: string;
  path: string;
  enabled: boolean;
  component: FC;
}

export const routes: Route[] = [
  {
    key: "home-route",
    title: "Home",
    path: "/",
    enabled: true,
    component: Home
  },
  {
    key: "search-route",
    title: "Search photos",
    path: "/search",
    enabled: true,
    component: SearchPage
  },
  {
    key: "blue-route",
    title: "Blue",
    path: "/blue",
    enabled: true,
    component: Blue
  },
  {
    key: "nature-route",
    title: "Nature",
    path: "/nature",
    enabled: true,
    component: Nature
  },
  {
    key: "animals-route",
    title: "Animals",
    path: "/animals",
    enabled: true,
    component: Animals
  },
  {
    key: "film-route",
    title: "Film",
    path: "/film",
    enabled: true,
    component: Film
  },
  {
    key: "people-route",
    title: "People",
    path: "/people",
    enabled: true,
    component: People
  },
  {
    key: "athletics-route",
    title: "Athletics",
    path: "/athletics",
    enabled: true,
    component: Athletics
  },
];
