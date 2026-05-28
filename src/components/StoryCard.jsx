import { useState } from 'react'

const phaseColors = {
  'during-trip': '#7F77DD',
  'pre-trip': '#1D9E75',
  'post-trip': '#D85A30',
  'relationship': '#378ADD',
}

function StoryCard({ story, index }) {
  const [expanded, setExpanded] = useState(false)
  const color = phaseColors[story.phase] || '#888'

  return (
    <div className="border border-gray-100 rounded-lg overflow-hidden">
      <div
        className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <span className="text-sm text-gray-300 mt-1 w-6 flex-shrink-0">
              {String(index).padStart(2, '0')}
            </span>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span
                  className="text-xs font-medium uppercase tracking-widest px-2 py-1 rounded"
                  style={{color: color, background: color + '15'}}
                >
                  {story.phaseLabel}
                </span>
                <span className="text-xs text-gray-400 uppercase tracking-widest">
                  {story.persona}
                </span>
              </div>
              <h3 className="text-lg font-medium" style={{color: '#231F20'}}>
                {story.title}
              </h3>
              <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                {story.statement}
              </p>
            </div>
          </div>
          <span className="text-gray-300 flex-shrink-0 mt-1 text-xl">
            {expanded ? '−' : '+'}
          </span>
        </div>
      </div>

      {expanded && (
        <div className="border-t border-gray-100 p-6 bg-gray-50">
          <div className="grid grid-cols-2 gap-8" style={{marginLeft: '40px'}}>
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-gray-400 mb-4">
                Acceptance criteria
              </p>
              <ul style={{listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px'}}>
                {story.criteria.map((c, i) => (
                  <li key={i} style={{display: 'flex', alignItems: 'flex-start', gap: '12px'}}>
                    <span style={{width: '6px', height: '6px', borderRadius: '50%', background: color, flexShrink: 0, marginTop: '6px'}}></span>
                    <span style={{fontSize: '14px', color: '#555', lineHeight: 1.6}}>
                      {typeof c === 'string'
                        ? c
                        : (
                          <>
                            <span style={{fontWeight: 600, color: '#231F20'}}>{c.action}</span>
                            {c.detail && <span style={{color: '#666'}}> — {c.detail}</span>}
                          </>
                        )
                      }
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-gray-400 mb-4">
                  Out of scope for v1
                </p>
                <ul className="flex flex-col gap-2 list-none p-0">
                  {story.outOfScope.map((o, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-gray-300 flex-shrink-0">—</span>
                      <span className="text-sm text-gray-400 leading-relaxed">{o}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-4 rounded-lg" style={{background: '#231F20'}}>
                <p
                  className="text-xs font-medium uppercase tracking-widest mb-2"
                  style={{color: '#F9D96A'}}
                >
                  Why this drives ATPU
                </p>
                <p className="text-sm leading-relaxed m-0" style={{color: '#f5f5f5'}}>
                  {story.atpuLink}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default StoryCard