import { Outlet, Link } from 'react-router-dom';



import { Bar, MainNav, NavLi, NavBarToggle, Hamburger } from './navigation.styles';


const Navigation = () => {


    return(
        <Bar>
           <NavBarToggle onClick={NavBarToggle}>
            <Hamburger />
           </NavBarToggle>
             <MainNav>
              <NavLi>
                <Link className='nav-link' to='/'>Home </Link>
              </NavLi>
              <NavLi>
                <Link className='nav-link' to='/about'>
                 About 
                </Link>
              </NavLi>
              <NavLi>
                <Link className='nav-link' to='/contact'>
                 Contact
                </Link>
              </NavLi>
            </MainNav>
            <Outlet />
        </Bar>
    )
}

export default Navigation;