import React from "react";
import styled from "styled-components";
import PublicIcon from '@mui/icons-material/Public';
import { Link } from "react-router-dom";

const FooterContainer = styled.footer`
  background-color: #eee;
  color: #616161;
`;

const Sitemap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 30px 0;
  font-size: 0.7em;
  text-decoration: none;

  li, a {
    list-style: none;
    color: inherit;
    text-decoration: none;
  }
`;

const FooterInfo = styled.div`
  display: flex;
  font-size: 12px;
  padding: 20px 100px;
  @media screen and (max-width: 768px) {
    padding: 0px;
  }
`;

const Language = styled.div`
  padding: 0 20px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Sitemap> 
        <li>
          <Link to="/mentor">Find Mentor</Link>
        </li>
        <li>
          <Link to="/information">Infomation Share</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/worker">Workers</Link>
        </li>
        <li>
          <Link to="/best">BEST</Link>
        </li>
        <li>
          <Link to="/qna">QnA</Link>
        </li>
      </Sitemap>
      <FooterInfo>
        <Language>
          <PublicIcon />한국어(대한민국)
        </Language>
      </FooterInfo>
    </FooterContainer>
  );
};

export default Footer;