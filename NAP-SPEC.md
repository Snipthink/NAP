# Norwegian Aviation Partners (NAP) — Website Brief & Content Spec

This document is the canonical content and design brief for the NAP static website.
It captures brand positioning, page structure, copy, credibility rules and technical
requirements used to build the site in this repository.

---

## 1. Core Brand Positioning

Norwegian Aviation Partners (NAP) is a premium, hands-on aviation and aerospace
venture studio working at the intersection of aviation, aerospace, advanced mobility,
industrial technology, sustainable propulsion, space systems, advanced materials and
ecological innovation.

NAP is **not** a conventional consulting firm. It operates as a hands-on venture studio
and strategic execution partner.

> WE DO NOT LOOK FROM ABOVE. WE STAND ON THE GROUND AND BUILD.

NAP works directly with airlines, aerospace companies, industrial companies, deep-tech
founders, mobility innovators, investors, infrastructure developers, institutional
stakeholders and strategic partners.

### Core capabilities
Airline and fleet strategy · aircraft procurement · MRO infrastructure · aircraft
interiors and transformation · airline scaling · cross-border M&A · new mobility ·
village-to-village aviation · point-to-point networks · Advanced Air Mobility ·
lighter-than-air systems · airships · commercial balloons · SAF · biofuels · hydrogen
propulsion · electric propulsion · aerospace systems · space infrastructure · advanced
materials · orbital manufacturing · industrial supply chains · venture building ·
capital and industrial structuring · regulatory navigation.

## 2. Brand Personality

Quiet authority · industrial experience · Scandinavian precision · global reach ·
human trust · aerospace sophistication · strategic intelligence · ecological
responsibility. The site should feel like the digital headquarters of a private
aerospace institution — not generic consulting, not a SaaS/startup landing page, not
an aviation broker site, not sci-fi futurism.

## 3. Visual Design System

**Palette:** `#0A0B0D` near-black · `#15171A` charcoal · `#E9E6DF` warm ivory ·
`#F5F3EE` off-white · `#8B8F94` steel grey · `#BA1E2D` Norwegian red (used sparingly).
Theme is dark by default.

**Typography:** editorial serif for headlines (Playfair Display), geometric/humanist
sans for body copy (Inter). Large headlines, generous whitespace, thin technical
rule lines, small uppercase metadata labels, precise grid alignment.

## 4. Site Structure

`/index.html`, `/about.html`, `/capabilities.html`, `/venture-studio.html`,
`/founders.html`, `/advisors.html`, `/experience.html`, `/perspective.html`,
`/contact.html`. Every page: global nav, footer, responsive layout, SEO + social
metadata, favicon, accessible headings/nav, mobile nav.

## 5. Credibility Protocol (critical)

The site must not invent or exaggerate facts. Claims requiring verification before
publication (airlines named, exact transaction figures, NASA/SpaceX/Lufthansa/Reliance
relationships, exact advisor roles) are presented with neutral wording such as
"experience spanning major airline and aerospace programs" and labelled **SELECTED
EXPERIENCE** rather than case studies. No fabricated names, dates or partnerships are
published. Only Nils Henrik Sanner is published as a named advisor; other advisor
slots are marked "ADVISOR — COMING SOON." Only the Oslo email is published.

## 6. Brand Story (seven chapters)

01 Aviation builds discipline → 02 Decades of operating experience create trust →
03 Deep technology opens new possibilities → 04 The world is re-architecting mobility →
05 NAP connects the systems → 06 The venture studio builds with the team →
07 The next industrial frontier is here.

## 7. Three Brand Pillars

01 Operating Experience — "We have been there."
02 Global Network — "We know who to call."
03 Execution — "We stay until it works."

## 8. File Structure

```
/index.html, about.html, capabilities.html, venture-studio.html, founders.html,
  advisors.html, experience.html, perspective.html, contact.html
/assets/css/main.css, responsive.css
/assets/js/main.js, navigation.js, animations.js, form.js
/data/capabilities.json, advisors.json, experience.json, articles.json
/robots.txt, sitemap.xml
```

Full section-by-section copy for each page lives in the implemented HTML files —
this brief defines intent, tone and constraints; the HTML/JSON is the source of
truth for exact live copy.
