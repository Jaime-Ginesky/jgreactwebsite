import { Outlet } from 'react-router-dom';
import { Fragment } from 'react';
import Mode from '../../components/Mode/mode.component';

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
             <Mode />
             </NavigationContainer>
          <Outlet />
        </Fragment>
    )
}

export default Navigation;