import { stories, phases } from '../data/stories'
import StoryCard from './StoryCard'

function Roadmap() {
  return (
    <div id="roadmap" className="max-w-6xl mx-auto px-8 py-24">
     <p className="text-sm font-medium uppercase tracking-widest mb-6" style={{color: '#A37901'}}>
        The roadmap
      </p>
    <div className="grid grid-cols-2 gap-24 mb-8">
        <div>
          <h2 className="text-4xl font-medium mb-8" style={{color: '#231F20'}}>
            9 stories. One quarter. One arc.
          </h2>
        </div>
        <p className="text-lg text-gray-500 leading-relaxed">
          Each story has a job — and they build on each other sequentially: <span style={{color: '#231F20', fontWeight: 500}}>fix the trip → capture the signal → build the relationship → make rebooking effortless → reward loyalty.</span> Together they create a direct causal chain to ATPU: better trips generate richer signals, richer signals build stronger relationships, stronger relationships convert to repeat bookings.
        </p>
      </div>
      <div className="p-6 rounded-lg mt-8 mb-12" style={{background: '#fafafa', border: '1px solid #f0f0f0'}}>
        <p className="text-sm font-medium uppercase tracking-widest mb-4" style={{color: '#A37901'}}>
          Prioritization rationale
        </p>
        <div className="grid grid-cols-4 gap-6">
          {[
            {
              phase: 'During trip first',
              color: '#7F77DD',
              rationale: 'The trip experience is the root cause of churn. A guest who feels supported mid-trip is more likely to leave a positive review, save the host, and rebook. Fixing the root cause before building downstream features is the right sequencing.',
            },
            {
              phase: 'Pre-trip second',
              color: '#1D9E75',
              rationale: 'A briefed host creates a warmer pickup experience — directly amplifying the during-trip stories. Story 3 ships fast, costs almost nothing, and has zero dependencies on earlier stories.',
            },
            {
              phase: 'Post-trip third',
              color: '#D85A30',
              rationale: 'The enriched review captures the data foundation that powers everything downstream. Re-engagement catches the guest while the experience is warm. Both require the trip experience to be good first — hence their position after stories 1-3.',
            },
            {
              phase: 'Relationship infra last',
              color: '#378ADD',
              rationale: 'The trusted roster, garage, and loyalty pricing stories depend on trip history and review signals from earlier stories. They are the payoff — sequenced last because they require the foundation, but they are where ATPU compounds over time.',
            },
          ].map((item, i) => (
            <div key={i} style={{borderTop: `2px solid ${item.color}`, paddingTop: '12px'}}>
              <p className="text-sm font-medium mb-2" style={{color: item.color}}>
                {item.phase}
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">
                {item.rationale}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-6 mb-8">
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