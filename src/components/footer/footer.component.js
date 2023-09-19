import { TextContainer, FooterLink, Source } from './footer.styles';

const Footer = () => {
    return(

  <TextContainer>
    <Source>
    <span>
    Open Source code by
    </span>
    </Source>
    <FooterLink to= "#" >
        Jaime Ginesky
    </FooterLink>
  </TextContainer>
    )
}

export default Footer;