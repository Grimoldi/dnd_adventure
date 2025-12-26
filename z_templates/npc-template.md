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
<% await tp.file.move("NPC" + "/" + tp.file.title) %>

> [!infobox|right]
> `VIEW[{portrait}][image]`
> 
>> This NPC has done so little...

> Campaign: `INPUT[template-person-campaign][:campaign]`
> Race: `INPUT[template-person-race][:race]`
> Status: `INPUT[template-person-status][:status]`
> Sentiment: `INPUT[template-npc-sentiment][:sentiment]`
> Group: `INPUT[text:group]`
> Place: `INPUT[text:place]`


---
# Bio


