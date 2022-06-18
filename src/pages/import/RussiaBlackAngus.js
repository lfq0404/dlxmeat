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

    p {
        width: 800px;
        margin-left: 50px;
        font-size: 13px;
        text-indent: 30px;
    }

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

const activeName = "俄罗斯黑安格斯";

const ImportPage = () => {
  return (
    <Layout>
      <Introduction>
        <p>
          亚伯丁安格斯牛起源于十六世纪苏格兰东北部，是目前世界上最有名的小型肉牛品种。各养殖场自1862年起就对该牛种开展了登记工作，并将其分为黑色品种（黑安格斯牛）和红色品种（红安格斯牛）。
          黑安格斯小公牛肉因其拥有完美的雪花纹理和卓越的口感，被认为是世界上最高档的肉牛品种之一。
        </p>
        <img src={require("../../images/import/rus.png").default} alt="" className={"a"}/>
        <img src={require("../../images/import/rusAngus/01.png").default} alt="" className={"b"}/>
        <img src={require("../../images/import/rusAngus/02.png").default} alt="" className={"b"}/>
        <img src={require("../../images/import/rusAngus/03.png").default} alt="" className={"b"}/>
        <img src={require("../../images/import/rusAngus/04.png").default} alt="" className={"b"}/>
        <img src={require("../../images/import/rusAngus/05.png").default} alt="" className={"b"}/>
        <img src={require("../../images/import/rusAngus/06.png").default} alt="" className={"b"}/>
        <img src={require("../../images/import/rusAngus/07.png").default} alt="" className={"b"}/>
        <img src={require("../../images/import/rusAngus/08.png").default} alt="" className={"b"}/>
        <img src={require("../../images/import/rusAngus/09.png").default} alt="" className={"b"}/>
        <img src={require("../../images/import/rusAngus/10.png").default} alt="" className={"b"}/>
        <img src={require("../../images/import/rusAngus/11.png").default} alt="" className={"b"}/>
        <img src={require("../../images/import/rusAngus/12.png").default} alt="" className={"b"}/>
        <img src={require("../../images/import/rusAngus/13.png").default} alt="" className={"b"}/>
        <img src={require("../../images/import/rusAngus/14.png").default} alt="" className={"b"}/>
        <img src={require("../../images/import/rusAngus/15.png").default} alt="" className={"b"}/>
        <img src={require("../../images/import/rusAngus/16.png").default} alt="" className={"b"}/>
        <img src={require("../../images/import/rusAngus/17.png").default} alt="" className={"b"}/>
        <img src={require("../../images/import/rusAngus/18.png").default} alt="" className={"b"}/>
        <img src={require("../../images/import/rusAngus/19.png").default} alt="" className={"b"}/>
        <img src={require("../../images/import/rusAngus/20.png").default} alt="" className={"b"}/>
        <img src={require("../../images/import/rusAngus/21.png").default} alt="" className={"b"}/>
        <img src={require("../../images/import/rusAngus/22.png").default} alt="" className={"b"}/>
        <img src={require("../../images/import/rusAngus/23.png").default} alt="" className={"b"}/>
        <img src={require("../../images/import/rusAngus/24.png").default} alt="" className={"b"}/>
        <img src={require("../../images/import/rusAngus/25.png").default} alt="" className={"b"}/>
        <img src={require("../../images/import/rusAngus/26.png").default} alt="" className={"b"}/>
        <img src={require("../../images/import/rusAngus/27.png").default} alt="" className={"b"}/>
        <img src={require("../../images/import/rusAngus/28.png").default} alt="" className={"b"}/>
        <img src={require("../../images/import/rusAngus/29.png").default} alt="" className={"b"}/>
        <img src={require("../../images/import/rusAngus/30.png").default} alt="" className={"b"}/>
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
