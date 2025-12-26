
---

Personaggi:
[[Ninnolo]]
[[Thessobit]]
[[Casanova]]
[[Tanz]]

---

Sessioni:
[[C1 - 01 - Un nuovo inizio]]
[[C1 - 02 - Nel covo dei goblin]]

---

Luoghi:
[[Castello re Kroll]]
[[collina dei Cragmaw]]
[[Miniere arcane]]
[[Neverwinter]]
[[Phandalin]]

---

NPC:
```base
properties:
  file.name:
    displayName: People
  note.race:
    displayName: Race
views:
  - type: cards
    name: People - Cards
    filters:
	  and:
        - file.folder == "NPC"
        - list(campaign).contains(this)
    order:
      - file.name
      - race
    image: note.portrait
    imageFit: contain
```

---

Places:
```base
properties:
  file.name:
    displayName: People
views:
  - type: cards
    name: People - Cards
    filters:
	  and:
        - file.folder == "Places"
        - list(campaign).contains(this)
    order:
      - file.name
    image: note.banner
    imageFit: cover
```