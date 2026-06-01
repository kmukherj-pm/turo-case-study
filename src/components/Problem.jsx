function Problem() {
  return (
    <div id="problem" className="min-h-screen flex flex-col justify-center max-w-6xl mx-auto px-8 py-24">
      <p className="text-sm font-medium uppercase tracking-widest mb-6" style={{color: '#A37901'}}>
        The problem
      </p>
      <div className="grid grid-cols-2 gap-24 mb-16">
        <div>
          <h2 className="text-4xl font-medium mb-8" style={{color: '#231F20'}}>
            An excellent booking product with a big opportunity to create guest loyalty.
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Turo has built one of the best booking experiences in the industry. Everything that drives a guest back for a second trip — and keeps them coming back — is largely an untapped opportunity.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <div className="p-6 border border-gray-100 rounded-lg">
            <p className="text-4xl font-medium mb-2" style={{color: '#231F20'}}>4.9★</p>
            <p className="text-sm text-gray-400 uppercase tracking-widest mb-3">App Store — 684K ratings</p>
            <p className="text-base text-gray-500">The booking experience is exceptional. Guests rate it among the best in travel.</p>
          </div>
          <div className="p-6 border border-gray-100 rounded-lg">
            <p className="text-4xl font-medium mb-2" style={{color: '#231F20'}}>r/turo</p>
            <p className="text-sm text-gray-400 uppercase tracking-widest mb-3">Reddit — post-trip complaints</p>
            <p className="text-base text-gray-500">Host radio silence. Surprise charges. And no meaningful re-engagement after the trip ends.</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-8">
        <div className="border-t-2 pt-6" style={{borderColor: '#F9D96A'}}>
          <p className="text-sm font-medium mb-3" style={{color: '#231F20'}}>Experience gap</p>
          <p className="text-sm text-gray-500 leading-relaxed">The trip itself — pickup, mid-trip support, return — is where the biggest loyalty opportunity lives. Today the experience is functional, but there's meaningful room to make it feel genuinely supported.</p>
        </div>
        <div className="border-t-2 pt-6" style={{borderColor: '#F9D96A'}}>
          <p className="text-sm font-medium mb-3" style={{color: '#231F20'}}>Relationship gap</p>
          <p className="text-sm text-gray-500 leading-relaxed">Turo knows what you booked but not who you are. Car favorites exist — but the signals sit dormant. There's no host relationship layer, no re-engagement surface, no product experience that reflects why you rent or what would bring you back.</p>
        </div>
        <div className="border-t-2 pt-6" style={{borderColor: '#F9D96A'}}>
          <p className="text-sm font-medium mb-3" style={{color: '#231F20'}}>Re-engagement gap</p>
          <p className="text-sm text-gray-500 leading-relaxed">The post-trip window — when the experience is warmest and most actionable — is an underleveraged opportunity. There's real room to build a re-engagement surface that catches guests while the memory is fresh.</p>
        </div>
      </div>
    </div>
  )
}

export default Problem