---
campaign: "[[C1 - Lost mines of Phandelver]]"
banner: z_assets/Places/collina_dei_cramaw.png
banner-x: 54
banner-y: 35
---
# Bio
Collina nei pressi della pista Triboar, nascosta tra alberi e montagne, da cui una banda di goblin partiva per scorribande.

## Personaggi collegati
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
        - or:
            - list(place).contains(this)
            - list(place).contains(this)
    order:
      - file.name
      - race
    image: note.portrait
    imageFit: contain
    cardSize: 170

```

