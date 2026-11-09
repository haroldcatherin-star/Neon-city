// Module 05 — Style and grooming (EN)
const { build } = require("./lib");
const content = ({ add, P, H1, H2, B, N, callout, table, pb, opener, sources, check, CHAR, GREY }) => {

opener({
  subtitle: "The fastest wins in the program: a haircut that fits your face, a clean beard, and clothes that fit.",
  meta: [["Reading time", "Budget", "First visible results", "Prerequisite"], ["About 30 minutes", "$150–400 one-time", "Immediately", "Module 01"]],
  goals: [
    "Identify your face shape and choose a haircut that works with it.",
    "Talk to a barber so you walk out with what you actually wanted.",
    "Shape and maintain a beard, or shave without irritation.",
    "Build a 15-piece capsule wardrobe where everything fits and goes together.",
  ],
});

add(pb(), H1("5.1", "Why style matters more than people think"));
add(P("Haircut, grooming and clothes are the parts of your appearance that change **the same day** you decide to change them. And they affect how people read you: in one study, identical faces were judged as more competent when shown wearing clothes perceived as wealthier, even when viewers were told to ignore clothing. {P}"));
add(P("Note: most of this module is practical styling advice built on widely used conventions, not lab research. Where something is a convention, we say so; where it's evidence-based, it's labeled."));

add(H1("5.2", "Face shape and haircut"));
add(H2("Find your face shape"));
add(P("Pull your hair back, take a straight-on photo, and compare three widths (forehead, cheekbones, jaw) and your face length. Most people are a mix; pick the closest."));
add(...table(["Shape", "How to recognize it", "Usually works", "Usually avoid"], [
  ["**Oval**", "Length a bit more than width, jaw slightly narrower than forehead", "Almost everything", "Heavy fringes that hide your proportions"],
  ["**Round**", "Width ≈ length, soft jaw, full cheeks", "Height on top, shorter sides (fade, taper), quiff", "Rounded bowl cuts, volume on the sides"],
  ["**Square**", "Strong, angular jaw, forehead ≈ jaw width", "Classic short cuts, crew cut, side part, textured crop", "Very sharp geometric lines that over-emphasize width"],
  ["**Oblong / rectangle**", "Clearly longer than wide", "Medium length, some fullness on the sides, fringe", "Very tall pompadours, very tight sides"],
  ["**Heart / triangle**", "Wide forehead, narrow chin", "Medium length on top, textured fringe, a beard to add jaw width", "Lots of height and volume at the top"],
  ["**Diamond**", "Wide cheekbones, narrower forehead and jaw", "Fringe or textured top, fuller sides", "Very short sides that highlight cheekbone width"],
], [1.6, 3, 3, 2.4]));
add(P("These are styling conventions. Your hair type (straight, wavy, curly, coily), density and hairline matter just as much. A good barber will factor them in."));
add(H2("How to talk to your barber"));
add(N("**Bring 2–3 photos** of the cut you want, ideally on someone with similar hair type. Front and side.", "barber"));
add(N("**Use numbers.** Sides: clipper guard number (#1 = 1/8\", #2 = 1/4\", #3 = 3/8\", #4 = 1/2\"). Top: length in inches.", "barber"));
add(N("**Know the words.** _Fade_: sides blend down to skin or near-skin. _Taper_: gradual shortening, more conservative. _Texture_: cutting into the top so it looks less flat. _Scissor cut_: no clippers on the sides.", "barber"));
add(N("**Ask** how to style it and what product to use. Watch what they do.", "barber"));
add(N("**Rebook** before you leave: every 3–4 weeks for short cuts, 6–8 for longer ones.", "barber"));
add(H2("Products in 30 seconds"));
add(...table(["Product", "Hold / shine", "Best for"], [
  ["Clay", "Strong / matte", "Textured, natural-looking short to medium cuts"],
  ["Paste", "Medium / low shine", "Most cuts; easy to restyle"],
  ["Pomade", "Medium–strong / shiny", "Slick, classic styles"],
  ["Sea salt spray", "Light / matte", "Volume and texture before blow drying"],
  ["Cream", "Light / natural", "Curly or longer hair, taming frizz"],
], [2.4, 2.6, 4.6]));
add(P("Use less than you think: a fingertip amount, warmed between your palms, worked from back to front. A blow dryer on medium heat makes a bigger difference than any product."));

add(H1("5.3", "Beard and shaving"));
add(H2("Should you grow a beard?"));
add(P("Grow it for **4 to 6 weeks without trimming** (except the neckline) before deciding. Early stubble always looks patchier than the final result. A beard can add visual width and definition to a softer or narrower jaw."));
add(H2("The two lines that matter"));
add(...table(["Line", "Where", "Common mistake"], [
  ["**Neckline**", "Imagine a curve from just behind each earlobe down to about 1–2 finger-widths above your Adam's apple. Shave everything below.", "Too high: it creates a double chin effect and a \"floating\" beard."],
  ["**Cheek line**", "Natural line from sideburn to mustache corner. Only clean up stray hairs above it.", "Cutting it too low and too straight, which looks artificial."],
], [1.8, 4.8, 3]));
add(H2("Maintenance"));
add(B("**Trim weekly** with a beard trimmer and guards. Keep the sides slightly shorter than the chin for a more defined jaw."));
add(B("**Wash it** 2–3 times a week with a gentle cleanser or beard wash, and **use a beard oil or balm** to prevent itch and flakes."));
add(B("**Patchy beard?** Options: keep it short (stubble at 3–5 mm hides patchiness), or go clean-shaven. Both look better than a long patchy beard."));
add(...callout("Minoxidil for beard growth?", [
  "Some men use topical minoxidil off-label to grow a fuller beard. A few small studies suggest it can help, but evidence is limited, results may not last if you stop, and side effects (skin irritation, in rare cases heart-related effects) exist. {P}",
  "This is a drug, not a grooming product. Talk to a doctor before starting. {M}",
], GREY));
add(H2("Shaving without irritation"));
add(N("Shave after a shower or with a warm towel: softer hair, less tugging.", "shave"));
add(N("Use a shaving gel or cream, not soap.", "shave"));
add(N("Shave **with the grain** first. Only go across if needed, never hard against it if you get bumps.", "shave"));
add(N("Sharp, clean blade. Rinse often. Replace every 5–7 shaves.", "shave"));
add(N("Rinse with cool water, then a fragrance-free moisturizer.", "shave"));
add(P("Frequent bumps (ingrown hairs) despite good technique? Switch to a trimmer that leaves 0.5–1 mm. If it persists, see a dermatologist. {M}"));

add(H1("5.4", "The details people notice"));
add(...table(["Detail", "What to do"], [
  ["Eyebrows", "Only remove the hair between the brows and obvious strays. Don't reshape or thin them: overplucked brows look odd on men and may not grow back fully."],
  ["Nose and ear hair", "Trim with a dedicated trimmer every 1–2 weeks. Don't pluck nose hairs."],
  ["Nails", "Short and clean. Trim weekly and file any rough edges."],
  ["Body odor", "Shower daily, antiperspirant at night on dry skin (it works better than in the morning), clean clothes."],
  ["Fragrance", "2–3 sprays maximum on neck and chest. If people can smell you from across the room, it's too much."],
  ["Lips", "A lip balm with SPF. Cracked lips are a surprisingly visible detail."],
  ["Glasses", "Choose frames that contrast your face shape: angular frames for round faces, rounder frames for square faces. Try in person."],
], [2, 7.6]));

add(H1("5.5", "Clothes: fit beats everything"));
add(P("A $20 T-shirt that fits will look better than a $200 one that doesn't. Before buying anything, learn what fit looks like."));
add(...table(["Item", "Good fit"], [
  ["**T-shirt**", "Shoulder seam sits on your shoulder bone. Sleeves end mid-bicep, hugging lightly. Hem hits around the middle of your fly. No fabric ballooning at the waist."],
  ["**Shirt**", "Same shoulder rule. You can pinch about 1–2 inches of fabric at the chest. Cuffs end where your wrist meets your hand."],
  ["**Jeans / chinos**", "Comfortable at the waist without a belt. Slim or straight leg, tapering slightly. Little to no fabric bunching at the ankle (\"no break\" or \"slight break\")."],
  ["**Jacket**", "Shoulders end where yours do. Sleeves show a bit of shirt cuff. You can button it without pulling."],
  ["**Shoes**", "Clean. Always. People look at shoes more than you think."],
], [2, 7.6]));
add(P("**A tailor is your secret weapon.** Hemming pants or taking in a shirt usually costs $10–30 and makes cheap clothes look custom."));
add(H2("Color basics"));
add(P("Build around **neutrals** that all match each other: navy, gray, white, black, olive, beige/khaki, brown. Then add one or two colors you like. If every piece goes with every other piece, getting dressed takes 30 seconds."));
add(H2("The 15-piece capsule wardrobe"));
add(...table(["Category", "Pieces", "Budget range"], [
  ["Tops", "3 plain T-shirts (white, navy, gray), 1 black or olive T-shirt, 2 button-up shirts (white or light blue oxford, one darker), 1 crewneck sweater or quarter-zip", "$90–200"],
  ["Bottoms", "1 dark jeans, 1 chinos (beige or olive), 1 gray or black pants or joggers that look clean", "$80–180"],
  ["Outerwear", "1 versatile jacket (bomber, overshirt or denim), 1 hoodie or zip in a neutral color", "$60–150"],
  ["Shoes", "1 clean white leather or minimalist sneakers, 1 boot or darker shoe", "$80–200"],
], [1.8, 5.6, 2.2]));
add(P("You don't need to buy everything at once. Start with what you'll wear most: a few T-shirts that fit, one good pair of pants, clean sneakers."));
add(...callout("Shopping rules", [
  "**Try before you buy**, or buy from places with free returns. Sizes vary between brands.",
  "**Check the fabric**: cotton, wool, linen and blends wear better than thin polyester.",
  "**Avoid** big logos, slogans, very distressed jeans and anything you'd only wear once.",
  "**Thrift and outlet stores** are excellent for basics once you know your sizes.",
], CHAR));

add(H1("5.6", "Your module 05 checklist"));
check([
  "I've identified my face shape and saved 2–3 reference photos.",
  "I've booked a haircut and know what to ask for.",
  "I've chosen a styling product and practiced with it.",
  "I've decided: beard (with neckline and cheek line), stubble, or clean-shaven.",
  "I've sorted my wardrobe: kept what fits, donated what doesn't.",
  "I've listed the 3 pieces I'll buy first, and my sizes.",
]);

sources([
  "Oh D, Shafir E, Todorov A. Economic status cues from clothes affect perceived competence from faces. _Nature Human Behaviour_, 2020; 4: 287–293.",
  "American Academy of Dermatology. How to shave; razor bumps and ingrown hairs. aad.org.",
  "Ingprasert S, Tanglertsampan C, Tangphianphan N, Reanmanee C. Efficacy and safety of minoxidil 3% lotion for beard enhancement: a randomized, double-masked, placebo-controlled study. _Journal of Dermatology_, 2016; 43(8): 968–969.",
]);
};

const spec = ({ lang: "en", num: "05", short: "Style and grooming", title: "Module 05 — Style and grooming", content,
  out: require("path").join(__dirname, "..", "module-05-style-grooming.en.docx") });
module.exports = spec;
if (require.main === module) build(spec);
