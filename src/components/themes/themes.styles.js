import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`

    body { 

        background-color: ${props => props.theme.body};
        color: ${props => props.theme.color};
        transition: background 0.2s ease-in, color o.2s ease-in;
    }
`;

export const lightTheme =  {
    body: '#bfcccc',
    color: '#323358',
}

export const darkTheme = {
    body: '#323358',
    color: '#909999',
}

