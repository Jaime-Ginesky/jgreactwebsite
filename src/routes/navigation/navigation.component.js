import { Outlet } from 'react-router-dom';
import { Fragment } from 'react';


import { NavigationContainer, NavLink, NavLinks  } from './navigation.styles';


const Navigation = () => {
    return(
        <Fragment>
           <NavigationContainer>
             <NavLinks>
              <NavLink to='/about'>
                About
              </NavLink>
              <NavLink to='/contact'>
                Contact
              </NavLink>
             </NavLinks>
             </NavigationContainer>
          <Outlet />
        </Fragment>
    )
}

export default Navigation;