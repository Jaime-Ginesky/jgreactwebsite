import { Routes, Route } from 'react-router-dom';
import Navigation  from './routes/navigation/navigation.component';
import  Home from './routes/home/home.component';
import About from './routes/about/about';
import Contact from './routes/contact/contact';

import './App.css';



const App = () => {
  return (
  <Routes>
    <Route path='/' element={<Navigation />}>
     <Route index element={<Home /> } />
     <Route path='/about' element={<About />} />
     <Route path='/contact' element={<Contact /> } />
    </Route>
  </Routes>
 
  );
}

export default App;
