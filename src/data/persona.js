export const persona = {
  name: "The nomad",
  tagline: "Building a life in motion",
  description: "Guests who move between cities or have just landed somewhere new. No car payment, no fixed mobility routine. They need reliable transportation episodically — weekend errands, exploring neighborhoods, building a new life — without committing to ownership.",
  problemStatement: "Guests who are building a life in motion have no way to turn a great trip into a trusted mobility routine. Turo knows what you booked — but not who you are. There's no host relationship layer, no understanding of why you rent, and no product experience that reflects your life situation. The result: every booking still feels like the first one.",
  hypothesis: "If we help nomad guests build a trusted roster — a host they love and a car they feel at home in — and make acting on that roster effortless, we believe ATPU for this segment will increase materially within one quarter.",
  ifWeBuild: "Relationship infrastructure — host affinity, car affinity, trusted rebook, and loyalty pricing",
  weExpectToSee: "Trip 2 conversion rate and post-trip host save rate increase within 30 days",
  leadingTo: "Higher segment ATPU as guests settle into a trusted mobility routine",
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
  body: "I audited the guest booking and trip experience firsthand but did not complete a full host onboarding flow — some host-facing stories may partially exist today and would require a product audit before sprint planning"
},
],
whyNotWanderlust: [
  "The Wanderlust traveler rarely returns to the same city — the host relationship thesis breaks down when supply is geographically fixed but demand is mobile",
  "Their ATPU ceiling is naturally lower — 5-6 trips per year maximum vs 20-40 for a nomad with trusted hosts in rotation",
  "Turo's existing product already serves them reasonably well — discovery, car selection, and airport delivery are mature surfaces. The gap is smaller and the opportunity is lower",
  "The nomad thesis is more original, more defensible, and backed by lived experience than the wanderlust",
],
  whyThisPersonaFirst: [
    {
      title: "Highest ATPU ceiling",
      body: "A nomad rotating across 3 cities with trusted hosts could generate 20-40 trips per year. A Wanderlust traveler caps at 5-6. Same acquisition cost, dramatically higher LTV.",
    },
    {
      title: "Defensible against Uber and Waymo",
      body: "Hourly urban rentals are being commoditized. A guest with a trusted host and a preferred car has no reason to switch — the relationship is the moat.",
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
  nomadStory: "I've lived across multiple cities, never owned a car, and spent years figuring out mobility from scratch every time I moved. Zipcar/Modo/EVO member, Hertz regular, and now a first-time Turo guest. I know what it feels like to wish someone had just remembered you.",
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