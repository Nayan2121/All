import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import ClickOn from './Events/Clickon1'
import ClickOn2 from './Events/Clickon2'
import ClickOn3 from './Events/Clickon3'
import ClickOn4 from './Events/Clickon4'
import ClickOn5 from './Events/Clickon5'
import ClickOn6 from './Events/Clickon6'
import ClickonTask from './Events/Task1'
import App1 from './Events/Task1'
import List from './Events/Task1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <ClickOn/> */}
      {/* <ClickOn2/> */}
      {/* <ClickOn3/> */}
      {/* <ClickOn4/> */}
      {/* <ClickOn5/> */}
      {/* <ClickOn6/> */}
      {/* <ClickonTask/> */}
      {/* <App1/> */}
      <List name="aaaaa" age="1.5"/>
      <List name="bbbbb" age="0.5"/>
    </>
  )
}

export default App
