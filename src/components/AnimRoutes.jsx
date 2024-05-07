// import pages 
import About from "../pages/About";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import { AnimatePresence } from "framer-motion";


// import routes route & useLocation hook
import { Routes, Route, useLocation } from "react-router-dom";
import Portfolio from "../pages/Portfolio";

const AnimRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence initial={true} mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>

  )
}

export default AnimRoutes