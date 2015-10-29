#Race

+ minStats
    The minimum of each statistic possible for this race.
+ maxStats
    The maximum of each statistic possible for this race.
+ startStats
    Stats to populate the character creation screen.
+ defaultStats
    Values to assign if a character is created without setting stats. (total of all stats should be 65)
+ freePoints
    Number of free points avaliable at the start of the character creation screen.
+ frailtyAge
    Age at which the race becomes frail (chance of perma-death)
+ experienceFactor
    Adjusts experience required per level
      1 - Race does not adjust XP requirements
      2 - Race doubles XP requirements
      0.5 - Race halves XP requirements
+ alignments
    Possible race alignments
+ allowedGuilds
    Possible guild memberships
+ aptitude
    All aptitude numbers affect the quantity (if any) of the skill gained per level
        2 - Race doubles attribute gained per level
        1 - Race does not affect attribute gained per level
        0.5 - Race halves attribute gained per level
        0 - Race cannot have attribute, will always be 0 regardless of guild progress
  + fighting
      Improves attack / defence score
  + magic
      Improves magic attack, spellPower and maxMana
  + perception
      Improves perception abilities
  + multipleSwings
      Improves chance of adding an additional swing
  + thief
      Improves thief abilities
  + criticalHit
      Improves chance of critical hit
  + backstab
      Improves chance of backstab
  + breathing
      Improves underwater breathing
  + language
      Improves language score
