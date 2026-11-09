// Module 02 — Skincare (EN, US)
const { build } = require("./lib");
const content = ({ add, P, H1, H2, B, N, SP, callout, table, runs, Paragraph, TextRun, PageBreak, BorderStyle, CHAR, BORD, MUTED, GREY, SERIF }) => {

/* --- opening --- */
add(
  new Paragraph({ children: [new TextRun({ text: "MODULE 02", bold: true, color: BORD, size: 20, characterSpacing: 40 })], spacing: { before: 1800, after: 120 } }),
  new Paragraph({ children: [new TextRun({ text: "Skincare", font: SERIF, size: 88, color: CHAR })], spacing: { after: 80 } }),
  new Paragraph({ children: [new TextRun({ text: "Clear skin through a simple routine, the right actives and patience.", font: SERIF, italics: true, size: 28, color: MUTED })], spacing: { after: 480 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: CHAR, space: 12 } } }),
  ...table(["Reading time", "Budget", "First visible results", "Prerequisite"],
    [["About 25 minutes", "$35–55 / month", "8 to 12 weeks", "Module 01"]], [1, 1, 1, 1]),
);
add(...callout("By the end of this module, you'll be able to", [
  "Identify your skin type in one hour, with no equipment.",
  "Build an AM / PM routine with five products max.",
  "Pick **one** active that targets your main concern and introduce it without wrecking your skin barrier.",
  "Recognize when you need to see a professional, and not waste months before doing so.",
], CHAR));
add(...callout("How to read the labels", [
  "{C} Backed by research and dermatology guidelines.",
  "{P} Promising results, limited studies. Might be worth it, no guarantees.",
  "{W} Ineffective, risky, or both. Don't do it.",
  "{M} This belongs to a healthcare professional: physician, dermatologist or pharmacist.",
]));

/* --- 2.1 --- */
add(new Paragraph({ children: [new PageBreak()] }), H1("2.1", "Your skin in 5 minutes"));
add(P("You don't need a biology degree to have good skin. But three concepts will save you from 90% of the mistakes you see on TikTok."));
add(H2("The skin barrier"));
add(P("The outermost layer of your skin, the **stratum corneum**, works like a brick wall: dead cells (the bricks) held together by lipids (the mortar). That wall keeps water in and irritants out, limiting **transepidermal water loss**. {C}"));
add(P("When you damage it (harsh scrubs, too many actives at once, stripping soaps), your skin feels tight, turns red, stings, and paradoxically **can produce more oil and more breakouts**. Rule number one of skincare: don't break the barrier."));
add(H2("Keratinocyte turnover"));
add(P("Your skin constantly renews itself: new keratinocytes form in the deeper layers and migrate to the surface over several weeks. The practical takeaway: **no product can show its real effect in a few days.** Expect 8 to 12 weeks before judging an acne treatment. {C}"));
add(H2("Why acne hits at 16–25"));
add(P("Acne isn't about hygiene, and it isn't punishment for what you eat. It comes from four overlapping mechanisms: {C}"));
add(N("**Excess sebum**, driven by androgens, which are highly active at your age.", "num"));
add(N("**Clogged follicles**: dead cells build up at the pore opening and form comedones.", "num"));
add(N("**Bacterial overgrowth** of a microbe that normally lives on your skin (_Cutibacterium acnes_).", "num"));
add(N("**Inflammation**, which turns a blackhead into a red, angry pimple.", "num"));
add(P("Every active in this module targets one or more of these mechanisms. That's why you choose an active based on your concern, not on what's trending."));
add(...callout("What about diet?", [
  "Some studies associate dairy and high-glycemic-index foods with more acne in certain people. {P}",
  "The link may be real, but it's modest and varies from person to person. Don't start a restrictive diet for your skin: start with the routine. If you want to test it, cut back one thing for 8 weeks and observe.",
], GREY));

/* --- 2.2 --- */
add(H1("2.2", "Identify your skin type"));
add(P("The simplest test, on a day with nothing planned:"));
add(N("Wash your face with a gentle cleanser and pat dry.", "num2"));
add(N("Apply **nothing** for one hour.", "num2"));
add(N("Check your forehead, nose and cheeks in daylight.", "num2"));
add(...table(["What you see", "Skin type", "What it changes"], [
  ["Shine everywhere, including the cheeks", "**Oily**", "Lightweight textures (gel, fluid). Don't strip it: that makes it worse."],
  ["Shine on forehead, nose, chin; normal cheeks", "**Combination**", "The most common type in young men. Standard routine."],
  ["Tightness, rough or flaky patches", "**Dry**", "Richer moisturizer, very gentle cleanser, avoid hot water."],
  ["No shine, no tightness", "**Normal**", "You've got leeway. Protect what you have."],
], [3, 1.4, 3.6]));
add(P("**Sensitive** skin isn't a type, it's a trait: it flushes, heats up or stings easily. If that's you, everything below still applies: go twice as slow and avoid fragranced products."));

/* --- 2.3 --- */
add(H1("2.3", "The core routine"));
add(P("Five products, max. If you remember one thing: **a simple routine done every day beats a perfect routine done every third day.**"));
add(...table(["", "AM", "PM"], [
  ["1", "**Gentle cleanser**\nOr just water if your skin is dry.", "**Gentle cleanser**\nA must if you sweated or wore SPF."],
  ["2", "_(Morning active, optional)_", "**Active** (just one, see 2.4)\nOn fully dry skin."],
  ["3", "**Moisturizer**\nTexture matched to your skin type.", "**Moisturizer**\nSame product as the morning is fine."],
  ["4", "**Broad-spectrum SPF 30+**\nSPF 50 if you spend time outdoors.", "—"],
], [0.4, 4, 4]));
add(H2("Sunscreen: the single most important product"));
add(P("UV exposure is the leading driver of visible skin aging, known as photoaging: wrinkles, dark spots, uneven texture. In a 4-year Australian trial, participants who applied sunscreen daily showed no detectable increase in skin aging, unlike the group who used it at their own discretion. {C}"));
add(P("For you, SPF has two immediate benefits:"));
add(B("it stops the **red and brown marks** left by breakouts (post-inflammatory erythema and hyperpigmentation) from darkening;"));
add(B("several actives (retinoids, acids) increase **photosensitivity**. Without SPF, they backfire."));
add(...callout("The 3 mistakes that cancel out your SPF", [
  "**Not enough product.** For face and neck, use about two finger-lengths (roughly a quarter teaspoon for the face alone). A pea-sized dab won't cut it.",
  "**Not every day.** UV rays go through clouds and windows. Winter included.",
  "**No reapplication.** Outdoors in the sun, reapply every 2 hours, and after sweating or swimming.",
], CHAR));
add(H2("Cleanser: gentle, for real"));
add(P("Look for \"gentle cleanser\", \"hydrating cleanser\" or \"syndet\". Avoid bar soaps and anything that leaves your skin \"squeaky clean\": that feeling is your barrier going down the drain. Massage for 30 to 60 seconds, lukewarm water, done."));
add(H2("Moisturizer: even if your skin is oily"));
add(P("Oily skin can still be dehydrated. A lightweight, **non-comedogenic** moisturizer supports the barrier and reduces the irritation that actives can cause. If your skin is very oily, a gel is enough."));

/* --- 2.4 --- */
add(new Paragraph({ children: [new PageBreak()] }), H1("2.4", "Actives: picking the right one"));
add(P("An active is an ingredient with a targeted effect. This is where people get lost: they stack five of them, irritate their skin, and conclude that \"nothing works\". **Start with one**, chosen for your main concern."));
add(...table(["Active", "Targets", "Level", "Good to know"], [
  ["**Benzoyl peroxide**\n2.5–5%", "Red, inflamed breakouts", "{C}", "Over the counter. Bleaches towels and pillowcases. Start at 2.5%: higher strengths irritate more without clear added benefit."],
  ["**Adapalene**\n0.1%", "Blackheads, breakouts, texture", "{C}", "A retinoid, available over the counter in the US at 0.1%. Stronger versions need a prescription."],
  ["**Azelaic acid**\n10–20%", "Breakouts, redness, dark marks", "{C}", "Well tolerated. 15–20% is prescription; cosmetic versions sit around 10%."],
  ["**Niacinamide**\n2–5%", "Oil control, redness, marks", "{P}", "Very well tolerated. A solid first active if your skin is sensitive."],
  ["**Salicylic acid (BHA)**\n0.5–2%", "Blackheads, pores, oily skin", "{P}", "Oil-soluble, gets into pores. More modest results than the first three. Good as a support."],
  ["**Retinol / retinal**\ncosmetic", "Texture, skin grain", "{P}", "Gentler retinoids. Must convert to retinoic acid in the skin, so slower and weaker than adapalene."],
  ["**AHAs**\nglycolic, lactic", "Radiance, texture, dullness", "{P}", "Increase photosensitivity. Not on the same night as a retinoid at first."],
  ["**Vitamin C**", "Radiance, antioxidant", "{P}", "Optional. Never before your core routine is locked in."],
], [2.1, 2, 1.3, 3.6]));
add(H2("Which active for which concern?"));
add(...table(["Your main concern", "First choice", "If your skin is sensitive"], [
  ["Red, inflamed breakouts", "Benzoyl peroxide 2.5%", "Azelaic acid"],
  ["Blackheads, small bumps, uneven texture", "Adapalene 0.1%", "Niacinamide"],
  ["Oily, shiny skin", "Niacinamide", "Niacinamide"],
  ["Marks left by breakouts", "Daily SPF + azelaic acid or niacinamide", "Niacinamide"],
  ["Dull skin, nothing specific", "No active required. SPF + core routine.", "—"],
], [3, 3.4, 2.6]));
add(...callout("Retinoids: how to use them", [
  "Among the best-studied actives for acne and texture. They speed up keratinocyte turnover and keep follicles from clogging. {C}",
  "**PM only**, on dry skin, a pea-sized amount for the whole face.",
  "**Start 2 nights a week**, then increase every 2 weeks if your skin tolerates it.",
  "During the first weeks, mild peeling or slight redness is common (retinization). Burning or swelling isn't: stop.",
  "Tretinoin and higher-strength retinoids require a prescription. Never buy them online outside of a licensed pharmacy. {M}",
], CHAR));

/* --- 2.5 --- */
add(H1("2.5", "12-week introduction plan"));
add(P("The golden rule: **one new product at a time, with at least two weeks between new additions.** If your skin reacts, you'll know exactly which product caused it."));
add(P("Before using a new product on your whole face, **patch test**: apply it behind your ear or on the side of your neck for 3 nights. No reaction? You're good to go."));
add(...table(["Weeks", "What you do", "Goal"], [
  ["**1 – 2**", "Gentle cleanser + moisturizer + SPF. Nothing else.\nBaseline photos: same lighting, same angle, no filter.", "Build the habit. Calm your skin down if you were using too much."],
  ["**3 – 4**", "Add your active **2 nights a week** (e.g. Monday and Thursday).", "Let your skin adapt."],
  ["**5 – 6**", "Move to **every other night** if there's no irritation.", "Ramp up gradually."],
  ["**7 – 8**", "Move to **every night** if tolerated. Otherwise, stay at every other night.", "Reach the target frequency."],
  ["**9 – 12**", "Change nothing.\nNew photos at week 12, same conditions.", "Give the active time to work, then evaluate."],
], [1.2, 5, 2.8]));
add(P("At week 12, compare your photos, not today's reflection. Clear improvement: keep the routine. Little or no change: add a second active gradually, or see a professional."));
add(...callout("Purging or reacting?", [
  "With a retinoid or an acid, some people get **more small breakouts for 2 to 6 weeks**, in the areas where they usually break out. That's often purging: clogged pores surfacing faster. It passes. {P}",
  "Breakouts in unusual areas, itching, burning or rashes: that's not purging. Stop the product, and if it persists, ask a pharmacist or a doctor.",
], GREY));

/* --- 2.6 --- */
add(new Paragraph({ children: [new PageBreak()] }), H1("2.6", "Budget: $35–55 a month"));
add(P("No need for luxury brands. Drugstore lines offer serious formulas. What matters is the formula, not the bottle."));
add(...table(["Product", "Typical price", "Lasts", "Monthly cost"], [
  ["Gentle cleanser (8 oz)", "$8 – 15", "2 to 3 months", "≈ $5"],
  ["Moisturizer (1.7–3 oz)", "$12 – 18", "≈ 2 months", "≈ $7"],
  ["Face SPF 50 (1.7 oz)", "$12 – 20", "≈ 1 month*", "≈ $16"],
  ["One active (serum or gel)", "$10 – 20", "2 to 3 months", "≈ $7"],
  ["SPF lip balm, extras", "—", "—", "≈ $5"],
  ["**Total**", "", "", "**≈ $40**"],
], [3.6, 1.8, 1.8, 1.8]));
add(P("* If your sunscreen lasts three months, you're not using enough. It's the most important line in the budget: don't cut corners on it.", { run: { size: 19, color: MUTED } }));
add(H2("Reading a label in 30 seconds"));
add(B("**Non-comedogenic**: formulated to minimize pore-clogging. Useful if you're acne-prone."));
add(B("**Fragrance-free**: better tolerated, especially with sensitive skin or when using an active."));
add(B("**The percentage** of the active is listed? Good sign. An active at the end of the ingredient list, with no percentage, is often there at a token dose."));
add(B("**\"Clean\", \"detox\", \"natural\"**: marketing terms with no regulated meaning. Not better, not worse."));

/* --- 2.7 --- */
add(H1("2.7", "Common problems"));
add(H2("Bumps and redness after shaving"));
add(P("Usually ingrown hairs (pseudofolliculitis) or follicle irritation. Shave with the grain, with a clean blade, on wet skin with shaving gel. If it persists, a trimmer that leaves 0.5–1 mm of stubble often solves it. More in module 05."));
add(H2("Marks left by breakouts"));
add(P("**Red or brown marks** (PIE and PIH) aren't scars: they fade on their own over a few months. Daily SPF speeds this up by preventing darkening, and azelaic acid or niacinamide can help. {C}"));
add(P("**Indented marks** are true atrophic scars. No cosmetic product fills them. A dermatologist can offer procedures. {M}"));
add(H2("Blackheads on your nose"));
add(P("Many \"blackheads\" on the nose are actually **sebaceous filaments**: small, regular gray dots that are completely normal and refill within days. Pore strips and extractors just irritate. Salicylic acid or a retinoid makes them less visible, without making them disappear."));
add(H2("Skin after training"));
add(P("Sweat alone doesn't cause acne, but sweat trapped under a helmet, cap or synthetic shirt can make breakouts worse (acne mechanica). Rinse your face after training and change clothes as soon as you can."));
add(H2("Skin that feels tight, burns or peels a lot"));
add(P("Your barrier is compromised, usually because you're overdoing it. **Stop all actives for one to two weeks**: gentle cleanser, moisturizer, SPF. Your skin will settle. Then reintroduce one active, more slowly."));

/* --- 2.8 --- */
add(H1("2.8", "What not to do"));
add(...table(["Practice", "Why it's a bad idea", ""], [
  ["Popping or picking pimples", "Pushes inflammation deeper. The leading cause of lasting marks and scarring.", "{W}"],
  ["Toothpaste, lemon, baking soda, vinegar on pimples", "Irritating, even caustic. Can cause dark spots and chemical burns.", "{W}"],
  ["Grainy scrubs several times a week", "Micro-tears and barrier damage. Chemical exfoliants do the job more cleanly.", "{W}"],
  ["Stacking 4 or 5 actives from day one", "Near-guaranteed irritation, and no way to tell what's working.", "{W}"],
  ["Buying tretinoin or isotretinoin online", "Unregulated products, unknown dosing. Isotretinoin requires strict medical monitoring (pregnancy risk, mood follow-up; iPLEDGE program in the US).", "{W}"],
  ["\"Skin lightening\" creams from unofficial sources", "Some contain steroids, unregulated hydroquinone or mercury.", "{W}"],
], [2.8, 4.9, 1.9]));

/* --- 2.9 --- */
add(H1("2.9", "When to see a professional"));
add(P("Seeing a doctor isn't failing. It's often **the fastest route** to results, because the most effective acne treatments are prescription-only. {M}"));
add(...callout("Book an appointment if…", [
  "You have **deep, hard, painful** breakouts (nodules, cysts).",
  "**Indented scars** are starting to form.",
  "Your acne hasn't improved after **3 months of a consistent routine**.",
  "Your skin is **affecting your mood**, confidence or social life.",
  "A **mole is changing**: asymmetric shape, multiple colors, blurry borders, growing in size.",
  "You have a **reaction**: swelling, rashes, intense itching.",
]));
add(P("**Where to start:** a pharmacist can advise you for free, no appointment needed. For a prescription, see your primary care doctor, who can treat acne or refer you to a dermatologist. Depending on your insurance, a referral may be required, and many dermatologists also offer telehealth visits. If you're under 18, talk to a parent to book the appointment."));

/* --- 2.10 --- */
add(H1("2.10", "The right mindset"));
add(P("Your skin doesn't need to be perfect. Nobody has Instagram-filter skin, including the people posting it."));
add(B("**Don't inspect yourself in a magnifying mirror.** At 4 inches, everyone has pores, redness and imperfections. Other people see you from 3 feet away."));
add(B("**Judge progress with photos**, once a month, same lighting. Not by your reflection in the morning."));
add(B("**A bad week isn't a failure.** Stress, poor sleep or shaving can trigger a few breakouts. Stick with the routine."));
add(P("If you spend a lot of time thinking about your skin, if it stops you from going out or weighs on your mood, talk about it. To someone close to you, to your doctor. It's common, and it's treatable too."));

/* --- 2.11 --- */
add(new Paragraph({ children: [new PageBreak()] }), H1("2.11", "Cheat sheet"));
add(...table(["", "AM", "PM"], [
  ["1", "Gentle cleanser (or water)", "Gentle cleanser"],
  ["2", "Moisturizer", "Active: just one, introduced gradually"],
  ["3", "Broad-spectrum SPF 30+, two finger-lengths", "Moisturizer"],
], [0.4, 4, 4]));
add(H2("The 7 rules"));
["A simple routine, every day.", "SPF, every morning, all year round.", "One active to start.", "One new product at a time, at least two weeks apart.", "Judge results at 8–12 weeks, with photos.", "Don't pop your pimples.", "No improvement in 3 months? See a professional."]
  .forEach(r => add(N(r, "num3")));
add(H2("Your starting checklist"));
["I've identified my skin type.", "I have a gentle cleanser, a moisturizer and an SPF.", "I've taken my baseline photos.", "I've picked my active based on my main concern.", "I've put weeks 3, 5, 7 and 12 in my calendar."]
  .forEach(r => add(new Paragraph({ children: [new TextRun({ text: "☐  ", color: BORD, size: 24 }), ...runs(r)], spacing: { after: 100 } })));

/* --- sources --- */
add(H1("", "Sources"));
[
  "Reynolds RV, Yeung H, Cheng CE, et al. Guidelines of care for the management of acne vulgaris. _Journal of the American Academy of Dermatology_, 2024; 90(5): 1006.e1–1006.e30.",
  "Zaenglein AL, Pathy AL, Schlosser BJ, et al. Guidelines of care for the management of acne vulgaris. _Journal of the American Academy of Dermatology_, 2016; 74(5): 945–973.",
  "Hughes MCB, Williams GM, Baker P, Green AC. Sunscreen and prevention of skin aging: a randomized trial. _Annals of Internal Medicine_, 2013; 158(11): 781–790.",
  "Kafi R, Kwak HSR, Schumacher WE, et al. Improvement of naturally aged skin with vitamin A (retinol). _Archives of Dermatology_, 2007; 143(5): 606–612.",
  "Draelos ZD, Matsubara A, Smiles K. The effect of 2% niacinamide on facial sebum production. _Journal of Cosmetic and Laser Therapy_, 2006; 8(2): 96–101.",
  "U.S. Food and Drug Administration. iPLEDGE REMS: isotretinoin risk management program. fda.gov.",
].forEach(s => add(new Paragraph({ numbering: { reference: "src", level: 0 }, children: runs(s, { size: 18 }), spacing: { after: 80 } })));
add(SP(), P("This module is for aesthetic and educational purposes only. It does not replace advice from a physician, dermatologist or pharmacist.", { run: { italics: true, size: 18, color: MUTED } }));
};

build({ lang: "en", num: "02", short: "Skincare", title: "Module 02 — Skincare", content,
  out: require("path").join(__dirname, "..", "module-02-skincare.en.docx") });
