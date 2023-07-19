import { useState } from 'react';

import './mode.styles.scss';


const Mode = () => {
   const [theme, setTheme] = useState('light');
   const toggleTheme = () => {
     if (theme === 'light') {
        setTheme('dark');
     } else {
        setTheme('light');
     }
   }
   return (
    <div className={`Mode ${theme}`}>
        <button onClick={toggleTheme}>ToggleTheme</button>
        <h1>Dark</h1>
    </div>
   )
}

export default Mode;