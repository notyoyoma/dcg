#Race

| Property         | Effect 
| ---              | --- 
| minStats         | The minimum of each statistic possible for this race.
| maxStats         | The maximum of each statistic possible for this race.
| startStats       | Stats to populate the character creation screen.
| defaultStats     | Values to assign if a character is created without setting stats. (total of all stats should be 65)
| freePoints       | Number of free points avaliable at the start of the character creation screen.
| frailtyAge       | Age at which the race becomes frail (chance of perma-death)
| experienceFactor | Adjusts experience required per level <ul><li>1 - Race does not adjust XP requirements</li><li>2 - Race doubles XP requirements</li><li>0.5 - Race halves XP requirements</li></ul>
| alignments       | Possible race alignments
| allowedGuilds    | Possible guild memberships
| aptitude         | All aptitude numbers affect the quantity (if any) of the skill gained per level <ul><li>2 - doubles attribute gained per level</li> <li>1 - does not affect attribute gained per level</li> <li>0.5 - halves attribute gained per level</li> <li>0 - cannot have attribute, will always be 0 regardless of guild progress</li></ul>

### Race aptitude effects
| Apptitude      | Improves
| ---            | --- 
| fighting       | attack / defence
| magic          | magic attack, spellPower and maxMana
| perception     | perception abilities
| multipleSwings | chance of adding an additional swing
| thief          | thief abilities
| criticalHit    | chance of critical hit
| backstab       | chance of backstab
| breathing      | underwater breathing
| language       | language score
