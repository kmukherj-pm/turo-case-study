import { stories, phases } from '../data/stories'
import StoryCard from './StoryCard'

function Roadmap() {
  return (
    <div id="roadmap" className="max-w-6xl mx-auto px-8 py-24">
      <p className="text-sm font-medium uppercase tracking-widest mb-6" style={{color: '#A37901'}}>
        The roadmap
      </p>
      <div className="grid grid-cols-2 gap-24 mb-16">
        <h2 className="text-4xl font-medium" style={{color: '#231F20'}}>
          9 stories. One quarter. One arc.
        </h2>
        <p className="text-lg text-gray-500 leading-relaxed">
          Fix the trip. Capture the signal. Build the relationship. Make rebooking effortless. Reward loyalty. Each story has a job — and they build on each other sequentially.
        </p>
      </div>
      <div className="flex items-center gap-6 mb-12">
        {phases.map(phase => (
          <div key={phase.id} className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full" style={{background: phaseColor(phase.color)}}></div>
            <span className="text-sm text-gray-500">{phase.label}</span>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-3">
        {stories.map((story, i) => (
          <StoryCard key={story.id} story={story} index={i + 1} />
        ))}
      </div>
    </div>
  )
}

function phaseColor(color) {
  const colors = {
    purple: '#7F77DD',
    teal: '#1D9E75',
    coral: '#D85A30',
    blue: '#378ADD',
  }
  return colors[color] || '#888'
}

export default Roadmap