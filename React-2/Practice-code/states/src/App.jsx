// import { useState } from 'react'
import './App.css'
import CheckBox from './Checkbox/Checkbox';
import Input from './Input/Input';
import Data_Fetch_WithoutAxois from './axios/Data_Fetch_WithoutAxios';
import Data_fetch1 from './axios/Data_fetch1';
import Data_fetch2 from './axios/Data_fetch2';
import Task1 from './axios/Task1';
import Task2 from './axios/Task2';
import UseStates from './hook/hook1';
import UseState_2 from './hook/hook2';
import Hook from './hook/hook3';
import States from './states/states';
// import Task1 from './useEffect/Task1';
import UseEffect1 from './useEffect/UseEffect1';
import UseEffect2 from './useEffect/UseEffect2';

function App() {
  // const [count, setCount] = useState(0)

  // console.log(count);
  return (
    <>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}
      {/* <States/> */}
      {/* <Input/> */}
      {/* <CheckBox/> */}
      {/* <Task1/> */}
      {/* <UseState_2/> */}
      {/* <Hook/> */}
      {/* <UseStates/> */}

      {/* <UseEffect1/> */}
      {/* <UseEffect2/> */}
       
      {/* <Data_Fetch_WithoutAxois/> */}
      {/* <Data_fetch1/> */}
      {/* <Data_fetch2/> */}
      {/* <Task2/> */}
      <Task1/>
    </>
  )
}

export default App
