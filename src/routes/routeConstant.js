import { createBrowserRouter } from "react-router-dom";
import SignInPage from "../pages/auth/SignInPage";
import SignUpPage from "../pages/auth/SignUpPage";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import CheckoutPage from "../pages/CheckoutPage";
import AboutPage from "../pages/AboutPage";
import ProfilePage from "../pages/profile/ProfilePage";
import EditProfilePage from "../pages/profile/EditProfilePage";
import ChangePassProfilePage from "../pages/profile/ChangePassProfilePage";
import VerificationAccountPage from "../pages/profile/VerificationAccountPage";
import OrderPage from "../pages/OrderPage";
import SearchPage from "../pages/SearchPage";
import DashboardPage from "../pages/admin/DashboardPage";
import OrderAdminPage from "../pages/admin/OrderAdminPage";
import ProductAdminPage from "../pages/admin/ProductAdminPage";
import ProductAddPage from "../pages/admin/ProductAddPage";
import ProductEditPage from "../pages/admin/ProductEditPage";

// Error
export const ERROR_PAGE = "*";

// Homepage
export const HOME_PAGE = "/";

// Checkout
export const CHECKOUT_PAGE = "/product/:productId/checkout";

// Product
export const PRODUCT_PAGE = "/product/:productId";

// About
export const ABOUT_PAGE = "/about";

// Auth
export const SIGNIN_PAGE = "/signin";
export const SIGNUP_PAGE = "/signup";

// Profile
export const PROFILE_PAGE = "/profile";
export const EDITPROFILE_PAGE = "/profile/edit";
export const CHANGEPASS_PAGE = "/profile/change-pass";
export const VERIFICATION_PAGE = "/profile/verification";

// Order
export const ORDER_PAGE = "/order";

// Search
export const SEARCH_PAGE = "/search";

// admin
export const DASHBOARD_PAGE = "/admin/dashboard";
export const ORDERADMIN_PAGE = "/admin/order";
export const PRODUCTADMIN_PAGE = "/admin/product";
export const PRODUCTADD_PAGE = "/admin/product/add";
export const PRODUCTEDIT_PAGE = "/admin/product/:productId/edit";
export const CATEGORYADMIN_PAGE = "/admin/category";

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
  },
  {
    path: EDITPROFILE_PAGE,
    Component: EditProfilePage,
  },
  {
    path: CHANGEPASS_PAGE,
    Component: ChangePassProfilePage,
  },
  {
    path: VERIFICATION_PAGE,
    Component: VerificationAccountPage,
  },
  {
    path: ORDER_PAGE,
    Component: OrderPage,
  },
  {
    path: SEARCH_PAGE,
    Component: SearchPage,
  },
  {
    path: DASHBOARD_PAGE,
    Component: DashboardPage,
  },
  {
    path: ORDERADMIN_PAGE,
    Component: OrderAdminPage,
  },
  {
    path: PRODUCTADMIN_PAGE,
    Component: ProductAdminPage,
  },
  {
    path: PRODUCTADD_PAGE,
    Component: ProductAddPage,
  },
  {
    path: PRODUCTEDIT_PAGE,
    Component: ProductEditPage,
  },
  {
    path: CATEGORYADMIN_PAGE,
    Component: DashboardPage,
  },
]);
