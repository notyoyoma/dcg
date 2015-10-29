# Experience

Three factors will affect the experience requirements for every guild level.

1. [ Level in current guild ]( #current-guild-experiencefactor )
2. [ Levels in other guilds ]( #other-guilds-experiencefactor )
3. [ Race experienceFactor ]( ./race.md )

Here is the core equation for calculating XP:

```javascript
var baseXP = 50,   // Amount of XP for level 1 of an easy guild
    cgExF,         // Current guild experience factor
    cgLvl,         // Current guild level
    ogExF,         // Multiplication of other guild experience factors
    ogLvl,         // Sum of ther guild levels
    rExF;          // Race experience factor

var xp  = (baseXP * cgExF) * ( 1 + ( cgLvl * cgLvl / 20 ) );
    xp *= ogExF * ( 1 + ogLvl / 20 );
    xp *= rExF;
```
###### notes
1. XP for current Guild scales exponentially after lvl 20
2. XP penalty from other guilds gets excessive after total guilds lvl is >20

### Race.experienceFactor
 
| Value | Effect
| ---   | ---
| 1     | Race does not adjust XP requirements
| 2     | Race doubles XP requirements
| 0.5   | Race halves XP requirements

### Guild.experienceFactor (current guild)



| Value | Effect
| ---   | ---
| 1     | Every level costs the same as level 1 (linear)
| 2     | Every level costs 
|       | 

### Guild.experienceFactor (other guilds)
