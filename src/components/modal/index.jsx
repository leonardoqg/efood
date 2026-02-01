// src/components/Modal/index.jsx
import styled from "styled-components";

const Overlay = styled.div`
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: rgba(0,0,0,0.6);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ModalBox = styled.div`
    background: #fff;
    border-radius: 8px;
    padding: 24px;
    width: 400px;
`;

export default function Modal({ produto, onClose }) {
    return (
        <Overlay onClick={onClose}>
            <ModalBox onClick={(e) => e.stopPropagation()}>
                <img src={produto.imagem} alt={produto.nome} style={{ width: "100%", borderRadius: "8px" }} />
                <h2>{produto.nome}</h2>
                <p>{produto.descricao}</p>
                <p><strong>{produto.preco}</strong></p>
                <button onClick={onClose}>Fechar</button>
            </ModalBox>
        </Overlay>
    );
}