import { useState, useEffect } from "react";
import styled,  { ThemeProvider } from 'styled-components';
import { LightTheme, DarkTheme, GlobalStyles, ToggleButton } from './themes.styles';

const StyledApp = styled.div`
color: ${(props) => props.theme.color};
`

export const Themes = () => {
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
    <ThemeProvider theme={theme === 'light' ? LightTheme : DarkTheme}>
      <GlobalStyles />
      <StyledApp></StyledApp>
      <ToggleButton onClick={toggleTheme}>Theme</ToggleButton>
    </ThemeProvider>
    
)
}

export default Themes;