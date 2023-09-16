import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Bar, MainNav, NavLi, NavLink, NavBarToggle } from './navigation.styles';
import { Themes } from '../../components/themes/themes.component';


const Navigation = () => {
  
    return(
        <Bar>
           <NavBarToggle onClick ={Themes}>
           </NavBarToggle>
             <MainNav>
              <NavLi>
                <NavLink to='/'>HOME</NavLink>
              </NavLi>
              <NavLi>
                <NavLink to='/about'>
                 ABOUT 
                </NavLink>
              </NavLi>
              <NavLi>
                <NavLink to='/contact'>
                 CONTACT
                </NavLink>
              </NavLi>
              <FontAwesomeIcon icon={faBars} transform="right-850 down-15" style={{color: "#323358",}} />
            </MainNav>
        </Bar>
    )
}

export default Navigation;