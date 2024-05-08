import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root/Root";
import Eroor from "./Root/Error/Error";
import { GlobalStyle } from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import { AppProvider } from "./context/productcontext";
import SingleProduct from "./SingleProduct";
// import Product from "./components/Product";
import { FilterContextProvider } from "./context/filter_context";
import Products from "./Products";
import { CartProvider } from "./context/cart_context";
import Cart from "./Cart";

const theme = {
  colors: {
    heading: "rgb(24 24 29)",
    text: "rgba(29 ,29, 29, .8)",
    white: "#fff",
    black: " #212529",
    helper: "#8490ff",

    bg: "#F6F8FA",
    footer_bg: "#0a1435",
    btn: "rgb(98 84 243)",
    border: "rgba(98, 84, 243, 0.5)",
    hr: "#ffffff",
    gradient:
      "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
    shadow:
      "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
    shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
  },
  media: {
    mobile: "768px",
    tab: "998px",
  },
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Eroor></Eroor>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/products",
        element: <Products></Products>,
      },
    

      {
        path: "/singleproduct/:id",
        element: <SingleProduct></SingleProduct>,
      },
      {
        path:"/cart",
        element:<Cart></Cart> ,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <FilterContextProvider>
      <CartProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <RouterProvider router={router} />
        </ThemeProvider>
      </CartProvider>
      </FilterContextProvider>
    </AppProvider>
  </React.StrictMode>
);
