import styled from "styled-components";

export const Introduce = styled.li`
    list-style: none;
    margin-top: 6%;
    width: 1400px;
    margin-left: 100px;
    margin-bottom: 100px;

    img {
        width: 350px;
        margin-right: 100px;
    }
`;

export const QuickJump = styled.div`
    margin-top: 8%;
    display: flex;
    border-bottom: solid;

    a {
        margin-left: 280px;
        width: 315px;
        height: 75px;
        background-color: rgba(0, 0, 0, 0.8);
        text-align: center;
        line-height: 75px;
        color: #fff;
        font-size: 30px;
        font-weight: bolder;

        :active {
            background: #d11c21;
        }

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