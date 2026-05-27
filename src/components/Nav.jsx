const sections = [
  { id: 'about', label: 'About' },
  { id: 'problem', label: 'Problem' },
  { id: 'persona', label: 'Persona' },
  { id: 'roadmap', label: 'Roadmap' },
  { id: 'metrics', label: 'Metrics' },
  { id: 'future', label: 'Future bets' },
  { id: 'prototypes', label: 'Prototypes' },
]

function Nav() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-8 h-14 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-1 h-5" style={{background: '#F9D96A'}}></div>
          <span className="text-sm font-medium" style={{color: '#231F20'}}>
            Turo — From First Trip to Trusted Routine
          </span>
        </div>
        <div className="flex items-center gap-6">
          {sections.map(s => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Nav