
import './App.css';
import CircleWatch from './component/circle';
// import Nav from './component/nav';
import Navbar from './component/nav/Navbar';
import Watch from './component/watch';
import { useState } from 'react';
import HelpIcon from '@mui/icons-material/Help';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


function App() {
  const [True,setTrue]=useState(true)
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

const handleClick = () => {
  setTrue(!True);
};
  return (
    <div className="App">
      <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </div>
      <div className={isOpen ? 'nav-menu open' : 'nav-menu'}>

      <Navbar/>
      </div>
      {True ? <CircleWatch/> : <Watch/>}
      <div className="chenge">
      <button class='btn btn-custom mt-3' onClick={handleClick}>chenge clock Design</button>
      </div>
      
      
      
    </div>
  );
}

export default App;
