# Status Fase 5 — AgroHub (atualizado)

Oi pessoal! Resumo rápido do que foi feito e o que falta, pra gente se organizar.

## ✅ O que já está pronto

- **Setup React (Erick):** estrutura completa, roteamento, Header/Footer/Layout
  reutilizáveis — feito.
- **Migração das páginas (Pietro):** Home, Cadastro, Produtor, ONG e Contato já
  estão em React, reaproveitando o CSS/design original.
- **Dashboard da ONG (Lucas):** já estava migrada desde o setup inicial do Erick
  (filtros, agendamento de coleta, tudo com `useState`).
- **Nova funcionalidade (Lucas, cobrindo o que seria do Navarro):** sistema de
  notificações. Quando o produtor cadastra um excedente,:
  1. aparece uma notificação no sino do menu (funciona em qualquer página);
  2. o excedente entra automaticamente na lista da página da ONG, com selo "Novo";
  3. dá pra agendar a coleta normalmente, igual os itens de exemplo.

  Já testei o fluxo completo no navegador, sem erros. Commitado no repo.

## ⚠️ O que falta (nessa ordem, um depende do outro)

1. **Vídeo Pitch (até 3 min)** — precisa mostrar SÓ a funcionalidade nova
   (notificações) + explicar como foi feito em React. A funcionalidade já está
   pronta, então já dá pra gravar.
   - roteiro → gravação da tela → edição → upload no YouTube (pode ser não
     listado) → colocar o link na Home (`Home.jsx`, seção "Pitch Vídeo" já
     existe, só falta adicionar o card da Fase 5).

2. **Deploy** (Vercel, Netlify ou GitHub Pages) — o projeto ainda não está
   publicado em lugar nenhum. É só rodar `npm run build` dentro de
   `agrohub-react/` e subir — sem segredo, tem os vídeos de referência no README.

3. **PDF final** — nomes completos do grupo + link do vídeo + link do deploy.
   Só pode ser feito depois dos itens 1 e 2, porque precisa dos links prontos.
   **Conferir os dois links antes de mandar.**

4. **Validação final** — testar o site inteiro, checar se o link do vídeo tá na
   Home, se o deploy tá no ar, se o README tá coerente (já atualizei a parte
   técnica).

## Como rodar o projeto pra ver o que foi feito

```bash
cd agrohub-react
npm install
npm run dev
```

Testa em "Sou produtor" → cadastra um excedente → olha o sino no topo → vai em
"Sou ONG" → o item aparece lá.

## Quem toca o quê agora

Como o vídeo e o deploy têm prioridade (um trava o PDF), faz sentido dividir:
alguém pega o roteiro/gravação do vídeo, outra pessoa já sobe o deploy em
paralelo. O PDF e a validação final ficam pra quando os dois primeiros
estiverem prontos.
