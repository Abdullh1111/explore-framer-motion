import { motion } from "framer-motion";
import ProgressBar from "./ProgressBar";
function App() {
  return (
    <>
      <h1>my first animation project</h1>
      <ProgressBar></ProgressBar>
      <motion.div
        className="w-52 h-52 bg-green-500"
        initial={{ x: 0, y: -100, scale: 0.5 }}
        animate={{ x: 100, y: 50 }}
        transition={{ duration: 2 ,repeat: Infinity}}
      />
      <motion.div
        className="mt-32 ml-32 w-52 h-52 bg-green-500"
        animate={{ scale: [0, 1, 2, 2, 1, 0] , rotate: [0,90,180,270,360], borderRadius: ["0%","0%","50%","50%","0%"]}}
        transition={{ duration: 5,repeat: Infinity}}
      />
      {/* <Isopen></Isopen> */}
    </>
  );
}

export default App;
