import { TextContainer, FooterLink, Source, Row, Box } from './footer.styles';

const Footer = () => {
    return(
      <Box>
        <TextContainer>
            <Row>
              <Source>Open source code by{' '}</Source>
              <FooterLink href="#"> Jaime Ginesky</FooterLink>
            </Row>
        </TextContainer>
     </Box>
    )
}

export default Footer;