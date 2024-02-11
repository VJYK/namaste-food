import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Error from "./components/Error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./stores/appStore";

/* Applayout Component */

const AppLayout = () => {
  const [userName, setUserName] = useState();
  useEffect(() => {
    const data = {
      name: "Vijay",
    };
    setUserName(data.name);
  }, []);
  
  return (
    <>
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser :userName, setUserName }}>
        <Header />
        <Outlet />
      </UserContext.Provider>
    </Provider>
    </>
  );
};

const Grocerry = lazy(() => import("./components/Grocessary"));
const About = lazy(() => import("./components/About"));
const Body = lazy(() => import("./components/Body"));
const ContactUs = lazy(() => import("./components/ContactUS"));
const RestaurentMenu = lazy(() => import("./components/RestaurentMenu"));
const Cart = lazy(()=>import('./components/Cart'));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback="loading...">
            <Body />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback="loading">
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback="Loading...">
            <ContactUs />
          </Suspense>
        ),
      },
      {
        path: "/grocessary",
        element: (
          <Suspense fallback="loading....">
            <Grocerry />
          </Suspense>
        ),
      },
      {
        path: "/restaurent/:resId",
        element: (
          <Suspense fallback="loading...">
            <RestaurentMenu />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback="loading...">
            <Cart />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
