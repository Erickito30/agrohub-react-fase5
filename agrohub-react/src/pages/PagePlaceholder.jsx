// Página provisória usada até que o conteúdo de cada .html seja migrado
// nas próximas fases (cadastro, produtor, ong, contato).
export default function PagePlaceholder({ title, sourceFile }) {
  return (
    <section className="ah-page-hero">
      <div className="container">
        <span className="ah-eyebrow">Em migração</span>
        <h1 className="ah-title mb-3">{title}</h1>
        <p className="ah-lead mb-0">
          Conteúdo original em <code>{sourceFile}</code> ainda será migrado
          para React em uma próxima fase.
        </p>
      </div>
    </section>
  );
}
