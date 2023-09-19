import styled from "styled-components";
import { Link } from 'react-router-dom';

export const TextContainer = styled.span`
    margin-bottom: 25px;
    color: steelblue;
    font-size: 30px;

    p {
        margin-top: auto;
        font-size: large;
        color:#323358;
    }
`
export const Source = styled.div`
       color: #323358;
       font-size: 10px;
       text-decoration: none;
`
export const FooterLink = styled(Link)`
  
  color: #323358;
  text-decoration: none;
  font-size: 13px;
  &:hover {
    color: cadetblue;
  }
`

// export const SocialContainer = styled.div`
//   margin-top: 19px;
// `

// export const SocialLinks = styled(Link)`
//     color: azure;
//     text-decoration: none;
//     margin: 0 20px;
//     background: #909999;
//     opacity: 60%;
//     padding: 10px 15px;
//     border-radius: 50%;
//     font-size: 20px;
//     &:hover {
//         background: #323358; 
//     }
// `




 
