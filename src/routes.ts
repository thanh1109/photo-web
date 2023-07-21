import {FC} from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";

interface Route {
    key: string,
    title: string,
    path: string,
    enabled: boolean,
    component: FC<{}>
}

export const routes:Array<Route> = [
    {
        key: 'home-route',
        title: 'Home',
        path: '/',
        enabled: true,
        component: Home
    },
    {
        key: 'about-route',
        title: 'Sports',
        path: '/about',
        enabled: true,
        component: About
    },
    {
        key: 'product-route',
        title: 'Flowers',
        path: '/product',
        enabled: true,
        component: Product
    }
]
