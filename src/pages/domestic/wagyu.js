import * as React from "react";
import {StaticImage} from "gatsby-plugin-image";
import Layout from "../../components/layout";
import {Link} from "gatsby";
import {Introduce, QuickJump} from "./style";

const WagyuPage = () => {
  return (
    <Layout>
      <QuickJump>
        <Link to="/domestic/wagyu">和牛</Link>
        <Link to="/domestic/angus">安格斯</Link>
      </QuickJump>
      <Introduce>
        <StaticImage src="../../images/domestic/wagyu/01.jpg"/>
        <StaticImage src="../../images/domestic/wagyu/02.jpg"/>
        <StaticImage src="../../images/domestic/wagyu/03.jpg"/>
        <StaticImage src="../../images/domestic/wagyu/04.jpg"/>
        <StaticImage src="../../images/domestic/wagyu/05.jpg"/>
        <StaticImage src="../../images/domestic/wagyu/06.jpg"/>
        <StaticImage src="../../images/domestic/wagyu/07.jpg"/>
        <StaticImage src="../../images/domestic/wagyu/08.jpg"/>
        <StaticImage src="../../images/domestic/wagyu/09.jpg"/>
        <StaticImage src="../../images/domestic/wagyu/10.jpg"/>
        <StaticImage src="../../images/domestic/wagyu/11.jpg"/>
        <StaticImage src="../../images/domestic/wagyu/12.jpg"/>
      </Introduce>
    </Layout>
  );
};

export default WagyuPage;
