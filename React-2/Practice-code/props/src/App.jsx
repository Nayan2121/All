import { useState } from 'react'
import './App.css'
import Propes2 from './card4/card4'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div className='flex flex-wrap bg-slate-300 sm:h-screen md:h-screen  h-screen w-full justify-center  items-center sm:w-full  sm:flex-wrap md:flex md:w-full md:flex-wrap xl:flex xl:w-full'>
        <Propes2 username="PanCake"
          btnTaxt="Click me"
          img="https://images.pexels.com/photos/15564188/pexels-photo-15564188/free-photo-of-pancakes-with-berries-and-marple-syrup.jpeg?auto=compress&cs=tinysrgb&w=1600" />


        <Propes2 username="Pizza"
          img="https://images.pexels.com/photos/604969/pexels-photo-604969.jpeg?auto=compress&cs=tinysrgb&w=1600" />


        <Propes2 username="Burger"
          btnTaxt="Available"
          img="https://images.pexels.com/photos/1025804/pexels-photo-1025804.jpeg?auto=compress&cs=tinysrgb&w=1600" />
        
        <Propes2 username="Pasta"

          img="https://images.pexels.com/photos/5419336/pexels-photo-5419336.jpeg?auto=compress&cs=tinysrgb&w=1600" />

       
      </div>
    </>
  )
}

export default App
