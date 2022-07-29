import { motion } from 'framer-motion'

const DelayAndRepetition = () => {
  const blockVariants = {
    initial: {
      y: -50,
    },
    target: {
      y: 100
    }
  }

  return (
    <motion.div 
      style={{
        background: 'gold',
        height: '100px',
        width: '100px',
        borderRadius: '50%'
      }}
      variants={blockVariants}
      initial="initial"
      animate="target"
      transition={{
        ease: 'easeInOut',
        duration: 0.7,
        repeat: 3,
        delay: 1,
        repeatType: 'mirror',
        repeatDelay: 0
      }}
    />
  )
}

export default DelayAndRepetition
