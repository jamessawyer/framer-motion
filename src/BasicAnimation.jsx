import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

const Container = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
`

const Box = styled(motion.div)`
  height: 100px;
  width: 100px;
  border-radius: 10px;
  background: linear-gradient(90deg, #ffa0ae 0%, #aacaef 75%);
  margin-bottom: 50px;
`


export default function BasicAnimation() {
  return (
    <Container>
      <div>
        <p>Example 1</p>
        <Box 
          initial={{
            x: -100
          }}
          animate={{
            x: 100
          }}
          transition={{
            type: 'tween',
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'reverse',
            repeatDelay: 1,
            duration: 2
          }}
        />
      </div>
      <div>
        <p>Example 2</p>
        <Box 
          initial={{
            rotate: 0
          }}
          animate={{
            rotate: 180
          }}
          transition={{
            type: 'tween',
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'reverse',
            repeatDelay: 1,
            duration: 2
          }}
        />
      </div>

    </Container>
  )
}
