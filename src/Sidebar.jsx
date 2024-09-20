import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Variants to control the sliding animation
  const sidebarVariants = {
    hidden: { x: "-100%" }, // Hidden (off-screen)
    visible: { x: 0 }, // Visible (on-screen)
    exit: { x: "-100%" }, // Exit animation (slide out)
  };

  return (
    <div>
      <button
        className="bg-gray-500 py-2 px-4 rounded-3xl text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        Toggle Sidebar
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={sidebarVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.5 }} // Smooth sliding transition
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              height: "100%",
              width: "300px",
              backgroundColor: "gray",
              padding: "20px",
            }}
          >
            <h2>Sidebar</h2>
            <button onClick={() => setIsOpen(false)}>Close</button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Sidebar;
