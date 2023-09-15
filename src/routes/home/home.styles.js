import styled from 'styled-components';



  export const MainContainer = styled.div`
    body {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      background: var(--background-color);
    }

    h3 {
  margin: 0;
  padding: 10px;
  box-sizing: border-box;
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
      color:steelblue;
      opacity: 60%;
      font-size: 24px;
      font-family: "Cormorant Garamond", serif;
      padding-bottom: 30px;
    }
  `