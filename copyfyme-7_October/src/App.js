import logo from './logo.svg';
import './App.css';
import Login from './Component/Login/Login';
import { Route,Routes } from 'react-router-dom';
import Main from './Main';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/dashboard' element={<Main/>}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
