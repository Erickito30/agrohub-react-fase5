import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

// Estrutura comum a todas as páginas: header fixo no topo, conteúdo da rota
// atual no meio e footer no final — igual ao padrão repetido em cada .html.
export default function Layout() {
  return (
    <div className="ah-page">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
