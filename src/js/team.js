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
  [Symbol.iterator]() {
    let index = 0;
    let members = this.toArray();
    return {
      next() {
        if (index >= members.length) {
          return {
            done: true,
          };
        }
        return {
          done: false,
          value: members[index++],
        };
      },
    };
  }
}
