import { useState } from "react";
import { NavLink } from "react-router-dom";
import agrohubLogo from "../assets/agrohub_logo.svg";
import { useNotifications } from "../context/NotificationsContext.jsx";

// Itens do menu principal, na mesma ordem usada nas páginas HTML originais.
const NAV_LINKS = [
  { to: "/", label: "Início" },
  { to: "/cadastro", label: "Cadastre-se" },
  { to: "/produtor", label: "Sou produtor" },
  { to: "/ong", label: "Sou ONG" },
  { to: "/contato", label: "Fale conosco" },
];

// Header/navbar compartilhado por todas as páginas.
// Substitui a navbar duplicada em index.html, cadastro.html, produtor.html,
// ong.html e contato.html, além da lógica de setActiveNav() e initMobileMenu()
// que existiam em main.js.
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const { notifications, unreadCount, markAllAsRead } = useNotifications();

  const closeMenu = () => setIsMenuOpen(false);

  const toggleNotifications = () => {
    if (!isNotificationsOpen) {
      markAllAsRead();
    }

    setIsNotificationsOpen((open) => !open);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark ah-navbar">
      <div className="container">
        <NavLink
          className="navbar-brand"
          to="/"
          aria-label="AgroHub - Início"
          onClick={closeMenu}
        >
          <img className="ah-logo" src={agrohubLogo} alt="AgroHub" />
        </NavLink>

        <div className="ah-notifications">
          <button
            className="ah-notifications-toggle"
            type="button"
            aria-haspopup="true"
            aria-expanded={isNotificationsOpen}
            aria-label="Notificações"
            onClick={toggleNotifications}
          >
            🔔
            {unreadCount > 0 && (
              <span className="ah-badge ah-badge-warning ah-notifications-count">
                {unreadCount}
              </span>
            )}
          </button>

          {isNotificationsOpen && (
            <div className="ah-notifications-panel" role="menu">
              <p className="ah-notifications-title">Notificações</p>
              {notifications.length === 0 ? (
                <p className="ah-empty show">Nenhuma notificação ainda.</p>
              ) : (
                <ul className="ah-notifications-list">
                  {notifications.map((item) => (
                    <li key={item.id}>
                      <p className="ah-item-title">{item.mensagem}</p>
                      <p className="ah-item-meta">{item.hora}</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>

        <button
          className="navbar-toggler ah-nav-toggle"
          type="button"
          aria-controls="ahNavbar"
          aria-expanded={isMenuOpen}
          aria-label="Abrir menu"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse${isMenuOpen ? " show" : ""}`}
          id="ahNavbar"
        >
          <div className="navbar-nav ms-auto gap-lg-3">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `ah-nav-link${isActive ? " active" : ""}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
