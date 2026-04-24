import type { ISensorUmidade } from "../interfaces/ISensorUmidade";

interface RelatorioUmidadeProps {
  sensores: ISensorUmidade[];
}

export function RelatorioUmidade({ sensores }: RelatorioUmidadeProps) {
  const totalSensores = sensores.length;

  const sensoresNormais = sensores.filter(
    (sensor) => sensor.status === "Normal"
  ).length;

  const sensoresAtencao = sensores.filter(
    (sensor) => sensor.status === "Atenção"
  ).length;

  const sensoresCriticos = sensores.filter(
    (sensor) => sensor.status === "Crítico"
  ).length;

  const mediaUmidade =
    totalSensores > 0
      ? sensores.reduce((soma, sensor) => soma + sensor.umidade, 0) /
        totalSensores
      : 0;

  const mensagemRelatorio =
    sensoresCriticos > 0
      ? "A propriedade possui sensores em estado crítico. Recomenda-se verificar a irrigação imediatamente."
      : sensoresAtencao > 0
      ? "A propriedade possui sensores em atenção. Recomenda-se acompanhar a umidade do solo nas próximas horas."
      : "Todos os sensores estão em situação normal. A umidade do solo está adequada.";

  return (
    <section aria-label="Relatório de umidade do solo">
      <h2 className="h4 mb-3">Relatório da propriedade</h2>

      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <h3 className="h5">Análise geral</h3>
          <p>{mensagemRelatorio}</p>

          <p className="mb-0">
            <strong>Média de umidade:</strong> {mediaUmidade.toFixed(1)}%
          </p>
        </div>
      </div>

      <section className="row g-3">
        <div className="col-12 col-md-4">
          <div className="card border-success">
            <div className="card-body">
              <h3 className="h6">Sensores normais</h3>
              <p className="display-6">{sensoresNormais}</p>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="card border-warning">
            <div className="card-body">
              <h3 className="h6">Sensores em atenção</h3>
              <p className="display-6">{sensoresAtencao}</p>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="card border-danger">
            <div className="card-body">
              <h3 className="h6">Sensores críticos</h3>
              <p className="display-6">{sensoresCriticos}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-4">
        <h3 className="h5">Critérios utilizados</h3>

        <ul className="list-group">
          <li className="list-group-item">
            Acima de 40% de umidade: status Normal.
          </li>
          <li className="list-group-item">
            Entre 25% e 40% de umidade: status Atenção.
          </li>
          <li className="list-group-item">
            Abaixo de 25% de umidade: status Crítico.
          </li>
        </ul>
      </section>
    </section>
  );
}