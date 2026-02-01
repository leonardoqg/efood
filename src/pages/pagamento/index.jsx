// src/pages/Pagamento/index.jsx
import styled from "styled-components";

const Form = styled.form`
    max-width: 400px;
    margin: 40px auto;
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

const Input = styled.input`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 6px;
`;

export default function Pagamento() {
    return (
        <Form>
            <h2>Pagamento</h2>
            <Input placeholder="Número do Cartão" />
            <Input placeholder="Nome no Cartão" />
            <Input placeholder="Validade (MM/AA)" />
            <Input placeholder="CVV" />
            <button type="submit">Confirmar Pagamento</button>
        </Form>
    );
}