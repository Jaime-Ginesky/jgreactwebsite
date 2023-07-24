import styled from 'styled-components';


const Bar = styled.nav`
font-size: 18px;
background-image: linear-gradient(260deg, rgb(42,244,152,255) 0%, #3498db 100%);
border: 1px solid rgba(0,0,0,0.2);
padding-bottom: 10px;
@media (min-width: 768px) {
      display: flex;
      justify-content: space-between;
      padding-bottom: 0;
      height: 70px;
      align-items: center;
}`

const MainNav = styled.ul`
list-style-type: none;
display: ${props => props.display };
flex-direction: column;
@media (min-width: 768px) {
      display: flex !important;
      margin-right: 30px;
      flex-direction: row;
      justify-contyent: flex-end;
}`

const NavLi = styled.li`
text-align: center;
margin: 15px auto;
`

const NavLink = styled.a`
list-style-type:: none;
display: flex;
flex-direction: column;
@media (min-width: 768px) {
      margin: 0px 10px;
}`

const NavBarToggle = styled.span`
  position: absolute;
  top: 10px;
  right: 20px;
  cursor: pointer;
  color: rgba(255,255,255,0.8);
  font-size: 24px;
  `
  