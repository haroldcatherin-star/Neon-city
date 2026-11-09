// Module 10 — FAQ and resources (EN)
const { build } = require("./lib");
const content = ({ add, P, H1, H2, B, N, callout, table, pb, opener, sources, check, CHAR, GREY }) => {

opener({
  subtitle: "Straight answers to the questions everyone asks, who to see for what, and where to read more.",
  meta: [["Reading time", "Use it", "Includes", "Prerequisite"], ["About 20 minutes", "Whenever you're stuck", "FAQ, professionals, glossary", "None"]],
  labels: false,
});

add(pb(), H1("10.1", "Frequently asked questions"));
const qa = (q, ...a) => { add(H2(q)); a.forEach(x => add(P(x))); };

qa("Am I too young to start?",
  "No. Skin care, sleep, dental hygiene, training with good form, haircuts, clothes and confidence are all safe and useful at 16. What changes if you're under 18: no calorie restriction, no supplements, and anything involving a prescription goes through a parent and a doctor (preamble, section 0.7).");
qa("Can I get taller?",
  "Once your growth plates have closed (usually in the late teens to early twenties), your height is set. Before that, sleep, nutrition and staying active support normal growth. What you can change at any age: posture (module 03), which can give back some apparent height, and fit of clothes (module 05). Growth hormone or \"height pills\" bought online are dangerous and ineffective for adults. {W}");
qa("Can I change the shape of my jaw or face?",
  "Bone structure in adults doesn't change without surgery. What changes how your face looks: body fat (module 04), posture and tongue position (module 03), beard shape and haircut (module 05), and skin (module 02). Together, those make a much bigger difference than most people expect.");
qa("What's the single most impactful thing I can do?",
  "It depends on where you start, which is why module 01 asks you to sort your goals. For most young men, the biggest visible changes come from three things: losing excess body fat, getting a haircut that suits you, and clearing up skin. Haircut is the fastest; body fat and skin take 2 to 3 months.");
qa("I think I'm ugly. Is there any point?",
  "Yes. First, people are much harsher on their own faces than anyone else is, and online rating culture makes this worse. Second, most of what people notice in real life is trainable. Third, if this thought is with you most of the day, read module 01, section 1.8: it may be worth talking to someone, and that's a good move, not a weak one.");
qa("People mock me for doing skincare or caring about my looks. What do I say?",
  "Nothing complicated: \"I just like taking care of myself.\" Confidence in the answer matters more than the answer. Most people who joke about it are curious. And results tend to end the conversation on their own.");
qa("I can't afford the budget.",
  "The free parts of this program are the most powerful: sleep, posture, training with body weight or a cheap gym, walking, eye contact, voice. For skin, a gentle cleanser and a sunscreen are the two priorities. Thrift stores for clothes. A cheap haircut from a barber you brief well (module 05) beats an expensive one you don't.");
qa("Is skincare for men different?",
  "The biology is the same. Men tend to have somewhat oilier skin and deal with shaving irritation, which module 02 and module 05 cover. \"Men's\" products are mostly marketing: choose by formula, not by packaging.");
qa("Can I do everything at once to go faster?",
  "You can, but you'll likely quit, and you won't know what's working. The 90-day plan (module 09) adds one layer at a time on purpose. Faster in week 1 usually means slower by week 6.");
qa("What about ratings, \"PSL\" and \"mogging\"?",
  "We don't use them. Ratings from a single photo don't reflect how people experience you in real life, and research shows a large part of attractiveness judgments comes from individual taste. Module 01, sections 1.3 and 1.4.");
qa("What about cosmetic procedures later?",
  "That's a decision for an adult, after the trainable side is done, with a board-certified professional (module 08, 8.5). Many people who wanted a procedure at the start of the program no longer do by the end.");
qa("When am I \"done\"?",
  "There's no finish line, and that's a good thing. After 90 days, the goal is maintenance with one focus area at a time (module 09, 9.7). If you notice you're never satisfied no matter what changes, that's worth discussing with a professional (module 01, 1.8).");

add(H1("10.2", "Who to see for what"));
add(...table(["Concern", "Professional", "When"], [
  ["Persistent acne, scars, moles, hair loss", "**Dermatologist** (often via your primary care doctor)", "No improvement after 3 months of routine, or any painful, scarring or changing lesion."],
  ["General health, referrals, prescriptions", "**Primary care doctor**", "First stop for anything medical, including blood tests and mental health."],
  ["Teeth, gums, whitening, bite", "**Dentist**", "Every 6–12 months, and before whitening."],
  ["Crooked teeth, jaw alignment", "**Orthodontist**", "After a dentist's referral or for an assessment."],
  ["Nose breathing, snoring", "**Primary care doctor**, then ENT specialist", "Blocked nose most of the time, loud snoring, poor sleep."],
  ["Nutrition, weight, eating concerns", "**Registered dietitian (RD)**", "If you're under 18 and want to change your weight, or if food feels out of control."],
  ["Training form and programming", "**Certified personal trainer** (e.g. NSCA-CSCS, NASM-CPT)", "To learn the main lifts safely, even just a few sessions."],
  ["Anxiety, low mood, body image", "**Licensed therapist or psychologist**", "When it affects your daily life (modules 01 and 07)."],
  ["Haircut and beard", "**Barber or stylist**", "Every 3–8 weeks. Bring reference photos (module 05)."],
  ["Product questions, minor skin issues", "**Pharmacist**", "Free advice, no appointment."],
], [3, 3.2, 3.4]));
add(...callout("In a crisis", [
  "If you have thoughts of harming yourself, call or text **988** (Suicide & Crisis Lifeline, US) or go to the nearest emergency room. Outside the US, call your local emergency number.",
], GREY));

add(H1("10.3", "Reliable sources to read more"));
add(...table(["Topic", "Source", "Where"], [
  ["Skin, hair, nails", "American Academy of Dermatology", "aad.org"],
  ["General health, medications", "MedlinePlus (U.S. National Library of Medicine)", "medlineplus.gov"],
  ["Dental care", "American Dental Association", "mouthhealthy.org"],
  ["Sleep", "Centers for Disease Control and Prevention", "cdc.gov/sleep"],
  ["Physical activity", "Physical Activity Guidelines for Americans", "health.gov"],
  ["Anxiety, body image, mental health", "National Institute of Mental Health", "nimh.nih.gov"],
  ["Supplements, drug warnings", "U.S. Food and Drug Administration", "fda.gov"],
  ["Building habits", "_Atomic Habits_, James Clear (book)", "Bookstores, libraries"],
], [2.8, 4.2, 2.6]));
add(P("**How to judge any other source:** who wrote it, are they qualified, do they cite research, and are they selling you something? Module 08, section 8.6 has the full red-flag list."));

add(H1("10.4", "Glossary"));
add(...table(["Term", "Meaning", "Module"], [
  ["Active", "An ingredient with a targeted effect on the skin (retinoid, acid, niacinamide…).", "02"],
  ["Androgenetic alopecia", "Male pattern hair loss, driven by genetics and DHT.", "06"],
  ["Body dysmorphic disorder (BDD)", "A treatable condition involving intense preoccupation with perceived flaws in appearance.", "01"],
  ["Calorie deficit", "Eating less energy than you burn, which leads to fat loss.", "04"],
  ["Comedone", "A clogged pore: blackhead (open) or whitehead (closed).", "02"],
  ["DHT", "Dihydrotestosterone, a hormone made from testosterone, involved in hair loss and oil production.", "06"],
  ["Double progression", "Add reps until the top of the range, then add weight and start again.", "04"],
  ["Exposure ladder", "A list of uncomfortable situations tackled from easiest to hardest.", "07"],
  ["Maintenance calories", "The intake at which your body weight stays stable.", "04"],
  ["Mewing", "Resting the tongue on the roof of the mouth. Fine as a habit, not a face-reshaping method.", "03"],
  ["Non-comedogenic", "Formulated to minimize clogged pores.", "02"],
  ["Progressive overload", "Gradually increasing training demands (weight, reps) over time.", "04"],
  ["Purging", "A temporary increase in breakouts when starting a retinoid or acid.", "02"],
  ["Recomposition", "Losing fat and gaining muscle at the same time, common in beginners.", "04"],
  ["Retinoid", "A vitamin A derivative that speeds up skin cell turnover (adapalene, tretinoin, retinol).", "02"],
  ["Sebaceous filament", "A normal, gray dot in a pore on the nose, often mistaken for a blackhead.", "02"],
  ["SPF", "Sun protection factor: how much a sunscreen protects against UVB. Use 30 or more, broad-spectrum.", "02"],
  ["Telogen effluvium", "Temporary diffuse hair shedding after a stressful event, illness or crash diet.", "06"],
  ["TMJ", "Temporomandibular joint: the jaw joint, which can be strained by hard chewing or clenching.", "03, 08"],
  ["V-taper", "Shoulders and back wider than the waist.", "04"],
], [2.8, 5.6, 1.2]));

add(H1("", "Sources"));
add(P("Sources for each claim are listed at the end of the relevant module. The organizations in 10.3 publish free, regularly updated patient information."));
add(P("This program is for aesthetic and educational purposes only. It does not replace advice from a qualified healthcare professional.", { run: { italics: true, size: 18, color: "6F6A61" } }));
};

const spec = ({ lang: "en", num: "10", short: "FAQ and resources", title: "Module 10 — FAQ and resources", content,
  out: require("path").join(__dirname, "..", "module-10-faq-resources.en.docx") });
module.exports = spec;
if (require.main === module) build(spec);
