// Module 04 — Physique (EN)
const { build } = require("./lib");
const content = ({ add, P, H1, H2, B, N, callout, table, pb, opener, sources, check, CHAR, GREY }) => {

opener({
  subtitle: "Lose fat without wrecking yourself, build a V-taper, and let your jawline show.",
  meta: [["Reading time", "Budget", "First visible results", "Prerequisite"], ["About 30 minutes", "$0–40 / month", "4 to 12 weeks", "Module 01"]],
  goals: [
    "Estimate your maintenance calories and set a moderate deficit, or know why you shouldn't if you're under 18.",
    "Hit a daily protein target with normal food.",
    "Run a 3-day beginner program built around progressive overload and a V-taper.",
    "Understand what actually makes a jawline visible.",
  ],
});

add(pb(), H1("4.1", "Why physique changes your face"));
add(P("Your face stores fat like the rest of your body. When overall body fat goes down, the jawline, cheekbones and chin become more defined. It's often **the single biggest visible change** someone can make to their face without a doctor. {C}"));
add(P("And from the neck down, shoulders and back that are wider than your waist (the **V-taper**) change your whole silhouette: in a T-shirt, in a jacket, in photos."));
add(...callout("You can't spot-reduce", [
  "Face exercises, jaw trainers or chin straps don't burn fat from your face. Fat comes off the whole body, in an order mostly set by genetics. The only way to a leaner face is a leaner body. {C}",
], CHAR));

add(H1("4.2", "Nutrition: the fat-loss side"));
add(H2("Energy balance, without the obsession"));
add(P("You lose fat when you take in less energy than you use. Every diet that works (keto, fasting, \"clean eating\") works by creating that deficit. Pick the approach you can stick to. {C}"));
add(H2("Find your maintenance"));
add(N("For two weeks, eat normally and **log everything** in a free app. Weigh yourself 3–4 mornings a week.", "maint"));
add(N("If your weekly average weight stayed stable, your average intake is roughly your maintenance.", "maint"));
add(N("No time for that? A rough starting estimate is **body weight in lb × 14–16** calories per day (lower end if you're inactive). Adjust from real results.", "maint"));
add(H2("Set a moderate deficit"));
add(P("Eat about **300 to 500 calories below maintenance**. Aim to lose **0.5 to 1% of body weight per week**. Slower loss preserves more muscle and is easier to sustain; in a study on athletes, a slower rate kept more lean mass than a faster one. {C}"));
add(...table(["If your weekly average…", "Do this"], [
  ["drops 0.5–1% of body weight", "Perfect. Change nothing."],
  ["drops more than 1% for 2+ weeks", "Eat about 100–200 calories more. Too fast costs muscle and energy."],
  ["doesn't move for 2–3 weeks", "Check your logging honesty first, then cut 100–200 calories or add 2,000 daily steps."],
], [4, 5.6]));
add(H2("Protein: the most important number"));
add(P("Protein protects muscle during a deficit and keeps you full. Target about **0.7 g per lb of body weight per day** (1.6 g/kg). Research shows the benefit for muscle levels off around this amount. {C}"));
add(...table(["Food", "Protein", "Food", "Protein"], [
  ["Chicken breast, 4 oz cooked", "≈ 35 g", "Greek yogurt, 1 cup", "≈ 20 g"],
  ["Lean ground beef, 4 oz cooked", "≈ 30 g", "Cottage cheese, 1 cup", "≈ 25 g"],
  ["Canned tuna, 1 can", "≈ 25 g", "3 eggs", "≈ 18 g"],
  ["Salmon, 4 oz cooked", "≈ 25 g", "Lentils, 1 cup cooked", "≈ 18 g"],
  ["Firm tofu, 1/2 block", "≈ 20 g", "Whey protein, 1 scoop", "≈ 20–25 g"],
], [3, 1.6, 3, 1.6]));
add(P("Values are approximate. Spread protein over 3–4 meals, about 30–40 g each."));
add(H2("The rest of your plate"));
add(B("**Vegetables and fruit** at most meals: volume, fiber, micronutrients, and you'll feel full on fewer calories."));
add(B("**Mostly minimally processed food.** No food is banned, but ultra-processed snacks make the deficit much harder."));
add(B("**Drinks count.** Soda, juice, fancy coffee and alcohol add up fast. Water, sparkling water, black coffee, tea."));
add(B("**Plan, don't improvise.** Decide tomorrow's meals tonight. Hunger at 9 p.m. makes bad decisions."));
add(...callout("If you're under 18", [
  "Don't count calories or run a deficit unless a doctor or registered dietitian is involved. You're still growing, and restriction at your age carries a real risk of disordered eating.",
  "Instead: eat regular meals with protein at each, plenty of fruit and vegetables, fewer sugary drinks, and train 3 times a week. That alone changes body composition a lot at your age.",
], GREY));

add(H1("4.3", "Training: building the V-taper"));
add(H2("What builds muscle"));
add(B("**Progressive overload**: doing a little more over time (more weight or more reps). It's the core principle. {C}"));
add(B("**Enough volume**: roughly **10 or more hard sets per muscle group per week** works well for most people. {C}"));
add(B("**Effort**: end each set about **1–3 reps short of failure**. Easy sets don't drive much growth."));
add(B("**Recovery**: sleep (module 03), protein, and at least a day between sessions for the same muscles."));
add(H2("Where the V-taper comes from"));
add(...table(["Area", "Muscles", "Best exercises"], [
  ["Shoulder width", "Side (lateral) deltoids", "Lateral raises, overhead press"],
  ["Back width", "Lats", "Pull-ups, lat pulldowns, rows"],
  ["Upper back thickness", "Traps, rhomboids, rear delts", "Rows, face pulls"],
  ["Narrow waist", "Lower body fat", "Nutrition (4.2), daily steps"],
], [2.6, 3, 4]));
add(H2("The beginner program: 3 days a week"));
add(P("Alternate workouts A and B, e.g. Monday A, Wednesday B, Friday A, then next Monday B. A gym is ideal; dumbbell alternatives are listed."));
add(...table(["Workout A", "Sets × reps", "Workout B", "Sets × reps"], [
  ["Squat (or goblet squat)", "3 × 6–10", "Romanian deadlift (barbell or dumbbells)", "3 × 8–10"],
  ["Bench press (or push-ups)", "3 × 6–10", "Overhead press (barbell or dumbbells)", "3 × 6–10"],
  ["Lat pulldown (or pull-ups)", "3 × 8–12", "Seated cable row (or one-arm dumbbell row)", "3 × 8–12"],
  ["Lateral raises", "3 × 12–20", "Lateral raises", "3 × 12–20"],
  ["Plank", "3 × 30–45 s", "Face pulls (or band pull-aparts)", "2 × 15"],
], [3.4, 1.4, 3.4, 1.4]));
add(H2("How to progress: double progression"));
add(N("Pick a weight you can lift for the **bottom** of the rep range with good form (e.g. 3 × 6).", "dp"));
add(N("Each session, try to add a rep to one or more sets.", "dp"));
add(N("When you hit the **top** of the range on every set (e.g. 3 × 10), increase the weight by the smallest step available and start again at the bottom.", "dp"));
add(N("Write every session down. If you don't track it, you can't overload it.", "dp"));
add(P("**Form first.** Learn each lift with a light weight, film yourself, or book a few sessions with a qualified trainer (look for certifications like NSCA-CSCS or NASM-CPT)."));
add(H2("Cardio and daily movement"));
add(P("Daily steps are underrated for fat loss: aim for **7,000 to 10,000 steps a day**. Adults are advised to get at least 150 minutes of moderate activity per week plus strength training twice a week. {C} Add 1–2 cardio sessions if you enjoy them; they help health and conditioning, but steps and diet do most of the fat-loss work."));

add(H1("4.4", "The jawline"));
add(...table(["Factor", "What you can do", "Level"], [
  ["Body fat", "The #1 lever. A leaner body means a more visible jaw. See 4.2.", "{C}"],
  ["Head posture", "Forward head posture blurs the jaw-neck angle in profile. See module 03.", "{P}"],
  ["Beard shape", "A clean neckline and defined cheek line can sharpen the jaw visually. See module 05.", ""],
  ["Neck training", "Light, progressive neck curls and extensions can thicken the neck, which frames the jaw. Start very light.", "{P}"],
  ["Jaw exercisers, hard gum", "Little evidence of visible benefit, real risk of jaw joint (TMJ) pain. See module 08.", "{W}"],
  ["Bone structure", "Fixed in adults. Only changed by surgery, which is outside this program.", "{M}"],
], [2.4, 5.8, 1.4]));

add(H1("4.5", "Supplements: short list"));
add(P("Most supplements are a waste of money. These are the few with solid evidence, for adults."));
add(...table(["Supplement", "What it does", "Level", "Notes"], [
  ["**Creatine monohydrate**", "More strength and muscle gain over time", "{C}", "3–5 g a day, any time. Plain monohydrate is all you need."],
  ["**Protein powder**", "Convenient protein, nothing more", "{C}", "Only if you can't hit your target with food."],
  ["**Caffeine**", "Improves training performance", "{C}", "Mind the sleep cutoff (module 03)."],
  ["**Vitamin D**", "Only useful if you're deficient", "{M}", "A blood test tells you. Don't megadose."],
  ["**\"Fat burners\", testosterone boosters**", "No meaningful effect, sometimes hidden stimulants or drugs", "{W}", "Skip entirely."],
], [2.6, 2.8, 1.3, 3]));
add(P("**Under 18?** Skip supplements entirely. The American Academy of Pediatrics advises against performance-enhancing supplements for minors. Food, sleep and training are enough."));

add(H1("4.6", "Special cases"));
add(H2("“Skinny-fat”"));
add(P("Not much muscle, some belly fat. Don't do an aggressive cut or a dirty bulk. As a beginner, you can **lose fat and gain muscle at the same time** (recomposition): eat around maintenance or a small deficit, high protein, and train hard with progressive overload. {C}"));
add(H2("Underweight"));
add(P("Eat about 250–500 calories above maintenance, aim to gain roughly 0.25–0.5% of body weight per week, and follow the same program. Liquid calories (milk, smoothies) help if your appetite is low."));
add(H2("Plateaus"));
add(B("**Strength stalled 3 sessions in a row?** Check sleep and protein, then reduce weight by 10% and build back up."));
add(B("**Weight stalled?** See the table in 4.2. Also check: has water retention from a new training program or salty meals hidden fat loss? Waist measurement helps."));

add(H1("4.7", "Your module 04 checklist"));
check([
  "I know my maintenance calories (logged or estimated).",
  "I've set a moderate deficit, or I'm under 18 and focusing on habits.",
  "I know my daily protein target in grams.",
  "I've planned my 3 training days for this week.",
  "I have a training log (app or notebook).",
  "I'm tracking daily steps.",
  "I've taken body photos and a waist measurement for my baseline.",
]);

sources([
  "Morton RW, Murphy KT, McKellar SR, et al. A systematic review, meta-analysis and meta-regression of the effect of protein supplementation on resistance training-induced gains in muscle mass and strength in healthy adults. _British Journal of Sports Medicine_, 2018; 52(6): 376–384.",
  "Schoenfeld BJ, Ogborn D, Krieger JW. Dose-response relationship between weekly resistance training volume and increases in muscle mass: a systematic review and meta-analysis. _Journal of Sports Sciences_, 2017; 35(11): 1073–1082.",
  "Helms ER, Aragon AA, Fitschen PJ. Evidence-based recommendations for natural bodybuilding contest preparation: nutrition and supplementation. _Journal of the International Society of Sports Nutrition_, 2014; 11: 20.",
  "Garthe I, Raastad T, Refsnes PE, et al. Effect of two different weight-loss rates on body composition and strength and power-related performance in elite athletes. _International Journal of Sport Nutrition and Exercise Metabolism_, 2011; 21(2): 97–104.",
  "Kreider RB, Kalman DS, Antonio J, et al. International Society of Sports Nutrition position stand: safety and efficacy of creatine supplementation in exercise, sport, and medicine. _Journal of the International Society of Sports Nutrition_, 2017; 14: 18.",
  "U.S. Department of Health and Human Services. _Physical Activity Guidelines for Americans_, 2nd edition, 2018.",
]);
};

build({ lang: "en", num: "04", short: "Physique", title: "Module 04 — Physique", content,
  out: require("path").join(__dirname, "..", "module-04-physique.en.docx") });
