import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useState } from 'react'

const SwitchWrapper1 = styled(motion.div)`
  width: 50px;
  height: 30px;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
`

const SwitchHandle1 = styled(motion.div)`
  background-color: #fff;
  width: 30px;
  height: 30px;
  border-radius: 50%;
`

const Switch1 = () => {
  const [active, setActive] = useState(false)
  const switchVariants = {
    initial: {
      background: '#ac1'
    },
    animate: (active) => {
      return {
        backgroundColor: active ? '#f90566' : '#ac1',
        justifyContent: active ? 'flex-end' : 'flex-start'
      }
    }
  }

  return (
    <SwitchWrapper1
      initial="initial"
      animate="animate"
      onClick={() => setActive(prev => !prev)}
      variants={switchVariants}
      custom={active}
    >
      <SwitchHandle1 />
    </SwitchWrapper1>
  )
}

const SwitchWrapper2 = styled.div`
  width: 50px;
  height: 30px;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  background: #ac1;
  justify-content: flex-start;

  &[data-isactive="true"] {
    background: #f90566;
    justify-content: flex-end;
  }

`

const SwitchHandle2 = styled(motion.div)`
  background-color: #fff;
  width: 30px;
  height: 30px;
  border-radius: 50%;
`
// not work below
// const SwitchHandle2 = styled(motion.div, {
//   backgroundColor: '#fff',
//   width: '30px',
//   height: '30px',
//   borderRadius: '50%'
// })
const Switch2 = () => {
  const [active, setActive] = useState(false)

  return (
    <SwitchWrapper2
      data-isactive={active}
      onClick={() => setActive(prev => !prev)}
    >
      <SwitchHandle2 layout />
    </SwitchWrapper2>
  )
}

const LayoutAnimation = () => (
  <div style={{ maxWidth: '300px', color: 'white' }}>
    switch 1
    <br />
    <Switch1 />
    <br />
    switch 2
    <br />
    <Switch2 />
  </div>
)

export default LayoutAnimation
