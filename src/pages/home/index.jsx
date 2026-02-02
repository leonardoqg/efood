// src/pages/Home/index.jsx
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import { useState } from "react";
import CartSidebar from "../../components/CartSidebar";

export default function Home() {
    const [carrinho, setCarrinho] = useState([]);

    const produtos = [
        { id: 1, nome: "Pizza Margherita", descricao: "Clássica italiana", preco: 39.9, imagem: "/pizza.jpg" },
        { id: 2, nome: "Hambúrguer Artesanal", descricao: "Com queijo cheddar", preco: 29.9, imagem: "/burger.jpg" }
    ];

    const adicionarAoCarrinho = (produto) => {
        setCarrinho([...carrinho, { ...produto, qtd: 1 }]);
    };

    return (
        <>
        <Banner />
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            {produtos.map((item) => (
            <Card key={item.id} {...item} onAdd={adicionarAoCarrinho} />
            ))}
        </div>

        {/* Carrinho lateral */}
        <CartSidebar itens={carrinho} />
        </>
    );
}