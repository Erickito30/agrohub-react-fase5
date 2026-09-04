import { useNotifications } from "../context/NotificationsContext.jsx";

const benefitCards = [
  {
    title: "Destino certo",
    text: "A ONG parceira encontra rapidamente o alimento disponível.",
  },
  {
    title: "Menos desperdício",
    text: "O excedente sai da propriedade antes de perder qualidade.",
  },
  {
    title: "Impacto social",
    text: "A contribuição vira histórico e indicador para relatórios.",
  },
];

export default function Produtor() {
  const { addExcedente } = useNotifications();

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const successMessage = form.querySelector("[data-form-success]");

    form.classList.remove("was-validated");

    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      form.querySelector(":invalid")?.focus();
      if (successMessage) {
        successMessage.classList.add("d-none");
        successMessage.setAttribute("hidden", "hidden");
      }
      return;
    }

    const data = new FormData(form);
    addExcedente({
      produto: data.get("produto"),
      quantidade: data.get("quantidade"),
      validade: data.get("validade"),
      retirada: data.get("retirada"),
    });

    if (successMessage) {
      successMessage.classList.remove("d-none");
      successMessage.removeAttribute("hidden");
      successMessage.setAttribute("role", "status");
    }

    form.reset();
    form.classList.remove("was-validated");
  };

  return (
    <>
      <section className="ah-page-hero">
        <div className="container">
          <span className="ah-eyebrow">José Soares - Produtor rural</span>
          <h1 className="ah-title mb-3">Registre excedentes em poucos campos.</h1>
          <p className="ah-lead mb-0">
            A persona do produtor tem baixa familiaridade com tecnologia. Por
            isso, o formulário usa apenas 4 campos essenciais.
          </p>
        </div>
      </section>

      <section className="ah-section">
        <div className="container">
          <div className="row g-3 mb-4">
            {benefitCards.map((card) => (
              <div key={card.title} className="col-md-4">
                <article className="ah-card">
                  <h2 className="ah-card-title h5">{card.title}</h2>
                  <p className="ah-text-muted mb-0">{card.text}</p>
                </article>
              </div>
            ))}
          </div>

          <div className="ah-panel">
            <span className="ah-eyebrow">Novo excedente</span>
            <h2 className="ah-section-title mb-4">
              Cadastrar alimento disponível
            </h2>
            <form data-ah-form noValidate onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label fw-bold" htmlFor="produto">
                    Produto
                  </label>
                  <input
                    className="form-control ah-form-control"
                    id="produto"
                    name="produto"
                    type="text"
                    placeholder="Ex.: cenoura"
                    required
                  />
                  <div className="invalid-feedback">Informe o produto disponível.</div>
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-bold" htmlFor="quantidade">
                    Quantidade
                  </label>
                  <input
                    className="form-control ah-form-control"
                    id="quantidade"
                    name="quantidade"
                    type="text"
                    placeholder="Ex.: 150 kg"
                    required
                  />
                  <div className="invalid-feedback">Informe a quantidade aproximada.</div>
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-bold" htmlFor="validade">
                    Disponível até
                  </label>
                  <input
                    className="form-control ah-form-control"
                    id="validade"
                    name="validade"
                    type="date"
                    required
                  />
                  <div className="invalid-feedback">
                    Informe até quando o alimento estará disponível.
                  </div>
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-bold" htmlFor="retirada">
                    Local de retirada
                  </label>
                  <input
                    className="form-control ah-form-control"
                    id="retirada"
                    name="retirada"
                    type="text"
                    autoComplete="street-address"
                    required
                  />
                  <div className="invalid-feedback">Informe o local de retirada.</div>
                </div>

                <div className="col-12">
                  <p className="ah-success d-none p-3 mb-3" data-form-success hidden>
                    Excedente registrado com sucesso.
                  </p>
                  <button className="ah-btn" type="submit">
                    Registrar excedente
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
