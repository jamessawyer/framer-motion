import { motion, useMotionValue, useTransform } from 'framer-motion'

const MotionValue = () => {
  const blockVariants = {
    initial: {
      rotate: 0
    },
    target: {
      rotate: 360
    }
  }
  
  const rotate = useMotionValue(0)

  const scale = useTransform(rotate, [0, 270], [0, 1])

  return (
    <motion.div 
      style={{
        background: 'linear-gradient(90deg, #ffa0ae 0%, #aacaef 75%)',
        height: '100px',
        width: '100px',
        borderRadius: '10px',
        rotate,
        scale
      }}
      variants={blockVariants}
      initial="initial"
      animate="target"
      transition={{
        ease: 'easeInOut',
        duration: 4
      }}
    />
  )
}

export default MotionValue
