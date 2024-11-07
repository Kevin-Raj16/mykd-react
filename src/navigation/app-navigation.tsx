import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import HomeTwo from "../pages/home-2";
import AboutPage from "../pages/about";
import TournamentPage from "../pages/tournament";
import TournamentDetailsPage from "../pages/tournament-details";
import ShopPage from "../pages/shop";
import ShopDetailsPage from "../pages/shop-details";
import DynamicShopDetailsPage from "../pages/shop-details/dynamic-details";
import ServicesPage from "../pages/services";
import ServiceDetailsPage from "../pages/service-details";
import TeamDetailsPage from "../pages/team-details";
import BlogPage from "../pages/blog";
import BlogDetailsPage from "../pages/blog-details";
import DynamicBlogDetailsPage from "../pages/blog-details/dynamic-details";
import ContactPage from "../pages/contact";
import ScrollToTop from "../components/scroll-to-top";


export default function AppNavigation () {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home-2" element={<HomeTwo />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/tournament" element={<TournamentPage />} />
        <Route path="/tournament-details" element={<TournamentDetailsPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/shop-details" element={<ShopDetailsPage />} />
        <Route path="/shop-details/:id" element={<DynamicShopDetailsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/service-details" element={<ServiceDetailsPage />} />
        <Route path="/team-details" element={<TeamDetailsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog-details" element={<BlogDetailsPage />} />
        <Route path="/blog-details/:id" element={<DynamicBlogDetailsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  )
}