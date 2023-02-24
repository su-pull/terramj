import { motion } from "framer-motion";
import { ReactNode } from "react";

type FramerProps = {
  children: ReactNode;
};

const variants = {
  hidden: { opacity: 0, y: -23 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 0, transition: { duration: 0.09 } },
};
const Framer = ({ children }: FramerProps): JSX.Element => {
  return (
    <motion.div
      className="Tsx_root"
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 2 }}
    >
      {children}
    </motion.div>
  );
};
// transition context--
// 0.14 5~11
// 2    11~5
export default Framer;
