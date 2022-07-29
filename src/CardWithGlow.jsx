import { motion } from 'framer-motion'

const CardWithGlow = () => {
  const cardVariants = {
    hover: {
      scale: 1.05
    },
    initial: {
      scale: 1
    }
  }

  const glowVariants = {
    hover: {
      opacity: 0.8
    },
    initial: {
      scale: 1.05,
      opacity: 0
    }
  }

  return (
    <motion.div
      style={{
        position: 'relative',
        width: '300px',
        height: '120px'
      }}
      initial="initial"
      whileHover="hover"
    >
      <motion.div 
        style={{
          background: 'linear-gradient(90deg, #ffa0ae 0%, #aacaef 75%)',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          filter: 'blur(15px)',
          borderRadius: '16px',
        }}

        variants={glowVariants}
        transition={{
          ease: 'easeInOut',
          delay: 0.15,
        }}
      /> 
      <motion.div
        style={{
          borderRadius: '16px',
          marginBottom: '0px',
          overflow: 'hidden',
          position: 'relative',
          background: 'rgba(255, 255, 255, 0.65)',
          padding: '36px 24px',
          height: '50px',
        }}
        variants={cardVariants}
        transition={{
          ease: 'easeInOut',
          delay: 0.15,
          duration: 0.5
        }}
      >
        <div style={{
          color: '#4a4a4c',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50px'
        }}
        >Hover me ⭐</div>
      </motion.div>
    </motion.div>
  )
}

export default CardWithGlow
