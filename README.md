# UMI — Umidade Monitorada Inteligente

O **UMI — Umidade Monitorada Inteligente** é uma aplicação web acadêmica desenvolvida com **React**, **Vite**, **TypeScript** e **Bootstrap via CDN**.

O sistema simula o monitoramento da umidade do solo em pequenas propriedades agrícolas. A aplicação permite cadastrar sensores, gerar leituras automáticas de umidade, atualizar leituras simuladas, filtrar sensores por status, excluir sensores e visualizar um relatório técnico da propriedade.

---
## Link do Youtube:

**https://youtu.be/FfDlPimZYIQ**

---
## Objetivo do Projeto

O objetivo do projeto é demonstrar a construção de uma aplicação web funcional utilizando React com TypeScript, seguindo boas práticas de componentização, organização de arquivos, tipagem de dados, responsividade com Bootstrap e manipulação de estado com `useState`.

Além do funcionamento da interface, o projeto busca apresentar uma estrutura organizada, com separação clara de responsabilidades entre componentes, dados simulados e interfaces TypeScript.

---

## Tema Escolhido

O tema escolhido foi o **monitoramento de umidade do solo em pequenas propriedades agrícolas**.

A escolha do tema busca relacionar tecnologia e agricultura, simulando um cenário próximo à agricultura de precisão, em que sensores digitais auxiliam o produtor rural na tomada de decisão sobre irrigação, manejo do solo e prevenção de perdas na produção.

Os dados utilizados são fictícios e foram criados diretamente no código para fins acadêmicos.

---

## Funcionalidades Implementadas

- Dashboard com contadores dinâmicos.
- Cadastro de novos sensores.
- Geração automática de umidade simulada.
- Classificação automática do status do sensor.
- Atualização de leitura do sensor.
- Filtro por status.
- Exclusão de sensores.
- Relatório técnico da propriedade.
- Barra visual de progresso da umidade.
- Layout responsivo com Bootstrap.
- Uso de tags semânticas HTML5.

---

## Regras de Classificação da Umidade

O sistema classifica automaticamente cada sensor de acordo com a porcentagem de umidade gerada:

| Umidade do Solo | Status |
|---|---|
| Acima de 40% | Normal |
| Entre 25% e 40% | Atenção |
| Abaixo de 25% | Crítico |

Ao clicar em **Atualizar leitura**, o sistema gera uma nova porcentagem de umidade para o sensor e recalcula automaticamente o status. Com isso, o card muda visualmente e os contadores do Dashboard são atualizados imediatamente.

---

## Tecnologias Utilizadas

- React
- Vite
- TypeScript
- Bootstrap via CDN
- CSS externo
- HTML5 semântico

---

## Arquitetura do Projeto

O projeto foi organizado em pastas para separar responsabilidades e facilitar a manutenção do código.

```txt
src/
├── components/
│   ├── Header.tsx
│   ├── Navbar.tsx
│   ├── DashboardUmidade.tsx
│   ├── ListaSensoresUmidade.tsx
│   ├── SensorUmidadeCard.tsx
│   ├── CadastroSensor.tsx
│   ├── RelatorioUmidade.tsx
│   └── Footer.tsx
│
├── data/
│   └── sensoresUmidade.ts
│
├── interfaces/
│   └── ISensorUmidade.ts
│
├── App.tsx
├── main.tsx
└── styles.css
```

## Justificativa da Arquitetura

A aplicação foi dividida em componentes menores para melhorar a organização, a reutilização e a manutenção do código.

O componente App.tsx concentra o estado principal da aplicação, controlando a lista de sensores, a tela atual, os filtros e as funções de cadastro, exclusão e atualização de leitura.

Os componentes filhos recebem dados e funções por meio de Props tipadas, garantindo maior segurança na comunicação entre as partes da aplicação.

A separação foi feita da seguinte forma:

Header: exibe o cabeçalho da aplicação.
Navbar: permite alternar entre Dashboard, Cadastro e Relatório.
DashboardUmidade: exibe os contadores dinâmicos dos sensores.
ListaSensoresUmidade: renderiza a lista de sensores e os filtros por status.
SensorUmidadeCard: representa visualmente cada sensor individual.
CadastroSensor: permite cadastrar novos sensores.
RelatorioUmidade: apresenta a análise geral da propriedade.
Footer: exibe a identificação do aluno, data e disciplina.
data: armazena os dados simulados iniciais.
interfaces: armazena os contratos TypeScript usados na aplicação.

Essa estrutura segue a ideia de separação de responsabilidades, pois cada arquivo possui uma função específica dentro do sistema.
```
```
## Uso do TypeScript

O TypeScript foi utilizado para aumentar a segurança dos dados e evitar erros durante o desenvolvimento.

A interface principal do projeto é ISensorUmidade, responsável por definir o contrato dos sensores utilizados pela aplicação.

export interface ISensorUmidade {
  id: number;
  nome: string;
  local: string;
  umidade: number;
  status: "Normal" | "Atenção" | "Crítico";
}

Além da interface principal, as Props dos componentes também foram tipadas, garantindo que cada componente receba apenas os dados necessários e no formato correto.
```
```
## Lógica de Estado

A aplicação utiliza o hook useState para controlar os principais dados do sistema:

lista de sensores;
tela atual;
filtro selecionado.

Quando o usuário cadastra um sensor, atualiza uma leitura ou exclui um sensor, o estado principal é alterado. Essa mudança reflete imediatamente no Dashboard, na lista de sensores e no relatório.

A atualização de leitura simula o funcionamento de um sensor real: o sistema gera uma nova porcentagem de umidade, recalcula o status e altera a aparência visual do card.

 ## Responsividade

O layout utiliza o sistema de grid do Bootstrap.

No desktop, a aplicação apresenta uma organização assimétrica:

barra lateral: col-lg-3;
conteúdo principal: col-lg-9.

No celular, as colunas usam col-12, fazendo com que os blocos se empilhem verticalmente e se adaptem à tela menor.

 ## Semântica HTML5

Foram utilizadas tags semânticas para melhorar a estrutura da página:

header
nav
main
section
aside
article
footer
address
Como Executar o Projeto

 ## Clone o repositório:

git clone LINK_DO_REPOSITORIO

Acesse a pasta do projeto:

cd umi

Instale as dependências:

npm install

Execute o projeto:

npm run dev

Depois, acesse no navegador o endereço exibido no terminal, geralmente:

http://localhost:5173/
## Identificação

Aluno: Arthur Boaventura Riesco
Data: 24 de abril de 2026
Disciplina: Desenvolvimento de Software Web

## Observação:

Este projeto é uma simulação acadêmica. As leituras de umidade são geradas automaticamente pelo sistema e não representam dados reais de sensores físicos.
