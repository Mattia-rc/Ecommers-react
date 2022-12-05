import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Category from '../views.jsx/category'
import Item from '../views.jsx/item'
import Carrito from '../views.jsx/carrito'

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/category/:category",
    element: <Category  />,
  },
  {
    path: "/item/:id",
    element: <Item />,
  },

  {
    path: "/carrito/",
    element: <Carrito />

  }
]);