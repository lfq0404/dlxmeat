import * as React from "react";
import {StaticImage} from "gatsby-plugin-image";
import Layout from "../../components/layout";
import {Link} from "gatsby";
import {Introduce, QuickJump} from "./style";

const AngusPage = () => {
  return (
    <Layout>
      <QuickJump>
        <Link to="/domestic/wagyu" active={true}>和牛</Link>
        <Link to="/domestic/angus" active={true}>安格斯</Link>
      </QuickJump>
      <Introduce>
        <StaticImage src="../../images/domestic/angus/01.jpg"/>
        <StaticImage src="../../images/domestic/angus/02.jpg"/>
        <StaticImage src="../../images/domestic/angus/03.jpg"/>
        <StaticImage src="../../images/domestic/angus/04.jpg"/>
        <StaticImage src="../../images/domestic/angus/05.jpg"/>
        <StaticImage src="../../images/domestic/angus/06.jpg"/>
        <StaticImage src="../../images/domestic/angus/07.jpg"/>
        <StaticImage src="../../images/domestic/angus/08.jpg"/>
        <StaticImage src="../../images/domestic/angus/09.jpg"/>
        <StaticImage src="../../images/domestic/angus/10.jpg"/>
        <StaticImage src="../../images/domestic/angus/11.jpg"/>
        <StaticImage src="../../images/domestic/angus/12.jpg"/>
      </Introduce>
    </Layout>
  );
};

export default AngusPage;
