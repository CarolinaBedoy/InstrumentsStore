import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Cuerda from './categories/Cuerda/Categories'
import Percusion from './categories/Percusion/Percusion'
import Viento from './categories/Viento/Viento'
import Guitarra from './categories/Cuerda/Guitarra/Products'
import Piano from './categories/Cuerda/Piano/Products'
import Violin from './categories/Cuerda/Violin/Products'
import GuitarraE from './categories/Cuerda/GuitarraE/Products'
import Banjo from './categories/Cuerda/Banjo/Products'
import Arpa from './categories/Cuerda/Arpa/Products'
import Tambor from './categories/Percusion/Tambor/Products'
import Marimba from './categories/Percusion/Marimba/Products'
import Bateria from './categories/Percusion/Bateria/Products'
import Maraca from './categories/Percusion/Maraca/Products'
import Trompeta from './categories/Viento/Trompeta/Products'
import Trombon from './categories/Viento/Trombon/Products'
import Acordeon from './categories/Viento/Acordeon/Products'
import Saxofon from './categories/Viento/Saxofon/Products'
import Clarinete from './categories/Viento/Clarinete/Products'
import Home from './components/Home'
import User from './components/User'
import Cart from './components/Cart'
import Footer from './components/Footer'

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>HOME</h1>
  },
  {
    path: "/home",
    element: <Home/>
  },
  {
    path: "/user",
    element: <User/>
  },
  {
    path: "/cart",
    element: <Cart/>
  },
  {
    path: "/footer",
    element: <Footer/>
  },
  {
    path: "/cuerda",
    element: <Cuerda/>
  },
  {
    path: "/percusion",
    element: <Percusion/>
  },
  {
    path: "/viento",
    element: <Viento/>
  },
  {
    path: "/guitarra",
    element: <Guitarra/>
  },
  {
    path: "/piano",
    element: <Piano/>
  },
  {
    path: "/violin",
    element: <Violin/>
  },
  {
    path: "/gelectrica",
    element: <GuitarraE/>
  },
  {
    path: "/banjo",
    element: <Banjo/>
  },
  {
    path: "/arpa",
    element: <Arpa/>
  },
  {
    path: "/tambor",
    element: <Tambor/>
  },
  {
    path: "/marimba",
    element: <Marimba/>
  },
  {
    path: "/bateria",
    element: <Bateria/>
  },
  {
    path: "/maraca",
    element: <Maraca/>
  },
  {
    path: "/trompeta",
    element: <Trompeta/>
  },
  {
    path: "/trombon",
    element: <Trombon/>
  },
  {
    path: "/acordeon",
    element: <Acordeon/>
  },
  {
    path: "/saxofon",
    element: <Saxofon/>
  },
  {
    path: "/clarinete",
    element: <Clarinete/>
  },
 
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<RouterProvider router={router}/> 
  </React.StrictMode>
);

