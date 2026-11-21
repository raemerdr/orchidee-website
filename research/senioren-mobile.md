# Mobile for older visitors (65+) – research and plan

Why: Halyl (21 Nov 2026) finds the mobile site "very messy" and hard to follow, and says
the older audience will not understand it either. The brief names the main reader: the
patient or spouse, usually over 65, plus sons and daughters aged 45–60 comparing on their phone.

## Who is online (Germany)

- Internet use among people 70+ rose from 66 % to 71 % in one year (D21-Digital-Index 2023/24).
- Strong drop with age (D21 2020/21): online 70–74: 70 %, 75–79: 48 %, 80–84: 36 %, 85+: about 25 %.
  Smartphone use 70–74: 60 %, 80–84: 27 %.
- So: many patients will reach the site through a relative, and the ones who visit themselves
  are often first-time or unsure smartphone users. Phone calls stay the natural way to make contact.

## What the research says

**Reading**
- Small, light-grey text is the most common mobile complaint of older users (NN/g, 2019, 123 users 65+, incl. Germany).
- At least 11–12 pt / roughly 16 px+ body text; headings about 50 % larger than body text (ZfG/ZHAW guideline).
- Contrast: the smaller the text, the higher the contrast; no patterned backgrounds (ZfG). Light grey on white is the first thing to avoid (W3C WAI).
- Left-aligned text, no long passages in CAPITALS or italics, generous line and paragraph spacing (ZfG).

**Structure and navigation**
- Same place, same behaviour: navigation always visible and consistent on every page (ZfG).
- Few navigation items; avoid pull-down menus where possible (ZfG). Hidden ("hamburger") menus are used less and found later than visible navigation, on mobile too (NN/g hidden-navigation studies).
- Older adults struggle with broad menus, switching between screens and getting back (PolyU study, 22 older adults).
- Vertical scrolling only, never sideways; split very long content (ZfG).
- Keep steps few and pages calm; reduced short-term memory and being easily distracted make long, busy pages hard (W3C WAI).

**Buttons and links**
- Buttons and links are often too small to tap (NN/g); reduced fine motor control (W3C). WCAG 2.2: targets at least 24 × 24 px (AA), 44 × 44 px recommended.
- Links must be recognisable by more than colour, e.g. underlined (BAGSO checklist).
- Easy way back to the start, also via the logo (BAGSO).

**Language**
- Understandable language; no English terms, foreign words, abbreviations or jargon, or explain them (BAGSO). Short sentences, active voice (ZfG).
- Older users feel "left out" when a site is clearly made for someone younger (NN/g).

**Movement and distraction**
- Avoid blinking elements and animations; they make it hard to ignore what is irrelevant (ZfG, BAGSO). No autoplay sound (W3C).

**Forms**
- Accept phone numbers in any format, tolerate mistakes, short plain error messages next to the field (NN/g).

## Where the Orchidee mobile site falls short today

1. **Too long and too much:** the home page is about 13,600 px on a phone (17 screens), with photos, chips, tags, badges and cards competing.
2. **Black/white switching:** sections alternate dark and light, and every section has its own card style. On a phone this reads as restless, not as one story.
3. **Hidden menu:** the navigation sits behind an unlabelled three-line icon.
4. **Small and grey text:** much of the text is 14–16 px in mid-grey; small uppercase labels.
5. **Movement:** fade-ins, drawing icons and zooms.
6. **Words:** "Behandlungspflege", "Grundpflege", "Kurz-Check", "Pflegegrad" appear without a plain explanation next to them.
7. **No clear order:** the visitor is not led through the obvious questions (Is this for me? What do you do? What does it cost? How do I start?).

## Plan for the phone version (desktop stays as it is)

1. **One calm look:** all middle sections light; only the photo hero at the top and the contact block at the end are dark. One card style everywhere.
2. **A clear story with question headings,** each answered in two or three short sentences:
   Hero → "Ist das das Richtige für Sie?" → "Was wir für Sie tun" → "So beginnt die Pflege" → "Wer bezahlt?" → "Häufige Fragen" → "Rufen Sie uns an".
3. **Shorter:** drop decorative photos inside sections, tag/chip lists, the job teaser on the home page and repeated blocks. Target: about half today's length.
4. **Bigger, darker text:** body 18 px, small text never under 16 px, darker grey, labels in normal case.
5. **Calling first:** in the hero, "Jetzt anrufen" with the full number is the first, largest button; "Rückruf anfordern" second. The bottom bar says "Anrufen" and "Rückruf anfordern" with icons.
6. **Visible menu:** the menu button gets the word "Menü"; inside, large links in a simple list.
7. **Plain words:** explain terms where they appear, e.g. "Behandlungspflege (was der Arzt verordnet: z. B. Insulin, Verbände)".
8. **No movement** on phones; nothing fades, draws or zooms.
9. **Big tap targets:** at least 48 px high, links underlined.
10. **Form:** large fields, any phone format accepted, plain error messages.

## Design: how older people see a page

- **Flat design is harder.** Older adults (65–77) were slower or less accurate with flat interfaces than with classic, more "physical" ones when finding things, spotting what is clickable and moving between pages. They also preferred the classic style for usability and trust (Urbano et al. 2020).
- **Outline-only ("ghost") buttons are weak signals.** In NN/g eyetracking, weak signifiers like ghost buttons made people look longer and at more elements before acting. Clickable things need a clear look: solid fill, firm edge, slight depth.
- **Icons need words.** Text labels next to icons improve older adults' recognition, especially for flat, simplified icons. Icon-only navigation performs worst (icon studies 2011, 2021, 2022).
- **Colour: contrast over hue.** The ageing eye loses fine colour discrimination, especially blue against green, and is more sensitive to glare. Separate things by light/dark contrast, not by colour alone; avoid pale blues and greys for text.
- **No text on photos.** Text over busy images loses contrast and is a typical barrier for older readers. Keep text on calm, plain surfaces.
- **Real people build trust.** German care-sector guidance recommends real team photos over stock photos; relatives compare 3–5 services and recognise generic stock images. Never show clients without consent.
- **Calm surfaces, one style.** Consistent cards, plain backgrounds, generous white space.

### Applied to the phone version

- Solid buttons with a firm edge and slight shadow; no outline-only buttons.
- Service cards: photo on top, text below on white instead of text over the photo.
- Contact block at the end: plain dark surface, no photo behind the text.
- One card style (white, thin grey edge, same corners) for every box.
- FAQ rows with a clear round +/– button; form fields with firm borders and bold labels.
- Icons always next to words (menu, call bar, criteria).
- Still open: real team photos from the client to replace stock images.

## Sources

- Urbano et al. 2020, flat vs. skeuomorphic design for older adults: https://internet.psych.wisc.edu/wp-content/uploads/532-Master/532-UnitPages/Unit-09/Urbano_BIT_2020.pdf
- NN/g, flat UI and weak signifiers: https://nngroup.com/articles/flat-ui-less-attention-cause-uncertainty · https://nngroup.com/articles/flat-design-long-exposure/
- Icons and text labels for older adults: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9026834/ · https://www.cs.ubc.ca/labs/edapt/papers/leung2011.pdf
- Colour and the ageing eye: https://pmc.ncbi.nlm.nih.gov/articles/PMC3648508 · https://www.lrc.rpi.edu/programs/lightHealth/AARP/healthcare/lightingOlderAdults/agingEye.asp
- Care-service websites (agency guidance, not studies): https://davidkeiser.de/wissen/webdesign-fuer-pflegedienste-mitarbeiter-klienten/ · https://netzhandwerker.de/blog/webseite-fuer-pflegedienst

- Initiative D21, D21-Digital-Index (2020/21, 2023/24): https://initiatived21.de/presse/digitale-teilhabe-fuer-aeltere-verbessern-trotz-steigender-nutzung-braucht-es-mehr-befaehigung · https://initiatived21.de/publikationen/d21-digital-index/2020-2021/digitale-teilhabe-von-senior-innen
- Nielsen Norman Group, Usability for Older Adults (2019): https://www.nngroup.com/articles/usability-for-senior-citizens/
- NN/g, hidden navigation: https://www.nngroup.com/articles/hidden-navigation-methodology/ · https://www.nngroup.com/articles/find-navigation-mobile-even-hamburger/
- W3C WAI, Older Users and Web Accessibility: https://www.w3.org/WAI/older-users/
- ZfG / ZHAW, Altersgerechte Webseitengestaltung: https://www.zfg.uzh.ch/dam/jcr:ffffffff-d47a-fc0b-0000-00001017ff44/Altersgerechte_Webseitengestaltung_ZHAW.pdf
- BAGSO, Checkliste Nutzerfreundliche Internetseiten: https://www.bagso-service.de/.cm4all/uproc.php/0/infoblatt_checkliste_internet.pdf?cdp=a
- BAGSO, Impulspapier Bedienoberflächen im Fokus (2025): https://www.bagso.de/fileadmin/user_upload/bagso/06_Veroeffentlichungen/2025/Impulspapier_Bedienoberflaechen_im_Fokus.pdf
- Li et al., older adults' smartphone use (PolyU): https://ira.lib.polyu.edu.hk/bitstream/10397/105044/1/Li_Older_Adults_Use.pdf
