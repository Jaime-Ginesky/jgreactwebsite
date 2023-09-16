import styled from 'styled-components';



  export const MainContainer = styled.div`
  // display: grid;
  // justify-content: center;
  // align-content: center;
  // position: absolute;
  // height: 100vh;
  // width: 100vw;
  // background: var(--background-color);
  

     h3 {
        position: fixed;
        font-family: "Cormorant Garamond", serif;
     }
   
     h1 {
      display: grid;
      grid-template-columns: {1};
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


   export const SlideDown = styled.div `
   
    width:100%;
    overflow:hidden;
    margin-left: 450px;
    max-width: 530px;
    color:steelblue;
    margin: -130px auto;
    opacity: 50%;
    display: grid;
    justify-content: center;
    align-content: center;
    grid-gap: 5px;
  
   h3 {
    display: block;
    margin: -130px auto;
    text-align: center;
    animation:2s slide-up 2s forwards;
       transform:translateY(270%);
    @keyframes slide-up {
    to {
      transform:translateX(0%);
    }
  }
}
  
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

