# LONA Salon & Spa — Design Package (v2, with the owner's real content)

Tier 1, single journey. Consumed by the build.
Copy marked **verbatim** ships exactly as written.
Owner-supplied copy is marked **[OWNER]** and is not rewritten.
Band ranges are starting points, validated by the flick test.

## Facts of record

| | |
|---|---|
| Business | Lona Salon & Spa |
| Address | 8-3-269/S/44, 3rd Floor, Sagar Society, Banjara Hills, Hyderabad, Telangana 500034 |
| Phone / WhatsApp | +91 91331 00556 (`+919133100556`) |
| Email | lonasalonandspa@gmail.com |
| Instagram | lonasalonandspa |
| Audience | Men and women |
| Nav | About · Services · Shop · Calendar · Contact |
| Photos available | **None.** Every image is generated. No disclosure line; real photos swap in later (owner's decision) |
| Hours | **Not supplied.** No invented hours ship. Contact section carries an honest line instead |
| Prices | **Not supplied.** FAQ answers honestly rather than inventing figures |
| Reviews | **Not supplied.** No invented testimonials. Proof section ships as a credentials strip instead |

## 1. The brand premise

The one word is **first**. First we agree, then we begin.

Research finding: every stinging review in this trade says the same thing. She did not listen, she did not ask, the scissors landed above where I pointed. Every permanent make-up fear is the same fear in a different coat: it will not look like me and I will be stuck with it. LONA's answer is a pause. You describe it, your artist says it back, and only when the two pictures match does anything start.

The owner's own positioning, "Where Beauty Meets Luxury", carries the About section. The premise carries the structure: the hero hook, the three steps, the interactive moment, and the answers.

## 2. Palette tokens

```css
:root{
  --canvas:#1C130D;        /* deep warm brown-black, tinted to the footage, never pure black */
  --panel:#2A1D14;         /* cards and raised surfaces */
  --panel-2:#433022;       /* brand brown: deeper cards, borders */
  --accent:#CEAE7A;        /* brand gold: CTA and rare emphasis only */
  --accent-hover:#E2C795;
  --accent-muted:#83704C;  /* brand bronze at whisper level */
  --text-secondary:#BFAE95;
  --text-primary:#F2E9DC;
}
```

Contrast on `--canvas`: text-primary 15.9:1, text-secondary 8.5:1, accent 8.4:1, accent-muted 3.8:1 (large text and borders only).

## 3. Type trio (revised at the owner's request)

| Role | Face | Weights | Notes |
|---|---|---|---|
| Display | **Cinzel** | 400, 500, 600 | Classical Roman inscriptional face. Renders lowercase as small capitals, which is its design. Served from Google Fonts. |
| Running text | **Minion Pro Medium**, falling back to **Crimson Pro** | 500, plus italic | Minion Pro is Adobe's and cannot be served without an Adobe Fonts web project or a webfont licence. It is named first in the stack, so the owner and any Adobe user see the real face; every other visitor gets Crimson Pro, the closest free old-style serif. Owner chose to leave it this way rather than set up an Adobe Fonts kit. |
| Micro-labels | **Cinzel** | 500, 600 | Kickers, nav, buttons, chips, step numbers, calendar. A mono would have fought both faces. |

Superseded: Bodoni Moda / Jost / Space Mono.

**Adjustments Cinzel forced.** It is far wider than Bodoni and capitals-first, so: heading sizes cut by roughly 30 percent, tracking moved from negative to positive, leading opened from 1.08 to 1.26, body size raised to clamp(16.5px, 1.18vw, 19px) to compensate for the serif's smaller x-height, and the three italic lines (the About pull quote, the pause line, the services closer) moved to the body serif because Cinzel has no italic. Re-verified with no overflow and no clipped headings at 1440, 1280, 1024, 768, 375 and 320.

## 4. Band map (hero 560vh, four bands)

**Hero footage: the full history, and what actually shipped.**

1. **Descent through the salon, Kling v3.0.** The original concept: a camera falls through the room past the brass pendant, through steam, resting on the mirror station. Rejected on inspection: the camera barely moved. Only the steam visibly animated.
2. **Descent through the salon, Seedance 2.5.** Same concept, a different top-tier model, a much more literal motion prompt. Rejected on inspection: a small amount of real movement in the first second (the framing settles as the top of frame crops in), then the camera holds nearly still for the remaining five seconds. Better than attempt 1, not a fix.
3. **The oil bloom, Kling v3.0.** A pivot to an abstract concept (a drop of gold oil falling through dark water, blooming into ribbons of light, settling into a circle echoing the logo's O), on the reasoning that two failures on two different models against the same architectural frame meant the frame was the problem, not the wording. This take delivered real, continuous, correctly-resting motion. Recommended as the shipped asset.

**The owner reviewed all three and chose attempt 2 (the Seedance descent) over the recommendation**, after the motion limitation was restated plainly. That is what shipped: `assets/hero-scrub.mp4`, encoded from `hero-raw-v2.mp4`. The known trade-off is on the record here, not hidden: scrubbing this hero maps to real but modest motion, mostly in the first ~15% of the scroll range, with the remaining stretch driven by the footage's own atmosphere (steam) rather than a changing camera position. The oil bloom take is preserved in `review/raw/hero-raw-bloom.mp4` if this is ever revisited.

One processing fix applied before shipping: the raw take's first ~0.65s carried a stray black letterbox strip at the top of frame (an artifact of the render, not present anywhere else in the clip). The encode trims that head rather than cropping the whole clip, so `hero-scrub.mp4` runs about 5.4s, not the full 6.

| Band | Range | Footage moment | Copy (verbatim) | Entrance |
|---|---|---|---|---|
| 1 | 0.00–0.22 | High in the warm dark, brass pendant settling into frame, steam beginning to drift | "Nothing begins until we agree." | Drift-down |
| 2 | 0.27–0.49 | Steam thickening, light softening, the frame otherwise held | "You tell us. We say it back. Then we start." | Blur-to-sharp |
| 3 | 0.54–0.76 | Steam continuing to build through the room | "Hair. Skin. Nails. Bridal. Grooming." | Grid snap-align |
| 4 | 0.81–1.00 | The mirror station in view, glowing gold in the dark, steam settled | H: "LONA Salon & Spa"<br>Sub: "Banjara Hills, Hyderabad."<br>Buttons: "Book on WhatsApp" / "Call us" | Word-by-word rise, staged settle |

Band ranges widened from an original 400vh hero to 560vh after the flick test showed the first three beats holding for only 3 to 4 normal scroll flicks. Now 7, 7, 6 and 16 full-opacity flicks respectively at 120px steps; none skippable even at 360px steps. Re-validated against the real, final footage: legibility checked at both ends of every band's plateau, all eight samples read cleanly.

Band 1 skips ease-in and gets the one-time load ramp. Band 4 skips ease-out.
Band 3's five flat words are a deliberate brand device. They stay.

The ending frame (the lit mirror station) is reused as `assets/step-02.jpg`, cropped to feature the mirror and marble counter, for the "we say it back" step in section 6.1. No separate generation was needed for that slot.

## 5. Static-hero copy (phones, portrait tablets, landscape phones, reduced motion)

- Headline: "Nothing begins until we agree."
- Subline: "Salon and spa for men and women in Banjara Hills, Hyderabad."
- Buttons: "Book on WhatsApp" / "Call us"

## 6. Section outline

Every section funnels to `#book`. Adjacent sections never share a layout skeleton.

### 6.1 About — two-column, display statement left [OWNER]

Kicker: "About" · Headline: "Where Beauty Meets Luxury"

> Welcome to Lona Salon & Spa, a premium beauty and wellness destination for both men and women. We bring together expert professionals, modern techniques, premium products, and a relaxing environment to create a beauty experience that goes beyond the ordinary.
>
> From everyday grooming to complete transformations and special-occasion beauty, every service at Lona is thoughtfully tailored to your individual style and needs. Whether it's a precision haircut, a rejuvenating facial, a relaxing spa treatment, or your perfect bridal look, our team focuses on exceptional results and attention to every detail.
>
> At Lona, we believe self-care is an experience. That's why we place equal importance on beauty, comfort, hygiene, and personalised service. Every visit is designed to leave you feeling refreshed, confident, and beautifully renewed.

Pull line: "Your Beauty. Your Style. Your Experience."
Closer: "Step into Lona Salon & Spa and discover a space where elegance, relaxation, and expert care come together, all under one roof."

Only edit to owner copy: their spaced hyphen before "all under one roof" becomes a comma. Flagged to the owner.

### 6.2 How a visit starts — numbered left rail, self-drawing hairline, three images

Kicker: "How a visit starts" · Headline: "The part most salons skip."

| # | Title (verbatim) | Body (verbatim) |
|---|---|---|
| 01 | "You talk first." | "Before anything is touched, you tell us what you want and what you are worried about. There is no rush on this part." |
| 02 | "We say it back." | "Your artist repeats the plan out loud, in plain words, so you hear it before it happens. If the two pictures do not match, we keep talking." |
| 03 | "Then we begin." | "Only once you have said yes to the plan. No surprises in the mirror at the end." |

All three get images. An asymmetry here reads as a hole.

### 6.3 Hold to settle — single centred dark stage, the interactive moment

Line above (verbatim): "This is the pause."
Button (verbatim): "Press and hold"
On completion, three lines light in sequence (verbatim): "Heard." / "Agreed." / "Then begun."
Release early eases back down. Reduced motion gets the finished state instantly.

### 6.4 Services — six groups, typographic, star bullets [OWNER]

Kicker: "Services" · Headline: "Complete Beauty & Grooming, All Under One Roof"
Intro: "At Lona Salon & Spa, we offer a comprehensive range of salon, spa, skincare, nail, makeup, and grooming services for both men and women."

Groups and items exactly as supplied: **Hair** (13 items incl. L'Oréal and Redken treatments) · **Skin & Beauty** (10) · **Nails & Hands/Feet** (6) · **Grooming** (5) · **Makeup & Bridal** (7) · **Lashes & Beauty Enhancements** (2).

Closer: "From everyday grooming to your most important occasions, Lona is here to help you look your best and feel your finest."

**Design decision, said out loud:** service tiles carry type and the star motif, not photographs. Twelve generated salon photos would cost real money and would look like stock. Typographic tiles in the brand's own gold on brown look more expensive and stay perfectly consistent.

### 6.5 Shop — card grid, add buttons, WhatsApp basket

Kicker: "Shop" · Headline: "Build your visit."
Body: "Add what you want to your list. When you are done, send the whole list to us on WhatsApp and we will come back with times and a price."
Empty state: "Nothing added yet."
Basket button: "Send my list on WhatsApp"

Handling: a basket in the page's own memory, no server, no payment. Message is composed and handed to `wa.me`. Data shape kept clean so a payment platform can be wired to the same tiles later without a rebuild.

### 6.6 Calendar — centred month grid plus time chips

Kicker: "Calendar" · Headline: "Pick a day that suits you."
Body: "Choose a date and a rough time. We will confirm on WhatsApp, usually the same day."
Time chips: "Morning" / "Afternoon" / "Evening"
Button: "Request this date"

Past dates disabled. Selection composes a WhatsApp message with the date, the time preference, and anything already in the basket.

### 6.7 Answers — full-width accordion

Kicker: "Before you book" · Headline: "The things people actually ask."

| Question (verbatim) | Answer (verbatim) |
|---|---|
| "What if you cut more than I asked for?" | "That is the fear, and it is a fair one. It is exactly why your artist says the plan back to you before starting. Length gets agreed out loud, and nothing goes past what you agreed." |
| "Will I actually get to explain what I want?" | "Yes, and you get to explain it first, before anyone picks anything up. If we are not seeing the same picture yet, we keep talking until we are." |
| "Permanent make-up scares me. What if it comes out too dark?" | "We map the shape on your face and match the pigment to your skin, then you look in the mirror and approve it before a needle touches you. It also softens as it heals." |
| "What does it cost?" | "It depends on what you want done, so we quote you before anything starts, never after. Message us on WhatsApp with what you have in mind and we will send you a figure." |
| "How long should I set aside?" | "A trim is quick. Colour, bridal and permanent make-up need a proper slot. Tell us what you are after and we will tell you exactly how long to keep free." |
| "Do you do men as well?" | "Yes. Cuts, beard work, head massage, facials and full grooming. Half of what we do is for men." |
| "I have never been in before. Is that awkward?" | "No. Say at the door that it is your first time and we slow the whole thing down." |

Prices and durations are answered honestly because no figures were supplied. Swap in real numbers when the owner sends them.

### 6.8 Contact — two-column, address block plus buttons

Kicker: "Contact" · Headline: "Come and see us."
Body: "Message us on WhatsApp and one of us will answer, usually the same day. Tell us what you are thinking about and we will tell you honestly what it takes."
Address, phone, email, Instagram, and a maps link.
Hours line, honest until real hours arrive: "Message or call and we will tell you the next free slot."
Buttons: "Book on WhatsApp" (primary) / "Call us" (secondary)

**Form handling: no form.** WhatsApp and phone are the channels the owner already answers. A form that goes nowhere would be dishonest and one that emails duplicates a slower channel. The email address is a plain `mailto:` link and nothing pretends to submit.

### 6.9 Footer

Mark, the six service groups, address, phone, email, Instagram, copyright. Brand is real, so no fictional-brand disclosure. No AI-imagery line, per the owner's decision.

## 7. Vector layer plan

| Element | Where | Behaviour |
|---|---|---|
| **The star** (four-point concave star from the O) | Dividers, list bullets, favicon, ring centre, tile corners | Divider stars ride a hairline that draws itself on scroll |
| **The descent line** | Left rail of 6.2 | Hairline draws downward on scroll, echoing the hero's fall |
| **The O mark, large** | 6.3 | Star draws itself on press-and-hold |
| **Particles** | Fixed background | Eight gold motes at whisper opacity, 70s+ cycles, paused off-screen and on hidden tabs |
| **Environment layer** | Behind everything | One slow warm radial drift, 80s cycle |

Signature element: **the star**, the owner's own mark. Remove it and the page changes noticeably.

## 8. Engineering list

Blob fetch with loading ring · dt-normalized lerp that rests · gated seeks with deadlock escape · delta-gated DOM writes · band pacing validated by the flick test · four-layer legibility at 3.5:1 worst-frame minimum · five static-hero gates matched in CSS and JS, armed live · complete without video · reduced motion honored live in both directions · `overflow-x: clip` on html and body · one living element per section · entrances with retired stagger delays · transform and opacity only · semantic landmarks, skip link, focus-visible, 44px coarse-pointer targets · inline SVG favicon of the star · og tags behind a `<!-- DEPLOY STEP -->` comment.

## 9. Copy gate

Every viewer-facing line ships verbatim. The built page must pass: zero em dashes, zero stock words (leverage, seamless, empower, unlock, robust, actionable, data-driven, solutions), plus the body sweep for AI tells.

Deliberate devices that stay: band 3's five flat words, and "Heard. / Agreed. / Then begun."
Owner copy in 6.1 and 6.4 is exempt from rewriting. It is their voice and their decision.
