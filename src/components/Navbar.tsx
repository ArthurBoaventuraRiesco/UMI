type Tela = "dashboard" | "cadastro" | "relatorio";

interface NavbarProps {
  telaAtual: Tela;
  alterarTela: (tela: Tela) => void;
}

export function Navbar({ telaAtual, alterarTela }: NavbarProps) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm">
      <div className="container-fluid px-4">
        <span className="navbar-brand fw-bold">Painel UMI</span>

        <div className="d-flex gap-2 flex-wrap justify-content-center justify-content-lg-end">
          <button
            className={`btn btn-sm ${
              telaAtual === "dashboard" ? "btn-success" : "btn-outline-success"
            }`}
            onClick={() => alterarTela("dashboard")}
          >
            Dashboard
          </button>

          <button
            className={`btn btn-sm ${
              telaAtual === "cadastro" ? "btn-success" : "btn-outline-success"
            }`}
            onClick={() => alterarTela("cadastro")}
          >
            Cadastrar Sensor
          </button>

          <button
            className={`btn btn-sm ${
              telaAtual === "relatorio" ? "btn-success" : "btn-outline-success"
            }`}
            onClick={() => alterarTela("relatorio")}
          >
            Relatório
          </button>
        </div>
      </div>
    </nav>
  );
}