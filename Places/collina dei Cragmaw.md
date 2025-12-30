---
campaign: "[[C1 - Lost mines of Phandelver]]"
banner: z_assets/Places/collina_dei_cragmaw.png
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
  note.status:
    displayName: Status
  note.sentiment:
    displayNmae: Sentiment
views:
  - type: cards
    name: People - Cards
    filters:
      and:
        - file.folder == "NPC"
        - or:
            - list(place).contains(this)
            - list(city).contains(this)
    order:
      - file.name
      - status
      - sentiment
      - race
    image: note.portrait
    imageFit: contain
    cardSize: 170

```

