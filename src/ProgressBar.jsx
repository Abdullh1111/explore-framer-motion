
import { motion } from 'framer-motion';

const ProgressBar = () => {
    return (
        <div className="w-screen border-2 border-black h-3 rounded-xl">
            <motion.div initial={{width:'0%'}} animate={{width:'100%'}} transition={{duration:5, repeat: Infinity}} className=" bg-blue-600 h-2 rounded-xl"></motion.div>
        </div>
    );
};

export default ProgressBar;