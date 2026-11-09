// Module 08 — Practices to avoid (EN)
const { build } = require("./lib");
const content = ({ add, P, H1, H2, B, N, callout, table, pb, opener, sources, check, CHAR, GREY }) => {

opener({
  subtitle: "What you'll see everywhere online, why it doesn't work, what it can cost you, and what to do instead.",
  meta: [["Reading time", "Budget", "What you save", "Prerequisite"], ["About 25 minutes", "$0", "Money, time, and possibly your health", "None. Read it now."]],
  goals: [
    "Recognize the most common dangerous looksmaxing practices and products.",
    "Explain why each one fails or harms, with sources.",
    "Know the safer alternative for every goal those shortcuts promise.",
    "Spot bad advice on your own, even for trends that don't exist yet.",
  ],
});

add(pb(), H1("8.1", "Why this module exists"));
add(P("Looksmaxing content online is full of shortcuts. Some are just useless. Others have sent people to the emergency room. They spread because they promise fast, dramatic results, which is exactly what someone who feels bad about their appearance wants to hear."));
add(P("This module doesn't explain **how** to do any of these things. It explains **why not**, and what works instead. Every item here is labeled {W}."));

const item = (id, title, rows) => {
  add(...table([id, title + "  {W}"], rows.map(([k, v]) => ["**" + k + "**", v]), [2, 7.6]));
};

add(H1("8.2", "Face and jaw"));
item("A", "Bone smashing", [
  ["The claim", "Repeatedly tapping or hitting facial bones causes them to remodel bigger and sharper."],
  ["The reality", "No scientific evidence. The idea misapplies how bone responds to load: blunt trauma to the face doesn't produce controlled, symmetrical growth."],
  ["The risk", "Fractures, bruising, nerve damage, asymmetry, infection. Facial nerves and the eye socket are close to the surface."],
  ["Instead", "Lower body fat (module 04), posture (module 03), beard shaping (module 05)."],
]);
item("B", "Hard mewing", [
  ["The claim", "Pressing the tongue hard against the palate for hours reshapes the jaw and midface."],
  ["The reality", "No controlled studies show adult bone changes from mewing, let alone from pressing harder."],
  ["The risk", "Jaw muscle fatigue and pain, TMJ problems, headaches, pressure on teeth."],
  ["Instead", "Light, relaxed tongue posture and nasal breathing (module 03). See a dentist or orthodontist for real concerns."],
]);
item("C", "Jaw exercisers and hard “mastic” gum", [
  ["The claim", "Chewing against resistance for hours builds a wider, more defined jaw."],
  ["The reality", "Muscle size in the masseter can increase somewhat, but visible change is poorly documented and much smaller than the effect of body fat."],
  ["The risk", "Jaw joint (TMJ) pain, clicking, headaches, tooth wear and cracked teeth or fillings."],
  ["Instead", "Fat loss is the real jawline lever. If you want, light neck training (module 04)."],
]);

add(H1("8.3", "Body and weight"));
item("D", "Extreme restriction, purging, laxatives", [
  ["The claim", "Eating very little (e.g. under 1,000–1,200 calories a day), long fasts, or using laxatives or diuretics gets you lean faster."],
  ["The reality", "Rapid loss is largely water and muscle. Slower loss preserves more muscle and gives a better-looking result."],
  ["The risk", "Muscle loss, fatigue, hair shedding, dull skin, electrolyte imbalances (which can affect the heart), and a real risk of developing an eating disorder, especially in young people."],
  ["Instead", "A moderate deficit of 300–500 calories, high protein, losing 0.5–1% of body weight per week (module 04)."],
]);
add(...callout("Is it becoming an eating disorder?", [
  "Warning signs: feeling out of control around food, compensating after eating (vomiting, laxatives, excessive exercise), intense fear of gaining weight, skipping social events because of food, rigid rules you can't break without distress.",
  "If you recognize yourself, talk to your doctor. Eating disorders are serious and treatable, and early help makes a big difference. {M}",
], GREY));
item("E", "DNP (2,4-dinitrophenol)", [
  ["The claim", "A \"fat burner\" that melts fat fast."],
  ["The reality", "An industrial chemical, not approved for human consumption. It works by making your body generate heat it can't control."],
  ["The risk", "Overheating that can be fatal, even at doses users thought were safe. Deaths are documented in young adults. There is no antidote."],
  ["Instead", "There is no safe version. Module 04."],
]);
item("F", "SARMs, steroids, prohormones", [
  ["The claim", "Faster muscle gain, \"safer than steroids\" (SARMs)."],
  ["The reality", "SARMs are not approved by the FDA, which has warned about them. Products are often mislabeled or contain other substances. Anabolic steroids are controlled substances in the US without a prescription."],
  ["The risk", "Liver damage, heart attack and stroke risk, shutdown of your own testosterone production, infertility, acne, breast tissue growth, hair loss, mood changes. In teenagers, steroids can stop growth early."],
  ["Instead", "Progressive overload, protein, sleep. Natural progress for a beginner is fast. For adults, creatine is the best-supported supplement for muscle and strength (module 04)."],
]);
item("G", "Fat burners, clenbuterol, thyroid hormones", [
  ["The claim", "Speeds up metabolism to burn fat."],
  ["The reality", "Over-the-counter \"fat burners\" do little beyond caffeine. Clenbuterol and thyroid hormones are drugs with specific medical uses."],
  ["The risk", "Heart rhythm problems, anxiety, insomnia, muscle loss, thyroid damage. Some products contain undeclared stimulants."],
  ["Instead", "Calorie deficit and daily steps (module 04)."],
]);

add(H1("8.4", "Skin, tanning and hair"));
item("H", "Tanning beds", [
  ["The claim", "A tan makes you look healthier and leaner."],
  ["The reality", "Indoor tanning devices are classified as carcinogenic to humans by the World Health Organization's cancer agency."],
  ["The risk", "Higher risk of melanoma, especially when started young, plus accelerated skin aging (the opposite of module 02)."],
  ["Instead", "Self-tanner or a spray tan if you want color. Daily SPF either way."],
]);
item("I", "Melanotan and tanning injections or nasal sprays", [
  ["The claim", "Tan without sun, sometimes with appetite suppression as a \"bonus\"."],
  ["The reality", "Unregulated peptides sold online, not approved as drugs. Contents and doses are unknown."],
  ["The risk", "Nausea, flushing, new or changing moles, concerns about melanoma, and the risks of injecting unsterile products."],
  ["Instead", "Self-tanner. SPF."],
]);
item("J", "Unregulated skin and hair drugs", [
  ["The claim", "Buy tretinoin, isotretinoin, finasteride or \"lightening\" creams online without a prescription."],
  ["The reality", "Unknown dose and purity, counterfeit risk, and no doctor checking whether they suit you."],
  ["The risk", "Severe irritation, hidden steroids or mercury in some creams, and for isotretinoin, serious risks that require mandatory medical monitoring."],
  ["Instead", "Modules 02 and 06: proven over-the-counter options first, then a doctor."],
]);

add(H1("8.5", "Injections and surgery"));
item("K", "Fillers or Botox outside a medical setting", [
  ["The claim", "Cheaper jawline or chin filler at a \"pop-up\", at home, or with a needle-free \"hyaluron pen\"."],
  ["The reality", "The FDA has warned against needle-free devices for injecting fillers. Injections should be done by a licensed medical professional with FDA-approved products."],
  ["The risk", "Infection, lumps, tissue death if filler blocks a blood vessel, and in rare cases blindness."],
  ["Instead", "If you're an adult and still interested after finishing this program, a consultation with a board-certified dermatologist or plastic surgeon. {M}"],
]);
item("L", "Unsupervised or impulsive cosmetic surgery", [
  ["The claim", "Canthoplasty, jaw implants, leg lengthening and other procedures as a shortcut to a new face or body."],
  ["The reality", "These are real operations with real recovery, complications and sometimes permanent consequences. Cheap packages abroad can mean less vetting and no follow-up if something goes wrong."],
  ["The risk", "Infection, nerve damage, asymmetry, results you can't reverse, and for leg lengthening, months of painful recovery."],
  ["Instead", "Finish the trainable side first. If you're an adult and still considering it after a year, see a surgeon certified by a recognized board (e.g. American Board of Plastic Surgery or American Board of Facial Plastic and Reconstructive Surgery), operating in an accredited facility. {M}"],
]);
add(P("**Under 18:** cosmetic surgery is generally not appropriate while your face and body are still developing. Several of the features people want to change at 16 change on their own by 22."));

add(H1("8.6", "How to spot bad advice yourself"));
add(P("New trends appear every month. You don't need us to review each one: use these red flags."));
add(...table(["Red flag", "Why it matters"], [
  ["**Fast, dramatic results** (\"jawline in 2 weeks\")", "Real changes to skin, fat and muscle take weeks to months. Speed claims usually mean editing, angles or lies."],
  ["**Only before/after photos, no sources**", "Lighting, angle, posture and editing can fake almost any change."],
  ["**They sell the product they recommend**", "Not always wrong, but a reason to check independent sources."],
  ["**\"Doctors don't want you to know\"**", "Classic marketing hook. Doctors publish what works; it's called research."],
  ["**Needles, pills or powders from websites with no prescription**", "If it needs no prescription but acts like a drug, nobody is checking what's in it."],
  ["**Pain is framed as proof it works**", "Pain is a signal of damage, not progress."],
  ["**It makes you feel worse about yourself**", "Content designed to make you insecure is designed to keep you watching and buying."],
], [3.8, 5.8]));

add(H1("8.7", "Your module 08 checklist"));
check([
  "I've stopped (or never started) every practice in this module.",
  "I've thrown away any product bought online that's listed here.",
  "I know the safe alternative for each goal I had.",
  "I've saved the red flags list to check new trends against.",
  "If I've used any substance listed here, I've told a doctor, even if I feel fine.",
]);

sources([
  "U.S. Food and Drug Administration. FDA warns against using SARMs in body-building products, 2017. fda.gov.",
  "Grundlingh J, Dargan PI, El-Zanfaly M, Wood DM. 2,4-Dinitrophenol (DNP): a weight loss agent with significant acute toxicity and risk of death. _Journal of Medical Toxicology_, 2011; 7(3): 205–212.",
  "Pope HG Jr, Wood RI, Rogol A, et al. Adverse health consequences of performance-enhancing drugs: an Endocrine Society scientific statement. _Endocrine Reviews_, 2014; 35(3): 341–375.",
  "El Ghissassi F, Baan R, Straif K, et al. A review of human carcinogens, part D: radiation. _The Lancet Oncology_, 2009; 10(8): 751–752.",
  "Habbema L, Halk AB, Neumann M, Bergman W. Risks of unregulated use of alpha-melanocyte-stimulating hormone analogues: a review. _International Journal of Dermatology_, 2017; 56(10): 975–980.",
  "U.S. Food and Drug Administration. Do not use needle-free devices for injection of dermal fillers: FDA safety communication, 2021. fda.gov.",
  "Garthe I, Raastad T, Refsnes PE, et al. Effect of two different weight-loss rates on body composition and strength and power-related performance in elite athletes. _International Journal of Sport Nutrition and Exercise Metabolism_, 2011; 21(2): 97–104.",
]);
};

const spec = ({ lang: "en", num: "08", short: "Practices to avoid", title: "Module 08 — Practices to avoid", content,
  out: require("path").join(__dirname, "..", "module-08-practices-to-avoid.en.docx") });
module.exports = spec;
if (require.main === module) build(spec);
