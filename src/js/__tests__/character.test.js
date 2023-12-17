import Character from "../character";

describe("Character", () => {
  describe("constructor", () => {
    test("empty name", () => {
      expect(() => new Character("", "Bowman")).toThrow("Ass");
    });

    test("very long name", () => {
      expect(() => new Character("VictoriaBowman", "Bowman")).toThrow("Ass");
    });

    test("name", () => {
      expect(new Character("Victoria", "Bowman").name).toBe("Victoria");
    });

    test("empty type", () => {
      expect(() => new Character("Victoria", "")).toThrow("Boobs");
    });

    test("non-existent type", () => {
      expect(() => new Character("Victoria", "Florist")).toThrow("Boobs");
    });

    test.each([
      "Bowman",
      "Swordsman",
      "Magician",
      "Daemon",
      "Undead",
      "Zombie",
    ])("Check type %s", (type) => {
      expect(new Character("Victoria", type).type).toBe(type);
    });
  });
  describe("levelUp", () => {
    test("Good health", () => {
      const char = new Character("Victoria", "Daemon");
      char.attack = 10;
      char.defence = 10;
      char.levelUp();
      expect(char.defence).toBe(12);
      expect(char.attack).toBe(12);
      expect(char.level).toBe(2);
      expect(char.health).toBe(100);
    });

    test("0 health", () => {
      const char = new Character("Victoria", "Daemon");
      char.health = 0;
      expect(() => char.levelUp()).toThrow("Dead");
    });
  });
  describe("Damage", () => {
    test("Good health", () => {
      const char = new Character("Victoria", "Daemon");
      char.defence = 10;
      char.damage(20);
      expect(char.health).toBeLessThan(100);
    });
    test("0 health", () => {
      const char = new Character("Victoria", "Daemon");
      char.health = 0;
      expect(char.damage(10)).toBeUndefined();
    });
  });
});
