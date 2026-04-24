export interface ISensorUmidade {
  id: number;
  nome: string;
  local: string;
  umidade: number;
  status: "Normal" | "Atenção" | "Crítico";
}