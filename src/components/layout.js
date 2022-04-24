import React from "react";
import styled, { css } from "styled-components";
import { navItems, footerItems } from "../consts/layout-const";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { globalHistory } from "@reach/router";

import "../styles/index.css";
const flexCenterCss = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const FrameWrap = styled.div`
  background: #000;
  color: #fff;
  > div {
    max-width: 1366px;
    margin: 0 auto;
  }
`;
const Container = styled.div`
  min-width: 1366px;
`;
const HeaderWrap = styled.div`
  height: 100px;
  position: sticky;
  top: 0;
  ${flexCenterCss}
`;
const HeaderLogo = styled.div`
  height: 100%;
  width: 264px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Navbar = styled.nav``;
const NavItem = styled(Link)`
  display: inline-block;
  width: 150px;
  height: 68px;
  line-height: 68px;
  color: #fff;
  font-size: 28px;
  user-select: none;
  margin: 16px 28px;
  :first-child {
    margin-left: 0;
  }
  cursor: pointer;
  text-align: center;
  border-radius: 8px;
  transition: all ease 0.2s;
  background: ${({ active }) => (active ? "#d11c21" : "transparent")};
  :hover,
  :active {
    background: #d11c21;
  }

  &,
  :hover,
  :active,
  :visited {
    text-decoration: none;
  }
`;
const ContentWrap = styled.main`
  display: flex;
  > div {
    width: 100%;
    min-height: calc(100vh - 100px - 200px);
  }
`;

const FooterWrap = styled.footer`
  height: 200px;
  ${flexCenterCss}
`;
const FooterQrCode = styled.div`
  > div:last-child {
    margin-top: 12px;
    font-size: 18px;
    text-align: center;
  }
`;
const FooterList = styled.dl`
  flex: 1;
  width: 0;
  display: flex;
  justify-content: center;
  margin-top: 24px;
  > dt {
    font-size: 24px;
  }
  > dd {
    font-size: 16px;
    flex: 1;
    margin-left: 0;
  }
  ul {
    margin: 0;
  }
  li {
    list-style: none;
    line-height: 24px;
  }
`;
const Frame = ({ children, style = {} }) => {
  return (
    <FrameWrap style={style}>
      <div>{children}</div>
    </FrameWrap>
  );
};

const PageHeader = () => {
  const path = globalHistory.location.pathname;
  console.log(path);
  return (
    <Frame style={{ position: "sticky", top: 0, zIndex: 10 }}>
      <HeaderWrap>
        <HeaderLogo>
          <StaticImage
            src="../images/adorn/logo-w.png"
            alt="Delicious Food"
            width={90}
          />
        </HeaderLogo>
        <Navbar>
          {navItems.map(({ to, label, key }) => {
            let active =
              path === "/" ? to === path : to.length > 1 && path.startsWith(to);
            return (
              <NavItem key={key} to={to} active={active}>
                {label}
              </NavItem>
            );
          })}
        </Navbar>
      </HeaderWrap>
    </Frame>
  );
};

const FooterListItem = ({ label, phone, address }) => {
  return (
    <dd>
      <ul>
        <li>{label}</li>
        <li>电话：{phone}</li>
        <li>地址：{address}</li>
      </ul>
    </dd>
  );
};

const PageFooter = () => {
  return (
    <Frame>
      <FooterWrap>
        <FooterList>
          <dt>联系方式：</dt>
          {footerItems.map(({ key, ...restAttr }) => (
            <FooterListItem key={key} {...restAttr} />
          ))}
        </FooterList>
        <FooterQrCode>
          <StaticImage
            src="../images/adorn/wx-qrcode.jpg"
            alt="Weixin"
            width={126}
          />
          <div>微信公众号</div>
        </FooterQrCode>
      </FooterWrap>
    </Frame>
  );
};

const PageContent = ({ children, style = {} }) => {
  return (
    <ContentWrap style={style}>
      <div>{children}</div>
    </ContentWrap>
  );
};

const Layout = ({ children, contentStyle = {} }) => {
  return (
    <Container>
      <PageHeader />
      <PageContent style={contentStyle}>{children}</PageContent>
      <PageFooter />
    </Container>
  );
};

export default Layout;
