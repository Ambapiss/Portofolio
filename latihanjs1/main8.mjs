import { createMosnter,createGuardian,createWizard,createWarior } from "./main7.mjs";

const monster = createMosnter('Monster');
monster.canMove();
monster.attack();

const guardian = createGuardian('Guardian');
guardian.canMove();
guardian.defend();

const wizard = createWizard('Wizard');
wizard.canMove();
wizard.canSpell();

const warior = createWarior('Warior');
warior.canMove();
warior.attack();
warior.defend();    