import { styled, createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`

    body { 

        background-color: ${props => props.theme.body};
        color: ${props => props.theme.color};
        transition: background 0.2s ease-in, color o.2s ease-in;
    }
`;

export const LightTheme =  {
    body: '#bfcccc',
    color: '#323358',
}

export const DarkTheme = {
    body: '#323358',
    color: '#909999',
}

export const ToggleButton = styled.div `

    padding: 0.5em;
    font-weight: 800;
    margin-right: 30px;
    box-shadow: none;
    border: 0px;
    background: none;
    color: steelblue;
    &:hover {
      cursor: pointer;
      opacity: 0.8;
  }
  .dark-mode-toggle {
    margin-left: 400px;
    background: #7693B6;
    color: steelblue;
    box-shadow: none;
    border: 0px;
  }
  `
//   .navbar {
//     max-height: 50px;
//   }
//   #theme {
//     width: 100vw;
//     height: 100vh;
//   }
//   .dark-mode-theme {
//     background: var(--image-text-color);
//     color: var(--background-color);
//   }
//   .dark-mode-theme h1 {
//     color: white;
//   }

