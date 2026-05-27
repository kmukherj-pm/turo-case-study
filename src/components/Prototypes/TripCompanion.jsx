import { useState } from 'react'

const notifications = [
  {
    time: '90 min before return',
    title: 'Time to fuel up',
    body: 'Your trip ends at 4:00 PM. Nearest station: Shell on Market St — 0.4 miles away.',
    cta: 'Get directions',
    ctaSecondary: 'Dismiss',
    icon: '⛽',
    color: '#1D9E75',
  },
  {
    time: '60 min before return',
    title: 'Heading back soon?',
    body: 'Your trip ends at 4:00 PM — about 60 minutes from now. Need more time? Extend your trip in one tap.',
    cta: 'Extend trip',
    ctaSecondary: 'On my way',
    icon: '🕐',
    color: '#378ADD',
  },
  {
    time: 'At trip end',
    title: "You're not late — yet.",
    body: "Your trip just ended but you have a 30-minute grace period. No charges until 4:30 PM. Running late?",
    cta: 'Extend trip',
    ctaSecondary: 'Almost there',
    icon: '✓',
    color: '#A37901',
  },
]

function PhoneFrame({ children }) {
  return (
    <div style={{
      width: '320px',
      background: '#000',
      borderRadius: '48px',
      padding: '12px',
      boxShadow: '0 32px 64px rgba(0,0,0,0.15)',
    }}>
      <div style={{
        background: '#fff',
        borderRadius: '40px',
        overflow: 'hidden',
        minHeight: '580px',
        position: 'relative',
      }}>
        <div style={{
          background: '#000',
          height: '44px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <div style={{
            width: '120px',
            height: '28px',
            background: '#1a1a1a',
            borderRadius: '20px',
          }}></div>
        </div>
        {children}
      </div>
    </div>
  )
}

function NotificationCard({ notification, active }) {
  return (
    <div style={{
      margin: '12px',
      padding: '16px',
      background: active ? '#fff' : '#f5f5f5',
      borderRadius: '16px',
      border: active ? `2px solid ${notification.color}` : '2px solid transparent',
      transition: 'all 0.3s ease',
      opacity: active ? 1 : 0.4,
    }}>
      <div style={{display: 'flex', alignItems: 'flex-start', gap: '12px'}}>
        <div style={{
          width: '44px',
          height: '44px',
          borderRadius: '12px',
          background: notification.color + '20',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '20px',
          flexShrink: 0,
        }}>
          {notification.icon}
        </div>
        <div style={{flex: 1}}>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px'}}>
            <p style={{fontSize: '12px', fontWeight: 600, color: '#231F20', margin: 0}}>Turo</p>
            <p style={{fontSize: '11px', color: '#aaa', margin: 0}}>{notification.time}</p>
          </div>
          <p style={{fontSize: '13px', fontWeight: 600, color: '#231F20', margin: '0 0 4px'}}>{notification.title}</p>
          <p style={{fontSize: '12px', color: '#666', margin: 0, lineHeight: 1.5}}>{notification.body}</p>
          {active && (
            <div style={{display: 'flex', gap: '8px', marginTop: '12px'}}>
              <button style={{
                flex: 1,
                padding: '8px',
                background: notification.color,
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                fontSize: '12px',
                fontWeight: 600,
                cursor: 'pointer',
              }}>
                {notification.cta}
              </button>
              <button style={{
                flex: 1,
                padding: '8px',
                background: '#f0f0f0',
                color: '#666',
                border: 'none',
                borderRadius: '8px',
                fontSize: '12px',
                cursor: 'pointer',
              }}>
                {notification.ctaSecondary}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function TripCompanion() {
  const [active, setActive] = useState(0)

  return (
    <div style={{display: 'flex', gap: '80px', alignItems: 'flex-start'}}>
      <PhoneFrame>
        <div style={{padding: '8px 0'}}>
          <div style={{
            padding: '8px 16px',
            background: '#f8f8f8',
            margin: '8px 12px',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
            <span style={{fontSize: '12px', color: '#888'}}>Active trip — Subaru Outback</span>
            <span style={{fontSize: '12px', color: '#1D9E75', fontWeight: 600}}>Live</span>
          </div>
          {notifications.map((n, i) => (
            <NotificationCard key={i} notification={n} active={i === active} />
          ))}
        </div>
      </PhoneFrame>

      <div style={{flex: 1, paddingTop: '60px'}}>
        <p style={{fontSize: '11px', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#A37901', marginBottom: '16px'}}>
          Story 1 — Trip companion
        </p>
        <h3 style={{fontSize: '28px', fontWeight: 500, color: '#231F20', marginBottom: '16px', lineHeight: 1.3}}>
          The trip that didn't need to be stressful.
        </h3>
        <p style={{fontSize: '16px', color: '#888', lineHeight: 1.7, marginBottom: '32px'}}>
          I forgot to fuel up. I got lost because the in-app navigation sent me to the wrong location. I returned 10 minutes late and still don't know if I was charged. None of this needed to happen — Turo had all the information to prevent it.
        </p>
        <div style={{display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px'}}>
          {notifications.map((n, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                padding: '16px',
                border: `1px solid ${i === active ? n.color : '#f0f0f0'}`,
                borderRadius: '12px',
                background: i === active ? n.color + '08' : '#fff',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 0.2s ease',
              }}
            >
              <span style={{fontSize: '20px'}}>{n.icon}</span>
              <div>
                <p style={{fontSize: '13px', fontWeight: 600, color: '#231F20', margin: 0}}>{n.title}</p>
                <p style={{fontSize: '12px', color: '#aaa', margin: '2px 0 0'}}>{n.time}</p>
              </div>
            </button>
          ))}
        </div>
        <p style={{fontSize: '13px', color: '#aaa'}}>
          Tap each moment to see the notification
        </p>
      </div>
    </div>
  )
}

export default TripCompanion