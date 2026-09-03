import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Cadastro from "./pages/Cadastro.jsx";
import Produtor from "./pages/Produtor.jsx";
import Ong from "./pages/Ong.jsx";
import Contato from "./pages/Contato.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/produtor" element={<Produtor />} />
        <Route path="/ong" element={<Ong />} />
        <Route path="/contato" element={<Contato />} />
      </Route>
    </Routes>
  );
}
