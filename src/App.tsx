import { useEffect } from 'react'
import Timeline from './components/Timeline'
import { timelineData } from './data/dummyData'

function App() {
  return (
    <>
      <h1>React Timeline</h1>
      <Timeline data={timelineData} />
    </>
  )
}

export default App
