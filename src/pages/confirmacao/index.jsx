// src/pages/Confirmacao/index.jsx
import styled from "styled-components";

const Container = styled.div`
    max-width: 500px;
    margin: 60px auto;
    text-align: center;
`;

export default function Confirmacao() {
    return (
        <Container>
            <h2>Pedido Confirmado 🎉</h2>
            <p>Seu pedido foi realizado com sucesso!</p>
            <p>Em breve você receberá no endereço informado.</p>
            <button>Voltar para Home</button>
        </Container>
    );
}