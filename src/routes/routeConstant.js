import { createBrowserRouter } from "react-router-dom";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";

export const ERROR_PAGE = "*";
export const HOME_PAGE = "/";
export const SIGNIN_PAGE = "/signin";
export const SIGNUP_PAGE = "/signup";

export const router = createBrowserRouter([
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
    path: ERROR_PAGE,
    Component: ErrorPage,
  },
]);
