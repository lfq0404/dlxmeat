import * as React from "react";
import {StaticImage} from "gatsby-plugin-image";
import Layout from "../../components/layout";
import styled from "styled-components";
import {Link} from "gatsby";
import icon from "../../images/icon.png";

const QuickJump = styled.div`
    position: absolute;
    top: 22%;
    left: 25%;
    display: flex;

    a {
        margin-right: 280px;
        width: 315px;
        height: 75px;
        background-color: rgba(0, 0, 0, 0.8);
        text-align: center;
        line-height: 75px;
        color: #fff;
        font-size: 30px;
        font-weight: bolder;

        &,
        :hover,
        :active,
        :visited {
            text-decoration: none;
        }

        :hover {
            background-color: #000;
        }
    }
`;

const Sidebar = styled.div`
    position: absolute;
    top: 22%;
    left: 10%;
    width: 500px;
    //background-color: green;

    img {
        float: left;
        width: 30%;
        margin-left: 5%;
        margin-top: 5%;
    }

    div.cn {
        height: 35px;
    }

    div.en {
        height: 25px;
    }

    a {
        width: 250px;
        height: 100px;
        background-color: rgba(0, 0, 0, 0.8);
        text-align: center;
        line-height: 75px;
        color: #fff;
        font-size: 10px;
        font-weight: bolder;
        float: right;
        border-style: solid;

        &,
        :hover,
        :active,
        :visited {
            text-decoration: none;
        }

        :hover {
            background-color: #000;
        }
    }
`;
const sideBarCfg = [
  {
    img: icon,
    cnText: "澳大利亚和牛",
    enText: "Australia Wagyu"
  },
  {
    img: icon,
    cnText: "澳大利亚安格斯",
    enText: "Australia Angus"
  },
  {
    img: icon,
    cnText: "俄罗斯黑安格斯",
    enText: "Russia Black Angus"
  },
  {
    img: icon,
    cnText: "新西兰和牛",
    enText: "NewZealand Wagyu"
  },
  {
    img: icon,
    cnText: "新西兰安格斯",
    enText: "NewZealand Angus"
  },

];
const ImportPage = () => {
  return (
    <Layout>
      <StaticImage src="../../images/import/01.png" style={
        {
          width: "500px",
          marginLeft: "32%",
          marginTop: "15%",
          marginBottom: "60px",
        }
      }/>
      <Sidebar>
        {sideBarCfg.map(({img, cnText, enText}) => {
          return (<Link to="/domestic/wagyu">
            <img src={img}/>
            <div className={"cn"}>{cnText}</div>
            <div className={"en"}>{enText}</div>
          </Link>);
        })}
      </Sidebar>

    </Layout>
  );
};

export default ImportPage;
