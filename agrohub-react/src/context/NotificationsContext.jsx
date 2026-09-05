import { createContext, useContext, useState } from "react";

// Compartilha excedentes cadastrados pelo produtor e as notificações
// geradas a partir deles entre páginas que não têm relação pai/filho
// (Produtor, Header e ONG).
const NotificationsContext = createContext(null);

const CATEGORY_ICONS = {
  graos: "G",
  hortifruti: "H",
  laticinios: "L",
};

function guessCategory(produto) {
  const value = produto.toLowerCase();
  if (/leite|queijo|iogurte|manteiga/.test(value)) return "laticinios";
  if (/milho|arroz|feijao|feijão|trigo|soja/.test(value)) return "graos";
  return "hortifruti";
}

function formatDate(date) {
  const [year, month, day] = date.split("-");
  return `${day}/${month}/${year}`;
}

export function NotificationsProvider({ children }) {
  const [notifications, setNotifications] = useState([]);
  const [excedentes, setExcedentes] = useState([]);

  const addExcedente = ({ produto, quantidade, validade, retirada }) => {
    const id = Date.now();
    const category = guessCategory(produto);

    const excedente = {
      id,
      category,
      distance: 0,
      title: `${produto} - ${quantidade}`,
      meta: `${retirada} - até ${formatDate(validade)}`,
      badge: "Novo",
      priority: "warning",
      scheduled: false,
      icon: CATEGORY_ICONS[category] ?? produto.charAt(0).toUpperCase(),
    };

    const notification = {
      id,
      mensagem: `Novo excedente cadastrado: ${produto} (${quantidade})`,
      hora: new Date().toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
      }),
      lida: false,
    };

    setExcedentes((current) => [excedente, ...current]);
    setNotifications((current) => [notification, ...current]);
  };

  const markAllAsRead = () => {
    setNotifications((current) => current.map((item) => ({ ...item, lida: true })));
  };

  const unreadCount = notifications.filter((item) => !item.lida).length;

  return (
    <NotificationsContext.Provider
      value={{ notifications, excedentes, addExcedente, markAllAsRead, unreadCount }}
    >
      {children}
    </NotificationsContext.Provider>
  );
}

export function useNotifications() {
  const context = useContext(NotificationsContext);
  if (!context) {
    throw new Error("useNotifications precisa ser usado dentro de NotificationsProvider");
  }
  return context;
}
