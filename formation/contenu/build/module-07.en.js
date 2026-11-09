// Module 07 — Confidence and body language (EN)
const { build } = require("./lib");
const content = ({ add, P, H1, H2, B, N, callout, table, pb, opener, sources, check, CHAR, GREY }) => {

opener({
  subtitle: "Presence is trainable like everything else: posture, eye contact, voice, and the habits behind real confidence.",
  meta: [["Reading time", "Budget", "First visible results", "Prerequisite"], ["About 25 minutes", "$0", "2 to 8 weeks of practice", "Modules 01 and 03"]],
  goals: [
    "Separate the body language advice that holds up from the pop-psychology that doesn't.",
    "Use eye contact, posture and voice to come across as calm and approachable.",
    "Build confidence through gradual exposure, not by faking it.",
    "Recognize when social anxiety needs more than a PDF.",
  ],
});

add(pb(), H1("7.1", "Why this module is in a looksmaxing program"));
add(P("People don't experience you as a still photo. They see you moving, talking, reacting. Two people with similar features can leave very different impressions depending on how they carry themselves, how they look at you, and how they sound. That part is almost entirely trainable."));
add(P("This module isn't about manipulating anyone or performing \"alpha\" tricks. It's about removing the habits that make you seem tense or closed off, so people see you clearly."));

add(H1("7.2", "Body language: what holds up and what doesn't"));
add(...table(["Claim", "What the evidence says", "Level"], [
  ["Open, upright posture makes you look more confident to others", "Consistent with how people judge confidence and status from posture.", "{P}"],
  ["\"Power posing\" for 2 minutes raises testosterone and lowers cortisol", "A large replication found no hormonal effect. The original claim doesn't hold.", "{W}"],
  ["Expansive postures make you **feel** a bit more powerful", "Some evidence for a small effect on self-reported feelings.", "{P}"],
  ["A genuine smile makes you seem warmer and more approachable", "Well established in research on first impressions.", "{C}"],
  ["Crossing your arms always means you're defensive", "Context matters. People cross their arms when cold or comfortable. Avoid over-reading single gestures.", ""],
], [3.6, 4.6, 1.4]));
add(P("Bottom line: good posture and a relaxed, open stance are worth practicing because of how they read to others and how they make you feel, not because of a hormonal magic trick."));

add(H1("7.3", "The physical basics"));
add(H2("Posture in motion"));
add(B("**Head up, shoulders down and back** (module 03), but relaxed, not military."));
add(B("**Take up normal space.** Don't fold yourself small: feet about hip-width apart when standing, arms not glued to your sides."));
add(B("**Slow down.** Rushed movements and fidgeting read as nervous. Walk a little slower than feels natural."));
add(B("**Hands visible and still.** Out of your pockets when talking, not playing with your phone, keys or sleeves."));
add(H2("Eye contact"));
add(P("Too little reads as nervous or evasive; staring reads as intense. In one study, people preferred mutual gaze lasting **about 3 seconds** on average, with a range of individual preferences. {P}"));
add(N("When someone speaks to you, hold eye contact most of the time, looking away briefly and naturally.", "eye"));
add(N("When you speak, it's normal to look away more often while thinking, then come back.", "eye"));
add(N("If direct eye contact feels too intense, look at the area between the eyes or the bridge of the nose. It reads the same.", "eye"));
add(H2("Facial expression"));
add(B("**Relax your face.** Many people have a tense jaw or furrowed brow without realizing. Check in a few times a day."));
add(B("**Smile when it's real**: greeting someone, hearing something funny. You don't need a permanent grin. A genuine smile involves the eyes."));
add(B("**Mouth closed at rest** (module 03) reads more composed than a slack jaw."));

add(H1("7.4", "Voice"));
add(P("How you sound shapes impressions as much as how you look, especially in the first seconds of a conversation."));
add(...table(["Habit", "What to do"], [
  ["**Speed**", "Most nervous speakers talk too fast. Slow down by about 10–20%. Pauses sound confident, not awkward."],
  ["**Volume**", "Speak loud enough to be heard the first time. Being asked to repeat yourself chips at confidence."],
  ["**Pitch**", "Don't force a deeper voice: it sounds strained. Breathe from your belly and let your natural pitch settle. Relaxed throat, relaxed shoulders."],
  ["**Endings**", "Avoid ending statements with a rising tone, as if asking a question. Let your voice drop at the end of a sentence."],
  ["**Fillers**", "\"Like\", \"um\", \"you know\". Replace them with a short silent pause. It takes weeks to train, and it's worth it."],
], [2, 7.6]));
add(...callout("Exercise: the 60-second recording", [
  "Once a week, record yourself on your phone talking for 60 seconds about your day or a topic you like. Listen back once. Pick **one** thing to improve the next week (speed, fillers, volume). Don't try to fix everything at once.",
], CHAR));

add(H1("7.5", "Conversation"));
add(P("Confidence in conversation is less about what you say and more about **attention**: being interested in the other person instead of monitoring yourself."));
add(B("**Ask open questions** (\"How did you get into that?\") rather than yes/no questions."));
add(B("**Listen to answer, not to wait.** Follow up on what they said instead of jumping to your next line."));
add(B("**Share something back.** A conversation is a trade: question, answer, a bit about you, a new question."));
add(B("**Use names.** Remember them and use them once or twice. It's one of the simplest ways to make someone feel noticed."));
add(B("**End well.** \"Great talking to you, I've got to head off\" beats an awkward fade-out."));

add(H1("7.6", "Building real confidence"));
add(P("You can't think your way into confidence. It comes from **evidence**: doing things, surviving the discomfort, and seeing that it went fine. That's the principle of gradual exposure, a core part of cognitive behavioral therapy for social anxiety. {C}"));
add(H2("The exposure ladder"));
add(P("List situations that make you uncomfortable, rate each from 0 to 10, and work up from the easiest. Repeat each step until it drops to about a 3 before moving on."));
add(...table(["Level", "Example challenge"], [
  ["2 / 10", "Make eye contact and say \"thanks, have a good one\" to a cashier."],
  ["3 / 10", "Ask a stranger for directions or the time."],
  ["4 / 10", "Compliment someone's item (shoes, jacket, dog) and make small talk for 30 seconds."],
  ["5 / 10", "Speak up once in a class or meeting."],
  ["6 / 10", "Join a group conversation at a party or event."],
  ["7 / 10", "Invite someone to do something (coffee, gym, a game)."],
  ["8 / 10", "Introduce yourself to someone you find attractive and have a short conversation."],
], [1.4, 8.2]));
add(P("Your ladder will look different. That's the point: build it from your own list."));
add(H2("Other confidence drivers"));
add(B("**Competence.** Getting good at something (a sport, an instrument, a skill, your job) is one of the most reliable sources of self-assurance."));
add(B("**Kept promises to yourself.** Every day you follow your routine is evidence you're someone who follows through. That's why the 90-day plan matters beyond appearance."));
add(B("**Less comparison.** Appearance-focused social media is associated with more body dissatisfaction. Mute accounts that leave you feeling worse, especially rating and \"mogging\" content."));
add(B("**Sleep, training and sunlight.** Not glamorous, but they affect mood and energy more than any mindset trick."));

add(H1("7.7", "When it's more than shyness"));
add(P("Shyness is common and improves with practice. **Social anxiety disorder** is more intense: strong fear of being judged that leads you to avoid situations, physical symptoms (racing heart, shaking, blushing) that feel overwhelming, and real impact on school, work or relationships. {M}"));
add(...callout("Get support if…", [
  "You regularly avoid classes, work, events or phone calls because of anxiety.",
  "Fear of judgment takes up a big part of your day.",
  "You use alcohol or other substances to get through social situations.",
  "You feel persistently low, or have thoughts of harming yourself. In the US, call or text **988**.",
  "Talk to your doctor or a licensed therapist. Cognitive behavioral therapy is effective for social anxiety. {C}",
], GREY));

add(H1("7.8", "Your module 07 checklist"));
check([
  "I've built my own exposure ladder with at least 6 steps.",
  "I've completed the first step at least three times this week.",
  "I've recorded my first 60-second voice clip and picked one thing to work on.",
  "I check my posture and face tension at least 3 times a day (phone reminder).",
  "I've muted or unfollowed accounts that make me feel worse about my appearance.",
]);

sources([
  "Ranehill E, Dreber A, Johannesson M, et al. Assessing the robustness of power posing: no effect on hormones and risk tolerance in a large sample of men and women. _Psychological Science_, 2015; 26(5): 653–656.",
  "Cuddy AJC, Schultz SJ, Fosse NE. P-curving a more comprehensive body of research on postural feedback reveals clear evidential value for power-posing effects. _Psychological Science_, 2018; 29(4): 656–666.",
  "Binetti N, Harrison C, Coutrot A, et al. Pupil dilation as an index of preferred mutual gaze duration. _Royal Society Open Science_, 2016; 3(7): 160086.",
  "Hofmann SG, Asnaani A, Vonk IJJ, et al. The efficacy of cognitive behavioral therapy: a review of meta-analyses. _Cognitive Therapy and Research_, 2012; 36(5): 427–440.",
  "Fardouly J, Vartanian LR. Social media and body image concerns: current research and future directions. _Current Opinion in Psychology_, 2016; 9: 1–5.",
]);
};

const spec = ({ lang: "en", num: "07", short: "Confidence", title: "Module 07 — Confidence and body language", content,
  out: require("path").join(__dirname, "..", "module-07-confidence.en.docx") });
module.exports = spec;
if (require.main === module) build(spec);
