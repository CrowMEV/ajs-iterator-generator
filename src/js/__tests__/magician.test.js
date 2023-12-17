import Magician from "../magician";

test("Magicial", () => {
  const magician = new Magician("Victoria");
  expect(magician.type).toBe("Magician");
  expect(magician.attack).toBe(10);
  expect(magician.defence).toBe(40);
});
