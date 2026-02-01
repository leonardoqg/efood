// src/components/Banner/index.jsx
import styled from "styled-components";

const BannerContainer = styled.div`
    background: url("/banner.jpg") center/cover no-repeat;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 32px;
    font-weight: bold;
`;

export default function Banner() {
    return <BannerContainer>Bem-vindo ao Efood!</BannerContainer>;
}