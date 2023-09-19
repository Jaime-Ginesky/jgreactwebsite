import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Box = styled.div`
   padding: 80 px 60px;
   position: absolute;
   bottom: 0;
   width: 100%;

   @media (max-width: 1000px) {
    padding: 70px 30px;
   }
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    color: steelblue;
    font-size: 30px;

    p {
        color:#323358;
    }
`


export const Row = styled.div`

     display: flex;
     align-items: center;
    

  
//    display: grid;
//     grid-template: none;
//     justify-items: center;
//     grid-gap: 20px;
   

    // @media (max-width: 1000px) {
    //     grid-template-columns: {1}
    
`

export const Source = styled.div`
       color: #323358;
       font-size: 10px;
       text-decoration: none;
       margin-bottom: 20px;
       padding: 0 2px;
`
export const FooterLink = styled(Link)`
  
  color: #323358;
  text-decoration: none;
  font-size: 13px;
  margin-bottom: 20px;
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




 
