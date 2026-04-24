interface DashboardUmidadeProps {
  totalSensores: number;
  sensoresNormais: number;
  sensoresAtencao: number;
  sensoresCriticos: number;
}

export function DashboardUmidade({
  totalSensores,
  sensoresNormais,
  sensoresAtencao,
  sensoresCriticos,
}: DashboardUmidadeProps) {
  return (
    <section className="mb-4" aria-label="Resumo dos sensores de umidade">
      <h2 className="h4 mb-3">Dashboard</h2>

      <div className="row g-3">
        <div className="col-12 col-md-3">
          <div className="card dashboard-card border-success">
            <div className="card-body">
              <h3 className="h6">Total</h3>
              <p className="display-6">{totalSensores}</p>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-3">
          <div className="card dashboard-card border-primary">
            <div className="card-body">
              <h3 className="h6">Normal</h3>
              <p className="display-6">{sensoresNormais}</p>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-3">
          <div className="card dashboard-card border-warning">
            <div className="card-body">
              <h3 className="h6">Atenção</h3>
              <p className="display-6">{sensoresAtencao}</p>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-3">
          <div className="card dashboard-card border-danger">
            <div className="card-body">
              <h3 className="h6">Crítico</h3>
              <p className="display-6">{sensoresCriticos}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}