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
      <div className="mt-16 pt-16 border-t border-gray-100">
        <div className="grid grid-cols-2 gap-24 items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest mb-4" style={{color: '#A37901'}}>
              The bigger picture
            </p>
            <h3 className="text-3xl font-medium mb-6" style={{color: '#231F20'}}>
              From rental marketplace to mobility partner.
            </h3>
            <p className="text-lg text-gray-500 leading-relaxed">
              Turo's 4.9 stars tells us the booking experience is exceptional. This roadmap builds what comes next — the relationship layer that turns a great first trip into a trusted routine. That's the product that wins against Hertz, Uber, and Waymo. Not on price. Not on supply. On trust.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="p-6 rounded-lg" style={{background: '#231F20'}}>
              <p className="text-2xl font-medium mb-1" style={{color: '#F9D96A'}}>9 stories</p>
              <p className="text-sm" style={{color: '#aaa'}}>Prioritized by ATPU impact, sequenced by dependency</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 border border-gray-100 rounded-lg">
                <p className="text-2xl font-medium mb-1" style={{color: '#231F20'}}>3</p>
                <p className="text-sm text-gray-400">Variables from the case prompt — experience, segment, pricing</p>
              </div>
              <div className="p-6 border border-gray-100 rounded-lg">
                <p className="text-2xl font-medium mb-1" style={{color: '#231F20'}}>1</p>
                <p className="text-sm text-gray-400">Thesis — from first trip to trusted routine</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FutureBets