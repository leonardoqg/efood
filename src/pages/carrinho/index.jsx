// src/pages/Carrinho/index.jsx
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
`;

const Item = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;
`;

export default function Carrinho() {
    const itens = [
        { nome: "Pizza Margherita", qtd: 1, preco: 39.9 },
        { nome: "Hambúrguer Artesanal", qtd: 2, preco: 29.9 }
    ];

    const total = itens.reduce((acc, item) => acc + item.qtd * item.preco, 0);

    return (
        <Sidebar>
            <h2>Seu Carrinho</h2>
            {itens.map((item, i) => (
                <Item key={i}>
                    <span>{item.nome} x{item.qtd}</span>
            <strong>R$ {item.qtd * item.preco}</strong>
            </Item>
        ))}
        <hr />
        <h3>Total: R$ {total.toFixed(2)}</h3>
        <button>Finalizar Pedido</button>
        </Sidebar>
    );
}