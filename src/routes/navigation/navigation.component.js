import { Outlet } from 'react-router-dom';



import { Bar, MainNav, NavLi,
NavLink, NavBarToggle, Hamburger } from './navigation.styles';


const Navigation = () => {


    return(
        <Bar>
           <NavBarToggle onClick={NavBarToggle}>
            <Hamburger />
           </NavBarToggle>
             <MainNav>
              <NavLi>
                <NavLink to='/home'>Home</NavLink>
              </NavLi>
              <NavLi>
                <NavLink to='/about'>
                About
                </NavLink>
              </NavLi>
              <NavLi>
                <NavLink to='/contact'>
                Contact
                </NavLink>
              </NavLi>
            </MainNav>
            
          <Outlet />
        </Bar>
    )
}

export default Navigation;