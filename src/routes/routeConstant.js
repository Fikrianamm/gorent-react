import { createBrowserRouter } from "react-router-dom";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import CheckoutPage from "../pages/CheckoutPage";
import AboutPage from "../pages/AboutPage";
import ProfilePage from "../pages/ProfilePage";

export const ERROR_PAGE = "*";
export const HOME_PAGE = "/";
export const ABOUT_PAGE = "/about";
export const SIGNIN_PAGE = "/signin";
export const SIGNUP_PAGE = "/signup";
export const PROFILE_PAGE = "/profile";
export const PRODUCT_PAGE = "/product/:productId";
export const CHECKOUT_PAGE = "/product/:productId/checkout";

export const router = createBrowserRouter([
  {
    path: ERROR_PAGE,
    Component: ErrorPage,
  },
  {
    path: HOME_PAGE,
    Component: HomePage,
  },
  {
    path: SIGNIN_PAGE,
    Component: SignInPage,
  },
  {
    path: SIGNUP_PAGE,
    Component: SignUpPage,
  },
  {
    path: PRODUCT_PAGE,
    Component: ProductPage,
  },
  {
    path: CHECKOUT_PAGE,
    Component: CheckoutPage,
  },
  {
    path: ABOUT_PAGE,
    Component: AboutPage,
  },
  {
    path: PROFILE_PAGE,
    Component: ProfilePage,
  }
]);
