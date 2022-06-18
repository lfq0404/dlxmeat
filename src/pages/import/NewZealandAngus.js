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
        height: 300px;
        margin-left: 50px;
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

const activeName = "新西兰安格斯";

const ImportPage = () => {
  return (
    <Layout>
      <Introduction>
        <img src={require("../../images/import/NZ.png").default} alt="" className={"a"}/>
        <img src={require("../../images/import/nzAngus/01.jpg").default} alt="" className={"b"}/>
        <img src={require("../../images/import/nzAngus/02.jpg").default} alt="" className={"b"}/>
        <img src={require("../../images/import/nzAngus/03.jpg").default} alt="" className={"b"}/>
        <img src={require("../../images/import/nzAngus/04.jpg").default} alt="" className={"b"}/>
        <img src={require("../../images/import/nzAngus/05.jpg").default} alt="" className={"b"}/>
        <img src={require("../../images/import/nzAngus/06.jpg").default} alt="" className={"b"}/>
        <img src={require("../../images/import/nzAngus/07.jpg").default} alt="" className={"b"}/>
        <img src={require("../../images/import/nzAngus/08.jpg").default} alt="" className={"b"}/>
        <img src={require("../../images/import/nzAngus/09.jpg").default} alt="" className={"b"}/>
        <img src={require("../../images/import/nzAngus/10.jpg").default} alt="" className={"b"}/>
        <img src={require("../../images/import/nzAngus/11.jpg").default} alt="" className={"b"}/>
        <img src={require("../../images/import/nzAngus/12.jpg").default} alt="" className={"b"}/>
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

export default ImportPage;
