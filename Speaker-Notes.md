# Turo Case Study — Speaker Notes
## Lead PM, Host Product — Panel Presentation
### 50 minutes including Q&A

---

## TIMING GUIDE
- Opening: 2 min
- Problem: 3 min
- My trip: 4 min
- Persona and strategy: 5 min
- Roadmap: 15 min
- Prototypes: 6 min
- Metrics: 5 min
- Future bets: 1 min
- Closing: 2 min
- Q&A: 7 min

---

## OPENING — 2 minutes

"Good afternoon everyone, its great to be here with you.

Before I get into the roadmap, I want to tell you why I feel so strongly about it.

I've lived across multiple cities and never owned a car. Zipcar for the magic one-text extension. Evo and Modo for the car that was always just across the street. Hertz for the agents who remembered my preferences. And last week — a Subaru Outback on Turo for a day trip I took specifically to understand this product from the inside.

Each of those services solved a piece of the puzzle. None of them put it all together.

That's what this roadmap is about.

I'm not here to tell you Turo has a problem. I'm here to tell you Turo has an opportunity — and I think it's one of the most interesting product opportunities in consumer mobility right now.

Turo has built an exceptional booking experience. The product works. Guests find cars, book them, and show up.

But here's the question I kept asking myself on that trip last week — what happens after the booking? What happens during the trip when something goes wrong? What happens after I return the car and the experience is still warm in my memory?

The answer, for the most part, is not much.

And that's the opportunity.

Turo's next product frontier is loyalty. Not acquisition. Not supply. Loyalty. And that's what the next 45 minutes are about."

---

## PROBLEM — 3 minutes

"Let me show you what I mean.

Two data points that tell the whole story.

4.9 stars on the App Store. 684K ratings. Editors Choice on Google Play. By any measure, Turo has built one of the best booking experiences in the industry. Guests love discovering cars, they love the selection, they love how easy it is to book.

But then there's Reddit. Host radio silence. Surprise charges. Post-trip disputes. The product that shows up after checkout is a different product from the one that earned 4.9 stars.

This gap between App Store ratings and Reddit complaints isn't unique to Turo by the way. It's a pattern across consumer marketplaces — Airbnb, Uber, DoorDash. The app works great until something goes wrong, and then there's no recovery mechanism. What's different here is that the post-trip window is also the highest-value re-engagement moment. And Turo goes quiet exactly when it should speak up.

So when I look at the opportunity I see three gaps.

1. An experience gap — the trip itself, from pickup through return, has meaningful room to feel more supported. Today it's functional. There's real opportunity to make it feel genuinely guided.

2. A relationship gap — Turo knows what you booked but not who you are. Car favorites exist, but those signals sit dormant. There's no host relationship layer, no understanding of why you rent, nothing that reflects your life situation.

3. A re-engagement gap — the post-trip window is underleveraged. There's real opportunity to build a surface that catches guests while the memory is fresh.

These three gaps are what the roadmap addresses. Let me show you what I actually experienced."

---

## MY TRIP — 4 minutes

"Before I wrote a single user story I booked a Subaru Outback on Turo and took a day trip. Here's what actually happened.

The booking was mostly great; easy search, good selection — though I did spend 20 minutes figuring out whether my credit card insurance covered Turo. It doesn't — but I had to find that out myself. Once I got past that, clear pricing, confident checkout. I was excited.

Then I got to pickup. 

The in-app navigation sent me to the wrong pickiup location. I was lost. I messaged the host. Radio silence. I figured it out myself — but I shouldn't have had to.

The host messaged me like a stranger. Perfectly pleasant — but transactional. No warmth, no welcome. Turo had all the context to make that moment special — it was my first trip, I'd booked a Subaru, I was arriving at 10am — and none of it seemed to reach him. First-timer context existed but wasn't enough to activate a warm welcome.

The lockbox was confusing. Nobody reminded me to fuel up. I did a mad rush at the last minute to find a station.

At return I came back 10 minutes past the grace period. I knew about the 30 minutes buffer — but I had no idea if those extra 10 minutes would trigger a charge. That unresolved uncertainty — did I just get charged? — is the last feeling I had about this trip. Zipcar used to pardon first-time late returns automatically. That one gesture built more loyalty than any marketing campaign.

And then Turo went quiet. Generic 1-5 star review. No car feel question. No re-engagement prompt. Within a few weeks the memory fades.

Here's the thing though — none of this needed to happen. Turo had every piece of information to prevent every one of those moments. The fuel reminder, the grace period notification, the host briefing, the re-engagement prompt. The ingredients were all there.

They just needed to be assembled.

That's what this roadmap does."

---

## PERSONA AND STRATEGY — 5 minutes

"So who are we building this for?

I considered three personas. 

1. The Digital Nomad — lives across cities, never owns a car, needs mobility wherever they land.
2. The Newly Relocated — just moved somewhere new, building routines, needs a car episodically.
3. The Wanderlust Traveler — 5-6 trips a year, destination markets, airport delivery.

I chose the Digital Nomad. Here's why.

The Wanderlust Traveler is the obvious answer. They're aspirational, they fit Turo's brand. But when I stress-tested the relationship thesis against that persona it broke down. They rarely return to the same city. The host relationship is geographically locked. You can't rebook a Seattle host from San Francisco on a whim.

The nomad is different. They've structurally opted out of car ownership — not temporarily, but as a lifestyle. They rotate between cities. Car ownership isn't in their plan. And their ATPU ceiling is dramatically higher — a nomad with trusted hosts in three cities could generate 20 to 40 trips a year. A Wanderlust traveler caps at 5 or 6. Same acquisition cost. Dramatically higher lifetime value.

Worth noting — that the first 5 user stories in the roadmao are platform improvements that lift every guest segment. The remaining stories are where we make a deliberate bet on the nomad. That's where the relationship infrastructure lives.

Now — the problem statement.

Guests who are building a life in motion have no way to turn a great trip into a trusted mobility routine. Turo knows what you booked — but not who you are. There's no host relationship layer, no understanding of why you rent, nothing that reflects your life situation. The result: every booking still feels like the first one.

(scroll) The hypothesis is simple. If we make every trip feel genuinely supported, capture the signals that tell us what guests love, and help them build a trusted roster they can act on effortlessly — we believe ATPU for this segment will increase materially within one quarter.

Two leading indicators tell us if it's working — trip 2 conversion rate, and post-trip host save rate. I'll come back to measurement in detail later.

Before I move to the roadmap — a few assumptions I want to name explicitly.

The nomad segment is large and growing. Remote work made this mainstream, not niche.

The biggest ATPU opportunity lives after checkout. The booking experience is great — the post booking experience is where we need to invest next.

Host quality directly drives rebooking. A transactional pickup or radio silence mid-trip meaningfully reduces the probability of a second booking.

I've called out a couple of other assumptions which will make more sense once we get to the relevant stories. 

One honest gap — I audited the guest experience firsthand but didn't complete a full host onboarding flow. Some host-facing stories may partially exist today. I'd recommend a product audit before sprint planning on those specifically.

Let's get into the roadmap."

---

## ROADMAP — 15 minutes

"Every story on this roadmap is designed to strengthen one or both of two relationships — the guest's connection to a trusted host, and their affinity for a car they love to drive. That's the mental roster we're building.

The arc is simple. Fix the trip. Capture the signal. Build the relationship. Make rebooking effortless. Reward loyalty. Each story has a job and they build on each other sequentially. Better trips generate richer signals. Richer signals build stronger relationships. Stronger relationships convert to repeat bookings. That's the causal chain to ATPU.

The prioritization logic follows four phases. During-trip stories first — because the trip experience is the root cause. If the trip isn't good, nothing downstream matters. Pre-trip second — the host briefing card amplifies the during-trip experience and has zero dependencies. Post-trip third — capture the signal while the experience is warm. Relationship infrastructure last — because it depends on everything before it. But it's also where ATPU compounds over time.

Let's go through them."

---

**STORY 1 — TRIP COMPANION**

The moment: I forgot to fuel up. I got lost. I returned late and didn't know if I'd been charged. None of that needed to happen.

The product decision: Contextual nudges timed to guest needs — not Turo's operational checkboxes. Fuel at 90 minutes. Return buffer at 60. Grace period transparency the moment the clock starts. Host-verified coordinates at trip start.

The key line: "Turo had all the information to prevent every one of those moments. This story uses it."

Transition: "But a great guest experience needs a responsive host. That's story 2."

---

**STORY 2 — HOST RESPONSIVENESS TOOLKIT**

The moment: I was lost. I messaged the host. 15 minutes of silence.

The product decision: Quick-reply directly from the iOS notification action or Android direct reply — no need to open the app. Two seconds, phone stays in pocket. This is a standard platform pattern — WhatsApp, Slack, iMessage all use it.

The key line: "Host responsiveness fails because opening the app creates friction. We remove the friction."

Transition: "But responsiveness starts before pickup. That's story 3."

---

**STORY 3 — HOST BRIEFING CARD**

The moment: The host didn't know it was my first trip. Turo did. That information never reached him.

The product decision: A push notification 2 hours before pickup with guest context — trip number, garaged cars, rating, first-timer flag. And for first-timers, an AI-generated welcome message the host can send in one tap. Editable, personal, effortless. And because the host is writing it — they can add the details that matter. If the parking location is tricky, they add a landmark. If the lockbox has a quirk, they mention it. The AI drafts the warmth, the host adds the local knowledge.

The key line: "This is the AI moment in the roadmap — not a complex system, just taking data we already have and turning it into a warmer human interaction."

Transition: "Now the trip is great. Let's capture what the guest loved. Story 4."

---

**STORY 4 — ENRICHED POST-TRIP REVIEW**

The moment: I got a generic 1-5 star review. It told Turo almost nothing useful about whether I'd come back.

The product decision: Two additive questions after the existing star rating — how did the car feel, and would you rent from this host again. Plus a one-tap trip purpose tag. Optional, skippable, 15 seconds. The existing rating stays completely intact.

The key line: "This isn't replacing the review system. It's adding the two signals that tell us whether a guest is on a path to becoming a high-ATPU repeat booker."

Transition: "Now we have the signal. Let's use it. Story 5."

---

**STORY 5 — POST-TRIP RE-ENGAGEMENT**

The moment: Turo went quiet after my trip. The experience was warm. The window closed.

The product decision: A single re-engagement notification within 24 hours — but only for positive trips. Loved the car or would definitely rent the host again. Pre-populated rebook with dates based on prior booking cadence. Sent once, never spammed.

The key line: "We have a 1-2 month window before the memory fades. This catches the guest while the relationship is warmest."

Transition: "Now we're re-engaging guests. Let's give them somewhere to go. Story 6."

---

**STORY 6 — TRUSTED ROSTER**

The moment: After a great trip, there's no easy way to say "I want to come back to this host."

The product decision: A save this host prompt surfaces immediately after a positive enriched review. Host save only available after a completed trip — the relationship must be earned through experience, not browsing. This introduces the trusted roster — the guest's personal mobility network on Turo.

The key line: "A guest with three trusted hosts in their city doesn't have a rental app. They have a mobility network."

Transition: "The garage is the car-side of that network. Story 7."

---

**STORY 7 — YOUR GARAGE AND TRUSTED REBOOK**

The moment: I drove a Subaru Outback and loved it. There's no easy way to get back to it.

The product decision: A garage filter within the existing favorites tab — not a new feature, an enrichment of what already exists. Driven cars populate automatically. And when both a saved host and a garaged car are available — one tap rebooks the whole thing. Car, host, dates, protection plan. Done.

The key line: "Rebooking that feels like texting a friend, not starting a search from scratch."

Transition: "Now let's make the relationship financially rewarding for both sides. Stories 8 and 9."

---

**STORY 8 — LOYALTY PRICING — HOST**

The moment: Hosts have returning guests they count on. Turo gives them no tools to reward or prioritize them.

The product decision: All-Star hosts only. A set-and-forget loyalty discount between 5 and 20 percent — applies automatically when a trusted roster guest books 30 or more days in advance. The host sets it once and the system does the rest. ROI signal on the dashboard shows whether it's working.

The key line: "A small rate reduction in exchange for advance booking certainty. Rational economics for any micro-fleet operator."

Transition: "And the guest side of that same transaction. Story 9."

---

**STORY 9 — EARLY BOOKING LOYALTY RATE — GUEST**

The moment: Loyalty should feel like a reward, not a search for a coupon code.

The product decision: When a trusted roster guest books 30 or more days out, the loyalty rate applies automatically. No friction. The booking flow surfaces the standard rate, the loyalty rate, and the saving — your returning guest rate: $95 a day, you save $15. The notification that drives this: "Carlos has his Subaru available in November — book now to lock in your returning guest rate."

The key line: "The loyalty rate is the financial signal that makes building a trusted roster tangibly worthwhile."

---

"Nine stories. One arc. Let me show you what three of them feel like to use."

---

## PROTOTYPES — 6 minutes

"I built three prototypes for the highest-impact stories. These aren't wireframes — they're interactive. Let me walk you through them."

---

**PROTOTYPE 1 — TRIP COMPANION**
*[Navigate to prototypes section, click Story 1]*

"This is the trip I took last week — here's what it should have felt like.

Three moments. Fuel reminder at 90 minutes — one tap to the nearest station. Return buffer at 60 minutes — surfaces the grace period policy before anxiety sets in. And at the moment the trip ends — you're not late yet. Here's exactly when your grace period expires. Here's one tap to extend if you need it.

No surprises. No anxiety. Just a product that's watching out for you.

That's the difference between a product designed for Turo's operational needs and one designed for the guest's emotional experience."

*[Pause. Let it land.]*

---

**PROTOTYPE 2 — HOST BRIEFING CARD**
*[Click Story 3]*

"Here's what the host should have seen two hours before I arrived.

First — the notification. My name, my trip number, the first-timer flag. Enough context to show up differently.

Then — the briefing card. Trip history, car preferences, guest rating. Private notes that persist across future bookings.

And for first-timers — an AI-generated welcome message. One tap to send. Editable before it goes. And because the host is writing it — they can add the details that matter. If the parking location is tricky, they add a landmark. If the lockbox has a quirk, they mention it. The AI drafts the warmth, the host adds the local knowledge.

This is what I wished had happened at 10am last week."

*[Pause.]*

---

**PROTOTYPE 3 — YOUR GARAGE AND TRUSTED REBOOK**
*[Click Story 7]*

"This is where the relationship infrastructure becomes a rebooking engine.

Your garage — every car you've driven, populated automatically. Car feel rating from the enriched review. One-tap rebook shortcut. The Subaru is available this weekend at your loyalty rate. The Tacoma isn't — but you can find other dates.

Your trusted roster — Carlos, All-Star host, responds in under 5 minutes. Your loyalty rate is $95 a day when you book 30 days out.

And the payoff — one-tap rebook. Car, host, dates, protection plan. Pre-filled from your last trip. One tap. Confirmed.

That's what rebooking feels like when the product knows you."

*[Pause. Let the room absorb it.]*

"Let me show you how we'd know if it's working."

---

## METRICS — 5 minutes

"Let me walk you through how we'd measure success — and be honest about what we can and can't see quickly.

ATPU is a lagging metric. It moves slowly. A guest who trips in week 4 of the quarter won't rebook until week 8 or 10 at the earliest. If we wait for ATPU to move before we know if the roadmap is working, we've waited too long to course correct.

So we need leading indicators. Signals that tell us within 30 days of each feature shipping whether the relationship infrastructure is taking hold.

One important note on timing — the 30, 60, and 90 day milestones I'm about to walk through are post-ship of the relevant features, not calendar days from quarter start. Story 1 ships, we start the 30-day clock on trip satisfaction signals. Story 4 ships, we start the clock on enriched review completion. Each feature has its own measurement window.

Here's the pyramid.

At the top — Guest ATPU. The north star. Everything we build is in service of this number.

In the middle — six leading indicators, sequenced by story order.

In-trip response cycle time. Average time for a host to respond during an active trip. Target under 5 minutes. This is our earliest signal that story 2 is changing host behavior.

Post-trip car feel completion rate. Are guests answering the enriched review questions? If completion rate isn't trending up we have a UX problem in story 4 before we have a data problem downstream.

Trip 2 conversion rate. Percentage of guests who complete a second trip within 60 days of their first. This is the earliest proxy for ATPU trajectory and the most important number on this list.

Post-trip host save rate. Percentage of guests who save a host after a completed trip. The primary signal that the trusted roster is working.

Trusted rebook rate. Percentage of guests with a populated trusted roster who rebook within 30 days. Measures whether the garage and roster are actually driving behavior.

Early booking loyalty rate adoption. Two signals in one — percentage of All-Star hosts enabling loyalty pricing, and percentage of eligible guests booking at the loyalty rate. If hosts don't enable it, story 8 didn't land. If guests don't use it, story 9 didn't land.

At the base — three guardrails. Metrics that must not regress.

Host response rate must stay above 95%. This is hygiene, not a success metric. If it drops, story 2 has created unintended host burden.

Star rating distribution must not change after story 4 ships. The enriched review is additive — if it's depressing star ratings we have an unintended consequence to fix immediately.

General search supply availability must stay healthy. Stories 8 and 9 give All-Star hosts tools to offer early access to returning guests — but we never want that to meaningfully reduce what's available to everyone else. We monitor the percentage of All-Star inventory claimed through loyalty pricing before it hits general search. If that number gets too high, we tighten the eligibility rules.

At 30 days — in-trip response cycle time trending down, enriched review completion rate trending up from baseline, star rating distribution unchanged.

At 60 days — trip 2 conversion rate directionally positive versus control, trusted rebook rate measurable for early cohorts, loyalty pricing enabled by All-Star hosts with adoption target set in sprint planning.

At 90 days — ATPU movement visible for the nomad segment. That's the number we came here to move."

---

## FUTURE BETS — 1 minute

"I want to spend just a minute on where this roadmap leads — not because it's in scope for Q1, but because the infrastructure we're building unlocks some genuinely interesting bets.

AI host communications — once we have enriched trip data from story 4, the host briefing card gets dramatically smarter. We're not guessing at what a guest wants anymore, we're telling the host exactly what made their last trip great.

Calendar integration — post-booking calendar export for pickup, fuel, and return reminders. No permissions required, just a one-tap add to calendar. Solves the fuel problem permanently.

Recurring booking — the nomad who wants their Saturday car on a schedule. This is actually the most direct ATPU driver on this list. We scoped it to Q2 because the recurring payment infrastructure is non-trivial — but story 5's booking cadence data makes it dramatically easier to build when we get there.

Relationship-first search — for guests with a populated trusted roster, discovery starts from their saved hosts and garaged cars, not a cold search. The longer you use Turo, the more personalized your marketplace becomes. That's a switching cost Hertz can never replicate.

I'm happy to go deeper on any of these in Q&A — but let's keep moving."

---

## CLOSING — 2 minutes

"Before I open it up for questions — I want to leave you with one thought.

Turo has built something genuinely impressive. A marketplace that works. A booking experience that guests love. Supply that keeps growing.

But the guests who stay — the ones who come back 10, 20, 30 times — they're not staying because the booking flow is great. They're staying because they found a host they trust and a car they love. They built a routine. Turo became part of their life.

Right now that happens by accident. A guest gets lucky, finds a great host, figures out how to get back to them on their own.

This roadmap makes it intentional.

Fix the trip so the relationship has a chance to start. Capture the signal so we know what guests love. Build the infrastructure so they can act on it. Make rebooking effortless. Reward loyalty.

That's the arc."

*[Hit Start on the Assemble component. Say nothing. Let it run.]*

*[When "Let's build it. 🚗" appears — look up at the room.]*

"Thank you. I'm happy to take any questions."

---

## Q&A — Pre-loaded answers

---

**Q1: "Why the Digital Nomad over the Wanderlust Traveler?"**

"I stress-tested the relationship thesis against both personas. The Wanderlust Traveler rarely returns to the same city — the host relationship is geographically locked. You can't rebook a Sedona host from San Francisco on a whim. The nomad has structurally opted out of car ownership. They're not a churn risk the moment they settle down. And their ATPU ceiling is dramatically higher — 20 to 40 trips a year versus 5 or 6 for a traveler. Same acquisition cost, dramatically higher lifetime value. Worth noting — stories 1 through 5 lift every segment anyway. The nomad bet is really in stories 6 through 9."

---

**Q2: "How do you know the nomad segment is big enough to justify a full quarter?"**

"Remote work fundamentally changed this persona from niche to mainstream. Post-2020 the population of people living across cities without car ownership has grown significantly. And the ATPU math is compelling — one nomad with trusted hosts in three cities could represent more lifetime trips than six Wanderlust travelers combined. We're not trying to serve everyone with this roadmap. We're trying to find the segment with the highest ATPU ceiling and build the infrastructure to capture them. Stories 1 through 5 benefit the whole platform anyway — we're not betting the whole quarter on the nomad."

---

**Q3: "How do stories 8 and 9 ship in one quarter?"**

"Stories 8 and 9 are the payoff of everything built before them. Story 8 is a pricing settings toggle and a notification. Story 9 is a conditional discount applied in the existing booking flow. There's no new matching infrastructure, no new payment system — we're applying a percentage discount when two conditions are met: trusted roster membership and 30-day advance booking. The harder work is stories 6 and 7 which lay the trusted roster foundation — by the time we get to 8 and 9 the data model exists and the implementation is straightforward."

---

**Q4: "What does success look like at 30 days?"**

"Three things. In-trip response cycle time trending down — that tells us story 2 is changing host behavior. Enriched review completion rate trending up from baseline — that tells us the data foundation is being built. And star rating distribution unchanged — that tells us we haven't accidentally broken the trust signal that powers host discoverability. Trip 2 conversion rate is the number I care most about but it's a 60-day signal — guests need time to rebook. At 30 days we're validating the foundation, not declaring victory."

---

**Q5: "How does this interact with Turo's existing favorites feature?"**

"Favorites already exists and it's well built — named lists, easy rebook, all-star host badge, preset dates. I audited it specifically before writing story 7. The garage isn't a replacement — it's an enrichment. A filter within the existing favorites tab that surfaces cars you've actually driven, distinct from cars you've browsed. The key difference is the driven signal — a car you drove and loved is fundamentally different from a car you clicked on once. Today those two signals are collapsed into the same list. Story 7 separates them, adds the car feel rating from story 4, and makes the rebook shortcut smarter with booking cadence data. We're building on Turo's investment, not ignoring it."

---

**Q6: "Why does trip purpose come after the car feel and host relationship questions in the review flow?"**

"Feelings first, categorization second. We capture the emotional signal while it's fresh — how did the car feel, would you rent this host again — then ask guests to categorize the experience. Trip purpose is a light tag, not a sentiment signal. Starting with categorization would add cognitive load before the guest has expressed anything."

---

**Q7: "You didn't audit the host experience — how confident are you in the host-facing stories?"**

"I was deliberate about naming this as an assumption in the presentation. I audited the guest booking and trip experience firsthand. I didn't complete a full host onboarding flow. Some of the host-facing features may partially exist today — I'd recommend a product audit before sprint planning specifically on stories 2, 3, and 8. What I'm confident about is the gap — my trip experience and the Reddit research both point to host responsiveness and briefing as underleveraged surfaces. The specific implementation details are exactly what the design and engineering team would validate in discovery."

---

**Q8: "How did you build this presentation and why not a regular deck?"**

"I built it in React, deployed on GitHub Pages. It's live right now if you want to look at it after this — the repo is public too so you can see the code.

The honest reason I didn't use slides — I've been a PM for a long time and I've made a lot of decks. A deck is a container for content. What I wanted to build was a demonstration of how I think about product. The interactive story cards with expandable acceptance criteria, the tappable prototypes — those don't work in PowerPoint. The customer journey map could have been a slide — but the prototypes couldn't. And once I was building the prototypes I wanted everything to live in one place.

There's also a practical reason. Every piece of content in this presentation lives in a data file. The stories, the persona, the metrics — they're all structured JavaScript objects. If you want to change a story title or swap a metric it's one line in one file and it redeploys in two minutes. That's how I think about product too — separation of content from presentation, clean data models, reusable components.

And honestly — I wanted to show you what I'd bring to this role. Not just tell you."

---

## FINAL REMINDERS

- Eyes on the room, not the screen
- Listen to the full question before answering
- Pause one second before every Q&A answer
- Conclusion first, reasoning second
- Never apologize for a gap — own it and explain how you'd address it
- The silence during the Assemble animation is intentional — don't fill it
