import type { ISensorUmidade } from "../interfaces/ISensorUmidade";

interface SensorUmidadeCardProps {
  sensor: ISensorUmidade;
  atualizarLeitura: (id: number) => void;
  excluirSensor: (id: number) => void;
}

export function SensorUmidadeCard({
  sensor,
  atualizarLeitura,
  excluirSensor,
}: SensorUmidadeCardProps) {
  const classeStatus =
    sensor.status === "Normal"
      ? "sensor-normal"
      : sensor.status === "Atenção"
      ? "sensor-atencao"
      : "sensor-critico";

  const classeBarra =
    sensor.status === "Normal"
      ? "bg-success"
      : sensor.status === "Atenção"
      ? "bg-warning"
      : "bg-danger";

  return (
    <article className={`card h-100 shadow-sm ${classeStatus}`}>
      <div className="card-body">
        <h3 className="h5">{sensor.nome}</h3>

        <p className="mb-1">
          <strong>Local:</strong> {sensor.local}
        </p>

        <p className="mb-1">
          <strong>Umidade:</strong> {sensor.umidade}%
        </p>

        <div
          className="progress mb-3"
          role="progressbar"
          aria-label={`Umidade do sensor ${sensor.nome}`}
          aria-valuenow={sensor.umidade}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div
            className={`progress-bar ${classeBarra}`}
            style={{ width: `${sensor.umidade}%` }}
          >
            {sensor.umidade}%
          </div>
        </div>

        <p className="mb-3">
          <strong>Status:</strong> {sensor.status}
        </p>

        <button
          className="btn btn-primary btn-sm w-100 mb-2"
          onClick={() => atualizarLeitura(sensor.id)}
        >
          Atualizar leitura
        </button>

        <button
          className="btn btn-outline-danger btn-sm w-100"
          onClick={() => excluirSensor(sensor.id)}
        >
          Excluir sensor
        </button>
      </div>
    </article>
  );
}