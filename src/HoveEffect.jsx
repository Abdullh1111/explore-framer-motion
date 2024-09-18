
import { motion } from 'framer-motion';

const HoverEffect = () => {
    return (
        <motion.button whileHover={{scale:1.1,backgroundColor: 'green'}} whileTap={{scale:0.8}} className='rounded-3xl py-2 px-4 text-white font-bold bg-green-900'>
            click me
        </motion.button>
    );
};

export default HoverEffect;