import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ROUTES } from "./constant/routes.js";

import Home from "./pages/Home/Home.jsx";
import Story from "./pages/Story/Story.jsx";
import Menu from "./pages/Menu/Menu.jsx";
import Franchise from "./pages/Franchise/Franchise.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Manufacturing from "./pages/Manufacturing/Manufacturing.jsx";
import Career from "./pages/Career/Career.jsx";
import Technology from "./pages/Technology/Technology.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppRouter() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.STORY} element={<Story />} />
        <Route path={ROUTES.MENU} element={<Menu />} />
        <Route path={ROUTES.FRANCHISE} element={<Franchise />} />
        <Route path={ROUTES.CONTACT} element={<Contact />} />
        <Route path={ROUTES.MANUFACTURING} element={<Manufacturing />} />
        <Route path={ROUTES.CAREER} element={<Career />} />
        <Route path={ROUTES.TECHNOLOGY} element={<Technology />} />
      </Routes>
    </>
  );
}

export default AppRouter;
