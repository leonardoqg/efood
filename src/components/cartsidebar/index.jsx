// src/components/CartSidebar/index.jsx
import styled from "styled-components";

const Sidebar = styled.div`
    position: fixed;
    right: 0;
    top: 0;
    width: 350px;
    height: 100%;
    background: #fff;
    box-shadow: -2px 0 8px rgba(0,0,0,0.1);
    padding: 20px;
    display: flex;
    flex-direction: column;
`;

const Item = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;
`;

const Button = styled.button`
    margin-top: auto;
    padding: 12px;
    background: #e63946;
    color: #fff;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;

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
        <hr />
        <h3>Total: R$ {total.toFixed(2)}</h3>
        <Button>Finalizar Pedido</Button>
        </Sidebar>
    );
}