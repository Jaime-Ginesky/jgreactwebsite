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
        display: flex;
        margin: auto;
        justify-content: center;
        align-content: center;
        position: fixed;
        padding: 0px;
        text-align: center;
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
    // h2 {
    //    display: grid;
    //    justify-content: center;
    //    align-content: center;
    //    grid-gap: 10px;
    //    position: fixed;
    //    color:steelblue;
    //    opacity: 60%;
    //    font-size: 24px;
    //    font-family: "Cormorant Garamond", serif;
    //    margin: -90px auto;
    //  }
    `


   export const SlideDown = styled.div `
   
    width:100%;
    overflow:hidden;
    margin-left: 450px;
    max-width: 530px;
    color:steelblue;
    opacity: 50%;
    margin: -120px auto;
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

