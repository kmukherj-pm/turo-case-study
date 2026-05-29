export const stories = [
  {
    id: 1,
    title: "Trip companion",
    phase: "during-trip",
    phaseLabel: "During trip",
    persona: "guest",
    statement: "As a guest, I want to receive timely, contextual support during my trip so that I feel confident and supported rather than stressed about logistics.",
    criteria: [
      {
        action: "Fuel reminder 90 min before return",
        detail: "one-tap link to nearest station via Google Maps or Apple Maps"
      },
      {
        action: "Return buffer notification 60 min before trip end",
        detail: "surfaces grace period policy and extension request flow"
      },
      {
        action: "Grace period notification at trip end",
        detail: "confirms not yet late, shows exact expiry time, one-tap extension request — no charge until grace period expires"
      },
      {
        action: "Host-verified pickup coordinates at trip start",
        detail: "eliminates wrong-location errors"
      },
    ],
    outOfScope: [
      "Calendar integration — backlog",
      "Photo capture improvement — backlog",
      "AI-generated in-trip responses — backlog",
      "Real-time guest GPS tracking — backlog",
      "Host-facing in-trip tools — covered in story 2",
    ],
    atpuLink: "A guest who feels supported during the trip is more likely to leave a positive enriched review, save the host, and rebook — directly feeding stories 4, 5, and 6.",
  },
  {
    id: 2,
    title: "Host responsiveness toolkit",
    phase: "during-trip",
    phaseLabel: "During trip",
    persona: "host",
    statement: "As a host, I want lightweight tools that help me respond quickly to guests during active trips so that I can deliver a great experience without being tethered to my phone.",
    criteria: [
      {
        action: "Push notification when guest message goes unanswered for 5 minutes",
        detail: "fires during active trips only"
      },
      {
        action: "Quick-reply directly from iOS notification action or Android direct reply",
        detail: "no need to open the Turo app"
      },
      {
        action: "Four quick-reply templates for common in-trip situations",
        detail: "lost, running late, fuel question, lockbox help — editable by host"
      },
      {
        action: "Single inbox view for all active trip guest messages",
        detail: "no navigating between individual trip records"
      },
      {
        action: "Average in-trip response time displayed on host dashboard",
        detail: "directional quality signal alongside existing All-Star metrics — informational in v1, not punitive"
      },
    ],
    outOfScope: [
      "Guest-facing response time display on host profile — backlog, ships once behavior data exists",
      "AI-generated host communications — backlog, natural v2 once enriched guest data from story 4 exists",
      "Automated host replies when unavailable — backlog",
      "Guest fallback to Turo support — backlog",
      "Response time penalties or host demotion — v2 pending trust and safety review",
    ],
    atpuLink: "A responsive host turns a stressful in-trip moment into a trust-building one — guests who feel supported mid-trip are significantly more likely to rebook.",
  },
  {
    id: 3,
    title: "Host briefing card",
    phase: "pre-trip",
    phaseLabel: "Pre-trip",
    persona: "host",
    statement: "As a host, I want to know who my guest is before they arrive so that I can deliver a personalized pickup experience that makes them feel welcome from the first moment.",
    criteria: [
      {
        action: "Guest briefing card delivered 2 hours before pickup",
        detail: "includes trip number, garaged cars from prior trips, guest rating, and first-timer flag"
      },
      {
        action: "Briefing card accessible from active trip screen at any time",
        detail: "not just at the 2-hour notification moment"
      },
      {
        action: "AI-generated welcome message for first-time guests",
        detail: "based on trip number and previous bookings with the host — editable before sending in one tap"
      },
      {
        action: "Private host note on guest profile",
        detail: "persists across future bookings with the same guest — visible only to the host"
      },
      {
        action: "Fleet dashboard surfaces briefing cards for all upcoming trips in next 48 hours",
        detail: "first-timer flag visually distinct for hosts managing multiple cars"
      },
    ],
    outOfScope: [
      "AI-generated host communications beyond welcome message — backlog, v2 once story 4 data exists",
      "Guest-facing visibility into host notes — host notes are private",
      "Trip purpose signal in briefing card — requires story 4 data, v2",
    ],
    atpuLink: "A warm, personalized pickup experience is the first moment the guest-host relationship is built. Hosts who know their guests create trust that drives rebooking.",
  },
  {
    id: 4,
    title: "Enriched post-trip review",
    phase: "post-trip",
    phaseLabel: "Post-trip",
    persona: "guest",
    statement: "As a guest, I want to share how the car felt and how the host made me feel separately from my overall star rating so that my feedback reflects the full experience and helps me make better decisions next time.",
    criteria: [
      {
        action: "Existing star rating flow remains intact and unchanged",
        detail: "enriched review is an additive layer presented after star rating — not a replacement"
      },
      {
        action: "Car feel question after star rating",
        detail: "how did the car feel to drive? — loved it, it was fine, not for me"
      },
      {
        action: "Host relationship question after star rating",
        detail: "would you rent from this host again? — definitely, maybe, probably not"
      },
      {
        action: "One-tap trip purpose tag",
        detail: "daily errand, weekend trip, moving/hauling, road trip, special occasion, other"
      },
      {
        action: "All enriched questions optional and skippable in one tap",
        detail: "completion rate is a metric not a gate"
      },
      {
        action: "Guest responses stored against guest profile",
        detail: "visible to guest in trip history — feeds stories 5, 6, 7, 8, and 9 — not publicly displayed in v1"
      },
    ],
    outOfScope: [
      "Displaying enriched signals publicly on host listings — backlog",
      "Using enriched signals in host search ranking — backlog, v2 pending trust and safety review",
      "Free text response — backlog",
      "Host visibility into individual guest responses — backlog, input to stories 8 and 9",
    ],
    atpuLink: "The enriched review is the data foundation for the entire relationship infrastructure. Car feel and host relationship signals power every story that follows.",
  },
  {
    id: 5,
    title: "Post-trip re-engagement",
    phase: "post-trip",
    phaseLabel: "Post-trip",
    persona: "guest",
    statement: "As a guest, I want to be reminded of a great trip at the right moment so that booking again feels effortless rather than something I have to remember to do myself.",
    criteria: [
      {
        action: "Re-engagement notification within 24 hours of trip end",
        detail: "surfaces the car and host from the completed trip with a one-tap rebook shortcut"
      },
      {
        action: "Notification only fires for positive trips",
        detail: "loved it on car feel or definitely on host relationship from story 4 — fallback to 4+ star rating if story 4 not yet shipped"
      },
      {
        action: "Sent once only",
        detail: "no repeat nudges if guest does not act"
      },
      {
        action: "Rebook shortcut pre-populates booking flow",
        detail: "same car, same host, suggested date based on prior booking cadence — monthly suggests 30 days out, weekly suggests 7 days, no cadence defaults to nearest weekend"
      },
      {
        action: "Optional dismissal reason capture",
        detail: "not ready yet, too expensive, looking for something different — feeds re-engagement timing optimization"
      },
      {
        action: "Persistent rebook shortcut in trip history on web",
        detail: "visible for 30 days post-trip before archiving"
      },
    ],
    outOfScope: [
      "Calendar integration — backlog",
      "Seasonal or event-based re-engagement triggers — backlog",
      "Price drop alerts on previously booked cars — backlog",
      "Re-engagement for neutral or negative trips — intentionally excluded",
      "Multi-trip re-engagement campaigns — backlog",
    ],
    atpuLink: "Catching the guest within 24 hours of a positive trip — before the memory fades — is the single highest-leverage re-engagement moment. Every successful re-engagement directly increments ATPU.",
  },
  {
    id: 6,
    title: "Trusted roster — preferred host save",
    phase: "relationship",
    phaseLabel: "Relationship infrastructure",
    persona: "guest",
    statement: "As a digital nomad building a life in a new city, I want to save hosts I love into a trusted roster after a great trip so that my mobility routine builds itself over time.",
    context: "This story introduces the trusted roster — a named feature in the guest profile that stores saved hosts following completed trips. The trusted roster is referenced in stories 7, 8, and 9 as the relationship infrastructure that powers trusted rebook and loyalty pricing.",
    criteria: [
      {
        action: "Save this host prompt surfaces in post-trip review flow",
        detail: "immediately after would you rent from this host again? if guest responds definitely"
      },
      {
        action: "Host save only available after a completed trip",
        detail: "hosts cannot be saved from browse or search — relationship must be earned through experience"
      },
      {
        action: "Saved hosts stored in dedicated trusted roster section",
        detail: "distinct from car favorites which already exist"
      },
      {
        action: "Trusted roster card shows host name, all-star status, available cars, response time",
        detail: "plus guest's own would you rent again signal from story 4"
      },
      {
        action: "Notification when saved host adds a new car",
        detail: "frequency capped at once per week per saved host"
      },
      {
        action: "Web trusted roster surfaces upcoming availability across all saved hosts",
        detail: "single calendar view — useful for nomad guests planning ahead on a laptop"
      },
    ],
    outOfScope: [
      "Saving a host without a completed trip — intentionally excluded",
      "Individual guest visibility for hosts — v1 shows aggregate count only ('2 guests have added you to their trusted roster'), named guest visibility unlocks in v2 once we validate the roster drives rebooking behavior",
      "Saved host availability alerts for specific dates — requires calendar integration, backlog",
      "Mutual connection or social features — intentionally excluded",
      "Suggested hosts based on trusted roster affinity — backlog, recommendations engine v2",
      "Cross-city trusted roster portability — backlog, recommendations engine v2",
    ],
    atpuLink: "The trusted roster is the relationship memory layer that makes every subsequent story possible. A guest with three trusted hosts in their city has a mobility network — not a rental app.",
  },
  {
    id: 7,
    title: "Your garage and trusted rebook",
    phase: "relationship",
    phaseLabel: "Relationship infrastructure",
    persona: "guest",
    statement: "As a guest, I want my past driven cars and trusted hosts surfaced in one place so that rebooking a great experience takes seconds — whether I'm returning for a car I loved, a host I trust, or both.",
    criteria: [
      {
        action: "Your garage filter within existing favorites tab",
        detail: "surfaces cars the guest has driven — distinct from browsed and saved cars"
      },
      {
        action: "Driven cars added to garage automatically on trip completion",
        detail: "no guest action required — garage populates passively"
      },
      {
        action: "Garage card shows car, host, last trip date, car feel rating, rebook shortcut",
        detail: "feel rating from story 4 if submitted"
      },
      {
        action: "Cars with a completed trip automatically appear in the garage filter",
        detail: "if already favorited, the existing favorite is enriched with the driven signal — no duplicate entries"
      },
      {
        action: "Notification when garaged car is available for an upcoming weekend",
        detail: "frequency capped at once per week per car"
      },
      {
        action: "Suggested rebook date based on prior booking cadence",
        detail: "not a generic date one month ahead"
      },
      {
        action: "Trusted rebook prompt when saved host and garaged car are both available",
        detail: "since saving a host requires a completed trip, a garaged car from that host always exists when this prompt fires"
      },
      {
        action: "If archived car's host has another car available, guest is notified",
        detail: "host relationship survives car preference changing"
      },
      {
        action: "One-tap rebook pre-populates entire booking flow",
        detail: "car, host, dates, and previously used protection plan — guest confirms with a single tap"
      },
      {
        action: "Weekly digest notification summarizing availability across trusted roster and garage",
        detail: "opt-in, frequency user-controlled"
      },
      {
        action: "Cold start empty state covers both features",
        detail: "complete your first trip to start building your garage and trusted roster"
      },
    ],
    outOfScope: [
      "Standalone garage tab — intentionally excluded, lives within existing favorites tab",
      "Home screen widget — descope candidate for sprint planning",
      "Trusted rebook across cities — backlog, recommendations engine v2",
      "Car type affinity matching across cities — backlog, recommendations engine v2",
      "Garage sharing or social features — intentionally excluded",
      "Price history or price drop alerts — backlog",
    ],
    atpuLink: "The garage and trusted rebook surface is where the relationship infrastructure becomes a rebooking engine. A guest with a populated garage and trusted roster can rebook in under 10 seconds.",
  },
  {
    id: 8,
    title: "Loyalty pricing for returning guests — host",
    phase: "relationship",
    phaseLabel: "Relationship infrastructure",
    persona: "host",
    statement: "As a host, I want to set a preferred rate for guests on my trusted roster who book early so that I can reward genuine relationships and improve advance booking certainty without managing it manually.",
    criteria: [
      {
        action: "Host sees trusted roster education card before enabling loyalty pricing",
        detail: "introduces the concept, shows aggregate count of guests who have saved them — 'X guests have added you to their trusted roster' — without revealing specific names"
      },
      {
        action: "Aggregate trusted roster count updates on host dashboard as more guests save them",
        detail: "motivates hosts to invest in returning guest relationships before named visibility unlocks in v2"
      },
      {
        action: "Loyalty pricing available exclusively to All-Star hosts",
        detail: "non All-Star hosts do not see the feature in their dashboard"
      },
      {
        action: "Host sets loyalty discount between 5% and 20% off standard daily rate",
        detail: "applies automatically when a trusted roster guest books 30 or more days in advance"
      },
      {
        action: "Set once in pricing settings — applies across all cars",
        detail: "no per-trip or per-car configuration required"
      },
      {
        action: "Host notified when trusted roster guest books at loyalty rate",
        detail: "with booking details and savings amount"
      },
      {
        action: "Loyalty booking rate surfaced on host dashboard",
        detail: "percentage of advance bookings from trusted roster guests vs general public"
      },
      {
        action: "Host can pause or adjust loyalty discount at any time",
        detail: "changes apply to future bookings only — confirmed bookings unaffected"
      },
      {
        action: "Projected advance booking revenue with and without loyalty pricing",
        detail: "concrete ROI signal for maintaining trusted roster"
      },
    ],
    outOfScope: [
      "Loyalty pricing for non All-Star hosts — backlog, expand based on v1 results",
      "Per-car loyalty pricing configuration — backlog",
      "Loyalty pricing for bookings under 30 days advance — intentionally excluded",
      "Automated loyalty discount adjustments based on demand — backlog, yield management v2",
      "Loyalty pricing tiers — backlog",
    ],
    atpuLink: "Loyalty pricing gives hosts a financial tool to reward returning guests — directly incentivizing the advance bookings that improve host utilization and guest ATPU simultaneously.",
  },
  {
    id: 9,
    title: "Early booking loyalty rate — guest",
    phase: "relationship",
    phaseLabel: "Relationship infrastructure",
    persona: "guest",
    statement: "As a guest, I want to automatically receive a preferred rate when I book early with a host on my trusted roster so that building a relationship with a great host is financially rewarding as well as experientially rewarding.",
    dependencies: "Trusted roster established in story 6. Loyalty rate set by host in story 8. Guest must be on the host's trusted roster and book 30 or more days in advance to qualify.",
    criteria: [
      {
        action: "Loyalty rate applied automatically when booking 30+ days in advance",
        detail: "no coupon code, no manual request, no friction"
      },
      {
        action: "Loyalty rate surfaced prominently in booking flow",
        detail: "guest sees standard rate, loyalty rate, and saving — your returning guest rate: $95/day — you save $15/day"
      },
      {
        action: "Push notification when trusted roster host has availability 30+ days out",
        detail: "book now to lock in your returning guest rate"
      },
      {
        action: "Standard rate applies for bookings under 30 days",
        detail: "booking flow communicates when loyalty rate window is available"
      },
      {
        action: "Loyalty rate visible on saved host card in trusted roster",
        detail: "your rate with Carlos: $95/day when booked 30+ days ahead"
      },
      {
        action: "Cold start prompt for guests without trusted roster",
        detail: "loyalty rates unlock after completing a trip and being added to a host's trusted roster"
      },
    ],
    outOfScope: [
      "Loyalty rate for guests not on the host's trusted roster — intentionally excluded",
      "Loyalty rate for bookings under 30 days advance — intentionally excluded",
      "Guest ability to negotiate loyalty rate with host — backlog",
      "Loyalty rate stacking with promotional discounts — backlog, pricing rules v2",
      "Loyalty rate visibility before guest is added to trusted roster — intentionally excluded",
    ],
    atpuLink: "The loyalty rate is the financial signal that makes building a trusted roster tangibly worthwhile. A guest who saves $15/day by booking early with a trusted host has a concrete reason to plan further ahead — directly driving ATPU.",
  },
]

export const phases = [
  { id: "during-trip", label: "During trip", color: "purple" },
  { id: "pre-trip", label: "Pre-trip", color: "teal" },
  { id: "post-trip", label: "Post-trip", color: "coral" },
  { id: "relationship", label: "Relationship infrastructure", color: "blue" },
]