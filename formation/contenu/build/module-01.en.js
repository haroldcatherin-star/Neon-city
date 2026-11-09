// Module 01 — Framework and realistic expectations (EN)
const { build } = require("./lib");
const content = ({ add, P, H1, H2, B, N, callout, table, pb, opener, sources, check, CHAR, GREY }) => {

opener({
  subtitle: "Know what you can change, what you can't, and how to track it without losing your mind.",
  meta: [["Reading time", "Budget", "Time to apply", "Prerequisite"], ["About 20 minutes", "$0", "1 hour", "Preamble"]],
  goals: [
    "Sort any feature into **trainable**, **fixed** or **medical**, and stop wasting energy on the wrong category.",
    "Set realistic timelines for each area so you don't quit at week three.",
    "Take baseline photos that are actually comparable.",
    "Recognize when appearance concerns are turning into something unhealthy.",
  ],
});

add(pb(), H1("1.1", "Why this module comes first"));
add(P("Most people who quit a self-improvement plan don't quit because the plan was wrong. They quit because their **expectations** were wrong: they expected visible change in two weeks, compared themselves to edited photos, or spent all their effort on something that can't change. This module fixes that before you start."));

add(H1("1.2", "Three categories: trainable, fixed, medical"));
add(P("Every feature you care about falls into one of three buckets. Put your energy into the first one."));
add(...table(["Category", "Examples", "What to do"], [
  ["**Trainable**\nHabits move the needle", "Skin clarity, body fat, muscle, posture, haircut, beard, clothes, sleep, eye contact, voice, hygiene, smile", "This is where 90% of your effort goes. Modules 02 to 07."],
  ["**Fixed**\nSet once you've finished growing", "Adult bone structure, height after growth plates close, eye shape, natural hair color, ethnicity", "Accept and work around. Style, grooming and body composition can change how these read."],
  ["**Medical**\nChangeable, but only by a professional", "Severe acne, hair loss, crooked teeth, deviated septum, scars", "Get assessed. Don't DIY. {M}"],
], [2.2, 4.2, 3.2]));
add(...callout("“Fixed” doesn't mean “it's over”", [
  "Your jaw bone won't change shape. But how visible it is depends heavily on body fat, posture and beard shape. Your height won't change. But posture, fit of clothes and proportions change how tall you look and carry yourself. Fixed features set the frame; trainable features decide what's inside it.",
], CHAR));

add(H1("1.3", "What actually drives how people see you"));
add(P("Social media reduces attractiveness to a list of bone measurements. Research paints a broader picture."));
add(H2("It's more than bone structure"));
add(B("**Skin health and evenness** influence how healthy and attractive a face is judged to be (much of this research used female faces, but the principle carries over). {P}"));
add(B("**Expression matters**: a genuine smile reliably makes people seem warmer and more approachable. Its effect on attractiveness ratings is more mixed, but approachability is what opens conversations. {P}"));
add(B("**Clothing changes first impressions**: in one study, the same faces were judged as more competent when shown wearing clothes perceived as richer. {P}"));
add(B("**Body composition, posture and grooming** are among the most visible signals in real life, where people see you moving, talking and from several feet away, not as a cropped, front-facing photo."));
add(H2("Taste is more personal than TikTok admits"));
add(P("Studies that ask many people to rate the same faces find that a large share of the variation comes from **individual taste**, not from a universal standard. One large twin study found that personal face preferences are shaped mainly by each person's own environment and experiences, not by genes. {P}"));
add(P("Translation: there is no single scale that everyone agrees on. The idea that you have one objective \"score\" that determines your life is not what the evidence shows."));

add(H1("1.4", "Why we reject the blackpill"));
add(P("The blackpill is the belief that your looks are fixed at birth, that they determine everything, and that improvement is pointless. Here's why we don't buy it:"));
add(N("**It ignores the trainable category.** Most of what people notice in daily life (skin, body, grooming, style, presence) responds to effort.", "bp"));
add(N("**It treats ratings as facts.** Ratings vary hugely between raters and contexts. A number from an online forum is an opinion, often from people with an agenda.", "bp"));
add(N("**It's self-fulfilling.** If you believe effort is useless, you stop making it, and then you see no change. That's not proof; it's the predicted result of giving up.", "bp"));
add(N("**It's bad for your mental health.** Communities built around rating and comparing appearance are associated with more body dissatisfaction, not less.", "bp"));
add(...callout("About “PSL”, ratings and “mogging”", [
  "You'll see people rate faces on scales, compare jaw angles from one photo, and declare who \"mogs\" whom. We don't use any of it in this program. One photo, one angle, one lighting setup is not how anyone experiences you in real life.",
  "If you're spending time posting your photos for ratings, the most useful thing you can do for your progress is stop.",
], GREY));

add(H1("1.5", "Realistic timelines"));
add(P("Write these down. When you're at week four and \"nothing is happening\", come back to this table."));
add(...table(["Area", "When you'll see something", "What realistic looks like"], [
  ["Haircut, beard shape, clothes", "Immediately", "The fastest wins in the whole program. Do them early (module 05)."],
  ["Sleep, puffiness, \"tired look\"", "1 to 2 weeks", "Less puffiness, fewer dark circles if sleep was the issue."],
  ["Skin (acne, texture)", "8 to 12 weeks", "Fewer breakouts, smoother texture. Marks take months to fade."],
  ["Fat loss", "Steady, ≈ 0.5–1% of body weight per week", "Face and waist change gradually. Visible on monthly photos."],
  ["Muscle (beginner)", "Strength in weeks, visible size in 2–3 months", "Shoulders and back first. Patience pays most here."],
  ["Posture, body language", "Habit in 4 to 8 weeks", "Feels forced at first, becomes automatic."],
  ["Hair loss treatment", "3 to 6 months to judge, up to 12 for full effect", "Medical. Stopping loss is already a win."],
], [2.6, 3, 4]));

add(H1("1.6", "Track progress without obsessing"));
add(H2("The monthly photo protocol"));
add(P("Mirrors lie in both directions: lighting, mood and distance change what you see every day. Photos taken under identical conditions don't."));
add(N("**Same place, same light.** Facing a window in daytime, no overhead light. Note the time of day.", "photo"));
add(N("**Same distance and height.** Phone at eye level, about 5 feet (1.5 m) away, use a timer or a stand. Front camera distorts close up: use the back camera.", "photo"));
add(N("**Same expression.** Neutral face, then a natural smile.", "photo"));
add(N("**Three angles.** Front, three-quarter, profile. Plus a body shot (front and side) if you're working on physique.", "photo"));
add(N("**No filters, no edits.** Store them in one dated album.", "photo"));
add(P("Take them on day 1, then once every 4 weeks. Compare day 1 with the latest set side by side. **Never compare day-to-day.**"));
add(H2("Other measurements"));
add(B("**Body weight**: weigh yourself a few mornings a week and look at the weekly average, not single readings. Daily water swings of 1–3 lb are normal."));
add(B("**Waist circumference** at the navel, once every two weeks. Often more telling than the scale."));
add(B("**A simple log**: a notes app with three lines per day (routine done? training? sleep hours?). Consistency is the metric you control."));

add(H1("1.7", "Set goals you control"));
add(P("\"Have a sharper jaw\" is an outcome you can't directly control. \"Hit my protein target 6 days a week and train 3 times a week\" is a process you can. Outcomes follow processes."));
add(...table(["Instead of…", "Set this"], [
  ["Clear skin", "AM/PM routine done 6+ days a week, SPF every morning"],
  ["Lose my double chin", "Moderate calorie deficit, 8,000+ steps a day, weekly weigh-in average"],
  ["Look more confident", "Hold eye contact during every order or purchase this week"],
  ["Look better in photos", "Haircut booked, three well-fitting basics bought"],
], [3.5, 6]));

add(H1("1.8", "Red flags: when concern becomes a problem"));
add(P("Working on yourself should make life better, not smaller. Check in with yourself honestly. {M}"));
add(...callout("Talk to a professional if…", [
  "You spend **more than an hour a day** thinking about a specific flaw.",
  "You **check mirrors constantly** or avoid them completely.",
  "You **avoid going out**, being photographed, or seeing people because of how you look.",
  "You feel the urge to try **risky procedures or products** to fix a feature.",
  "Your mood is consistently low, or you have thoughts of harming yourself. In the US, call or text **988**.",
], GREY));
add(P("Body dysmorphic disorder affects roughly 2% of people and responds well to treatment, especially cognitive behavioral therapy. Getting help is a strength move, not a failure."));

add(H1("1.9", "Your module 01 checklist"));
check([
  "I've listed my goals and sorted each into trainable, fixed or medical.",
  "I've rewritten my outcome goals as process goals I control.",
  "I've taken my day-1 photos following the protocol.",
  "I've noted my starting weight average and waist measurement (if working on physique).",
  "I've set a monthly calendar reminder for my next photos.",
  "I've muted or left at least one rating/comparison account or community.",
]);

sources([
  "Germine L, Russell R, Bronstad PM, et al. Individual aesthetic preferences for faces are shaped mostly by environments, not genes. _Current Biology_, 2015; 25(20): 2684–2689.",
  "Hönekopp J. Once more: is beauty in the eye of the beholder? Relative contributions of private and shared taste to judgments of facial attractiveness. _Journal of Experimental Psychology: Human Perception and Performance_, 2006; 32(2): 199–209.",
  "Oh D, Shafir E, Todorov A. Economic status cues from clothes affect perceived competence from faces. _Nature Human Behaviour_, 2020; 4: 287–293.",
  "Fink B, Grammer K, Matts PJ. Visible skin color distribution plays a role in the perception of age, attractiveness, and health in female faces. _Evolution and Human Behavior_, 2006; 27(6): 433–442.",
  "Veale D, Gledhill LJ, Christodoulou P, Hodsoll J. Body dysmorphic disorder in different settings: a systematic review and estimated weighted prevalence. _Body Image_, 2016; 18: 168–186.",
  "Helms ER, Aragon AA, Fitschen PJ. Evidence-based recommendations for natural bodybuilding contest preparation: nutrition and supplementation. _Journal of the International Society of Sports Nutrition_, 2014; 11: 20.",
]);
};

build({ lang: "en", num: "01", short: "Framework", title: "Module 01 — Framework and realistic expectations", content,
  out: require("path").join(__dirname, "..", "module-01-framework.en.docx") });
