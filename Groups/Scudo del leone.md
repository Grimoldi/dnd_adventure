---
campaign: "[[C1 - Lost mines of Phandelver]]"
type: Merchant Consortium
logo:
banner: z_assets/default-group.png
banner-x: 53
banner-y: 30
---
# `= this.file.name`
`VIEW[{logo}][image(class(eu-float-left))]`

Type: `INPUT[template-group-type][:type]`
Compagnia mercantile, che ha una sede a [[Phandalin]].

[[Linene]] è un'umana che gestisce la sede locale.
<br style="clear:both"/>


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
    displayName: Sentiment
  note.group:
    displayName: Group
views:
  - type: cards
    name: People - Cards
    filters:
      and:
        - file.folder == "NPC"
        - or:
            - list(group).contains(this)
    groupBy:
      property: sentiment
      direction: ASC
    order:
      - file.name
      - status
      - sentiment
      - group  
      - race
    sort:
      - property: status
        direction: ASC
      - property: sentiment
        direction: ASC
    image: note.portrait
    imageFit: contain
    cardSize: 170
```

