// Module 03 — Soft-maxxing (EN)
const { build } = require("./lib");
const content = ({ add, P, H1, H2, B, N, callout, table, pb, opener, sources, check, CHAR, GREY }) => {

opener({
  subtitle: "Posture, tongue, teeth, sleep, water: the quiet levers that change the overall impression.",
  meta: [["Reading time", "Budget", "First visible results", "Prerequisite"], ["About 25 minutes", "$0–20 / month", "1 to 8 weeks", "Module 01"]],
  goals: [
    "Fix the posture habits that make you look shorter, tired and closed off.",
    "Know exactly what mewing can and can't do, and practice the safe version.",
    "Run a dental routine that keeps your smile clean, and whiten safely if you want to.",
    "Get the sleep that changes how rested and healthy you look.",
  ],
});

add(pb(), H1("3.1", "What “soft-maxxing” means here"));
add(P("Online, soft-maxxing means everything that improves appearance without surgery. In this program, it means the **daily, low-cost habits** that change the overall impression you give: how you stand, how you breathe, how your teeth look, how rested your face is. None of them is dramatic on its own. Stacked together, they're often the difference between \"looks tired\" and \"looks put together\"."));

/* posture */
add(H1("3.2", "Posture"));
add(H2("Why it matters for appearance"));
add(P("The most common pattern is **forward head posture**: the head drifts in front of the shoulders, the upper back rounds, the shoulders roll forward. Visually, it shortens the neck, softens the jawline in profile, narrows the shoulders and costs you some apparent height."));
add(P("Correcting it won't change your bones. It changes how your existing frame is presented. That's an immediate, free win."));
add(...callout("What the evidence says", [
  "The link between posture and back or neck pain is weaker than often claimed: plenty of people with \"bad\" posture have no pain, and vice versa. {P}",
  "What's well supported: strengthening the upper back and staying active is good for your body. And how you hold yourself clearly changes how you're perceived in photos and in person. We work on posture for **appearance and comfort**, not because slouching is \"damaging your spine\".",
], GREY));
add(H2("The 2-minute posture check"));
add(N("Stand with your back against a wall, heels about 2 inches (5 cm) from it.", "wall"));
add(N("Buttocks and upper back touch the wall. Does the back of your head touch it without tilting your chin up? If not, your head sits forward.", "wall"));
add(N("Gently slide your chin back (a \"double chin\" motion) until your head touches. That's your target head position.", "wall"));
add(H2("Daily corrective routine (8 minutes)"));
add(...table(["Exercise", "How", "Dose"], [
  ["**Chin tucks**", "Seated or standing, glide your chin straight back without tilting. Hold 3 seconds.", "2 × 10"],
  ["**Wall angels**", "Back against the wall, arms in a W then slide up into a Y, keeping contact.", "2 × 10"],
  ["**Band pull-aparts**", "Light resistance band at shoulder height, pull it apart by squeezing shoulder blades.", "2 × 15"],
  ["**Doorway pec stretch**", "Forearm on door frame, elbow at shoulder height, step through gently.", "2 × 30 s per side"],
  ["**Dead hang**", "Hang from a bar with relaxed shoulders, or active shoulders if comfortable.", "2 × 20–30 s"],
], [2.2, 5.2, 1.6]));
add(P("Rows and pull-ups in module 04 do the heavy lifting. This routine adds mobility and awareness."));
add(H2("Fix the environment, not just the body"));
add(B("**Screen at eye level.** Raise your laptop on books and use a separate keyboard, or hold your phone higher."));
add(B("**Move every 30–60 minutes.** The best posture is the next one. Static positions are the problem."));
add(B("**Set a cue.** Every time you walk through a door, check: head back, shoulders down, chest open."));

/* mewing */
add(H1("3.3", "Mewing: what we know, and its limits"));
add(P("Mewing is the practice of keeping your **tongue resting flat against the roof of your mouth**, lips closed, teeth lightly touching or slightly apart, breathing through your nose. It's named after an orthodontist who claimed that this posture, held long-term, can reshape the face."));
add(...table(["Claim", "What the evidence says", "Level"], [
  ["Resting tongue posture on the palate is the normal, healthy position", "This matches standard descriptions of normal oral rest posture.", "{C}"],
  ["Nasal breathing is preferable to chronic mouth breathing", "Widely accepted. Chronic mouth breathing can signal a nasal obstruction worth checking.", "{C}"],
  ["Mewing reshapes an adult's jaw or cheekbones", "No controlled studies in adults show this. Adult facial bones have finished growing.", "{P}"],
  ["Visible changes in a few weeks", "Any quick change is posture or angle, not bone. Lifting the chin and pressing the tongue changes a photo, not your skeleton.", "{W}"],
  ["\"Hard mewing\": pushing hard with the tongue for hours", "Can strain the jaw muscles and joint (TMJ), and push teeth. No benefit to offset it.", "{W}"],
], [3.2, 4.6, 1.6]));
add(...callout("The safe version, and why it's still worth doing", [
  "Rest your whole tongue lightly on the roof of your mouth, lips closed, breathe through your nose. **Light contact, no pressure.** Don't clench.",
  "Why bother if it won't rebuild your jaw? Because it encourages nasal breathing, keeps your mouth closed at rest (which reads better than a slack jaw in person and in photos), and naturally pairs with good head posture.",
], CHAR));
add(P("**See a doctor or dentist if** you can't breathe comfortably through your nose, snore loudly, wake up with a dry mouth or headaches, or have jaw pain or clicking. Those can point to a nasal obstruction, sleep apnea or a TMJ issue. {M}"));

/* teeth */
add(H1("3.4", "Teeth and smile"));
add(P("Your smile is one of the first things people notice when you talk. You don't need a perfect Hollywood smile; you need clean, healthy teeth and fresh breath."));
add(H2("The non-negotiable routine"));
add(...table(["What", "How", "Level"], [
  ["**Brush twice a day**", "2 minutes, fluoride toothpaste, soft brush, gentle pressure. An electric brush makes it easier.", "{C}"],
  ["**Clean between teeth daily**", "Floss or interdental brushes. A toothbrush can't reach the surfaces between teeth.", "{C}"],
  ["**Don't rinse right after brushing**", "Spit, don't rinse, so the fluoride stays on your teeth longer.", "{C}"],
  ["**Clean your tongue**", "A scraper or your brush. Most bad breath comes from the back of the tongue.", "{P}"],
  ["**Dentist check-up and cleaning**", "Usually every 6 to 12 months, as your dentist recommends.", "{C}"],
], [2.6, 5.4, 1.4]));
add(H2("Whitening"));
add(B("**Prevention first**: coffee, tea, red wine, energy drinks and smoking stain. Rinse with water after."));
add(B("**Over-the-counter peroxide strips or gels** can whiten effectively. Follow the instructions exactly; temporary sensitivity is common. Look for products with the ADA Seal of Acceptance. {C}"));
add(B("**Professional whitening** at a dentist is faster and supervised. Have a check-up first: whitening over a cavity or gum issue is a bad idea. {M}"));
add(B("**Charcoal toothpaste, lemon, baking soda scrubs, vinegar**: abrasive or acidic, can wear down enamel. There's no good evidence charcoal products whiten safely. {W}"));
add(H2("Alignment"));
add(P("Crooked teeth can be straightened at any age with braces or clear aligners. That's an orthodontist's call. {M} Orthodontic associations warn against mail-order aligners without an in-person exam: moving teeth without X-rays and supervision can damage roots and gums. {W}"));

/* sleep */
add(H1("3.5", "Sleep: the most underrated lever"));
add(P("In controlled studies, the same people photographed after a normal night and after sleep deprivation were rated as **more tired, less healthy and less attractive** when sleep-deprived: hanging eyelids, redder eyes, darker circles, paler skin. {P}"));
add(P("Sleep also drives everything else in this program: appetite control and fat loss, muscle recovery, skin repair, mood, and confidence."));
add(...table(["Age", "Recommended sleep", "Source"], [
  ["13 to 18", "8 to 10 hours per night", "American Academy of Sleep Medicine {C}"],
  ["18 and up", "7 hours or more per night", "AASM and Sleep Research Society {C}"],
], [2, 3.5, 4]));
add(H2("The sleep checklist"));
add(...table(["Habit", "Why"], [
  ["**Fixed wake-up time**, even on weekends (±1 hour)", "Your body clock anchors on wake time more than bedtime."],
  ["**Daylight within an hour of waking**", "Morning light helps set your body clock so you get sleepy at the right time."],
  ["**Caffeine cutoff 6+ hours before bed**", "Caffeine taken 6 hours before bed still measurably reduced sleep in a controlled study."],
  ["**Cool, dark, quiet room**", "Blackout curtains or a sleep mask, earplugs if needed."],
  ["**Phone out of reach** for the last 30–60 minutes", "Less about blue light, more about scrolling keeping you awake longer than you planned."],
  ["**No big meal or alcohol** right before bed", "Alcohol knocks you out but fragments sleep in the second half of the night."],
], [4.2, 5.4]));
add(P("If you sleep enough hours but still wake up exhausted, snore loudly, or someone notices you stop breathing during sleep, see a doctor: it could be sleep apnea, which is treatable. {M}"));

/* hydration */
add(H1("3.6", "Hydration and puffiness"));
add(P("You'll hear that drinking gallons of water gives you glowing skin. In healthy people who already drink normally, there's little evidence that extra water visibly improves the skin. {P}"));
add(B("**Drink to thirst** and aim for pale yellow urine. More if you train, sweat, or it's hot."));
add(B("**Morning facial puffiness** is common and usually fades within an hour or two of being upright."));
add(B("**What makes it worse**: alcohol, very salty meals in the evening, short sleep, and allergies."));
add(B("**What helps**: sleep, limiting alcohol, a cold rinse in the morning. Not tricks, just less of what causes it."));

add(H1("3.7", "Quick wins summary"));
add(...table(["Lever", "Cost", "Time to notice"], [
  ["Head and shoulder posture", "$0", "Immediately in photos, 4–8 weeks to become automatic"],
  ["Tongue posture + nasal breathing", "$0", "Mouth closed at rest: immediately"],
  ["Dental routine", "≈ $10 / month", "Fresher breath: days. Healthier gums: weeks"],
  ["Whitening (optional)", "$30–60 per kit", "1 to 2 weeks"],
  ["Sleep", "$0", "1 to 2 weeks"],
], [3.4, 2, 4.2]));

add(H1("3.8", "Your module 03 checklist"));
check([
  "I've done the wall test and know my target head position.",
  "I've scheduled the 8-minute posture routine (e.g. after brushing my teeth at night).",
  "My screen is at eye level.",
  "I practice light tongue posture, no pressure, nose breathing.",
  "I brush twice a day and clean between my teeth daily.",
  "I've booked or confirmed my next dental check-up.",
  "I've set a fixed wake-up time and a caffeine cutoff.",
]);

sources([
  "Watson NF, Badr MS, Belenky G, et al. Recommended amount of sleep for a healthy adult: a joint consensus statement of the American Academy of Sleep Medicine and Sleep Research Society. _Sleep_, 2015; 38(6): 843–844.",
  "Paruthi S, Brooks LJ, D'Ambrosio C, et al. Recommended amount of sleep for pediatric populations: a consensus statement of the American Academy of Sleep Medicine. _Journal of Clinical Sleep Medicine_, 2016; 12(6): 785–786.",
  "Sundelin T, Lekander M, Kecklund G, et al. Cues of fatigue: effects of sleep deprivation on facial appearance. _Sleep_, 2013; 36(9): 1355–1360.",
  "Axelsson J, Sundelin T, Ingre M, et al. Beauty sleep: experimental study on the perceived health and attractiveness of sleep deprived people. _BMJ_, 2010; 341: c6614.",
  "Drake C, Roehrs T, Shambroom J, Roth T. Caffeine effects on sleep taken 0, 3, or 6 hours before going to bed. _Journal of Clinical Sleep Medicine_, 2013; 9(11): 1195–1200.",
  "Brooks JK, Bashirelahi N, Reynolds MA. Charcoal and charcoal-based dentifrices: a literature review. _Journal of the American Dental Association_, 2017; 148(9): 661–670.",
  "American Dental Association. Home oral care recommendations. mouthhealthy.org.",
]);
};

build({ lang: "en", num: "03", short: "Soft-maxxing", title: "Module 03 — Soft-maxxing", content,
  out: require("path").join(__dirname, "..", "module-03-soft-maxxing.en.docx") });
