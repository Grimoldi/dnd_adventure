<%* await tp.user.fm_property_link_from_notes_list(tp, "Campaign", "campaign") _%>
---
campaign:
banner: z_assets/default-location.png
banner-x: 53
banner-y: 30
---
# Bio

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

