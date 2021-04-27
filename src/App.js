import { useState } from 'react';
import './App.css';
import MenuIcon from '@material-ui/icons/Menu';
import ClearIcon from '@material-ui/icons/Clear';

function App() {

  const [ showMenu, setShowMenu ] = useState(true);

  return (
    <div className="App">
      <h2 className='navbar__heading' > navbar </h2>

      <ul className={showMenu ? 'navbar__menuItems' : 'navbar__menuItems active' } >
        <li>
          Home
        </li>

        <li>
          About 
        </li>

        <li>
          Contact us
        </li>
      </ul>

      <div className='navbar__menuIcon' onClick={() => setShowMenu(!showMenu)} >
        {showMenu ? <MenuIcon /> : <ClearIcon  />}
      </div>
    </div>
  );
}

export default App;
