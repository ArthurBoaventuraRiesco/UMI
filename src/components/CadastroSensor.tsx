import { useState } from "react";
import type { ISensorUmidade } from "../interfaces/ISensorUmidade";

interface CadastroSensorProps {
  adicionarSensor: (sensor: ISensorUmidade) => void;
  totalSensores: number;
}

export function CadastroSensor({
  adicionarSensor,
  totalSensores,
}: CadastroSensorProps) {
  const [nome, setNome] = useState("");
  const [local, setLocal] = useState("");

  function gerarUmidadeAleatoria(): number {
    return Math.floor(Math.random() * 101);
  }

  function definirStatus(valorUmidade: number): ISensorUmidade["status"] {
    if (valorUmidade > 40) {
      return "Normal";
    }

    if (valorUmidade >= 25) {
      return "Atenção";
    }

    return "Crítico";
  }

  function cadastrarSensor(evento: React.FormEvent<HTMLFormElement>): void {
    evento.preventDefault();

    if (!nome.trim() || !local.trim()) {
      alert("Preencha o nome do sensor e o local de instalação.");
      return;
    }

    const umidadeGerada = gerarUmidadeAleatoria();

    const novoSensor: ISensorUmidade = {
      id: Date.now(),
      nome,
      local,
      umidade: umidadeGerada,
      status: definirStatus(umidadeGerada),
    };

    adicionarSensor(novoSensor);

    setNome("");
    setLocal("");
  }

  return (
    <section aria-label="Cadastro de sensor de umidade">
      <h2 className="h4 mb-3">Cadastrar novo sensor</h2>

      <div className="card shadow-sm">
        <div className="card-body">
          <form onSubmit={cadastrarSensor}>
            <div className="mb-3">
              <label htmlFor="nome" className="form-label">
                Nome do sensor
              </label>
              <input
                id="nome"
                type="text"
                className="form-control"
                placeholder="Ex: Sensor Horta 01"
                value={nome}
                onChange={(evento) => setNome(evento.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="local" className="form-label">
                Local de instalação
              </label>
              <input
                id="local"
                type="text"
                className="form-control"
                placeholder="Ex: Canteiro de alface"
                value={local}
                onChange={(evento) => setLocal(evento.target.value)}
              />
            </div>

            <div className="alert alert-info">
              A umidade será gerada automaticamente para simular a leitura real
              de um sensor agrícola.
            </div>

            <button type="submit" className="btn btn-success">
              Cadastrar sensor
            </button>
          </form>
        </div>
      </div>

      <p className="mt-3 text-muted">
        Sensores cadastrados atualmente: {totalSensores}
      </p>
    </section>
  );
}