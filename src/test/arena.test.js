// src/test/arena.test.js
const Player = require('../player'); // Adjust path to player.js
const Arena = require('../arena');   // Adjust path to arena.js

describe('Magical Arena Tests', () => {
    test('Player should take damage', () => {
        const player = new Player(50, 5, 10);
        player.receiveDamage(30);
        expect(player.health).toBe(20);
    });

    test('Players can attack and defend', () => {
        const attacker = new Player(50, 5, 10);
        const defender = new Player(50, 10, 5);
        const damage = attacker.attackOpponent(5); // Assume attacker rolled a 5
        const defend = defender.defend(2); // Assume defender rolled a 2

        expect(damage).toBe(50);
        expect(defend).toBe(20);
    });

    test('Arena can determine the winner', () => {
        const playerA = new Player(50, 5, 10);
        const playerB = new Player(10, 10, 5);
        const arena = new Arena(playerA, playerB);
        
        const result = arena.startMatch();
        expect(result).toMatch(/Wins!/);
    });
});