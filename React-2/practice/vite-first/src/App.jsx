import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import Navbar from './component/Navbar'
// import Nav from './component2/nav'

import { Render } from './rendering/rendering'
import { RenderItem } from './rendering/render1'
import { RenderItem1 } from './rendering/render2'
import { RenderItem2 } from './rendering/render3'
import { RenderItem3 } from './rendering/render4'
import { RenderItem4 } from './rendering/render5'
import { RenderItem5 } from './rendering/render6'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <Navbar /> */}
        {/* <Nav /> */}
        <Render/>
        <RenderItem/>
        <RenderItem1/>
        <RenderItem2/>
        <RenderItem3/>
        <RenderItem4/>
        <RenderItem5/>
      </div>

    </>
  )
}

export default App
