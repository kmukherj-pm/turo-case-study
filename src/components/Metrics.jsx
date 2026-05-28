import { metrics } from '../data/metrics'

function Metrics() {
  return (
    <div id="metrics" className="max-w-6xl mx-auto px-8 py-24">
      <p className="text-sm font-medium uppercase tracking-widest mb-6" style={{color: '#A37901'}}>
        Measuring success
      </p>
      <div className="grid grid-cols-2 gap-24 mb-16">
        <h2 className="text-4xl font-medium" style={{color: '#231F20'}}>
          How we know it's working.
        </h2>
        <p className="text-lg text-gray-500 leading-relaxed">
          ATPU is a lagging metric — it moves slowly. We need leading indicators that tell us within 30 days whether the relationship infrastructure is taking hold.
        </p>
      </div>

      {/* Pyramid */}
      <div className="flex flex-col items-center mb-16" style={{gap: '2px'}}>

        {/* North star */}
        <div style={{
          width: '320px',
          background: '#231F20',
          borderRadius: '12px 12px 0 0',
          padding: '20px 24px',
          textAlign: 'center',
        }}>
          <p style={{fontSize: '11px', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#F9D96A', margin: '0 0 6px'}}>
            North star
          </p>
          <p style={{fontSize: '20px', fontWeight: 600, color: '#fff', margin: '0 0 4px'}}>
            {metrics.northStar.label}
          </p>
          <p style={{fontSize: '12px', color: '#888', margin: 0}}>
            {metrics.northStar.description}
          </p>
        </div>

        {/* Leading indicators */}
        <div style={{
          width: '640px',
          background: '#fafafa',
          border: '1px solid #f0f0f0',
          padding: '20px 24px',
        }}>
          <p style={{fontSize: '11px', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#A37901', margin: '0 0 12px', textAlign: 'center'}}>
            Leading indicators — visible within 30 days
          </p>
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px'}}>
            {metrics.leading.map((m, i) => (
              <div key={i} style={{
                background: '#fff',
                border: '1px solid #f0f0f0',
                borderRadius: '8px',
                padding: '12px',
              }}>
                <p style={{fontSize: '12px', fontWeight: 600, color: '#231F20', margin: '0 0 4px'}}>
                  {m.label}
                </p>
                <p style={{fontSize: '11px', color: '#888', margin: '0 0 6px', lineHeight: 1.5}}>
                  {m.description}
                </p>
                <p style={{fontSize: '10px', color: '#ccc', textTransform: 'uppercase', letterSpacing: '0.06em', margin: 0}}>
                  {m.story}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Guardrails */}
        <div style={{
          width: '960px',
          background: '#f5f5f5',
          border: '1px solid #eee',
          borderRadius: '0 0 12px 12px',
          padding: '20px 24px',
        }}>
          <p style={{fontSize: '11px', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#888', margin: '0 0 12px', textAlign: 'center'}}>
            Guardrail metrics — must not regress
          </p>
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px'}}>
            {metrics.guardrails.map((g, i) => (
              <div key={i} style={{
                background: '#fff',
                border: '1px solid #eee',
                borderRadius: '8px',
                padding: '12px',
              }}>
                <p style={{fontSize: '12px', fontWeight: 600, color: '#231F20', margin: '0 0 4px'}}>
                  {g.label}
                </p>
                <p style={{fontSize: '11px', color: '#888', margin: 0, lineHeight: 1.5}}>
                  {g.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Measurement plan */}
      <p className="text-sm font-medium uppercase tracking-widest mb-8" style={{color: '#A37901'}}>
        Measurement plan
      </p>
      <div className="grid grid-cols-3 gap-8">
        {[
          {label: 'Day 30', items: metrics.measurementPlan.day30},
          {label: 'Day 60', items: metrics.measurementPlan.day60},
          {label: 'Day 90', items: metrics.measurementPlan.day90},
        ].map((period, i) => (
          <div key={i}>
            <div className="w-8 h-1 mb-4" style={{background: '#F9D96A'}}></div>
            <p className="text-lg font-medium mb-4" style={{color: '#231F20'}}>
              {period.label}
            </p>
            <ul className="flex flex-col gap-3 list-none p-0">
              {period.items.map((item, j) => (
                <li key={j} className="flex items-start gap-3">
                  <span className="text-gray-300 flex-shrink-0">→</span>
                  <span className="text-sm text-gray-500 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Metrics