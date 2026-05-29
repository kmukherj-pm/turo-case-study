import { metrics } from '../data/metrics'

function FutureBets() {
  return (
    <div id="future" className="max-w-6xl mx-auto px-8 py-24">
      <p className="text-sm font-medium uppercase tracking-widest mb-6" style={{color: '#A37901'}}>
        Future bets
      </p>
      <div className="grid grid-cols-2 gap-24 mb-16">
        <h2 className="text-4xl font-medium" style={{color: '#231F20'}}>
          Beyond the quarter.
        </h2>
        <p className="text-lg text-gray-500 leading-relaxed">
          These aren't in scope for Q1 — but they're where the relationship infrastructure we're building leads. Each one becomes tractable once the foundation exists.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {metrics.futureBets.map((bet, i) => (
          <div key={i} className="p-6 border border-gray-100 rounded-lg">
            <div className="w-6 h-1 mb-4" style={{background: '#F9D96A'}}></div>
            <p className="text-sm font-medium mb-2" style={{color: '#231F20'}}>
              {bet.title}
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
              {bet.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FutureBets