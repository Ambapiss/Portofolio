class Character {
    constructor(name,health,role) {
        this.name = name;
        this.health = health;
        this.role = role;
    }

    canMove() {
        console.log(`${this.name} moves to another position! `);
    }
}
export default Character;