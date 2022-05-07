import * as React from "react";
import {StaticImage} from "gatsby-plugin-image";
import Layout from "../../components/layout";
import styled from "styled-components";
import {Link} from "gatsby";

const QuickJump = styled.div`
  position: absolute;
  top: 200px;
  left: 50px;
  right: 50px;
  display: flex;
  //justify-content: space-between;
  //padding: 24px 262px;

   a {
    margin-right: 50px;
    width: 600px;
    height: 100px;
    background-color: rgba(0, 0, 0, 0.8);
    text-align: center;
    line-height: 100px;
    color: #fff;
    font-size: 48px;
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

const DomesticPage = () => {
  return (
    <Layout>
        <StaticImage src="../../images/domestic/01.jpg" style={{height: "100%"}}></StaticImage>
        <QuickJump>
            <Link to="/domestic">国产肉类</Link>
            <Link to="/import">进口肉类</Link>
        </QuickJump>

    </Layout>
  );
};

export default DomesticPage;
