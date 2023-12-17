const types = ["Bowman", "Swordsman", "Magician", "Daemon", "Undead", "Zombie"];

export default class Character {
  #name;
  #type;
  #attack
  #defence
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }
  set name(name) {
    if (name.length < 2 || name.length > 10) {
      throw new Error("Ass");
    }
    this.#name = name;
  }
  get name() {
    return this.#name;
  }
  set type(type) {
    if (!types.includes(type)) {
      throw new Error("Boobs");
    }
    this.#type = type;
  }
  get type() {
    return this.#type;
  }
  set attack(val) {
    this.#attack = val;
  }
  get attack() {
    return this.#attack;
  }
  set defence(val) {
    this.#defence = val;
  }
  get defence() {
    return this.#defence;
  }
  levelUp() {
    if (this.health <= 0) {
      throw new Error("Dead");
    }
    this.level++;
    this.#attack += this.attack * 0.2;
    this.#defence += this.defence * 0.2;
    this.health = 100;
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}
