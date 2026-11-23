import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home.jsx";
import Story from "./pages/Story/Story.jsx";
import Menu from "./pages/Menu/Menu.jsx";


function AppRouter() {
    return (

        <>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/story" element={<Story />} />
            <Route path="/menu" element={<Menu />} />

            {/* <Route path="/story" element={<Story />} />
            <Route path="/franchise" element={<Franchise />} />
            <Route path="/career" element={<Career />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/Refund-policy" element={<Refund />} />
            <Route path="/terms-and-conditions" element={<Terms />} /> */}
        </Routes>
        </>
       
    );
}

export default AppRouter;