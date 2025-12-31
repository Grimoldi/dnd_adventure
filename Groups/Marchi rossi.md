---
campaign: "[[C1 - Lost mines of Phandelver]]"
type: Criminal Syndicate
logo:
banner: z_assets/default-group.png
banner-x: 53
banner-y: 30
---
# `= this.file.name`
`VIEW[{logo}][image(class(eu-float-left))]`

Type: `INPUT[template-group-type][:type]`

Chiedono il pizzo a [[Phandalin]] tranne alla borsa dei minatori (tipo piazza affari) gestita da [[Alia]].
L'ultimo che ha subito violenza è un falegname (Tell Dendral), ucciso, a cui hanno stuprato la moglie e portato via il figlio.

Si trovano al Gigante Addormentato (altra locanda in [[Phandalin]])
L'unico avventuriero che si è opposto è stato [[Daran Edermath]], un vecchio avventuriero che vive in un frutteto poco lontano a nord della cittadina.

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
