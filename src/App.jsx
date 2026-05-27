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
        <Metrics />
        <FutureBets />
      </main>
    </div>
  )
}

export default App