---
campaign: "[[C1 - Lost mines of Phandelver]]"
banner: z_assets/default-location.png
banner-x: 54
banner-y: 35
---
# Bio

Locanda del Teschio di Troll, gestita da [[Tresp]], davanti a cui staziona [[mendicante]].

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