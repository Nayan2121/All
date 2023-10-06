import { useState } from 'react'
import chart from './assets/area-chart-spline.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='mx-40'>
        <div className='flex m-2 max-w-full '>
          <button className='mx-2 px-2'>DASHBOARD</button>
          <button className='bg-blue-600 rounded-sm text-white px-3 mx-2'>USERS</button>
          <button className=' mx-2 px-2'>FUND MANAGER</button>
          <button className=' mx-2 px-2'>INVESTOR</button>
          <button className=' mx-2 px-2'>REPORT</button>
          <button className='mx-2 px-2'>SETTING</button>
        </div>

        <div>
          <p className='border my-5'>INVESTOR</p>
        </div>

        <div className='grid grid-cols-4 gap-4 h-28'>
          <div>
            <img className='h-28 w-full bg-blue-200 rounded-md' src={chart} alt="" />
          </div>
          <div className='text-center bg-orange-200 rounded-md flex items-center justify-center'>
            <div>
              <div className='text-orange-500'>
                <p className='text-2xl'>$1500</p>
                <p>Trading Profit</p>
              </div>
            </div>
          </div>
          <div className='text-center justify-center items-center bg-blue-200 rounded-md flex'>
            <div>
              <div>
                <p className='text-2xl'>$205.25</p>
                <p>Paid Fees</p>
              </div>
            </div>
          </div>
          <div className='text-center justify-center items-center bg-orange-200 rounded-md flex'>
            <div>
              <div className='text-orange-500'>
                <p className='text-2xl'>12</p>
                <p>Current Position</p>
              </div>
            </div>
          </div>

          <div>
            <div>

            </div>
            <div>

            </div>
            <div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default App
