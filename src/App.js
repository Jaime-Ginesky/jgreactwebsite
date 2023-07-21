import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styled,  { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './themes';
import Navigation  from './routes/navigation/navigation.component';
import  Home from './routes/home/home.component';
import About from './routes/about/about';
import Contact from './routes/contact/contact';

import './App.css';

const StyledApp = styled.div`
color: ${(props) => props.theme.color};
`

const App = () => {

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
    <StyledApp>Hello World</StyledApp>
    <button onClick={toggleTheme}>Theme</button>
  <Routes>
    <Route path='/' element={<Navigation />}>
     <Route index element={<Home /> } />
     <Route path='/about' element={<About />} />
     <Route path='/contact' element={<Contact /> } />
    </Route>
  </Routes>
 </ThemeProvider> 
  );
}

export default App;
