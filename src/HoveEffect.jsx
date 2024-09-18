
import { motion } from 'framer-motion';

const HoverEffect = () => {
    return (
        <motion.div whileHover={{scale:1.5,backgroundColor: 'green'}} transition={{duration:4}} className='mt-10 h-40 w-40 bg-red-600'>
            
        </motion.div>
    );
};

export default HoverEffect;