import { useRef } from 'react';
import { motion } from 'framer-motion';

const Draggable = () => {
    const constraintsRef = useRef(null);

    return (
        <div ref={constraintsRef} className="w-screen h-72 border-2 border-green-500">
            <motion.div
                drag
                dragElastic={0}
                dragConstraints={constraintsRef}  
                className="h-36 w-36 rounded-full bg-red-600"
            />
        </div>
    );
};

export default Draggable;
