
import { motion } from 'framer-motion';

const Movediv = () => {
    return (
        <motion.div animate={{x:"1000%"} } transition={{duration:4,repeat:Infinity}} className='h-40 w-40 bg-blue-600'>
            
        </motion.div>
    );
};

export default Movediv;