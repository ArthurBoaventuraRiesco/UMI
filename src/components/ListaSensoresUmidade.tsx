import type { ISensorUmidade } from "../interfaces/ISensorUmidade";
import { SensorUmidadeCard } from "./SensorUmidadeCard";

type FiltroStatus = "Todos" | "Normal" | "Atenção" | "Crítico";

interface ListaSensoresUmidadeProps {
  sensores: ISensorUmidade[];
  filtroStatus: FiltroStatus;
  alterarFiltroStatus: (filtro: FiltroStatus) => void;
  atualizarLeitura: (id: number) => void;
  excluirSensor: (id: number) => void;
}

export function ListaSensoresUmidade({
  sensores,
  filtroStatus,
  alterarFiltroStatus,
  atualizarLeitura,
  excluirSensor,
}: ListaSensoresUmidadeProps) {
  return (
    <section aria-label="Lista de sensores de umidade">
      <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-3">
        <h2 className="h4 mb-0">Sensores de umidade do solo</h2>

        <div className="d-flex gap-2 flex-wrap">
          <button
            className={`btn btn-sm ${
              filtroStatus === "Todos" ? "btn-secondary" : "btn-outline-secondary"
            }`}
            onClick={() => alterarFiltroStatus("Todos")}
          >
            Todos
          </button>

          <button
            className={`btn btn-sm ${
              filtroStatus === "Normal" ? "btn-success" : "btn-outline-success"
            }`}
            onClick={() => alterarFiltroStatus("Normal")}
          >
            Normal
          </button>

          <button
            className={`btn btn-sm ${
              filtroStatus === "Atenção" ? "btn-warning" : "btn-outline-warning"
            }`}
            onClick={() => alterarFiltroStatus("Atenção")}
          >
            Atenção
          </button>

          <button
            className={`btn btn-sm ${
              filtroStatus === "Crítico" ? "btn-danger" : "btn-outline-danger"
            }`}
            onClick={() => alterarFiltroStatus("Crítico")}
          >
            Crítico
          </button>
        </div>
      </div>

      {sensores.length === 0 ? (
        <div className="alert alert-warning">
          Nenhum sensor encontrado para o filtro selecionado.
        </div>
      ) : (
        <div className="row g-3">
          {sensores.map((sensor) => (
            <div className="col-12 col-md-6 col-lg-4" key={sensor.id}>
              <SensorUmidadeCard
                sensor={sensor}
                atualizarLeitura={atualizarLeitura}
                excluirSensor={excluirSensor}
              />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}