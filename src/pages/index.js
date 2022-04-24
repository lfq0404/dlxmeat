import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import arrow from "../images/adorn/carousel-arrow.png";
let playInterval = null;
const Container = styled.div`
  height: 100%;
  min-height: 720px;
  max-width: 1920px;
  margin: 0 auto;
  position: relative;
`;
const Inner = styled.ul`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin: 0;
  padding: 0;
`;
const InnerItem = styled.li`
  list-style: none;
  /* position: relative; */
  display: ${({ active }) => (active ? "block" : "none")};
  width: 100%;
  height: 100%;
  float: left;
  margin-right: -100%;
  /* backface-visibiinneritemty: hidden; */
  transition: transform 0.6s ease-in-out;
`;

const NaviButton = styled.button`
  position: absolute;
  height: 152px;
  width: 152px;
  border-radius: 76px;
  top: 50%;
  transform: translateY(-76px);
  border: none;
  background: transparent;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.6);
  background-image: url(${arrow});
  transition: all ease 0.3s;
  opacity: 0.8;
  :hover {
    opacity: 1;
  }
`;
const PrevButton = styled(NaviButton)`
  left: 110px;
`;
const NextButton = styled(NaviButton)`
  right: 110px;
  transform: translateY(-76px) rotateY(180deg);
`;
const QuickWrap = styled.div`
  position: absolute;
  bottom: 120px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  padding: 24px 262px;

  > a {
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

const IndexCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    playInterval && clearInterval(playInterval);
    if (!isPaused) {
      playInterval = setInterval(handleNext, 5000);
    }

    return () => {
      playInterval && clearInterval(playInterval);
    };
  }, [isPaused]);

  const handlePrev = () => {
    setCurrent((prevCurrent) => {
      return prevCurrent === 0 ? 4 : prevCurrent - 1;
    });
  };
  const handleNext = () => {
    setCurrent((prevCurrent) => {
      return prevCurrent === 4 ? 0 : prevCurrent + 1;
    });
  };
  const handleMouseEnter = (e) => {
    setIsPaused(true);
  };
  const handleMouseLeave = (e) => {
    setIsPaused(false);
  };
  return (
    <Container onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Inner>
        <InnerItem active={current === 4}>
          <StaticImage
            src="../images/banner/01.jpg"
            alt="banner"
            style={{ height: "100%" }}
          />
        </InnerItem>
        <InnerItem active={current === 3}>
          <StaticImage
            src="../images/banner/02.jpg"
            alt="banner"
            style={{ height: "100%" }}
          />
        </InnerItem>
        <InnerItem active={current === 2}>
          <StaticImage
            src="../images/banner/03.jpg"
            alt="banner"
            style={{ height: "100%" }}
          />
        </InnerItem>
        <InnerItem active={current === 1}>
          <StaticImage
            src="../images/banner/04.jpg"
            alt="banner"
            style={{ height: "100%" }}
          />
        </InnerItem>
        <InnerItem active={current === 0}>
          <StaticImage
            src="../images/banner/05.jpg"
            alt="banner"
            style={{ height: "100%" }}
          />
        </InnerItem>
      </Inner>
      <PrevButton onClick={handlePrev} />
      <NextButton onClick={handleNext} />
      <QuickWrap>
        <Link to="/domestic">国产肉类</Link>
        <Link to="/import">进口肉类</Link>
      </QuickWrap>
    </Container>
  );
};

const IndexPage = () => {
  return (
    <Layout contentStyle={{ background: "#000" }}>
      <IndexCarousel />
    </Layout>
  );
};

export default IndexPage;
