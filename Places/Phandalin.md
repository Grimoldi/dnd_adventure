---
campaign: "[[C1 - Lost mines of Phandelver]]"
banner: z_assets/default-location.png
banner-x: 54
banner-y: 35
---
# Bio
Resti diroccati di un paese più grande, nuovi edifici si sviluppano lunga il sentiero principale
C'è un maniero (palazzo signorile, Tresenda) diroccato sul lato orientale, sul fianco di una collina.

Borgomastro Arbin Wester

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


