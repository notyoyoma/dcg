## Character Data

When you save the game, each character's information will be written to a JSON object with the following properites:

| Property     | Type | Explanation 
| ---          | ---  | ---
| maxHP        | int  | maximum HP
| currentHP    | int  | current HP
| maxMana      | int  | maximum mana
| currentMana  | int  | current mana
| guilds       | obj  | guilds that the character has progressed in, the level for each guild, and the XP earned so far. [ More detail below. ]( #guilds-data )
| currentGuild | str  | ID of the character's current guild.
| statuses     | obj  | all of the special statuses applied to the character. (poison, flying, water-breathing, etc.) [ More detail below. ]( #status-data )
| gender       | str  | "m" or "f"
| race         | str  | ID of the character's race.
| stats        | obj  | Character's core stats. [ More detail below. ]( #stats-data )
| learnedStats | obj  | Character's learned stats. [ More detail below. ]( #learned-stats-data )
| equipped     | obj  | Character's equipment. [ More detail below. ]( #equipped-data )
| name         | str  | Character's name.
| inventory    | obj  | Character's inventory. [ More detail below. ]( #inventory-data )

### Guilds data

Each guild the character is a member of will have it's own property. For example:

```javascript
guilds: {
  artisan: {
    ...
  },
  barbarian: {
    ...
  }
}
```

Each guild stores the following fields:

| Property   | Type | Explanation 
| ---        | ---  | ---
| xp         | int  | Current XP earned in this guild
| lvl        | int  | Current level acquired in this guild
| expNextLvl | int  | Exp required to reach next level in the guild
| expToPin   | int  | Exp required to pin in the guild

All of these fields are populated when the character joins or levels up in a guild.

### Status data

Each status applied to the character. This includes poisons, flight, and other stati. All stats are removed when visiting the town.

### Stats data

These are the character's core stats. These stats are only changed by books, potions, or special quests.

```javascript
stats: {
  strength: 11,
  intelligence: 12,
  wisdom: 12,
  constitution: 8,
  charisma: 9,
  dexterity: 11
}
```

### Learned stats data

A list of all the things that the character has learned from various guilds.

| Stat           | Explanation 
| ---            | ---
| attack         | increases physical attack damage
| accuracy       | increases physical attack hit chance
| dodge          | increases chance of avoiding physical attacks
| defence        | increases defence (reduction of damage)
| spellPower     | increases effectiveness of spells and reduces mana cost
| perception     | increases perception (chance to notice traps, identify monsters, etc)
| multipleSwings | increases number of physical attacks per round
| thief          | increases chance of disarming trapped chests
| criticalHit    | increases chance of critical hits (x2 damage)
| backstab       | increases chance of backstab (instant kill)
| breathing      | increases time underwater
| language       | increases information gained through talking to monsters

### Equipped data

A list of all the items the character has equipped. Each 'slot' for equipping items has its own key.

```javascript
equipped: {
  hand: {
    appendage: 'hand',
    name: 'Sword of self-stabbing',
    modifies: {
      attack: -10
    },
    cursed: true
  },
  offHand: {
    appendage: 'offHand',
    name: 'Shield of stab me',
    modifies: {
      defence: -10
    },
    cursed: true
  }
}
```

For more information about items, see the dcg-loot module.

### Inventory data

An array of everything the character has in his inventory. All empty slots will have the value null.

```javascript
[
  {
    appendage: 'hand',
    name: 'Iron Sword',
    modifies: {
      attack: 3
    }
  },
  {
    appendage: 'feet',
    name: 'Lead Boots',
    modifies: {
      defence: 5,
      dodge: -10
    }
  },
  null,
  null,
  null,
  null,
  ...
]
```
