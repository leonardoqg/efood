// src/pages/Perfil/index.js
import { useState } from "react";
import Card from "../../components/Card";
import Modal from "../../components/Modal";

export default function Perfil() {
    const [produtoSelecionado, setProdutoSelecionado] = useState(null);

    const produtos = [
        { id: 1, nome: "Pizza Margherita", descricao: "Clássica italiana", preco: "R$ 39,90", imagem: "/pizza.jpg" }
    ];

    return (
        <>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
                {produtos.map((item) => (
                    <Card key={item.id} {...item} onClick={() => setProdutoSelecionado(item)} />
        ))}
            </div>
            {produtoSelecionado && <Modal produto={produtoSelecionado} onClose={() => setProdutoSelecionado(null)} />}
        </>
    );
}