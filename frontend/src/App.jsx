import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Info from "./components/Info";
import Model from "./components/Model";

const pageAnim = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

function AppController() {
  const [active, setActive] = useState("Home");

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar active={active} setActive={setActive} />

      <div className="p-8 max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          {active === "Home" && (
            <motion.div key="home" {...pageAnim}>
              <Home />
            </motion.div>
          )}

          {active === "Info" && (
            <motion.div key="info" {...pageAnim}>
              <Info />
            </motion.div>
          )}

          {active === "Model" && (
            <motion.div key="model" {...pageAnim}>
              <Model />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default AppController;
