---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/1-4
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/environment/shadowfell
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
aliases:
- "Skeleton"
---
# Skeleton
*Source: Monster Manual (2024) p. 282, Player's Handbook (2024) p. 356. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

Skeletons are reanimated Humanoid bones bearing the equipment they had in life. They have rudimentary faculties and greater agility than zombies and similar shambling corpses. While they aren't capable of creating plans of their own, they avoid obvious barriers and self-destructive situations.

## Skeletons

*Ossified Evil*

- **Habitat.** Planar (Shadowfell), Underdark, Urban  
- **Treasure.** None  

Skeletons rise at the summons of necromancers and foul spirits. Whether they're the remains of the ancient dead or fresh bones bound to morbid ambitions, they commit deathless work for whatever forces reanimated them, often serving as guardians, soldiers, or laborers. In rare cases, skeletons are reanimated but given no particular direction. Roll on or choose a result from the Skeleton Pantomimes table to inspire how undirected skeletons behave.

**Skeleton Pantomimes**

| dice: 1d6 | Left to Its Own Devices, the Skeleton... |
|-----------|------------------------------------------|
| 1 | Delivers meal salvers or ages-old correspondence to the crypt of its dead master. |
| 2 | Endlessly trains in battle with other skeletons, despite being hacked to animate splinters. |
| 3 | Mimics ways it entertained itself in life, such as acting, dancing, or reading. |
| 4 | Performs a familiar task, such as cleaning, cooking, mining, or praying. |
| 5 | Repeats its final moments of life. |
| 6 | Stands guard at the post it protected in life. |
^skeleton-pantomimes

## Statblock

```ad-statblock
title: Skeleton
![](bestiary/tokens/XMM/Skeleton.webp#token)
*Medium undead, Lawful Evil*

- **Armor Class** 14
- **Hit Points** 13 (`2d8 + 4`)
- **Speed** 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|10 (+0)|16 (+3)|15 (+2)| 6 (-2)| 8 (-1)| 5 (-3)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** [Darkvision](srd/rules/senses.md#Darkvision) 60 ft., passive Perception 9
- **Damage Vulnerabilities** bludgeoning
- **Damage Immunities** poison
- **Condition Immunities** [exhaustion](srd/rules/conditions.md#Exhaustion), [poisoned](srd/rules/conditions.md#Poisoned)
- **Gear** [shortbow](srd/compendium/items/shortbow-xphb.md), [shortsword](srd/compendium/items/shortsword-xphb.md)
- **Languages** understands Common plus one other language but can't speak
- **Challenge** 1/4

## Actions

***Shortsword.*** *Melee Attack Roll:* `+5`, reach 5 ft. *Hit:* 6 (`1d6 + 3`) Piercing damage.

***Shortbow.*** *Ranged Attack Roll:* `+5`, range 80/320 ft. *Hit:* 6 (`1d6 + 3`) Piercing damage.
```
^statblock

## Environment

planar, shadowfell, underdark, urban