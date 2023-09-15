
import { Bar, MainNav, NavLi, NavLink,NavBarToggle, Hamburger } from './navigation.styles';
import { Themes } from '../../components/themes/themes.component';
const Navigation = () => {
   
    return(
        <Bar>
           <NavBarToggle onClick ={Themes}>
            <Hamburger />
           </NavBarToggle>
             <MainNav>
              <NavLi>
                <NavLink to='/'>Home</NavLink>
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
        </Bar>
    )
}

export default Navigation;