import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'
import { useState } from 'react'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 100%;
`

const List = styled.ul`
  display: flex;
  gap: 12px;
  padding: 0
`

const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  color: #98a0b3;
  user-select: none;
`

const ArrowIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    role="img"
    {...props}
  >
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
)
const COLORS = ['#0E52F1', '#FC0380', '#ffb300']


const ArrowMove = () => {
  const [selected, setSelected] = useState(1)
  const [duration, setDuration] = useState(0.5)

  return (
    <Container>
      <List>
        {[1, 2, 3].map(item => (
          <Item
            key={item}
            onClick={() => setSelected(item)}
            onkeyDown={(event) => event.key === 'enter' ? setSelected(item): null}
            tabIndex="0"
          >
            <div>Item {item}</div>
            {item === selected ? 
            // 使用相同layoutId
            // 告诉framer motion 这些组件是有关联的，需要从一个实例过度到另一个实例
              <motion.div 
                layoutId="arrow"
                transition={{
                  layout: {
                    duration 
                  }
                }}
              >
                <ArrowIcon 
                  style={{
                    height: '24px',
                    color: '#5686f5',
                    transform: 'rotate(-90deg)'
                  }}
                  stroke={COLORS[item - 1]}
                />
              </motion.div>
              : null
            }

          </Item>
        ))}
      </List>
      <p>动画时间：<span style={{
          color: '#fff', background: '#0e52f1', border: '1px solid #FC0380',
          padding: '2px 8px', borderRadius: '4px', fontSize: '12px'
          }}>{duration}</span> s</p>
      <div style={{width: '240px'}}>
        <input
          style={{width: '100%'}}
          type="range" 
          value={duration} 
          min={0.2} 
          max={2} 
          step={0.1} 
          onChange={e => setDuration(e.target.value)}
        />
      </div>
    </Container>
  )
}

export default ArrowMove
