import { useState } from 'react'

const savedHosts = [
  {
    name: 'Carlos M.',
    rating: 4.98,
    trips: 47,
    allStar: true,
    responseTime: 'under 5 min',
    car: 'Subaru Outback 2022',
    plate: 'spot B12',
    loyaltyRate: 95,
    standardRate: 110,
    available: true,
    lastTrip: '2 weeks ago',
  },
]

const garageCars = [
  {
    make: 'Subaru',
    model: 'Outback 2022',
    host: 'Carlos M.',
    lastDriven: '2 weeks ago',
    feel: 'loved it',
    available: true,
    rate: 95,
    color: '#E8F4FD',
    emoji: '🚙',
  },
  {
    make: 'Toyota',
    model: 'Tacoma 2023',
    host: 'Maria S.',
    lastDriven: '6 weeks ago',
    feel: 'loved it',
    available: false,
    rate: 105,
    color: '#F0F4E8',
    emoji: '🛻',
  },
]

const screens = [
  { id: 'garage', label: 'Your garage', icon: '🚗' },
  { id: 'roster', label: 'Trusted roster', icon: '⭐' },
  { id: 'rebook', label: 'One-tap rebook', icon: '⚡' },
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

function GarageScreen() {
  return (
    <div style={{padding: '16px'}}>
      <div style={{
        display: 'flex',
        gap: '8px',
        marginBottom: '16px',
      }}>
        {['Your garage', 'Favorites'].map((tab, i) => (
          <div key={i} style={{
            padding: '6px 14px',
            borderRadius: '20px',
            background: i === 0 ? '#231F20' : '#f0f0f0',
            color: i === 0 ? '#F9D96A' : '#888',
            fontSize: '12px',
            fontWeight: 600,
            cursor: 'pointer',
          }}>
            {tab}
          </div>
        ))}
      </div>
      <p style={{fontSize: '11px', color: '#aaa', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '12px'}}>
        Cars you've driven
      </p>
      {garageCars.map((car, i) => (
        <div key={i} style={{
          border: '1px solid #f0f0f0',
          borderRadius: '16px',
          overflow: 'hidden',
          marginBottom: '12px',
        }}>
        <div style={{
          background: car.color,
          height: '100px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '40px',
        }}>
          {car.emoji}
        </div>
          <div style={{padding: '12px'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px'}}>
              <div>
                <p style={{fontSize: '14px', fontWeight: 600, color: '#231F20', margin: 0}}>
                  {car.make} {car.model}
                </p>
                <p style={{fontSize: '12px', color: '#888', margin: '2px 0 0'}}>
                  with {car.host} · {car.lastDriven}
                </p>
              </div>
              <span style={{
                fontSize: '11px',
                padding: '4px 8px',
                borderRadius: '20px',
                background: '#1D9E7520',
                color: '#1D9E75',
                fontWeight: 600,
              }}>
                {car.feel}
              </span>
            </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '8px 12px',
            background: car.available ? '#FFF8E7' : '#f8f8f8',
            borderRadius: '10px',
            marginBottom: '8px',
          }}>
            <span style={{fontSize: '12px', color: car.available ? '#A37901' : '#aaa'}}>
              {car.available ? 'Available this weekend' : 'Not available this weekend'}
            </span>
            <span style={{fontSize: '12px', fontWeight: 600, color: car.available ? '#A37901' : '#aaa'}}>
              {car.available ? `$${car.rate}/day` : '—'}
            </span>
          </div>
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
              {car.available ? 'Rebook this car' : 'Find other dates'}
          </button>
          </div>
        </div>
      ))}
    </div>
  )
}

function RosterScreen() {
  return (
    <div style={{padding: '16px'}}>
      <p style={{fontSize: '11px', color: '#aaa', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '12px'}}>
        Your trusted hosts
      </p>
      {savedHosts.map((host, i) => (
        <div key={i} style={{
          border: '1px solid #f0f0f0',
          borderRadius: '16px',
          padding: '16px',
          marginBottom: '12px',
        }}>
          <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px'}}>
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
              flexShrink: 0,
            }}>C</div>
            <div style={{flex: 1}}>
              <div style={{display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '2px'}}>
                <p style={{fontSize: '14px', fontWeight: 600, color: '#231F20', margin: 0}}>{host.name}</p>
                {host.allStar && (
                  <span style={{
                    fontSize: '10px',
                    padding: '2px 6px',
                    borderRadius: '20px',
                    background: '#F9D96A30',
                    color: '#A37901',
                    fontWeight: 600,
                  }}>All-Star</span>
                )}
              </div>
              <p style={{fontSize: '12px', color: '#888', margin: 0}}>
                ★ {host.rating} · {host.trips} trips · responds {host.responseTime}
              </p>
            </div>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '12px'}}>
            {[
              {label: 'Available car', value: host.car},
              {label: 'Your loyalty rate', value: `$${host.loyaltyRate}/day vs $${host.standardRate} standard`},
              {label: 'Last trip', value: host.lastTrip},
            ].map((item, j) => (
              <div key={j} style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '8px 10px',
                background: '#f8f8f8',
                borderRadius: '8px',
              }}>
                <span style={{fontSize: '11px', color: '#888'}}>{item.label}</span>
                <span style={{fontSize: '11px', fontWeight: 600, color: '#231F20'}}>{item.value}</span>
              </div>
            ))}
          </div>
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
            Book Carlos · $95/day
          </button>
        </div>
      ))}
    </div>
  )
}

function RebookScreen() {
  const [booked, setBooked] = useState(false)

  return (
    <div style={{padding: '16px'}}>
      <div style={{
        background: '#FFF8E7',
        border: '1px solid #F9D96A',
        borderRadius: '16px',
        padding: '16px',
        marginBottom: '16px',
      }}>
        <p style={{fontSize: '11px', fontWeight: 600, color: '#A37901', textTransform: 'uppercase', letterSpacing: '0.06em', margin: '0 0 4px'}}>
          Available for you
        </p>
        <p style={{fontSize: '13px', color: '#231F20', margin: '0 0 2px'}}>
          Carlos has your Subaru available July 3-5
        </p>
        <p style={{fontSize: '12px', color: '#888', margin: 0}}>
          Book now to lock in your $95/day returning guest rate
        </p>
      </div>

      <div style={{
        border: '1px solid #f0f0f0',
        borderRadius: '16px',
        padding: '16px',
        marginBottom: '16px',
      }}>
        <div style={{display: 'flex', gap: '12px', marginBottom: '16px'}}>
          <div style={{
            width: '56px',
            height: '56px',
            borderRadius: '12px',
            background: '#f8f8f8',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '28px',
            flexShrink: 0,
          }}>🚙</div>
          <div>
            <p style={{fontSize: '14px', fontWeight: 600, color: '#231F20', margin: 0}}>Subaru Outback 2022</p>
            <p style={{fontSize: '12px', color: '#888', margin: '2px 0 0'}}>with Carlos M. · All-Star host</p>
          </div>
        </div>
        {[
          {label: 'Dates', value: 'Fri Jul 3 – Sun Jul 5'},
          {label: 'Pickup', value: 'Spot B12 · 9:00 AM'},
          {label: 'Rate', value: '$95/day — loyalty rate (30+ days ahead)'},
          {label: 'Protection', value: 'Standard · same as last time'},
        ].map((item, i) => (
          <div key={i} style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '8px 0',
            borderBottom: i < 3 ? '1px solid #f8f8f8' : 'none',
          }}>
            <span style={{fontSize: '12px', color: '#888'}}>{item.label}</span>
            <span style={{fontSize: '12px', fontWeight: 600, color: i === 2 ? '#1D9E75' : '#231F20'}}>{item.value}</span>
          </div>
        ))}
      </div>

      {!booked ? (
        <button
          onClick={() => setBooked(true)}
          style={{
            width: '100%',
            padding: '16px',
            background: '#231F20',
            color: '#F9D96A',
            border: 'none',
            borderRadius: '14px',
            fontSize: '15px',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          Book now — one tap
        </button>
      ) : (
        <div style={{
          width: '100%',
          padding: '16px',
          background: '#1D9E7520',
          border: '1px solid #1D9E75',
          borderRadius: '14px',
          textAlign: 'center',
        }}>
          <p style={{fontSize: '15px', fontWeight: 600, color: '#1D9E75', margin: '0 0 4px'}}>
            ✓ Booked with Carlos
          </p>
          <p style={{fontSize: '12px', color: '#888', margin: 0}}>
            See you Saturday at 9:00 AM
          </p>
        </div>
      )}
      <p style={{fontSize: '11px', color: '#ccc', textAlign: 'center', marginTop: '12px'}}>
        All details pre-filled from your last trip
      </p>
    </div>
  )
}

function GarageRebook() {
  const [activeScreen, setActiveScreen] = useState(0)

  return (
    <div style={{display: 'flex', gap: '80px', alignItems: 'flex-start', marginTop: '64px'}}>
      <div>
        <PhoneFrame>
          {activeScreen === 0 && <GarageScreen />}
          {activeScreen === 1 && <RosterScreen />}
          {activeScreen === 2 && <RebookScreen />}
        </PhoneFrame>
      </div>

      <div style={{flex: 1, paddingTop: '60px'}}>
        <p style={{fontSize: '11px', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#A37901', marginBottom: '16px'}}>
          Story 7 — Your garage and trusted rebook
        </p>
        <h3 style={{fontSize: '28px', fontWeight: 500, color: '#231F20', marginBottom: '16px', lineHeight: 1.3}}>
          Rebooking that feels like texting a friend.
        </h3>
        <p style={{fontSize: '16px', color: '#888', lineHeight: 1.7, marginBottom: '32px'}}>
          Your garage remembers every car you've driven. Your trusted roster keeps your best hosts close. When both are available — one tap books the whole thing. Car, host, dates, protection plan. Done.
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
                  {i === 0 ? 'Cars you\'ve driven — passive and automatic' :
                   i === 1 ? 'Your saved hosts with loyalty rates' :
                   'Pre-filled booking in one tap'}
                </p>
              </div>
            </button>
          ))}
        </div>
        <p style={{fontSize: '13px', color: '#aaa'}}>
          Tap each screen to walk through the guest experience
        </p>
      </div>
    </div>
  )
}

export default GarageRebook