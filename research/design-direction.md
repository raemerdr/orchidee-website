# Design direction – Kead base + Vitalex hero (21 Nov 2026)

**Base template:** [Kead](https://kead.webflow.io/). We use its whole look and every section below the hero.
**Hero:** [Vitalex](https://vitalex-ttm.webflow.io/). We rebuild only its hero inside the Kead project.

## Hero (taken from Vitalex)
- **Background:** a full-bleed photo, darkened on the left so the headline can be read. For Orchidee it should be a nurse at a patient's home: a real Orchidee team photo if the client can provide one, otherwise stock.
- **Navigation:** a floating pill bar at the top right with the phone number and a solid button (Vitalex shows "(+123) 654 7890 | Appointment"). For us: "0261 … | Rückruf anfordern". It stays visible on every page, which covers the brief's "call the office" goal.
- **Headline:** large two-line display headline in mixed weights, with one highlighted word in the accent colour. Vitalex: "RANKED **NO.1** BEST HOSPITAL". Possible German version: "Pflege zu Hause. **Vom selben Team.**" The copy is still to be written.
- **Under the headline:** a small kicker line (Vitalex: "# Since 1998 — Trusted medical care"). For us: "# Ambulante Pflege in Koblenz".
- **Call to action:** one solid accent button ("Anfrage senden"), with a short paragraph and pill tags beside it. Tag ideas: Behandlungspflege · Grundpflege · Pflegegrad 3–5 · Kleines festes Team.
- **Small inset photo card** at the bottom right. Could show the team or a "Rückruf in 24 h" note.
- **Intro text animation:** in the kickoff call Halyl asked for "not too much animations, no confusing things", and the site will get Google Ads traffic. So show the headline straight away, with at most a subtle fade under 0.5 s.
- **Recolour:** Vitalex's neon yellow-green becomes Orchidee magenta (#E6007E), and the dark navy becomes near-black or white.

## Everything else (taken from Kead)
Kead has a light grey-white base, rounded cards, small pill section labels, large dark headlines and one accent colour. That is close to "Apple-simple with impact" already. Each Kead section maps to Orchidee like this:

| Kead section | Orchidee use |
|---|---|
| Treatments carousel (numbered photo cards) | **Leistungen:** Behandlungspflege (insulin, wounds, compression, medication, catheter, tube feeding) and Grundpflege |
| Patient outcomes (stats) | Small proof points (years in Koblenz, size of the team, how fast care can start). Use only real numbers from the client. |
| Your journey (timeline) | **So läuft es ab:** Anruf/Anfrage → Rückruf → Erstgespräch zu Hause → Kostenklärung (Kranken- und Pflegekasse) → Pflege startet |
| Why Kead (4 reasons) | **Warum Orchidee:** same small team, medical care by qualified staff, family is relieved, help with paperwork |
| Team grid + "Join our team" | **Über uns** teaser, with a link to Karriere |
| Patient stories | Testimonials, if the client has real ones. Otherwise drop the section. |
| FAQ | **Who we care for.** Politely say Pflegegrad 3–5 with medical care, no household-only help. Also who pays, and how fast care starts. |
| Journal | Drop it. It isn't in the brief. |

## Colour
- Base: Kead's off-white plus near-black text.
- Accent: Orchidee magenta (#E6007E), replacing both Kead's lime and Vitalex's neon.
- Violet from the logo: only for small details such as icons and pill backgrounds.

## Accessibility for visitors over 65
- Body text of at least 18px.
- Accent buttons must keep strong contrast. Use white text on magenta.
- On mobile, keep a sticky call/callback button at the bottom of the screen.

## Build note
These are two separate marketplace templates, so we need to buy both licences, or buy Kead and rebuild the Vitalex hero ourselves. Copying Vitalex elements into a Kead project requires owning the Vitalex licence. Check prices on each listing.
