import Team from "../team";
import Magician from "../magician";

describe("Team", () => {
  test("Add The wrong type", () => {
    const team = new Team();
    expect(() => team.add({ key: "Boobs" })).toThrow();
  });
  test("addAll there are no duplicates", () => {
    const team = new Team();
    const katya = new Magician("Katerina");
    const jenya = new Magician("Evgeniy");
    team.addAll(katya, jenya, katya);
    expect(team.members.size).toBe(2);
  });
  test("toArray returned type array", () => {
    expect(new Team().toArray() instanceof Array).toBeTruthy();
  });
  test("Iterator", () => {
    const team = new Team();
    const katya = new Magician("Katerina");
    const jenya = new Magician("Evgeniy");
    let count = 0
    team.addAll(jenya, katya);
    for (let char of team) {
      count += 1
      expect(char).toEqual(char);
    }
    expect(count).toBe(2)
  });
});
