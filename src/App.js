
import './App.css';
import CircleWatch from './component/circle';
// import Nav from './component/nav';
import Navbar from './component/nav/Navbar';
import Watch from './component/watch';
import { useState } from 'react';


function App() {
  const [True,setTrue]=useState(true)
const handleClick = () => {
  setTrue(!True);
};
  return (
    <div className="App">
      <Navbar/>
      {True ? <CircleWatch/> : <Watch/>}
      <div className="chenge">
      <button class='btn btn-custom mt-3' onClick={handleClick}>chenge clock Design</button>
      </div>
      
      
      
    </div>
  );
}

export default App;
