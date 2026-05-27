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

      <div className="p-8 rounded-lg mb-8" style={{background: '#231F20'}}>
        <p className="text-xs font-medium uppercase tracking-widest mb-2" style={{color: '#F9D96A'}}>
          North star
        </p>
        <p className="text-3xl font-medium mb-2" style={{color: '#fff'}}>
          {metrics.northStar.label}
        </p>
        <p className="text-base" style={{color: '#aaa'}}>
          {metrics.northStar.description}
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-8">
        {metrics.leading.map((m, i) => (
          <div key={i} className="p-6 border border-gray-100 rounded-lg">
            <p className="text-xs font-medium uppercase tracking-widest mb-1" style={{color: '#A37901'}}>
              Leading indicator
            </p>
            <p className="text-sm font-medium mb-2" style={{color: '#231F20'}}>
              {m.label}
            </p>
            <p className="text-sm text-gray-500 leading-relaxed mb-3">
              {m.description}
            </p>
            <p className="text-xs text-gray-300 uppercase tracking-widest">
              {m.story}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-4 mb-16">
        {metrics.guardrails.map((g, i) => (
          <div key={i} className="p-6 border border-gray-100 rounded-lg">
            <p className="text-xs font-medium uppercase tracking-widest mb-1 text-gray-400">
              Guardrail
            </p>
            <p className="text-sm font-medium mb-2" style={{color: '#231F20'}}>
              {g.label}
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
              {g.description}
            </p>
          </div>
        ))}
      </div>

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