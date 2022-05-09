import * as React from "react";
import Layout from "../../components/layout";
import styled from "styled-components";
import img1 from "../../images/part/01.jpg"

const ImgPaths = [...Array(24).keys()].map(ind => (
    '../../images/part/'.concat((ind + 1).toString().padStart(2, '0'), '.jpg')
));

const Introduce = styled.li`
    list-style: none;
    margin-top: 100px;
    width: 1400px;
    margin-left: 200px;
    
    img{
        width: 200px;
        height: 580px;
        margin-right: 20px;
    }
`
const WagyuPage = () => {
    return (
        <Layout>
            <Introduce>
                {ImgPaths.map((imgPath) => (
                    <img src={require(imgPath)} alt=""/>
                ))}
                <img src={require('../../images/part/01.jpg')} alt=""/>
                {/*<img src={img1} alt=""/>*/}
                {/*<img src={img1} alt=""/>*/}
                {/*<img src={img1} alt=""/>*/}
                {/*<img src={img1} alt=""/>*/}
                {/*<img src={img1} alt=""/>*/}
                {/*<img src={img1} alt=""/>*/}
                {/*<img src={img1} alt=""/>*/}
            </Introduce>
        </Layout>
    );
};

export default WagyuPage;
