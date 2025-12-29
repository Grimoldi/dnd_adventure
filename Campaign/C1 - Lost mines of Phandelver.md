---
banner: https://static0.cbrimages.com/wordpress/wp-content/uploads/2021/01/Dungeons-Dragons-Lost-Mines-Green-Dragon.jpg?q=50&fit=crop&w=1600&h=900&dpr=1.5
banner-x: 47
banner-y: 61
---

---

## Personaggi:

[[Ninnolo]]
[[Thessobit]]
[[Casanova]]
[[Tanz]]

---

## Sessioni:

`BUTTON[button_new_session]`

```base
properties:
  file.name:
    displayName: Session
views:
  - type: table
    name: Sessions
    filters:
      and:
        - file.folder == "Sessions"
    order:
      - file.name
      - file.ctime
    sort:
      - property: file.ctime
        direction: DESC
    columnSize:
      file.name: 315

```
---

## Luoghi:

`BUTTON[button_new_location]`

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

---

## NPC:

`BUTTON[button_new_npc]`

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
    imageAspectRatio: 0.7

```

---