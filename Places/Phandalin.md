---
campaign: "[[C1 - Lost mines of Phandelver]]"
banner: z_assets/default-location.png
banner-x: 54
banner-y: 35
---
# Bio
Resti diroccati di un paese più grande, nuovi edifici si sviluppano lunga il sentiero principale
C'è un maniero (palazzo signorile, Tresenda) diroccato sul lato orientale, sul fianco di una collina.

Il borgomastro è [[Arbin Wester]], anche se pare non stia facendo molto per contrastare i [[Marchi rossi]], almeno a quanto sostiene [[Daran Edermath]].

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


