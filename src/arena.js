// src/arena.js
const Player = require('./player');

class Arena {
    constructor(playerA, playerB) {
        this.playerA = playerA;
        this.playerB = playerB;
    }

    rollDice() {
        return Math.floor(Math.random() * 6) + 1; // Random number between 1 and 6
    }

    startMatch() {
        let attacker = this.playerA.health < this.playerB.health ? this.playerA : this.playerB;
        let defender = this.playerA.health < this.playerB.health ? this.playerB : this.playerA;

        while (attacker.isAlive() && defender.isAlive()) {
            this.fightRound(attacker, defender);
            [attacker, defender] = [defender, attacker]; // Switch roles
        }

        return attacker.isAlive() ? "Attacker Wins!" : "Defender Wins!";
    }

    fightRound(attacker, defender) {
        const attackRoll = this.rollDice();
        const defendRoll = this.rollDice();

        const damageDealt = attacker.attackOpponent(attackRoll);
        const damageDefended = defender.defend(defendRoll);
        const damageTaken = Math.max(0, damageDealt - damageDefended);

        defender.receiveDamage(damageTaken);

        console.log(`Attacker dealt ${damageDealt}, Defender defended ${damageDefended}. Defender Health: ${defender.health}.`);
    }
}

module.exports = Arena;