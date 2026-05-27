import { useState } from 'react'

const guest = {
  name: 'Alex K.',
  rating: 4.9,
  trips: 1,
  firstTimer: true,
  previousCars: [],
  memberSince: '2025',
}

const screens = [
  { id: 'notification', label: 'Notification', icon: '🔔' },
  { id: 'briefing', label: 'Briefing card', icon: '📋' },
  { id: 'welcome', label: 'Welcome message', icon: '👋' },
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

function NotificationScreen() {
  return (
    <div style={{padding: '16px'}}>
      <div style={{
        background: '#f8f8f8',
        borderRadius: '16px',
        padding: '16px',
        marginBottom: '12px',
      }}>
        <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px'}}>
          <div style={{
            width: '44px',
            height: '44px',
            borderRadius: '12px',
            background: '#F9D96A30',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '20px',
          }}>🚗</div>
          <div>
            <p style={{fontSize: '12px', fontWeight: 600, color: '#231F20', margin: 0}}>Turo Host</p>
            <p style={{fontSize: '11px', color: '#aaa', margin: 0}}>2 hours before pickup</p>
          </div>
        </div>
        <p style={{fontSize: '13px', fontWeight: 600, color: '#231F20', margin: '0 0 4px'}}>
          Your next guest is arriving soon
        </p>
        <p style={{fontSize: '12px', color: '#666', margin: '0 0 12px', lineHeight: 1.5}}>
          Alex K. arrives at 2:00 PM. This is their first Turo trip — here's what you should know.
        </p>
        <button style={{
          width: '100%',
          padding: '10px',
          background: '#231F20',
          color: '#F9D96A',
          border: 'none',
          borderRadius: '10px',
          fontSize: '13px',
          fontWeight: 600,
          cursor: 'pointer',
        }}>
          View guest briefing
        </button>
      </div>
      <p style={{fontSize: '11px', color: '#ccc', textAlign: 'center'}}>
        Tap "View guest briefing" to continue →
      </p>
    </div>
  )
}

function BriefingScreen() {
  return (
    <div style={{padding: '16px', overflowY: 'auto', maxHeight: '536px'}}>
      <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px'}}>
        <div style={{
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          background: '#231F20',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#F9D96A',
          fontSize: '18px',
          fontWeight: 600,
        }}>A</div>
        <div>
          <p style={{fontSize: '15px', fontWeight: 600, color: '#231F20', margin: 0}}>{guest.name}</p>
          <div style={{display: 'flex', alignItems: 'center', gap: '6px'}}>
            <span style={{fontSize: '12px', color: '#F9D96A'}}>★</span>
            <span style={{fontSize: '12px', color: '#888'}}>{guest.rating} · Member since {guest.memberSince}</span>
          </div>
        </div>
      </div>

      <div style={{
        background: '#FFF8E7',
        border: '1px solid #F9D96A',
        borderRadius: '12px',
        padding: '12px',
        marginBottom: '12px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
      }}>
        <span style={{fontSize: '20px'}}>🎉</span>
        <div>
          <p style={{fontSize: '12px', fontWeight: 600, color: '#A37901', margin: 0}}>First-time Turo guest</p>
          <p style={{fontSize: '11px', color: '#888', margin: '2px 0 0'}}>A warm welcome goes a long way</p>
        </div>
      </div>

      <div style={{display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px'}}>
        {[
          {label: 'Trip number', value: '1st Turo trip ever'},
          {label: 'Previous cars', value: 'No prior trips yet'},
          {label: 'Pickup time', value: '2:00 PM today'},
          {label: 'Trip duration', value: '1 day'},
          {label: 'Guest rating', value: '4.9 ★'},
        ].map((item, i) => (
          <div key={i} style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px 12px',
            background: '#f8f8f8',
            borderRadius: '10px',
          }}>
            <span style={{fontSize: '12px', color: '#888'}}>{item.label}</span>
            <span style={{fontSize: '12px', fontWeight: 600, color: '#231F20'}}>{item.value}</span>
          </div>
        ))}
      </div>

      <div style={{
        background: '#231F20',
        borderRadius: '12px',
        padding: '12px',
        marginBottom: '12px',
      }}>
        <p style={{fontSize: '11px', fontWeight: 600, color: '#F9D96A', margin: '0 0 6px', textTransform: 'uppercase', letterSpacing: '0.06em'}}>
          Your private note
        </p>
        <p style={{fontSize: '12px', color: '#aaa', margin: '0 0 8px', fontStyle: 'italic'}}>
          No notes yet for this guest
        </p>
        <button style={{
          width: '100%',
          padding: '8px',
          background: 'transparent',
          color: '#F9D96A',
          border: '1px solid #F9D96A40',
          borderRadius: '8px',
          fontSize: '12px',
          cursor: 'pointer',
        }}>
          + Add note
        </button>
      </div>
    </div>
  )
}

function WelcomeScreen() {
  const [sent, setSent] = useState(false)
  const message = "Hey Alex! Welcome to your first Turo trip 🎉 I'm Carlos, your host. The Subaru is parked in spot B12 — the lockbox code is 4821. CarPlay is all set up. Have an amazing trip and don't hesitate to reach out if you need anything!"

  return (
    <div style={{padding: '16px'}}>
      <p style={{fontSize: '13px', fontWeight: 600, color: '#231F20', margin: '0 0 4px'}}>
        Send a welcome message
      </p>
      <p style={{fontSize: '12px', color: '#888', margin: '0 0 12px'}}>
        Suggested for first-time guests
      </p>
      <div style={{
        background: '#f8f8f8',
        borderRadius: '12px',
        padding: '12px',
        marginBottom: '12px',
        fontSize: '13px',
        color: '#444',
        lineHeight: 1.6,
      }}>
        {message}
      </div>
      {!sent ? (
        <button
          onClick={() => setSent(true)}
          style={{
            width: '100%',
            padding: '12px',
            background: '#231F20',
            color: '#F9D96A',
            border: 'none',
            borderRadius: '12px',
            fontSize: '13px',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          Send to Alex
        </button>
      ) : (
        <div style={{
          width: '100%',
          padding: '12px',
          background: '#1D9E7520',
          border: '1px solid #1D9E75',
          borderRadius: '12px',
          textAlign: 'center',
          fontSize: '13px',
          fontWeight: 600,
          color: '#1D9E75',
        }}>
          ✓ Message sent to Alex
        </div>
      )}
      <p style={{fontSize: '11px', color: '#ccc', textAlign: 'center', marginTop: '12px'}}>
        Message is editable before sending
      </p>
    </div>
  )
}

function HostBriefingCard() {
  const [activeScreen, setActiveScreen] = useState(0)

  return (
    <div style={{display: 'flex', gap: '80px', alignItems: 'flex-start', marginTop: '64px'}}>
      <div>
        <PhoneFrame>
          {activeScreen === 0 && <NotificationScreen />}
          {activeScreen === 1 && <BriefingScreen />}
          {activeScreen === 2 && <WelcomeScreen />}
        </PhoneFrame>
      </div>

      <div style={{flex: 1, paddingTop: '60px'}}>
        <p style={{fontSize: '11px', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#A37901', marginBottom: '16px'}}>
          Story 3 — Host briefing card
        </p>
        <h3 style={{fontSize: '28px', fontWeight: 500, color: '#231F20', marginBottom: '16px', lineHeight: 1.3}}>
          The host who knew you were coming.
        </h3>
        <p style={{fontSize: '16px', color: '#888', lineHeight: 1.7, marginBottom: '32px'}}>
          Turo knew it was my first trip. The host didn't. A two-hour heads up with the right guest context — and a one-tap welcome message — changes the entire pickup moment.
        </p>
        <div style={{display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px'}}>
          {screens.map((screen, i) => (
            <button
              key={i}
              onClick={() => setActiveScreen(i)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                padding: '16px',
                border: `1px solid ${i === activeScreen ? '#A37901' : '#f0f0f0'}`,
                borderRadius: '12px',
                background: i === activeScreen ? '#A3790108' : '#fff',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 0.2s ease',
              }}
            >
              <span style={{fontSize: '20px'}}>{screen.icon}</span>
              <div>
                <p style={{fontSize: '13px', fontWeight: 600, color: '#231F20', margin: 0}}>{screen.label}</p>
                <p style={{fontSize: '12px', color: '#aaa', margin: '2px 0 0'}}>
                  {i === 0 ? 'Host receives 2 hours before pickup' :
                   i === 1 ? 'Guest context and private notes' :
                   'One-tap personalized welcome'}
                </p>
              </div>
            </button>
          ))}
        </div>
        <p style={{fontSize: '13px', color: '#aaa'}}>
          Tap each screen to walk through the host experience
        </p>
      </div>
    </div>
  )
}

export default HostBriefingCard