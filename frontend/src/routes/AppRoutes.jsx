import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Collections from "../pages/Collections"
import NewArrivals from "../pages/NewArrivals"
import About from "../pages/About";
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      
      <Route path="/shop" element={<Shop />} />

      <Route path="/collections" element={<Collections />} />

      <Route path="/new" element={<NewArrivals />} />

      <Route path="/about" element={<About />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}