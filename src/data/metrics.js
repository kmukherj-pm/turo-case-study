export const metrics = {
  northStar: {
    label: "Guest ATPU",
    description: "Average trips per user for activated guests — the primary metric this roadmap is designed to move.",
  },
  leading: [
    {
      label: "In-trip response cycle time",
      description: "Average time for a host to respond to a guest message during an active trip. Target under 5 minutes. Leading indicator of trust and trip quality.",
      story: "Story 2",
    },
    {
      label: "Enriched review completion rate",
      description: "Percentage of guests who complete the post-trip enriched review questions — car feel and host relationship. Measures data foundation health for downstream stories. Baseline established in first week post-ship, target set from there.",
      story: "Story 4",
    },
    {
      label: "Trip 2 conversion rate",
      description: "Percentage of guests who complete a second trip within 60 days of their first. The earliest proxy for ATPU trajectory.",
      story: "Stories 1-5",
    },
    {
      label: "Post-trip host save rate",
      description: "Percentage of guests who save a host following a completed trip. The primary signal that the relationship layer is working.",
      story: "Story 6",
    },
    {
      label: "Trusted rebook rate",
      description: "Percentage of guests with a populated trusted roster who rebook within 30 days. Measures activation of the relationship infrastructure.",
      story: "Stories 6-7",
    },
    {
      label: "Early booking loyalty rate adoption",
      description: "Percentage of All-Star hosts who enable loyalty pricing and percentage of eligible guests who book at the loyalty rate within 30 days.",
      story: "Stories 8-9",
    },
  ],
  guardrails: [
    {
      label: "Host response rate",
      description: "Must stay above 95% — hygiene metric not a success metric. If response rate drops, story 2 has created unintended host burden.",
    },
    {
      label: "Star rating distribution",
      description: "Enriched review layer must not depress existing star ratings. Monitor weekly for the first 30 days after story 4 ships.",
    },
    {
      label: "General search supply availability",
      description: "Loyalty pricing and trusted roster features must not meaningfully reduce general search inventory. Monitor percentage of All-Star inventory in trusted-only windows.",
    },
  ],
  measurementPlan: {
    day30: [
      "In-trip response cycle time trending down",
      "Post-trip host save rate baseline established",
      "Enriched review completion rate trending up",
      "Star rating distribution unchanged",
    ],
    day60: [
      "Trip 2 conversion rate directionally positive vs control",
      "Trusted rebook rate measurable for early cohorts",
      "Loyalty pricing feature enabled by x% of All-Star hosts ",
    ],
    day90: [
      "ATPU movement visible for nomad segment",
      "Early booking loyalty rate claimed by measurable guest cohort",
      "Host relationship signal trending positive",
    ],
  },
  futureBets: [
    {
      title: "AI host communications",
      description: "Auto-generate personalized host briefing insights and guest welcome messages using enriched trip data from story 4. Natural v2 once data foundation exists.",
    },
    {
      title: "Calendar integration",
      description: "Post-booking calendar export for pickup, fuel, and return reminders. Opt-in calendar read access for proactive trip suggestions in v2.",
    },
    {
      title: "Recurring booking",
      description: "Guests set a repeating booking schedule with a trusted host — every Saturday, every first weekend of the month. Mobility by routine, not by memory.",
    },
    {
      title: "Host car orientation video",
      description: "A short host-recorded video on the listing page and in the pre-trip briefing — the host walking around their car, pointing out the CarPlay cable, the quirky seat adjustment, the best nearby spots. Puts a face to the host before arrival. The Airbnb welcome video equivalent for cars.",
    },
    {
      title: "Airbnb partnership — home and car bundling",
      description: "Airbnb just validated guest demand for integrated travel services with Welcome Pickups. The natural next step is a Turo partnership — guest books a home on Airbnb, adds a Turo car at checkout. Airbnb owns discovery, Turo owns the car for the full stay. A distribution play that puts Turo in front of the Wanderlust traveler at their highest-intent booking moment.",
    },
    {
      title: "Relationship-first search",
      description: "For guests with a trusted roster, discovery starts from their saved hosts and garaged cars — not a cold search. The longer you use Turo, the more personalized your marketplace becomes. A switching cost Hertz can never replicate.",
},,
  ],
}
