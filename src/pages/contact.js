import * as React from "react";
import Layout from "../components/layout";
import styled from "styled-components";
import imgLogo from "../images/adorn/logo-b.png";

const Logo = styled.img`
  position: absolute;
  top: 20%;
  left: 10%;
`;

const Title = styled.div`
  position: absolute;
  top: 25%;
  left: 30%;

  li {
    list-style: none;
    line-height: 24px;
    font-weight: bolder;
  }
`


// 横线的样式
const Hr = styled.hr`
    width: 800px;
    border: 1px solid black;
`


const ContactPage = () => {
    return (
        <Layout>
            {/*<div>contact</div>*/}
            <Logo src={imgLogo}></Logo>
            <Title>
                <li>联系我们</li>
                <Hr/>
            </Title>
        </Layout>
    );
};

export default ContactPage;
