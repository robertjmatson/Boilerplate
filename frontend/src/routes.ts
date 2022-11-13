import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/home/Home"
import { About } from "./pages/About"
import { NotFound } from "./pages/NotFound"
import { Contact } from "./pages/Contact"
  


// other
import {FC} from "react";

// interface
interface Route {
    key: string,
    title: string,
    path: string,
    enabled: boolean,
    component: FC<{}>
}

export const routes: Array<Route> = [
    {
        key: 'home-route',
        title: 'Home',
        path: '/',
        enabled: true,
        component: Home
    },
    {
        key: 'about-route',
        title: 'About',
        path: '/about',
        enabled: true,
        component: About
    },
    {
        key: 'Contact-route',
        title: 'Contact',
        path: '/Contact',
        enabled: true,
        component: Contact
    },
    {
      key: '404-route',
      title: 'NotFound',
      path: '*',
      enabled: true,
      component: NotFound
  },
]