import { useState, useEffect } from 'react';
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
      setTheme(updatedTheme);
      localStorage.setItem("theme", updatedTheme);
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

return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
     <GlobalStyles />
      <StyledApp></StyledApp>
       <button onClick={toggleTheme}>Theme</button>
    </ThemeProvider>
)
};

export default Themes;