<%* await tp.user.fm_property_link_from_notes_list(tp, "Campaign", "campaign") _%>
---
campaign:
type:
logo:
banner: z_assets/default-location.png
banner-x: 53
banner-y: 30
---
# `= this.file.title`


![[Zhentarim.webp|left|300]]
Type: `INPUT[template-group-type][:type]`


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

