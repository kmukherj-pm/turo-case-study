import { useState } from 'react'

const lines = [
  { id: 'l1', text: "Turo's next frontier is", color: '#888', delay: 300, size: '28px' },
  { id: 'l2', text: 'loyalty.', color: '#A37901', delay: 900, size: '64px' },
  { id: 'l3', text: "Great trips alone don't create loyal guests.", color: '#231F20', delay: 1600, size: '22px' },
  { id: 'l4', text: 'Great relationships with hosts do.', color: '#231F20', delay: 2200, size: '22px' },
  { id: 'l5', text: "Let's build it. 🚗", color: '#A37901', delay: 3000, size: '32px' },
]

const css = `@keyframes fadeUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }`

function Assemble() {
  const [visible, setVisible] = useState({})
  const [started, setStarted] = useState(false)

  const start = () => {
    setVisible({})
    setStarted(true)
    lines.forEach(({ id, delay }) => {
      setTimeout(() => {
        setVisible(prev => ({ ...prev, [id]: true }))
      }, delay)
    })
  }

  return (
    <>
      <style>{css}</style>
      <div id="assemble" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '6rem 2rem',
        gap: '1.5rem',
      }}>
        <p style={{
          fontSize: '11px',
          fontWeight: 500,
          textTransform: 'uppercase',
          letterSpacing: '0.12em',
          color: '#A37901',
          margin: 0,
        }}>
          From first trip to trusted routine
        </p>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px',
        }}>
          {lines.map(line => (
            visible[line.id] ? (
              <p
                key={line.id}
                style={{
                  fontSize: line.size,
                  fontWeight: 500,
                  color: line.color,
                  margin: 0,
                  textAlign: 'center',
                  lineHeight: 1.3,
                  animation: 'fadeUp 0.5s ease',
                }}
              >
                {line.text}
              </p>
            ) : null
          ))}
        </div>

        {!started ? (
          <button
            onClick={start}
            style={{
              marginTop: '2rem',
              padding: '14px 40px',
              background: '#231F20',
              color: '#F9D96A',
              border: 'none',
              borderRadius: '8px',
              fontSize: '15px',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            Start ↗
          </button>
        ) : (
          visible['l5'] && (
            <button
              onClick={start}
              style={{
                marginTop: '2rem',
                padding: '10px 24px',
                background: 'transparent',
                color: '#aaa',
                border: '1px solid #eee',
                borderRadius: '8px',
                fontSize: '13px',
                cursor: 'pointer',
              }}
            >
              Replay
            </button>
          )
        )}
      </div>
    </>
  )
}

export default Assemble