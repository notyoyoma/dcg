#Race

To see all of the races that have been setup, simply [ view races.json ]( ../races.json )

| Property         | Effect 
| ---              | --- 
| minStats         | The minimum of each statistic possible for this race.
| maxStats         | The maximum of each statistic possible for this race.
| startStats       | Stats to populate the character creation screen.
| defaultStats     | Values to assign if a character is created without setting stats. (total of all stats should be 65)
| freePoints       | Number of free points avaliable at the start of the character creation screen.
| frailtyAge       | Age at which the race becomes frail (chance of perma-death)
| experienceFactor | Adjusts experience required per level [ see experience.md ]( ./experience.md#race )
| alignments       | Possible race alignments
| allowedGuilds    | Possible guild memberships
| aptitude         | All aptitude numbers affect the quantity (if any) of the skill gained per level (see below)

##### Race ability aptitude effects
| Number | Result
| ---    | ---
| 2      | doubles attribute gained per level 
| 1      | does not affect attribute gained per level 
| 0.5    | halves attribute gained per level 
| 0      | cannot have attribute, will always be 0 regardless of guild progress
