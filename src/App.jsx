import GarageRebook from './components/Prototypes/GarageRebook'
import HostBriefingCard from './components/Prototypes/HostBriefingCard'
import TripCompanion from './components/Prototypes/TripCompanion'
import Nav from './components/Nav'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Problem from './components/Problem'
import Persona from './components/Persona'
import Roadmap from './components/Roadmap'
import Metrics from './components/Metrics'
import FutureBets from './components/FutureBets'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <main>
        <Hero />
        <AboutMe />
        <Problem />
        <Persona />
        <Roadmap />
        <div id="prototypes" className="max-w-6xl mx-auto px-8 py-24">
  <p className="text-sm font-medium uppercase tracking-widest mb-6" style={{color: '#A37901'}}>
    Prototypes
  </p>
  <div className="grid grid-cols-2 gap-24 mb-16">
    <h2 className="text-4xl font-medium" style={{color: '#231F20'}}>
      What it feels like to use.
    </h2>
    <p className="text-lg text-gray-500 leading-relaxed">
      Three interactive prototypes for the highest-impact stories. Tap through to experience the guest and host moments this roadmap is designed to create.
    </p>
  </div>
  <TripCompanion />
  <HostBriefingCard />
  <GarageRebook />
</div>
        <Metrics />
        <FutureBets />
      </main>
    </div>
  )
}

export default App