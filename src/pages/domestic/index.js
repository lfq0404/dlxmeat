import * as React from "react";
import {StaticImage} from "gatsby-plugin-image";
import Layout from "../../components/layout";
import styled from "styled-components";
import {Link} from "gatsby";

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


const Text = styled.div`
    position: absolute;
    top: 35%;
    left: 23%;
    width: 900px;
  
    p.title{
        font-weight: bolder;
        font-size: 35px;
        
    }
    p.body{
        font-weight: normal;
        font-size: 13px;
        text-indent: 30px;
        line-height: 30px;
        margin-top: 0;
        margin-bottom: 0;
    }
`
const DomesticPage = () => {
    return (
        <Layout>
            <StaticImage src="../../images/domestic/01.jpg" style={{height: "100%"}}></StaticImage>
            <QuickJump>
                <Link to="/domestic/wagyu">和牛</Link>
                <Link to="/domestic/angus">安格斯</Link>
            </QuickJump>
            <Text>
                <p className={'title'}>
                    雪龙和牛牧场
                </p>
                <p className={'body'}>
                    雪龙和牛牧场严格按照日本和牛养殖标准建立，配备完善的饲喂、清洁等生活设施。每头牛可享受六亩地的广阔草原，尽享微风和鲜草气息。
                </p>
                <p className={'body'}>
                    育肥场则采用一栏两牛的最高养殖标准，28-32个月的谷饲育肥期间，雪龙会根据牛不同的成长阶段，改变饲料中的各类谷物比例，
                    从而调整饮食中各项营养元素的摄入量，牛舍中配备专用风扇灯设备，带给牛最舒适的生活环境。
                </p>

            </Text>

        </Layout>
    );
};

export default DomesticPage;
