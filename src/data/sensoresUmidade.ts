import type { ISensorUmidade } from "../interfaces/ISensorUmidade";

export const sensoresUmidadeIniciais: ISensorUmidade[] = [
  {
    id: 1,
    nome: "Sensor 01",
    local: "Canteiro de alface",
    umidade: 42,
    status: "Normal",
  },
  {
    id: 2,
    nome: "Sensor 02",
    local: "Área de tomate",
    umidade: 31,
    status: "Atenção",
  },
  {
    id: 3,
    nome: "Sensor 03",
    local: "Plantação de milho",
    umidade: 18,
    status: "Crítico",
  },
  {
    id: 4,
    nome: "Sensor 04",
    local: "Horta de cheiro-verde",
    umidade: 47,
    status: "Normal",
  },
  {
    id: 5,
    nome: "Sensor 05",
    local: "Área de mandioca",
    umidade: 24,
    status: "Crítico",
  },
  {
    id: 6,
    nome: "Sensor 06",
    local: "Canteiro de couve",
    umidade: 36,
    status: "Atenção",
  },
];