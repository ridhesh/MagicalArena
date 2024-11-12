// src/player.js
class Player {
    constructor(health, strength, attack) {
        this.health = health;
        this.strength = strength;
        this.attack = attack;
    }

    isAlive() {
        return this.health > 0;
    }

    receiveDamage(damage) {
        this.health = Math.max(0, this.health - damage);
    }

    attackOpponent(diceRoll) {
        return this.attack * diceRoll;
    }

    defend(diceRoll) {
        return this.strength * diceRoll;
    }
}

module.exports = Player;