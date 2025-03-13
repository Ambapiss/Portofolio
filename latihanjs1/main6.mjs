function canAttack(character) {
    return{
        attack: () => {
            console.log(`${character.name} attacks with a weapon!`);
        },
    };
}

function canDefend(character) {
    return{
        defend:()=>{
            console.log(`${character.name} defends with a shield!`);
        },
    };
}

function canCastSpell(character) {
    return{
        cancast: ()=> {
            console.log(`${character.name} casts a spell!`);
        },
    };
}

export {canAttack,canDefend,canCastSpell};