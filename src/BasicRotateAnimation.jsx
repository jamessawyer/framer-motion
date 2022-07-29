import React from 'react'
import { motion } from 'framer-motion'

export default function BasicRotateAnimation() {
  return (
    <motion.div 
      style={{width: '200px', height: '200px', backgroundColor: 'pink'}}
      initial={{
        x: 0,
        rotate: 45
      }}
      animate={{
        x: 50,
        rotate: 270
      }}
      transition={{
        ease: 'easeIn',
        duration: 0.7
      }}
    >
      Example
    </motion.div>
  )
}
