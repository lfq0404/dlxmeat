import * as React from "react";
import Layout from "../components/layout";
import styled from "styled-components";
import imgLogo from "../images/adorn/logo-b.png";
import wxQrCode from "../images/adorn/wx-qrcode.jpg";

const Logo = styled.img`
  position: absolute;
  top: 20%;
  left: 10%;
`;


const Title = styled.div`
  position: absolute;
  top: 20%;
  left: 30%;
  width: 950px;
  border-bottom-width: 2px;
  border-bottom-color: black;
  border-bottom-style: solid;

  li {
    list-style: none;
    line-height: 30px;
    font-weight: bolder;
    text-indent: 30px;
  }
`

const Details = styled.div`
  margin-left: 33%;
  margin-top: 10%;

  li{
      list-style: none;
      border-left-style: solid;
      border-left-color: black;
      border-left-width: 3px;
      padding-left: 30px;
      margin-bottom: 30px;
  }
  
  div{
    position: relative;
    top: -300px;
    left: 500px;
    width: 150px;
  }
`


const ContactPage = () => {
    return (
        <Layout>
            {/*<div>contact</div>*/}
            <Logo src={imgLogo}></Logo>
            <Title>
                <li>联系我们</li>
            </Title>
            <Details>
                <li>
                    <p>电话：021-33625770（朱先生）</p>
                    <p>地址：上海市闵行区曲吴路589号6栋105</p>
                </li>
                <li>
                    {/*<p>迪立希富德贸易（北京）有限公司</p>*/}
                    <p>电话：139 1083 9361（郑先生）</p>
                    <p>地址：北京市丰台区南顶路6号院34号楼407</p>
                </li>
                <li>
                    {/*<p>深圳迪立希富德贸易有限公司</p>*/}
                    <p>电话：191 2953 3395（林先生）</p>
                    <p>地址：深圳市福田区下梅林二街颂德国际909</p>
                </li>
                <li>
                    {/*<p>成都牛哞贸易有限公司</p>*/}
                    <p>电话：186 8386 0064（张先生）</p>
                    <p>地址：成都市双流区海洋路109号</p>
                </li>

                <div>
                    <img src={wxQrCode}/>
                </div>
            </Details>


        </Layout>
    );
};

export default ContactPage;
