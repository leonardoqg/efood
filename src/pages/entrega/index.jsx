// src/pages/Entrega/index.jsx
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

export default function Entrega() {
    return (
        <Form>
            <h2>Dados de Entrega</h2>
            <Input placeholder="Endereço" />
            <Input placeholder="Complemento" />
            <Input placeholder="Cidade" />
            <Input placeholder="CEP" />
            <button type="submit">Continuar</button>
        </Form>
    );
}