// Module 09 — 90-day action plan (EN)
const { build } = require("./lib");
const content = ({ add, P, H1, H2, B, N, callout, table, pb, opener, sources, check, CHAR, GREY }) => {

opener({
  subtitle: "Everything from modules 01 to 08, turned into week-by-week actions with three checkpoints.",
  meta: [["Duration", "Daily time", "Checkpoints", "Prerequisite"], ["90 days (13 weeks)", "20–30 min + 3 workouts / week", "Day 30, 60, 90", "Modules 01–08 read"]],
  goals: [
    "Know exactly what to do each week, without having to think about it.",
    "Add one change at a time, so you always know what's working.",
    "Run three checkpoints that tell you whether to keep going or adjust.",
    "Plan what comes after day 90.",
  ],
  labels: false,
});

add(pb(), H1("9.1", "How the plan works"));
add(P("The plan has **four phases**. Each one adds a layer only once the previous layer has become a habit. That's deliberate: trying to change everything in week one is the most common reason people quit by week three."));
add(...table(["Phase", "Days", "Focus"], [
  ["**1. Foundations**", "1 – 14", "Baseline photos, core skin routine, sleep schedule, start training, quick style wins."],
  ["**2. Setup**", "15 – 30", "Introduce one skin active, set nutrition targets, posture routine, first exposure steps."],
  ["**3. Progression**", "31 – 60", "Progressive overload, wardrobe upgrades, voice and conversation practice."],
  ["**4. Refinement**", "61 – 90", "Review, adjust what isn't working, lock in habits for the long term."],
], [2.4, 1.4, 5.8]));

add(H1("9.2", "Daily non-negotiables"));
add(P("From day 1, these happen every day. Everything else in the plan builds on top of them."));
add(...table(["When", "Action", "Time", "Module"], [
  ["Morning", "Gentle cleanse, moisturizer, SPF 30+", "3 min", "02"],
  ["Morning", "Daylight within an hour of waking", "5–10 min", "03"],
  ["All day", "Protein at every meal, water to thirst, step count", "—", "04"],
  ["All day", "Light tongue posture, posture check at doorways", "—", "03"],
  ["Evening", "Cleanse, active (from week 3), moisturizer", "3 min", "02"],
  ["Evening", "Brush 2 min, clean between teeth", "4 min", "03"],
  ["Evening", "Phone away, fixed bedtime", "—", "03"],
  ["Evening", "Log the day: routine done? trained? sleep hours?", "1 min", "01"],
], [1.6, 5, 1.4, 1.4]));

add(H1("9.3", "Week by week"));
add(...table(["Week", "Skin (02, 06)", "Body (03, 04)", "Style & grooming (05)", "Presence (07)"], [
  ["**1**", "Identify skin type. Buy cleanser, moisturizer, SPF. Start core routine.", "Day-1 photos and measurements. Fixed wake-up time. Start logging food (or habits if under 18).", "Haircut with reference photos. Sort wardrobe: keep what fits.", "Mute rating and comparison accounts."],
  ["**2**", "Core routine only. Medicated shampoo if dandruff.", "First 3 workouts: learn the lifts light. 7,000 steps/day.", "Pick a styling product, practice daily. Decide beard or shave.", "Build your exposure ladder."],
  ["**3**", "Patch test your active. Start it 2 nights a week.", "Set calorie and protein targets from your log.", "Beard lines (neck and cheek) or shaving routine.", "Ladder step 1, three times."],
  ["**4**", "Active 2 nights/week. Watch for irritation.", "Add the 8-min posture routine. Steps to 8,000.", "List the first 3 wardrobe pieces to buy.", "Record first 60-second voice clip."],
  ["**5**", "Active every other night if tolerated.", "Double progression: add reps each session.", "Buy the first 3 pieces. Tailor if needed.", "Ladder step 2."],
  ["**6**", "Hold. Take hairline photos (front, temples, crown).", "Weekly weigh-in average. Adjust calories if needed.", "Details: brows, nails, nose hair, fragrance.", "Eye contact practice in every purchase."],
  ["**7**", "Active nightly if tolerated, else stay every other night.", "Steps to 9,000. Check sleep average ≥ 7 h (8 h if under 18).", "Second haircut. Same barber, refine.", "Ladder step 3. Voice: work on one habit."],
  ["**8**", "Hold. Don't add anything new.", "First weight increases on most lifts.", "Add next 2–3 wardrobe pieces.", "Join one group conversation or activity."],
  ["**9**", "Hold.", "Review lift log: progressing? If not, check sleep and protein.", "Shoes: clean, one good pair.", "Ladder step 4."],
  ["**10**", "Hold. Consider a second active only if needed.", "Steps to 10,000 if realistic.", "Third haircut.", "Second voice clip, compare with week 4."],
  ["**11**", "Hold.", "Continue. Deload week if you feel run down (half the sets).", "Final wardrobe gaps.", "Ladder step 5."],
  ["**12**", "Week-12 skin photos: same conditions as day 1.", "Full photo set and measurements.", "Full outfit photos.", "Ladder step 6."],
  ["**13**", "Day-90 review (9.4).", "Day-90 review (9.4).", "Day-90 review (9.4).", "Day-90 review (9.4)."],
], [0.8, 2.4, 2.4, 2.2, 1.8]));
add(...callout("If you're under 18", [
  "Skip calorie targets. In the body column, \"set calorie targets\" becomes: regular meals, protein at each, fruit and vegetables daily, fewer sugary drinks. Everything else in the plan applies as written.",
], GREY));

add(H1("9.4", "The three checkpoints"));
add(H2("Day 30: is the foundation solid?"));
add(...table(["Check", "Good sign", "If not"], [
  ["Routine consistency (from your log)", "Core routine done 6+ days a week", "Simplify. Fewer products, set a fixed time. Consistency is the goal of phase 1–2."],
  ["Skin reaction to the active", "No burning, manageable dryness", "Drop to 2 nights a week or stop for a week (module 02)."],
  ["Training", "12 sessions done, weights going up", "Schedule workouts like appointments. Shorter sessions are fine."],
  ["Sleep", "Average ≥ 7 h (≥ 8 h under 18)", "Fix wake-up time and caffeine cutoff first."],
], [3, 3, 3.6]));
add(H2("Day 60: is it moving?"));
add(...table(["Check", "Good sign", "If not"], [
  ["Body weight average", "Down about 3–6% of starting weight if cutting", "Check logging accuracy, then adjust 100–200 calories (module 04)."],
  ["Waist", "Down, or stable while weight is stable (recomposition)", "Same as above."],
  ["Strength", "Most lifts clearly heavier than in week 2", "Check sleep, protein, effort level (1–3 reps from failure)."],
  ["Photos vs day 1", "Visible difference in at least one area", "Remember timelines (module 01). Skin often needs until week 12."],
], [3, 3, 3.6]));
add(H2("Day 90: review and decide"));
add(N("**Put day 1 and day 90 photos side by side.** Front, three-quarter, profile, body. Same conditions.", "d90"));
add(N("**For each area, write one line**: improved, unchanged, or worse.", "d90"));
add(N("**Improved:** keep doing exactly that. It's working.", "d90"));
add(N("**Unchanged after 90 days of consistent effort:** this is the point to see a professional for that area (dermatologist for skin, doctor for hair, registered dietitian for nutrition, trainer for training form).", "d90"));
add(N("**Pick one new focus** for the next 90 days. Don't restart everything.", "d90"));

add(H1("9.5", "Troubleshooting"));
add(...table(["Problem", "Fix"], [
  ["\"I missed three days.\"", "Normal. Restart the next day. Never miss twice in a row is a better rule than never miss."],
  ["\"I'm not seeing any change.\"", "Check against the timelines in module 01. Compare photos, not mirrors. Most changes show on monthly photos before the mirror."],
  ["\"My skin got worse.\"", "Purging (2–6 weeks, usual spots) or irritation (burning, unusual spots)? Module 02, 2.5."],
  ["\"I'm always hungry.\"", "More protein, more vegetables, more water. If still hungry, the deficit may be too big."],
  ["\"I have no time.\"", "Minimum version: core skin routine (6 min), 2 workouts of 40 min, steps on the phone. Keep the habit alive."],
  ["\"I'm thinking about my looks all day.\"", "Stop and read module 01, section 1.8. That's the moment to talk to someone."],
], [3.2, 6.4]));

add(H1("9.6", "Weekly tracker"));
add(P("Print one per week, or copy it into a notes app. Tick each box. Aim for 6 out of 7 on the daily lines."));
add(...table(["", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], [
  ["AM skin routine + SPF", "", "", "", "", "", "", ""],
  ["PM skin routine", "", "", "", "", "", "", ""],
  ["Teeth (brush + between)", "", "", "", "", "", "", ""],
  ["Protein target hit", "", "", "", "", "", "", ""],
  ["Steps target hit", "", "", "", "", "", "", ""],
  ["Training session", "", "", "", "", "", "", ""],
  ["Posture routine", "", "", "", "", "", "", ""],
  ["Sleep hours", "", "", "", "", "", "", ""],
  ["Exposure / presence task", "", "", "", "", "", "", ""],
], [3.2, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9]));
add(H2("Weekly review (5 minutes, Sunday)"));
add(N("What did I do consistently this week?", "rev"));
add(N("What slipped, and why?", "rev"));
add(N("What's the one thing I'll do better next week?", "rev"));
add(N("What's this week's step in the plan (9.3)?", "rev"));

add(H1("9.7", "After day 90"));
add(P("Day 90 isn't the finish line. It's the point where these stop being a \"program\" and become how you live. From here:"));
add(B("**Keep the daily non-negotiables.** They're maintenance, and they're why the results last."));
add(B("**Rotate focus every 90 days**: one area gets extra attention, the rest stay on maintenance."));
add(B("**Photos every month, review every 90 days.** Same protocol as module 01."));
add(B("**Raise the bar on presence.** Confidence keeps compounding long after skin and style stabilize."));

add(H1("9.8", "Your day-1 checklist"));
check([
  "I've read modules 01 to 08.",
  "I've taken my day-1 photos and measurements.",
  "I've bought or have the core skin products.",
  "I've set my fixed wake-up time.",
  "I've scheduled my 3 training days for week 1.",
  "I've booked my haircut.",
  "I've set calendar reminders for day 30, 60 and 90.",
  "I've printed or copied the weekly tracker.",
]);
add(P("This plan is for aesthetic and educational purposes only. It does not replace advice from a qualified healthcare professional.", { run: { italics: true, size: 18, color: "6F6A61" } }));
};

build({ lang: "en", num: "09", short: "90-day plan", title: "Module 09 — 90-day action plan", content,
  out: require("path").join(__dirname, "..", "module-09-90-day-plan.en.docx") });
