const stages = [
  {
    stage: 'Booking',
    emoji: '😊',
    feeling: 'Excited',
    color: '#1D9E75',
    observations: [
      'Smooth booking flow — exactly as advertised',
      'Great car selection, found a Subaru Outback',
      '4.9 stars gave me confidence',
    ],
    quote: '"This is going to be great."',
    storyFix: null,
  },
  {
    stage: 'Pickup',
    emoji: '😐',
    feeling: 'Transactional',
    color: '#F9D96A',
    observations: [
      'Host greeted me like a stranger — no warmth',
      'Turo never told him it was my first trip',
      'Lockbox was confusing — no video guidance',
      'In-app navigation sent me to the wrong location',
    ],
    quote: '"I wish someone had told him I was new to this."',
    storyFix: 'Stories 2 + 3',
  },
  {
    stage: 'During trip',
    emoji: '😟',
    feeling: 'Unsupported',
    color: '#D85A30',
    observations: [
      'Got lost — host didn\'t respond for 15+ minutes',
      'No fuel reminder — mad rush at the last minute',
      'Photo upload cluttered my camera roll',
    ],
    quote: '"Is anyone there?"',
    storyFix: 'Stories 1 + 2',
  },
  {
    stage: 'Return',
    emoji: '😰',
    feeling: 'Anxious',
    color: '#D85A30',
    observations: [
      'Returned 10 minutes late — no warning I was in grace period',
      'Still don\'t know if I was charged extra',
      'Lockbox return was confusing',
    ],
    quote: '"Did I just get charged? I have no idea."',
    storyFix: 'Story 1',
  },
  {
    stage: 'Post-trip',
    emoji: '😶',
    feeling: 'Forgotten',
    color: '#888',
    observations: [
      'Generic 1-5 star review — no car feel question',
      'No re-engagement prompt',
      'No way to save the host or car easily',
      'Memory fades within weeks',
    ],
    quote: '"That was fine. I probably won\'t think about Turo again."',
    storyFix: 'Stories 4 + 5 + 6',
  },
]

function CustomerJourney() {
  return (
    <div id="journey" className="max-w-6xl mx-auto px-8 py-24">
      <p className="text-sm font-medium uppercase tracking-widest mb-6" style={{color: '#A37901'}}>
        Primary research
      </p>
      <div className="grid grid-cols-2 gap-24 mb-16">
        <h2 className="text-4xl font-medium" style={{color: '#231F20'}}>
          I took the trip last week.
        </h2>
        <p className="text-lg text-gray-500 leading-relaxed">
          Before writing a single story I booked a Subaru Outback on Turo and took a day trip. Here's what actually happened — and where the product let me down.
        </p>
      </div>

      <div style={{position: 'relative'}}>
        <div style={{
          position: 'absolute',
          top: '40px',
          left: '10%',
          right: '10%',
          height: '2px',
          background: 'linear-gradient(to right, #1D9E75, #F9D96A, #D85A30, #D85A30, #888)',
          zIndex: 0,
        }}></div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: '16px',
          position: 'relative',
          zIndex: 1,
        }}>
          {stages.map((stage, i) => (
            <div key={i} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: '#fff',
                border: `3px solid ${stage.color}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '32px',
                marginBottom: '12px',
                boxShadow: `0 0 0 6px ${stage.color}15`,
              }}>
                {stage.emoji}
              </div>
              <p style={{
                fontSize: '13px',
                fontWeight: 600,
                color: '#231F20',
                margin: '0 0 4px',
                textAlign: 'center',
              }}>
                {stage.stage}
              </p>
              <p style={{
                fontSize: '11px',
                fontWeight: 500,
                color: stage.color,
                margin: '0 0 16px',
                textAlign: 'center',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
              }}>
                {stage.feeling}
              </p>
              <div style={{
                background: '#fafafa',
                border: '1px solid #f0f0f0',
                borderRadius: '12px',
                padding: '12px',
                width: '100%',
                marginBottom: '12px',
              }}>
                <ul style={{listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px'}}>
                  {stage.observations.map((obs, j) => (
                    <li key={j} style={{
                      fontSize: '11px',
                      color: '#666',
                      lineHeight: 1.5,
                      paddingLeft: '12px',
                      position: 'relative',
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: 0,
                        color: stage.color,
                      }}>·</span>
                      {obs}
                    </li>
                  ))}
                </ul>
              </div>
              <p style={{
                fontSize: '11px',
                color: '#aaa',
                fontStyle: 'italic',
                textAlign: 'center',
                lineHeight: 1.5,
                marginBottom: '12px',
                padding: '0 4px',
              }}>
                {stage.quote}
              </p>
              {stage.storyFix && (
                <div style={{
                  padding: '6px 10px',
                  borderRadius: '20px',
                  background: '#231F20',
                  color: '#F9D96A',
                  fontSize: '11px',
                  fontWeight: 600,
                  textAlign: 'center',
                }}>
                  {stage.storyFix}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div style={{
        marginTop: '48px',
        padding: '24px 32px',
        background: '#231F20',
        borderRadius: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '32px',
      }}>
        <p style={{fontSize: '18px', fontWeight: 500, color: '#fff', margin: 0, lineHeight: 1.5, flex: 1}}>
          "Turo has all the ingredients for a relationship product. They're just not assembling them."
        </p>
        <div style={{display: 'flex', gap: '24px', flexShrink: 0}}>
          {[
            {label: 'Booking', sentiment: '😊'},
            {label: 'Everything after', sentiment: '😟'},
          ].map((item, i) => (
            <div key={i} style={{textAlign: 'center'}}>
              <p style={{fontSize: '24px', margin: '0 0 4px'}}>{item.sentiment}</p>
              <p style={{fontSize: '11px', color: '#aaa', margin: 0, textTransform: 'uppercase', letterSpacing: '0.06em'}}>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CustomerJourney