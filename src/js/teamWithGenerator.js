import Character from "./character";
export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(member) {
    if (!(member instanceof Character)) {
      throw new Error("not Boobs");
    }
    this.members.add(member);
  }
  addAll(...members) {
    members.forEach((member) => this.add(member));
  }
  toArray() {
    return [...this.members];
  }
  *[Symbol.iterator]() {
    for (let char in this.toArray()) {
      yield char;
    }
  }
}
