
import { motion } from 'framer-motion';

const Transition = () => {
    return (
        <motion.div initial={{opacity:0.5}} animate={{opacity:1}} transition={{duration:2, ease: "easeInOut", repeat: Infinity}} className=' py-2 px-4 text-white font-bold bg-green-900'>
            Transition
        </motion.div>
    );
};

export default Transition;