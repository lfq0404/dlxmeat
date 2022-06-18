import * as React from "react";
import Layout from "../../components/layout";
import styled from "styled-components";
import {Link} from "gatsby";
import {sideBarCfg} from "./conf";

const Introduction = styled.div`
    width: 1000px;
    margin-left: 25%;
    margin-bottom: 60px;
    margin-top: 60px;

    img.a {
        height: 400px;
        margin-left: 250px;
        margin-bottom: 50px;
    }

    img.b {
        width: 250px;
        margin-right: 75px;
    }
`;

const Sidebar = styled.div`
    position: absolute;
    top: 22%;
    left: 7%;
    width: 500px;

    img {
        float: left;
        width: 30px;
        margin-left: 5%;
        margin-top: 4%;
    }

    div.cn {
        transform: translateY(-20px);
    }

    div.en {
        transform: translateY(-80px);
        margin-left: 40px;
    }

`;

const SiderBarItems = styled(Link)`
    width: 250px;
    height: 50px;
    text-align: center;
    line-height: 75px;
    color: #fff;
    font-size: 10px;
    font-weight: bolder;
    float: left;
    border-style: solid;
    border-radius: 8px;
    background-color: ${({active}) => (active ? "#d11c21" : "#000000cc")};

    &,
    :hover,
    :active,
    :visited {
        text-decoration: none;
    }

    :hover {
        background-color: #000;
    }

    :active {
        background: #d11c21;
    }
`;

const activeName = "澳大利亚安格斯";

const Index = () => {
  return (
    <Layout>
      <Introduction>
        <img src={require("../../images/import/aus.png").default} alt="" className={"a"}/>
        <img src={require("../../images/import/ausAngus/01.jpg").default} alt="" className={"b"}/>
        <img src={require("../../images/import/ausAngus/02.jpg").default} alt="" className={"b"}/>
        <img src={require("../../images/import/ausAngus/03.jpg").default} alt="" className={"b"}/>
        <img src={require("../../images/import/ausAngus/04.jpg").default} alt="" className={"b"}/>
        <img src={require("../../images/import/ausAngus/05.jpg").default} alt="" className={"b"}/>
        <img src={require("../../images/import/ausAngus/06.jpg").default} alt="" className={"b"}/>
        <img src={require("../../images/import/ausAngus/07.jpg").default} alt="" className={"b"}/>
        <img src={require("../../images/import/ausAngus/08.jpg").default} alt="" className={"b"}/>
        <img src={require("../../images/import/ausAngus/09.jpg").default} alt="" className={"b"}/>
        <img src={require("../../images/import/ausAngus/10.jpg").default} alt="" className={"b"}/>
        <img src={require("../../images/import/ausAngus/11.jpg").default} alt="" className={"b"}/>
        <img src={require("../../images/import/ausAngus/12.jpg").default} alt="" className={"b"}/>
      </Introduction>
      <Sidebar>
        {sideBarCfg.map(({img, cnText, enText, linkTo}) => {
          return (<SiderBarItems to={linkTo} active={cnText === activeName}>
            <img src={img} alt=""/>
            <div className={"cn"}>{cnText}</div>
            <div className={"en"}>{enText}</div>
          </SiderBarItems>);
        })}
      </Sidebar>

    </Layout>
  );
};

export default Index;
