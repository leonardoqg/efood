// src/components/CartSidebar/index.jsx
import styled from "styled-components";

const Sidebar = styled.div`
    position: fixed;
    right: 0;
    top: 0;
    width: 360px;
    height: 100%;
    background: #fff;
    box-shadow: -4px 0 12px rgba(0,0,0,0.1);
    padding: 24px;
    display: flex;
    flex-direction: column;
    `;

    const Item = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
    font-size: 14px;
    `;

    const Total = styled.h3`
    margin-top: auto;
    font-size: 18px;
    font-weight: bold;
    color: #333;
    `;

    const CheckoutButton = styled.button`
    margin-top: 16px;
    padding: 14px;
    background: #e63946;
    color: #fff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;

    &:hover {
        background: #d62839;
    }
    `;

    export default function CartSidebar({ itens }) {
    const total = itens.reduce((acc, item) => acc + item.qtd * item.preco, 0);

    return (
        <Sidebar>
        <h2>Seu Carrinho</h2>
        {itens.map((item, i) => (
            <Item key={i}>
            <span>{item.nome} x{item.qtd}</span>
            <strong>R$ {(item.qtd * item.preco).toFixed(2)}</strong>
            </Item>
        ))}
        <Total>Total: R$ {total.toFixed(2)}</Total>
        <CheckoutButton>Finalizar Pedido</CheckoutButton>
        </Sidebar>
    );
}