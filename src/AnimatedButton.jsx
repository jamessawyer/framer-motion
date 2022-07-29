import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useState } from 'react'
import styled from 'styled-components'

const Button = styled(motion.button)`
  background: linear-gradient(90deg, #ffa0ae 0%, #aacaef 75%);
  color: black;
  border: none;
  height: 50px;
  width: 200px;
  border-radius: 10px;
  outline: none;
  box-shadow: 6px 4px 12px -6px rgba(0, 24, 40, 0.25);
  font-size: 14px;
`

const AnimatedButton = () => {
  const [clicked, setClicked] = useState(false)

  useEffect(() => {
    if (clicked) {
      setTimeout(() => {
        setClicked(false)
      }, 3000)
    }
  }, [clicked])

  const duration = 0.6
  const buttonVariants = {
    hover: {
      rotate: 360,
    },
    pressed: {
      scale: 0.95
    },
    clicked: {
      scale: 1
    },
    notClicked: {
      scale: 1
    },
  }

  return (
    <Button
      style={{ cursor: clicked ? 'default' : 'pointer'}}
      onClick={() => setClicked(true)}
      variants={buttonVariants}
      animate={clicked ? 'clicked' : 'notClicked'}
      whileHover="hover"
      whileTap="pressed"
      transition={{ duration }}
    >
      {clicked ? 'Clicked' : 'Click me'}
    </Button>
  )
}

export default AnimatedButton
