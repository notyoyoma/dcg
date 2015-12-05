import Monster from 'dcg-monster';

const settings = {
  // How often to respawn zones (in ms)
  // 600000 ms = 600 s = 5 m
  respawnTimer: 600000
};

// TODO - write tests
export default class Encounter {
  constructor(zone, party) {
    this.zone = zone;

    if (this.shouldSpawn()) {
      this.zone.monster = new Monster(this.zone.monsters[Math.floor( Math.random()*this.zone.monsters.length )])
      this.zone.monster.initHostility(party);
      this.zone.monster.rollJoin();
    }
  }

  shouldSpawn() {
    return !this.zone.monster    // room is empty
    && this.zone.monsters.length // room can spawn monsters
    && ( // and room was last cleared more than [respawnTimer] ago
      !this.zone.lastCleared
      || this.zone.lastCleared < Date.now() - settings.respawnTimer
    );
  }
}
