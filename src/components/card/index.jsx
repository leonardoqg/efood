// src/components/Card/index.jsx
import styled from "styled-components";

const CardContainer = styled.div`
    width: 280px;
    border-radius: 12px;
    background: #fff;
    box-shadow: 0 4px 12px rgba(0,0,0,0.08);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    `;

    const Image = styled.img`
    width: 100%;
    height: 180px;
    object-fit: cover;
    `;

    const Content = styled.div`
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    `;

    const Title = styled.h3`
    font-size: 18px;
    font-weight: 600;
    color: #333;
    `;

    const Description = styled.p`
    font-size: 14px;
    color: #666;
    `;

    const Price = styled.span`
    font-size: 16px;
    font-weight: bold;
    color: #e63946;
    `;

    const Button = styled.button`
    margin-top: 12px;
    padding: 12px;
    background: #e63946;
    color: #fff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
    transition: background 0.2s;

    &:hover {
        background: #d62839;
    }
    `;

    export default function Card({ id, nome, descricao, preco, imagem, onAdd }) {
    return (
        <CardContainer>
        <Image src={imagem} alt={nome} />
        <Content>
            <Title>{nome}</Title>
            <Description>{descricao}</Description>
            <Price>R$ {preco}</Price>
            <Button onClick={() => onAdd({ id, nome, preco })}>
            Adicionar ao Carrinho
            </Button>
        </Content>
        </CardContainer>
    );
}