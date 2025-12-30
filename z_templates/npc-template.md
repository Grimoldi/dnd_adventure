<%* await tp.user.fm_property_link_from_notes_list(tp, "Campaign/", "campaign"); _%>
<%* await tp.user.fm_property_link_from_notes_list(tp, "Groups/", "group"); _%>
<%* await tp.user.fm_property_link_from_notes_list(tp, "Places/", "place"); _%>
<%* await tp.user.fm_property_link_from_notes_list(tp, "Places/", "city"); _%>
---
campaign:
race:
status:
sentiment:
group:
city:
place:
portrait: z_assets/default-npc.png
---

> [!fas-infobox | h1-title no-thead]+ # `= this.file.name`
> `VIEW[{portrait}][image]`
> 
> ### Meta Information
> | | |
> | --- | --- |
> | Campaign | `= this.campaign` |
>
> ### Campaign information
> | | |
> | --- | --- |
> | Race | `INPUT[template-person-race][:race]` |
> | Status | `INPUT[template-person-status][:status]` |
> | Sentiment | `INPUT[template-npc-sentiment][:sentiment]` |
> | Group | `= this.group` |
> | City | `= this.city` |
> | Place | `= this.place` | 
> 
>> [!footer]
>> This NPC has done so little...


---
# Bio


