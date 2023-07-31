// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    if (window.location.pathname === "/") {
      document.title =
        "Maxbizz Consulting – Financial & Consulting Demo WordPress Theme";
    } else if (window.location.pathname === "/about") {
      document.title = "About Us-Maxbizz Consulting";
    } else if (window.location.pathname === "/contact") {
      document.title = "Contact Us-Maxbizz Consulting";
    }
  }, []);
  const Layout = () => {
    return (
      <div className="main">
        <Header />
        <Outlet />
        <Footer />
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
