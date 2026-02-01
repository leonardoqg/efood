// src/components/Card/index.jsx
import styled from "styled-components";

const CardContainer = styled.div`
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    padding: 16px;
    width: 250px;
`;

const Image = styled.img`
    width: 100%;
    border-radius: 8px;
`;

const Title = styled.h3`
    margin: 12px 0 8px;
    font-size: 18px;
`;

const Price = styled.p`
    font-weight: bold;
    color: #e63946;
`;

export default function Card({ imagem, nome, descricao, preco }) {
    return (
        <CardContainer>
            <Image src={imagem} alt={nome} />
            <Title>{nome}</Title>
            <p>{descricao}</p>
            <Price>{preco}</Price>
        </CardContainer>
    );
}