// src/routes/index.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Perfil from "../pages/perfil";
import Carrinho from "../pages/carrinho";
import Entrega from "../pages/entrega";
import Pagamento from "../pages/pagamento";
import Confirmacao from "../pages/confirmacao";

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