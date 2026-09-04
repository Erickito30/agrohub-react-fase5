# AgroHub — Fase 5: React + nova funcionalidade + Pitch + Deploy

Este projeto representa a evolução da versão do AgroHub para React, seguindo a referência da Fase 4 e aplicando as exigências da Fase 5.

## Visão geral

A proposta da fase atual é consolidar a aplicação em React, manter a identidade visual do projeto e desenvolver uma nova funcionalidade de valor para o produto.

A equipe deve considerar a Fase 4 como referência de comportamento, layout e fluxo, mas aplicar o conceito de React em toda a construção da versão final da Fase 5.

---

## 1.1 Site

### 1.1.1 Considerar a Fase 4 como referência

A versão da Fase 4 deve continuar sendo usada como base visual e funcional para a Fase 5. A nova implementação deve preservar o estilo do produto e melhorar a experiência do usuário, sem perder a coerência do projeto.

### 1.1.2 Aplicar React em toda a construção

A aplicação deve ser construída em React, com organização por componentes e roteamento entre as páginas. O projeto já está estruturado em módulos e páginas, com o uso do React Router e componentes reutilizáveis.

### 1.1.3 Implementar uma nova funcionalidade

Além das funcionalidades já desenvolvidas na Fase 4, a equipe deve acrescentar uma nova funcionalidade de seu interesse, com foco em resolver um problema real do sistema.

A sugestão recomendada para esta fase é:

- painel de acompanhamento de impacto em tempo real;
- cálculo de doação por tipo de produto;
- agendamento inteligente de coletas;
- dashboard de indicadores por região;
- histórico de doações por ONG ou produtor;
- notificações de disponibilidade urgente.

O mais importante é que a nova funcionalidade seja útil, integrada ao restante da aplicação e explicada no vídeo de pitch.

---

## O que já foi migrado para React

O projeto já está com a estrutura base migrada e funcional:

- Header e navbar responsiva
- Footer compartilhado
- Layout com rotas globais
- Páginas: Home, Cadastro, Produtor, ONG e Contato
- Roteamento com React Router
- Estilos globais preservados com CSS do projeto
- Simulador de impacto na Home
- Filtros e agendamento de coleta na página da ONG
- Validação do formulário de contato
- FAQ em React sem depender do Bootstrap JS

Arquitetura atual:

- `src/App.jsx` — definição das rotas
- `src/components/Header.jsx` — menu principal
- `src/components/Footer.jsx` — rodapé
- `src/components/Layout.jsx` — estrutura comum das páginas
- `src/context/` — estado compartilhado entre páginas (Context API)
- `src/pages/` — cada página do site em componente React
- `src/agrohub.css` — estilos do projeto

---

## Nova funcionalidade (Fase 5): Sistema de notificações

Requisito do item 1.1.3 — funcionalidade nova além do que já existia na Fase 4.

**O que faz:** quando um produtor cadastra um excedente na página "Sou produtor", o
sistema gera uma notificação em tempo real (sino no menu, visível em qualquer
página) e o excedente aparece automaticamente na lista da página "Sou ONG",
com o selo "Novo" — sem precisar recarregar a página.

**Como foi implementado em React:**

- `src/context/NotificationsContext.jsx` — Context API guardando duas listas em
  `useState`: `notifications` e `excedentes`. É consumido por três componentes que
  não têm relação pai/filho entre si (`Header`, `Produtor`, `Ong`), então Context
  foi a forma de evitar prop-drilling.
- `Produtor.jsx` — no `handleSubmit`, os dados do formulário (produto, quantidade,
  validade, local de retirada) alimentam `addExcedente()`, que gera o excedente e a
  notificação a partir da mesma submissão.
- `Header.jsx` — sino com contador de não lidas e dropdown com o histórico de
  notificações, usando `useNotifications()`.
- `Ong.jsx` — a lista exibida é a junção dos excedentes vindos do Context com os
  itens de exemplo já existentes; o agendamento (`handleSchedule`) passou a
  funcionar por `id` num `Set` de agendados, então funciona tanto para os itens
  fixos quanto para os cadastrados dinamicamente.

**Como testar:** rode o projeto, vá em "Sou produtor", cadastre um excedente e
observe o sino no topo. Depois entre em "Sou ONG" (pelo menu, sem recarregar a
página) — o item cadastrado aparece no topo da lista.

---

## Como rodar o projeto

```bash
npm install
npm run dev
```

A aplicação fica disponível no ambiente local do Vite para visualização e testes.

---

## 1.2 Vídeo

### 1.2.1 Pitch Vídeo (PV) de até 3 minutos

O vídeo da Fase 5 deve apresentar somente a nova funcionalidade desenvolvida pela equipe.

O conteúdo do vídeo deve incluir:

- apresentação da nova funcionalidade;
- explicação de como foi aplicado o React na nova versão do projeto;
- destaque para a melhoria de experiência do usuário;
- demonstração do fluxo principal da funcionalidade.

Importante:

- o vídeo deve ter até 3 minutos;
- deve ser postado em uma plataforma de compartilhamento (como YouTube);
- o link do vídeo deve estar presente na Home do projeto;
- não enviar o arquivo do vídeo.

### Entregável do vídeo

Além do link do vídeo na Home, a equipe também precisa entregar um arquivo PDF com:

- nome completo dos integrantes;
- link do vídeo;
- link do deploy.

Esse PDF deve ser preparado com atenção, e os links precisam ser conferidos antes de finalizar a entrega.

---

## 1.3 Deploy

### 1.3.1 O que é deploy

Deploy é o processo de publicar a aplicação na internet, tornando o site acessível publicamente pela web.

### 1.3.2 Provedores gratuitos

A aplicação pode ser hospedada em plataformas gratuitas, como:

- Vercel
- Netlify
- GitHub Pages

Abaixo, alguns materiais de referência:

- https://youtu.be/e_92Fz99q18
- https://youtu.be/8jttLYYDWjo?si=YrPZkZNw0nFnvlpG
- https://youtu.be/UIg8MAzxtlg
- https://www.youtube.com/watch?v=e7L_8XVQBik

### 1.3.3 Link do deploy

O link do deploy deve ser inserido no arquivo texto do item 1.2.1, junto com o nome dos integrantes e o link do vídeo.

---

## Checklist de entrega da Fase 5

Antes de concluir a entrega, confirme que:

- [x] o projeto está em React;
- [x] a Fase 4 foi usada como referência;
- [x] a nova funcionalidade foi implementada (sistema de notificações);
- [ ] a Home contém o link do vídeo;
- [ ] o PDF está com nomes completos, link do vídeo e link do deploy;
- [ ] o deploy está funcionando corretamente;
- [ ] o site está consistente visualmente e funcionalmente.

---

## Sugestão de organização da equipe

Para facilitar a execução da fase:

1. Front-end: estrutura React, páginas e componentes
2. Funcionalidade nova: planejamento, desenvolvimento e validação
3. Vídeo: gravação, edição e upload do pitch
4. Deploy: publicação da aplicação e validação do link
5. Entrega final: PDF, checklist e revisão final dos links

---

## Observação final

A Fase 5 não é apenas uma migração visual. Ela deve demonstrar que a equipe entende o produto, sabe transformar o protótipo em uma aplicação funcional em React e consegue entregar uma versão mais robusta, com nova funcionalidade, pitch, publicação e deploy.

O resultado esperado é uma aplicação consistente, navegável e pronta para apresentação pública.

