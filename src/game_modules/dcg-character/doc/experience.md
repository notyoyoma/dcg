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
3. XP penalty from other guilds gets excessive if joining more than 3 guilds

### Current Guild experienceFactor

| Value | Effect
| ---   | ---
| 1     | <a title="View with the Desmos Graphing Calculator" target="_blank" href="https://www.desmos.com/calculator/d7sli9hewh">  <img src="https://s3.amazonaws.com/calc_thumbs/production/d7sli9hewh.png" width="200px" height="200px"     style="border:1px solid #ccc; border-radius:5px"  /></a>
| 2     | <a title="View with the Desmos Graphing Calculator" target="_blank" href="https://www.desmos.com/calculator/ufhtxdbitt">  <img src="https://s3.amazonaws.com/calc_thumbs/production/ufhtxdbitt.png" width="200px" height="200px"     style="border:1px solid #ccc; border-radius:5px"  /></a>
| 3     | <a title="View with the Desmos Graphing Calculator" target="_blank" href="https://www.desmos.com/calculator/tqeyllbd1t">  <img src="https://s3.amazonaws.com/calc_thumbs/production/tqeyllbd1t.png" width="200px" height="200px"     style="border:1px solid #ccc; border-radius:5px"  /></a>

### Other Guilds experienceFactor

| Other Guilds             | Multiplied ExF | Combined Levels | Effect
| ---                      | ---            | ---             | ---
| artisan                  | 1              | 10              | Increases XP requirements by 50%
| warrior                  | 2              | 10              | Increases XP requirements by 300%
| artisan, warrior         | 2              | 15              | Increases XP requirements by 350%
| artisan, warrior, wizard | 10             | 15              | Increases XP requirements by 1700%

###### notes
Because artisan has a ExF of 1, it doesn't add to the Multiplied ExF

### Race.experienceFactor
 
| Value | Effect
| ---   | ---
| 1     | Race does not adjust XP requirements
| 2     | Race doubles XP requirements
| 0.5   | Race halves XP requirements
