// src/pages/Home/index.js
import Banner from "../../components/banner";
import Card from "../../components/card";

export default function Home() {
    const produtos = [
        { id: 1, nome: "Pizza Margherita", descricao: "Clássica italiana", preco: "R$ 39,90", imagem: "/pizza.jpg" },
        { id: 2, nome: "Hambúrguer Artesanal", descricao: "Com queijo cheddar", preco: "R$ 29,90", imagem: "/burger.jpg" }
    ];

    return (
        <>
        <Banner />
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            {produtos.map((item) => (
                <Card key={item.id} {...item} />
            ))}
        </div>
        </>
    );
}