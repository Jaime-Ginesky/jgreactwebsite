import { Routes, Route } from 'react-router-dom';
import { Themes } from './components/themes/themes.component';
import { Fragment } from 'react';  
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';

import About from './routes/about/about.component';
import Contact from './routes/contact/contact.component';


import './App.css';

const App = () => {

  return (
    <Fragment>
     <Themes />
  <Routes>
    <Route path='/' element={<Navigation />}>
     <Route index element={<Home /> } />
     <Route path='about' element={<About />} />
     <Route path='contact' element={<Contact /> } />
    </Route>
  </Routes>
  <Home />
</Fragment>

  );
}

export default App;
