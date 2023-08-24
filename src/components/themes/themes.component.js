import React, { useState } from "react";
import styled,  { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './themes.styles';

const StyledApp = styled.div`
color: ${(props) => props.theme.color};
`

const Themes = () => {
    const [theme,setTheme] = useState('light');
    const isDarkTheme = theme === "dark";
   
    const toggleTheme = () => {
      const updatedTheme = isDarkTheme ? "light" : "dark";
      setTheme(lightTheme);
      localStorage.setItem("theme", lightTheme);
    };
  
    useEffect(() => {
      const savedTheme = localStorage.getItem("theme");
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      if(savedTheme && ["dark", "light"].includes(savedTheme))
   {
    setTheme(savedTheme);
   } else if (prefersDark) {
    setTheme("dark");
   }
    },[]);

// export const ThemeContext = React.createContext()
// export const ThemeUpdateContext = React.createContext()

// export const useTheme = () => {
//     return useContext(ThemeContext)
// }

// export const useThemeUpdate = () => {
//     return useContext(ThemeUpdateContext)
// }

// export const ThemeProvider =({ children }) => {
//     const [darkTheme, setDarkTheme] = useState(true)

//     const toggleTheme = () => {
//         setDarkTheme(prevDarkTheme => !prevDarkTheme )
//     }

return (
    
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
    
)
}

export default Themes;