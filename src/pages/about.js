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


const BodyText = styled.div`
  position: absolute;
  top: 27%;
  left: 30%;
  width: 950px;
  
  li {
    list-style: none;
    text-indent: 30px;
    font-size: 10px;
    font-weight: 300;
    line-height: 20px;
  }
`

const SubTitle = styled.div`
  position: absolute;
  top: 50%;
  left: 30%;
  writing-mode: tb-rl;
  
  div{
    font-weight: bolder;
    writing-mode: tb-rl;
    border: solid 1px black;
    padding: 5px;
    border-radius: 5px;
    margin-right: 30px;
  }
  
`

// const Chart = styled.div`
//   writing-mode: tb-rl;
//
//   li{
//     list-style: none;
//
//   }
//
// `

const AboutPage = () => {
    return (
        <Layout>
            {/*<div>contact</div>*/}
            <Logo src={imgLogo}></Logo>
            <Title>
                <li>关于我们</li>
            </Title>
            <BodyText>
                <li>
                    迪立希于2010年在上海成立，是一家主营中、西、日、韩料理系列牛肉、羊肉冷藏冷冻食品销售的国内合资企业。一直致力于引进优质食品为起点，以
                    引领中国人的健康饮食文化为己任，本着“商道酬信，以人为本”的理念，为广大消费群体提供安全、健康、放心的食品.
                </li>
                <li>
                    我司在此基础上有效依托中国四大名牛基地和澳大利亚、加拿大的优质肉源，按照必须“有生产能力、有独立排酸车间、有先进设备、有安全食品检测、
                    有生产许可QS认证”的要求甄选供应厂商，选取的排酸牛、羊肉是厂家经执行严格的检疫程序屠宰加工的牛、羊酮体，在一定的温度、湿度、卫生条件下经
                    过72小时的成熟嫩化过程，通过排酸使肌肉原纤维断裂，最大限度的提高了牛、羊肉的口感和质量；并积极为客户寻求新的“有机、绿色、无污染”基地肉源 迪立希 DELICIOUS FOOD
                    极力的协助客户提高肉源品质，并凭可靠优质的服务受到了广大客户的欢迎和认可。在最大限度上保证广大顾客的食品安全.
                </li>
            </BodyText>
            <SubTitle>
                <div>
                    公司理念
                </div>

                <div>
                    业务范围
                </div>

            </SubTitle>
        </Layout>
    );
};

export default AboutPage;
