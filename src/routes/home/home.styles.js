import styled from 'styled-components';



  export const MainContainer = styled.div`
      display: flex;
      justify-content: center;
      align-content: center;
      position: absolute;
      height: 100vh;
      width: 100vw;
      background: var(--background-color);


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
      color: var(--image-text-color);
      opacity: 80%;
      font-size: 150px;
      font-weight: 100;
      font-family: "Poppins", sans-serif;
      padding-top: 80px;
    }
    h2 {
      display: flex;
      justify-content: center;
      align-content: center;
      position: fixed;
      color:steelblue;
      opacity: 60%;
      font-size: 24px;
      font-family: "Cormorant Garamond", serif;
      padding-bottom: 30px;
    }
  `