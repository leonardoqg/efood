// src/components/Form/index.jsx
import styled from "styled-components";

const FormContainer = styled.form`
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

const Button = styled.button`
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

export default function Form({ title, fields, onSubmit }) {
    return (
        <FormContainer onSubmit={onSubmit}>
        <h2>{title}</h2>
        {fields.map((field, i) => (
            <Input key={i} placeholder={field} />
        ))}
        <Button type="submit">Continuar</Button>
        </FormContainer>
    );
}