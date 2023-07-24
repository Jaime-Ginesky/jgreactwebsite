import { Outlet } from 'react-router-dom';



import { Bar, MainNav, NavLi,
NavLink, NavBarToggle  } from './navigation.styles';


const Navigation = () => {


    return(
        <Bar>
           <NavBarToggle onClick={() => }>
           </NavBarToggle>
             <NavLinks>
             <NavLink to='/home'>
                Home
              </NavLink>
              <NavLink to='/about'>
                About
              </NavLink>
              <NavLink to='/contact'>
                Contact
              </NavLink>
             </NavLinks>
            
          <Outlet />
        </Bar>
    )
}

export default Navigation;