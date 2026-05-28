function Hero() {
  return (
    <div id="hero" className="min-h-screen flex flex-col justify-center max-w-6xl mx-auto px-8" style={{paddingTop: '56px'}}>
      <div className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-widest mb-6" style={{color: '#A37901'}}>
          Turo — Product Exercise
        </p>
        <h1 className="text-6xl font-medium leading-tight mb-8" style={{color: '#231F20'}}>
          Building a life in motion
        </h1>
        <p className="text-2xl text-gray-500 leading-relaxed mb-12">
          A roadmap to grow guest trips — Average Trips Per User (ATPU) by turning great trips into trusted relationships — for the guests who need Turo most.        </p>
        <div className="w-12 h-1 mb-8" style={{background: '#F9D96A'}}></div>
        <div className="flex items-center gap-12">
        <div>
          <p className="text-4xl font-medium" style={{color: '#231F20'}}>9</p>
          <p className="text-sm text-gray-400 mt-1">user stories</p>
        </div>
        <div>
          <p className="text-4xl font-medium" style={{color: '#231F20'}}>1</p>
          <p className="text-sm text-gray-400 mt-1">quarter</p>
        </div>
        <div>
          <p className="text-4xl font-medium" style={{color: '#231F20'}}>1</p>
          <p className="text-sm text-gray-400 mt-1">full-stack team</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Hero