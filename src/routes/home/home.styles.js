import styled from 'styled-components';


  export const Wrapper = styled.div`
     display: grid;
     grid-template-columns: repeat(3, 1fr);
     gap: 5px;
     grid-auto-rows: minmax(100px, auto);
  `;

  export const MainContainer = styled.div`
   
      grid-row: 1;
      grid-column: 2;
    // display: grid;
    // grid-template-columns: 50px 50px 50px 50px;
    // grid-template-rows: auto;
    // grid-template-areas: 
    //    "header header header header"
    //    "main main main main"
    //    "footer footer footer footer';
    // grid-gap: 10px;
    
    h1 {
      display: grid;
      grid-gap: 10px;
      justify-content: center;
      align-content: center;
       color: var(--image-text-color);
       opacity: 80%;
       font-size: 150px;
       font-weight: 100;
       font-family: "Poppins", sans-serif;
       padding-top: 80px;
      }
    `
   export const SlideUp = styled.div`
   display: grid;
   grid-gap: 5px;
   justify-content: center;
   align-content: center;
   overflow: hidden;
   position: absolute;
   font-family: "Cormorant Garamond", serif;
   margin: -285px auto;
   color: steelblue;
   width:100%;
    margin-left: 200px;
    max-width: 530px;

   h3 {
    text-align: center;
    animation:2s slide-down 2s forwards;
       transform:translateY(270%);
    @keyframes slide-down {
    to {
       transform:translateX(0%);
    }
  }
}`

   export const SlideDown = styled.div `
   
    width:100%;
    margin-left: 450px;
    max-width: 530px;
    color:steelblue;
    overflow: hidden;
    margin: -130px auto;
    opacity: 50%;
    display: grid;
    justify-content: center;
    align-content: center;
    grid-gap: 5px;
  
  
   h2 {
    text-align: center;
    animation:2s slide-down 2s forwards;
       transform:translateY(-170%);
    @keyframes slide-down {
    to {
      transform:translateX(0%);
    }
  }
}
   `

