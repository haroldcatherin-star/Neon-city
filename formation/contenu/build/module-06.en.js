// Module 06 — Hair care (EN)
const { build } = require("./lib");
const content = ({ add, P, H1, H2, B, N, callout, table, pb, opener, sources, check, CHAR, GREY }) => {

opener({
  subtitle: "Healthy hair and scalp, and how to spot hair loss early enough to do something about it.",
  meta: [["Reading time", "Budget", "First visible results", "Prerequisite"], ["About 25 minutes", "$10–40 / month", "2 weeks (scalp) to 6 months (loss)", "Module 01"]],
  goals: [
    "Wash and style your hair without damaging it.",
    "Fix dandruff with the right shampoo.",
    "Tell normal shedding from early male pattern hair loss.",
    "Know which hair loss treatments are proven, and why they go through a doctor.",
  ],
});

add(pb(), H1("6.1", "How hair works"));
add(P("Each hair follicle cycles through three phases: a **growth phase** that lasts several years, a short **transition phase** of a few weeks, and a **resting phase** of about three months, after which the hair falls out and a new one starts growing. At any given time, most of your hairs are growing. {C}"));
add(P("That's why **losing around 50 to 100 hairs a day is normal**. Seeing hair in the shower drain or on your pillow isn't, by itself, a sign of balding. {C}"));

add(H1("6.2", "The everyday routine"));
add(H2("Washing"));
add(...table(["Your scalp / hair", "How often to shampoo", "Notes"], [
  ["Oily scalp, short hair", "Daily or every other day", "A gentle shampoo daily is fine. Focus on the scalp."],
  ["Normal", "2 to 4 times a week", "Rinse with water on other days if you train."],
  ["Dry scalp, or curly / coily hair", "1 to 2 times a week", "Curly and coily hair loses moisture easily. Co-wash or rinse in between."],
], [3, 2.6, 4]));
add(B("**Shampoo goes on the scalp**, conditioner on the lengths (not the scalp) if your hair is longer than a couple of inches."));
add(B("**Lukewarm water**, not hot. Massage with fingertips, not nails."));
add(B("**Pat dry** with a towel, don't rub hard. Wet hair is more fragile."));
add(B("**Washing often doesn't cause hair loss.** You just see the hairs that were already shedding. {C}"));
add(H2("Styling without damage"));
add(B("**Heat**: blow dry on medium heat, keep the dryer moving, use a heat protectant if you use a straightener."));
add(B("**Tight hairstyles**: tight man buns, braids or ponytails worn constantly can pull hair out over time (traction alopecia). Loosen them and change position. {C}"));
add(B("**Bleach and chemical treatments** weaken hair. Get them done by a professional and space them out."));
add(B("**Scalp sunburn** is real. Wear a hat or use a scalp-friendly SPF if your hair is short or thinning."));

add(H1("6.3", "Dandruff and itchy scalp"));
add(P("Flakes and an itchy scalp are usually **seborrheic dermatitis**, linked to a yeast that lives on everyone's skin. It's common, not about hygiene, and very treatable. {C}"));
add(...table(["Active (in the shampoo)", "Availability", "Level"], [
  ["Ketoconazole 1%", "Over the counter (2% by prescription)", "{C}"],
  ["Zinc pyrithione", "Over the counter", "{C}"],
  ["Selenium sulfide", "Over the counter", "{C}"],
], [4, 4, 1.6]));
add(N("Use a medicated shampoo **2 to 3 times a week**, alternating with your normal shampoo.", "dand"));
add(N("**Leave it on 3 to 5 minutes** before rinsing. That's when it works.", "dand"));
add(N("Once it's under control, keep using it once a week to prevent it coming back.", "dand"));
add(P("Red, thick or painful patches, or no improvement after a month? See a doctor: it could be psoriasis or another scalp condition. {M}"));

add(H1("6.4", "Male pattern hair loss"));
add(P("**Androgenetic alopecia** is the most common cause of hair loss in men. In genetically susceptible follicles, a hormone called **DHT** (dihydrotestosterone, made from testosterone) gradually shrinks the follicles, producing thinner, shorter hairs until they stop. It's very common: by age 50, about half of men have some degree of it. {C}"));
add(H2("Early signs"));
add(B("The **temples recede**, forming an M shape that keeps progressing."));
add(B("The **crown thins**: more scalp visible under bright overhead light."));
add(B("Hairs on top get **finer and shorter** than those on the sides."));
add(B("Your hairline in photos from **1–2 years ago** looks clearly different."));
add(P("A maturing hairline (the hairline moving back slightly and evening out in your late teens or twenties) is normal and doesn't always mean balding. Comparing photos over time, and a doctor's assessment, tell the difference."));
add(...callout("Why early matters", [
  "Proven treatments are much better at **keeping** hair than at **regrowing** it. Follicles that have fully miniaturized for years are hard to bring back. If you notice signs, see a doctor sooner rather than later. {M}",
], CHAR));
add(H2("Other causes of hair loss"));
add(...table(["Cause", "What it looks like", "What to do"], [
  ["**Telogen effluvium**", "Diffuse shedding all over, 2–3 months after a trigger: illness, high fever, crash diet, major stress, surgery.", "Usually recovers on its own within months once the trigger is gone. See a doctor if it lasts."],
  ["**Alopecia areata**", "Round, smooth bald patches, sometimes in the beard.", "Autoimmune. See a doctor. {M}"],
  ["**Nutritional deficiencies**", "Diffuse thinning, often with fatigue.", "Blood test (iron, vitamin D, thyroid). Don't supplement blindly. {M}"],
  ["**Traction alopecia**", "Thinning where hair is pulled (temples, edges).", "Loosen hairstyles. See a doctor if it doesn't recover."],
], [2.4, 4.2, 3]));

add(H1("6.5", "Treatments: what's proven"));
add(P("Everything in this section is for information so you can have an informed conversation with a doctor. **Don't start, combine or buy these treatments on your own.** {M}"));
add(...table(["Treatment", "How it works", "Level", "Important"], [
  ["**Minoxidil, topical 5%**", "Prolongs the growth phase and enlarges follicles", "{C}", "FDA-approved, over the counter. Initial shedding in the first weeks is common. Effect stops if you stop."],
  ["**Finasteride 1 mg**", "Lowers DHT levels", "{C}", "Prescription. FDA-approved for male pattern hair loss. Possible side effects, including sexual side effects and mood changes, must be discussed with your doctor. {M}"],
  ["**Oral minoxidil (low dose)**", "Same as topical, taken as a pill", "{P}", "Off-label, prescription only, requires medical follow-up. {M}"],
  ["**Ketoconazole shampoo**", "Anti-inflammatory, may have mild anti-androgen effect on scalp", "{P}", "Often used as an add-on. Safe and cheap."],
  ["**Microneedling**", "Micro-injuries may boost growth with minoxidil", "{P}", "Small studies. Do it under dermatologist guidance: infection and scarring risks if done wrong."],
  ["**Low-level laser devices**", "Light therapy caps or combs", "{P}", "Some FDA-cleared devices, modest effects, expensive."],
  ["**Rosemary oil**", "Unclear", "{P}", "One small trial compared it to 2% minoxidil. Not enough to replace proven options."],
  ["**Hair transplant**", "Moves follicles from the back of the head", "{M}", "Surgery. Only with a board-certified surgeon, usually once loss has stabilized."],
], [2.3, 2.5, 1.3, 3.5]));
add(...callout("The things to avoid", [
  "**Buying finasteride or other drugs online without a prescription**: unknown doses, counterfeit products, no medical follow-up. {W}",
  "**Biotin and \"hair growth\" supplements**: no evidence they help unless you're truly deficient, which is rare. High-dose biotin can also distort some blood test results, the FDA has warned. {W}",
  "**Shampoos and serums promising to \"regrow\" hair** with no proven active ingredient. {W}",
], GREY));

add(H1("6.6", "Myths, quickly"));
add(...table(["Myth", "Reality"], [
  ["Wearing hats causes baldness", "No. Only very tight headwear worn constantly could cause traction."],
  ["Shaving makes hair grow back thicker", "No. The cut end feels blunter, but thickness and growth don't change."],
  ["Cutting your hair makes it grow faster", "No. Growth happens at the root."],
  ["Hair loss comes from your mother's side", "Genes from both parents play a role."],
  ["Stress makes you go bald", "Severe stress can trigger temporary shedding (telogen effluvium). It doesn't cause pattern baldness on its own."],
], [3.6, 6]));

add(H1("6.7", "If you're thinning: styling options"));
add(B("**Go shorter.** Short sides and a textured top hide thinning better than longer hair that separates."));
add(B("**Matte products**: shiny products show the scalp. Clay or matte paste, applied to dry hair."));
add(B("**Buzz cut + beard**: a confident, clean look many men wear well. Balancing a shaved head with some beard adds structure to the face."));
add(B("**Avoid the comb-over.** It draws attention to exactly what it tries to hide."));

add(H1("6.8", "Your module 06 checklist"));
check([
  "I've adjusted my washing frequency to my scalp and hair type.",
  "If I have dandruff, I've started a medicated shampoo 2–3 times a week.",
  "I've taken top and hairline photos (front, temples, crown) as a baseline.",
  "I've compared with photos from 1–2 years ago.",
  "If I see signs of loss, I've booked a doctor's appointment instead of buying products online.",
]);

sources([
  "Adil A, Godwin M. The effectiveness of treatments for androgenetic alopecia: a systematic review and meta-analysis. _Journal of the American Academy of Dermatology_, 2017; 77(1): 136–141.",
  "Olsen EA, Dunlap FE, Funicella T, et al. A randomized clinical trial of 5% topical minoxidil versus 2% topical minoxidil and placebo in the treatment of androgenetic alopecia in men. _Journal of the American Academy of Dermatology_, 2002; 47(3): 377–385.",
  "Kaufman KD, Olsen EA, Whiting D, et al. Finasteride in the treatment of men with androgenetic alopecia. _Journal of the American Academy of Dermatology_, 1998; 39(4): 578–589.",
  "Dhurat R, Sukesh M, Avhad G, et al. A randomized evaluator blinded study of effect of microneedling in androgenetic alopecia: a pilot study. _International Journal of Trichology_, 2013; 5(1): 6–11.",
  "Panahi Y, Taghizadeh M, Marzony ET, Sahebkar A. Rosemary oil vs minoxidil 2% for the treatment of androgenetic alopecia: a randomized comparative trial. _Skinmed_, 2015; 13(1): 15–21.",
  "U.S. Food and Drug Administration. Biotin (vitamin B7): safety communication, may interfere with lab tests. fda.gov.",
  "American Academy of Dermatology. Hair loss: types, causes and treatment. aad.org.",
]);
};

const spec = ({ lang: "en", num: "06", short: "Hair care", title: "Module 06 — Hair care", content,
  out: require("path").join(__dirname, "..", "module-06-hair-care.en.docx") });
module.exports = spec;
if (require.main === module) build(spec);
