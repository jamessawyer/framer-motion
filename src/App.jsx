import styled from 'styled-components'
import BasicRotateAnimation from './BasicRotateAnimation'
import BasicAnimation from './BasicAnimation'
import AnimatedButton from './AnimatedButton'
import MotionValue from './MotionValue'
import CopyToClipboardButton from './CopyToClipboardButton'
import DelayAndRepetition from './DelayAndRepetition'
import StaggerAnimation from './StaggerAnimation'
import StackedIcons from './StackedIcons'
import CardWithGlow from './CardWithGlow'
import LayoutAnimation from './LayoutAnimation'
import ArrowMove from './LayoutAnimations/ArrowMove'

const Container = styled.div`
  text-align: center;
  min-height: 100vh;
  margin: 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 20px;
  color: #fff;
  align-items: center;
  justify-items: center;
  border: 1px solid #66f666;
`

const Item = styled.div`
  width: 100%;
  height: 100%;
  background-color: #32272b;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const components = [
  {
    title: 'BasicRotateAnimation',
    comp: <BasicRotateAnimation />
  },
  {
    title: 'BasicAnimation',
    comp: <BasicAnimation />
  },
  {
    title: 'AnimatedButton',
    comp: <AnimatedButton />
  },
  {
    title: 'MotionValue',
    comp: <MotionValue />
  },
  {
    title: 'CopyToClipboardButton',
    comp: <CopyToClipboardButton />
  },
  {
    title: 'DelayAndRepetition',
    comp: <DelayAndRepetition />
  },
  {
    title: 'StaggerAnimation',
    comp: <StaggerAnimation />
  },
  {
    title: 'StackedIcons',
    comp: <StackedIcons />
  },
  {
    title: 'CardWithGlow',
    comp: <CardWithGlow />
  },
  {
    title: 'LayoutAnimation',
    comp: <LayoutAnimation />
  },
  {
    title: 'ArrowMove',
    comp: <ArrowMove />
  }
]

function App() {
  return (
    <Container>
      {components.map(({ title, comp }) => (
        <Item key={title}>
          <h3>{title}</h3>
          {comp}
        </Item>
      ))}
    </Container>
  )
}

export default App
