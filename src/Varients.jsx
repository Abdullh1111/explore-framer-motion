import { motion } from "framer-motion";

const Varients = () => {
    const cards = ["Card 1", "Card 2", "Card 3"];
  
    return (
      <div className="flex gap-5">
        {cards.map((cardTitle, index) => (
          <motion.div
            key={index}
            className="w-52 h-72 bg-blue-300 rounded-lg shadow-lg flex items-center justify-center cursor-pointer"
            variants={{
              idle: { scale: 1, rotate: 0 },
              hover: { scale: 1.1, rotate: 5 },
              click: { scale: 0.9, rotate: 0 },
            }}
            initial="idle"
            whileHover="hover"
            whileTap="click"
          >
            <h3 className="text-xl font-bold text-white">{cardTitle}</h3>
          </motion.div>
        ))}
      </div>
    );
  };
  
  export default Varients;
  