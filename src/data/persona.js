export const persona = {
  name: "The nomad",
  tagline: "Building a life in motion",
  description: "Guests who move between cities or have just landed somewhere new. No car payment, no fixed mobility routine. They need reliable transportation episodically — weekend errands, exploring neighborhoods, building a new life — without committing to ownership.",
  problemStatement: "Guests who are building a life in motion have no way to turn a great trip into a trusted mobility routine. Turo knows what you booked — but not who you are. There's no host relationship layer, no understanding of why you rent, and no product experience that reflects your life situation. The result: every booking still feels like the first one.",
  hypothesis: "If we make every trip feel genuinely supported, capture the signals that tell us what guests love, and help them build a trusted roster they can act on effortlessly — we believe ATPU for the nomad segment will increase materially within one quarter.",
  ifWeBuild: "A supported trip experience, enriched post-trip signals, and relationship infrastructure that makes rebooking effortless",
  weExpectToSee: "Better trips, more responsive hosts, and guests saving hosts after completing a trip",
  leadingTo: "Higher nomad segment ATPU as guests move from one-off rentals to a trusted mobility routine",
  assumptions: [
  {
    label: "Nomad segment is large and growing",
    body: "Remote work has made city mobility a recurring need for millions of people who don't own cars — this is mainstream, not niche"
  },
  {
    label: "ATPU is a post-booking problem",
    body: "The booking experience is great — but the biggest ATPU opportunity lives in the experience after checkout, which is where we need to invest"
  },
  {
    label: "Host quality directly drives rebooking intent",
    body: "A transactional pickup or radio silence mid-trip meaningfully reduces the probability of a second booking"
  },
  {
    label: "Saving a host is a strong behavioral signal",
    body: "Guests who explicitly save a host and a car have materially higher rebooking intent than guests who don't"
  },
  {
    label: "All-Star hosts will participate in loyalty pricing",
    body: "A 5-20% rate reduction in exchange for advance booking certainty and lower vacancy is a rational economic decision for a micro-fleet operator"
  },
  {
    label: "Data foundation must exist before AI",
    body: "Shipping AI before the data foundation exists would produce generic unhelpful experiences — Q1 builds the foundation, Q2 is where AI becomes meaningful"
  },
  {
  label: "Host-facing features assume gaps in the current product",
  body: "I audited the guest booking and trip experience firsthand and did a light audit of the host onboarding flow. The car location pin exists but wasn't able to adjust it. No guest briefing or host-guest communication tools were visible during listing setup — validating the gap stories 2 and 3 address."
},
],
  whyNotWanderlust: [
    "The host relationship thesis breaks down for the Wanderlust traveler — they rarely return to the same city, so the host relationship is geographically locked. You can't rebook a Sedona host from San Francisco on a whim.",
    "Turo is already solving Wanderlust discovery through distribution — Uber Rent and Kayak put Turo in front of millions of travelers at their highest booking intent moment. The Wanderlust acquisition problem is being addressed externally.",
    "The nomad's ATPU ceiling is dramatically higher — 20 to 40 trips a year versus 5 to 6 for a traveler. And while acquisition cost may be higher for the nomad who finds Turo organically, the LTV math is compelling — a nomad pays back that acquisition cost within the first quarter of use.",
    "The nomad has structurally opted out of car ownership — not temporarily, but as a lifestyle. They're not a churn risk the moment they settle somewhere new. Car ownership simply isn't in their plan.",
  ],
  whyThisPersonaFirst: [
    {
      title: "Highest ATPU ceiling",
      body: "A nomad rotating across 3 cities with trusted hosts could generate 20-40 trips per year. A Wanderlust traveler caps at 5-6. Same acquisition cost, dramatically higher LTV.",
    },
    {
      title: "Defensible against traditional rental and car-share",
      body: "Hertz and Zipcar compete on convenience and price — anonymous, transactional, no relationship. Neither can offer a trusted host who knows you or a car you've driven before. The relationship is the moat.",
    },
    {
      title: "Remote work expanded the market",
      body: "Post-2020 digital nomads and city relocators are mainstream, not niche. This is a growing segment with recurring local demand.",
    },
    {
      title: "Supply stays local, demand is recurring",
      body: "Unlike Wanderlust guests who rarely return to the same city, nomads and relocated guests generate repeat demand in a fixed market — exactly the supply Turo already has.",
    },
    {
      title: "Aligns with long-term rental growth",
      body: "Turo's fastest growing segment is multi-day and weekly rentals. This persona's mobility needs naturally drive longer average trip duration.",
    },
  ],
  twoAxes: {
    title: "Two axes of loyalty",
    description: "High-ATPU guests don't just like Turo — they have a mental roster. A few trusted hosts. A few cars they feel at home in. Our job is to help them build and act on that roster.",
    axis1: {
      label: "Guest → Host",
      description: "Warmth, reliability, responsiveness. The host who greets you by name and has the car ready.",
    },
    axis2: {
      label: "Guest → Car",
      description: "The Subaru that handles like yours would. The truck that's perfect for moving day. The car you'd choose again without thinking.",
    },
  },
}

export const aboutMe = {
  nomadStory: "I've lived across multiple cities, never owned a car, and figured out mobility from scratch every time I moved. Zipcar for the magic one-text extension. Evo and Modo for the car that was always just across the street. Hertz for the agents who remembered my preferences. Each one solved a piece of the puzzle — but none of them put it all together. That's what Turo can be.",
  professionalThreads: [
    {
      role: "Staff PM — Intuit, CRM",
      relevance: "Deep experience building tools for small business operators — directly applicable to the micro-fleet host persona Turo is growing",
    },
    {
      role: "Founding PM — Mailchimp, Commerce",
      relevance: "0 to 1 launch to 250K customers — built the merchant and shopper experience end to end",
    },
    {
      role: "Product Lead — Tailored Brands, AI/ML",
      relevance: "Built a proprietary ML sizing system reducing e-commerce return rates by 30% — I was building AI products before it was cool",
    },
  ],
  thesis: "I'm not guessing at what this persona needs. I've been them.",
}
