import Team from "./js/team";
import Magecial from "./js/magician";
import Character from "./js/character"

const team = new Team();
console.log(new Magecial("Victoria") instanceof Character)
console.log(team.add(new Magecial("Victoria")));
