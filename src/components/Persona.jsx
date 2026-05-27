import { persona } from '../data/persona'

function Persona() {
  return (
    <div id="persona" className="min-h-screen flex flex-col justify-center max-w-6xl mx-auto px-8 py-24">
      <p className="text-sm font-medium uppercase tracking-widest mb-6" style={{color: '#A37901'}}>
        Persona and strategy
      </p>
      <div className="grid grid-cols-2 gap-24 mb-16">
        <div>
          <h2 className="text-4xl font-medium mb-6" style={{color: '#231F20'}}>
            {persona.name}
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed mb-8">
            {persona.description}
          </p>
          <div className="p-6 rounded-lg mb-8" style={{background: '#231F20'}}>
            <p className="text-sm font-medium uppercase tracking-widest mb-3" style={{color: '#F9D96A'}}>
              Problem statement
            </p>
            <p className="text-base leading-relaxed" style={{color: '#f5f5f5'}}>
              {persona.problemStatement}
            </p>
          </div>
          <div className="p-6 border border-gray-100 rounded-lg">
            <p className="text-sm font-medium uppercase tracking-widest mb-3" style={{color: '#A37901'}}>
              Hypothesis
            </p>
            <p className="text-base text-gray-500 leading-relaxed mb-6">
              {persona.hypothesis}
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">If we build</p>
                <p className="text-sm text-gray-600">{persona.ifWeBuild}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">We expect</p>
                <p className="text-sm text-gray-600">{persona.weExpectToSee}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Leading to</p>
                <p className="text-sm text-gray-600">{persona.leadingTo}</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-6">
            Why this persona first
          </p>
          <div className="flex flex-col gap-4">
            {persona.whyThisPersonaFirst.map((reason, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-1 h-full min-h-4 mt-1 flex-shrink-0" style={{background: '#F9D96A'}}></div>
                <div>
                  <p className="text-sm font-medium mb-1" style={{color: '#231F20'}}>
                    {reason.title}
                  </p>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {reason.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-8">
        <div className="p-6 border border-gray-100 rounded-lg">
          <p className="text-sm font-medium uppercase tracking-widest mb-3" style={{color: '#A37901'}}>
            {persona.twoAxes.axis1.label}
          </p>
          <p className="text-base text-gray-500 leading-relaxed">
            {persona.twoAxes.axis1.description}
          </p>
        </div>
        <div className="p-6 border border-gray-100 rounded-lg">
          <p className="text-sm font-medium uppercase tracking-widest mb-3" style={{color: '#A37901'}}>
            {persona.twoAxes.axis2.label}
          </p>
          <p className="text-base text-gray-500 leading-relaxed">
            {persona.twoAxes.axis2.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Persona