import { motion } from 'framer-motion'

const StaggerAnimation = () => {
  const boxVariants = {
    out: {
      y: 600
    },
    in: {
      y: 0,
      transition: {
        duration: 0.6,
        delayChildren: 1.2,
        staggerChildren: 0.5
      }
    }
  }

  const iconVariants = {
    out: {
      x: -600
    },
    in: {
      x: 0,
    }
  }

  return (
    <motion.div 
      style={{
        background: 'white',
        height: '100px',
        width: '100px',
        borderRadius: '50%',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
      }}
      variants={boxVariants} initial="out" animate="in">
      <motion.span variants={iconVariants}>
      🚀
      </motion.span>
      <motion.span variants={iconVariants}>
      ❤️‍🔥
      </motion.span>
    </motion.div>
  )
}

export default StaggerAnimation
