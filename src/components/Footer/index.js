import React from 'react'
import { FooterContainer, FooterWrap, SocialMedia, SocialMediaWrap, SocialLogo, SocialIcons, SocialIconLink } from "./Footer";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>

            <SocialLogo to="/">The Resto</SocialLogo>
            <SocialLogo to="/">Fabiola Benitez - 2021</SocialLogo> 

          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;