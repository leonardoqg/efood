// src/routes/index.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Perfil from "../pages/Perfil";
import Carrinho from "../pages/Carrinho";
import Entrega from "../pages/Entrega";
import Pagamento from "../pages/Pagamento";
import Confirmacao from "../pages/Confirmacao";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/perfil" element={<Perfil />} />
                <Route path="/carrinho" element={<Carrinho />} />
                <Route path="/entrega" element={<Entrega />} />
                <Route path="/pagamento" element={<Pagamento />} />
                <Route path="/confirmacao" element={<Confirmacao />} />
            </Routes>
        </BrowserRouter>
    );
}