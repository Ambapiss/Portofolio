import Character from "./main5.mjs";
import { canAttack,canCastSpell,canDefend } from "./main6.mjs";

function createMosnter(name) {
    const character = new Character(name,100,0);
    return Object.assign(character, canAttack(character));
}

function createGuardian(name) {
    const character = new Character(name)
    return Object.assign(character,canDefend(character));
}

function createWizard(name) {
    const character = new Character(name,100,0);
    return Object.assign(character,canCastSpell(character));
}

function createWarior(name) {
    const character = new Character(name,100,0);
    return Object.assign(character,canAttack(character));
}

export {createMosnter,createGuardian,createWizard,createWarior};s