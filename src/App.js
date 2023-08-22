import { Routes, Route } from 'react-router-dom';
import Context from './context/context.component';
import { ThemeProvider } from './components/themes/themes.component';
import { Fragment } from 'react';  
// import { useState, useEffect } from 'react';
// import styled,  { ThemeProvider } from 'styled-components';
// import { lightTheme, darkTheme, GlobalStyles } from './themes/themes.styles';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';

import About from './routes/about/about';
import Contact from './routes/contact/contact';

import './App.css';

const App = () => {

  return (
    <Fragment>
    <ThemeProvider>
     <Context />
     </ThemeProvider>
  <Routes>
    <Route path='/' element={<Navigation />}>
     <Route index element={<Home /> } />
     <Route path='about' element={<About />} />
     <Route path='contact' element={<Contact /> } />
    </Route>
  </Routes>
</Fragment>
  );
}

export default App;
