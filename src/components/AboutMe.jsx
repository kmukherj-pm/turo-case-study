import { aboutMe } from '../data/persona'

function AboutMe() {
  return (
    <div id="about" className="min-h-screen flex flex-col justify-center max-w-6xl mx-auto px-8 py-24">
      <p className="text-sm font-medium uppercase tracking-widest mb-6" style={{color: '#A37901'}}>
        About me
      </p>
      <div className="grid grid-cols-2 gap-24">
        <div>
          <h2 className="text-4xl font-medium mb-8" style={{color: '#231F20'}}>
            I've been this guest.
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed mb-12">
            {aboutMe.nomadStory}
          </p>
          <p className="text-base font-medium italic" style={{color: '#A37901'}}>
            "{aboutMe.thesis}"
          </p>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-6">
            Relevant experience
          </p>
          <div className="flex flex-col gap-6">
            {aboutMe.professionalThreads.map((thread, i) => (
              <div key={i} className="border-l-2 pl-4" style={{borderColor: '#F9D96A'}}>
                <p className="text-sm font-medium mb-1" style={{color: '#231F20'}}>
                  {thread.role}
                </p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {thread.relevance}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe