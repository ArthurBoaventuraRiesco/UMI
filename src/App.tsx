import { useState } from "react";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { DashboardUmidade } from "./components/DashboardUmidade";
import { ListaSensoresUmidade } from "./components/ListaSensoresUmidade";
import { CadastroSensor } from "./components/CadastroSensor";
import { RelatorioUmidade } from "./components/RelatorioUmidade";
import { Footer } from "./components/Footer";
import { sensoresUmidadeIniciais } from "./data/sensoresUmidade";
import type { ISensorUmidade } from "./interfaces/ISensorUmidade";

type Tela = "dashboard" | "cadastro" | "relatorio";
type FiltroStatus = "Todos" | "Normal" | "Atenção" | "Crítico";

function App() {
  const [sensores, setSensores] = useState<ISensorUmidade[]>(
    sensoresUmidadeIniciais
  );

  const [telaAtual, setTelaAtual] = useState<Tela>("dashboard");
  const [filtroStatus, setFiltroStatus] = useState<FiltroStatus>("Todos");

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

  function atualizarLeitura(id: number): void {
    const novaUmidade = gerarUmidadeAleatoria();
    const novoStatus = definirStatus(novaUmidade);

    const sensoresAtualizados = sensores.map((sensor) =>
      sensor.id === id
        ? {
            ...sensor,
            umidade: novaUmidade,
            status: novoStatus,
          }
        : sensor
    );

    setSensores(sensoresAtualizados);
  }

  function adicionarSensor(sensor: ISensorUmidade): void {
    setSensores([...sensores, sensor]);
    setTelaAtual("dashboard");
  }

  function excluirSensor(id: number): void {
    const confirmarExclusao = confirm("Deseja realmente excluir este sensor?");

    if (!confirmarExclusao) {
      return;
    }

    const sensoresAtualizados = sensores.filter((sensor) => sensor.id !== id);

    setSensores(sensoresAtualizados);
  }

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

  const sensoresFiltrados =
    filtroStatus === "Todos"
      ? sensores
      : sensores.filter((sensor) => sensor.status === filtroStatus);

  return (
    <>
      <Header />

      <Navbar telaAtual={telaAtual} alterarTela={setTelaAtual} />

      <main className="container-fluid px-4 my-4">
        <div className="row g-4">
          <aside className="col-12 col-lg-3">
            <section className="p-3 bg-light rounded shadow-sm">
              {telaAtual === "dashboard" && (
                <>
                  <h2 className="h5">Sobre o UMI</h2>

                  <p>
                    O UMI é uma aplicação web acadêmica que simula o monitoramento da
                    umidade do solo em pequenas propriedades agrícolas, utilizando
                    leituras fictícias para representar o funcionamento de sensores no
                    campo.
                  </p>

                  <p>
                    O sistema permite cadastrar pontos de monitoramento, gerar leituras
                    automáticas de umidade, classificar cada sensor por nível de risco e
                    acompanhar a situação geral da propriedade por meio de um dashboard
                    dinâmico.
                  </p>

                  <p className="mb-0">
                    A proposta se relaciona à agricultura de precisão, pois demonstra como
                    dados digitais podem auxiliar o produtor rural na tomada de decisão
                    sobre irrigação, manejo do solo e prevenção de perdas na produção.
                  </p>
                </>
              )}

              {telaAtual === "cadastro" && (
                <>
                  <h2 className="h5">Cadastro de Sensor</h2>

                  <p>
                    Nesta tela, o usuário informa o nome do sensor e o local onde ele será
                    instalado na propriedade.
                  </p>

                  <p className="mb-0">
                    A leitura de umidade é gerada automaticamente pelo sistema, simulando
                    o comportamento de um sensor real em campo.
                  </p>
                </>
              )}

              {telaAtual === "relatorio" && (
                <>
                  <h2 className="h5">Relatório Técnico</h2>

                  <p>
                    Esta tela apresenta uma análise geral da umidade do solo com base nos
                    sensores cadastrados.
                  </p>

                  <p className="mb-0">
                    O relatório calcula a média de umidade, identifica sensores em estado
                    normal, atenção ou crítico e gera uma recomendação automática para o
                    manejo da irrigação.
                  </p>
                </>
              )}
            </section>
          </aside>
          
          <section className="col-12 col-lg-9">
            {telaAtual === "dashboard" && (
              <>
                <DashboardUmidade
                  totalSensores={totalSensores}
                  sensoresNormais={sensoresNormais}
                  sensoresAtencao={sensoresAtencao}
                  sensoresCriticos={sensoresCriticos}
                />

                <ListaSensoresUmidade
                  sensores={sensoresFiltrados}
                  filtroStatus={filtroStatus}
                  alterarFiltroStatus={setFiltroStatus}
                  atualizarLeitura={atualizarLeitura}
                  excluirSensor={excluirSensor}
                />
              </>
            )}

            {telaAtual === "cadastro" && (
              <CadastroSensor
                adicionarSensor={adicionarSensor}
                totalSensores={totalSensores}
              />
            )}

            {telaAtual === "relatorio" && (
              <RelatorioUmidade sensores={sensores} />
            )}
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;