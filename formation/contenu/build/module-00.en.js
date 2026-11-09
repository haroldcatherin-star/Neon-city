// Preamble (EN)
const { build } = require("./lib");
const content = ({ add, P, H1, H2, B, N, callout, table, pb, opener, GREY, CHAR }) => {

opener({
  subtitle: "Read this first. Five minutes that set the rules for everything else.",
  meta: [["Reading time", "Who it's for", "What it is", "What it isn't"],
    ["About 5 minutes", "Men 16–25, beginners", "An aesthetic self-improvement program", "Medical advice"]],
  labels: false,
});

add(H1("0.1", "What this program is"));
add(P("A structured, evidence-graded program to help you improve the parts of your appearance that are actually within your control: skin, body composition, posture, grooming, style and the way you carry yourself. It's built around habits you can sustain, not hacks you'll quit in a week."));
add(P("It is **anti-blackpill** by design. We don't rate faces, we don't sort people into tiers, and we don't believe your worth is a number. We believe most people have real room to improve, and that improving is more useful than despairing."));

add(H1("0.2", "What this program is not"));
add(B("**Not medical advice.** Nothing here replaces a physician, dermatologist, dentist, registered dietitian or mental health professional. Whenever a topic crosses into health, we say so and tell you who to see."));
add(B("**Not a promise of results.** Your starting point, genetics, consistency and circumstances all matter. We give you the best-documented method; we don't guarantee outcomes. Be wary of anyone who does."));
add(B("**Not a shortcut.** If you're looking for a trick that rebuilds your face in two weeks, it doesn't exist, and module 08 explains why the ones being sold online are dangerous."));

add(H1("0.3", "How every claim is labeled"));
add(P("This is what makes the program different. Throughout the modules, recommendations carry one of four labels, so you always know how solid the ground is under your feet."));
add(...table(["Label", "Meaning", "Example"], [
  ["{C}", "Supported by a solid body of research and by professional guidelines.", "Daily sunscreen reduces visible skin aging."],
  ["{P}", "Some encouraging studies, but small, few, or inconsistent. Reasonable to try, no guarantees.", "Niacinamide for oil control."],
  ["{W}", "No good evidence, real risk, or both. We explain it so you can recognize it, not so you can try it.", "Bone smashing."],
  ["{M}", "Involves a diagnosis, a prescription drug or a procedure. A professional decides, not a PDF.", "Hair loss treatment."],
], [1.6, 4.4, 3]));
add(P("When we don't label something, it's practical advice (how to talk to a barber, how to fold a shirt) rather than a scientific claim."));

add(H1("0.4", "How to use it"));
add(N("**Read module 01 first.** It sets realistic expectations and the tracking method used everywhere else.", "use"));
add(N("**Read modules 02 to 07** in order, or in the order your assessment suggested. Don't try to apply everything at once.", "use"));
add(N("**Read module 08 before you go back on TikTok.** It's your filter for bad advice.", "use"));
add(N("**Run the 90-day plan (module 09).** It turns everything into week-by-week actions.", "use"));
add(N("**Keep module 10 nearby** for questions and for finding the right professional.", "use"));

add(H1("0.5", "Three rules for the next 90 days"));
add(...callout("The rules", [
  "**Consistency over intensity.** A simple routine done daily beats a perfect one done when you feel like it.",
  "**One change at a time.** Otherwise you'll never know what's working.",
  "**Measure monthly, not hourly.** Photos once a month, same conditions. Not the mirror ten times a day.",
], CHAR));

add(H1("0.6", "Your mental health comes first"));
add(P("Wanting to look better is normal. But for some people, concern about appearance becomes something that takes over: hours a day spent thinking about a perceived flaw, constant mirror checking or avoiding mirrors entirely, skipping school, work or social events because of how you look. That can be **body dysmorphic disorder**, a recognized and treatable condition. {M}"));
add(...callout("If this sounds like you", [
  "Talk to someone you trust and to your doctor. Cognitive behavioral therapy has good evidence for this. {C}",
  "If you ever have thoughts of hurting yourself, call or text **988** (Suicide & Crisis Lifeline, US), or your local emergency number. You can also go to the nearest emergency room.",
  "This program can wait. Your health can't.",
], GREY));

add(H1("0.7", "If you're under 18"));
add(P("Everything in this program is designed to be safe for you, but a few things are different:"));
add(B("You're still growing. **No aggressive dieting**, and no supplements beyond basic nutrition: the American Academy of Pediatrics advises against performance-enhancing supplements for minors."));
add(B("Any treatment involving a prescription (acne, hair loss, orthodontics) goes through a parent and a doctor."));
add(B("Your face and body will keep changing for several more years on their own. Judge yourself less, build habits more."));
add(P("Ready? Turn to module 01."));
};

const spec = ({ lang: "en", num: "00", short: "Preamble", title: "Preamble", content,
  out: require("path").join(__dirname, "..", "module-00-preamble.en.docx") });
module.exports = spec;
if (require.main === module) build(spec);
