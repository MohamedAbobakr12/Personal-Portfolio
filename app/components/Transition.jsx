"use client";
import { motion } from "framer-motion";


const Transition = ({children}) => {
    return (
        <motion.div
            initial={{ y: 0, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', duration: 2 }}
        >
            {children}
        </motion.div>
    )
    }

export default Transition