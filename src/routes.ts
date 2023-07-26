import { FC } from "react";
import Football from "./pages/Football";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Animals from "./pages/Animals";
import Film from "./pages/Film";
import SearchPage from "./pages/SearchPage";
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
    component: Football
  },
  {
    key: "nature-route",
    title: "Nature",
    path: "/nature",
    enabled: true,
    component: Product
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
];
