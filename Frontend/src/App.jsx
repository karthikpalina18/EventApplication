import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
import Home from "./home/Home";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import Contact from "./components/Contact";
import Checkout from "./components/Checkout";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const [authUser] = useAuth();
  const location = useLocation();

  return (
    <div className="dark:bg-slate-900 dark:text-white transition-colors duration-300">
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/course" element={authUser ? <Courses /> : <Navigate to="/signup" />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/contact" element={<Contact />}/>
            <Route path="/checkout/:id" element={<Checkout />} /> {/* Dynamic route */}
          </Routes>
        </motion.div>
      </AnimatePresence>
      <Toaster />
    </div>
  );
}

export default App;
