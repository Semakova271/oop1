import Character from '../character.js';
import Bowman from '../bowman.js';
import Swordsman from '../swordsman.js';
import Magician from '../magician.js';
import Undead from '../undead.js';
import Zombie from '../zombie.js';
import Daemon from '../daemon.js';

describe('Character and subclasses tests', () => {
  describe('Character class', () => {
    test('should create a character with valid name and type', () => {
      const character = new Character('John', 'Bowman');
      expect(character.name).toBe('John');
      expect(character.type).toBe('Bowman');
      expect(character.health).toBe(100);
      expect(character.level).toBe(1);
    });

    test('should throw error for invalid name - too short', () => {
      expect(() => new Character('J', 'Bowman')).toThrow('Invalid name. Name must be a string of 2 to 10 characters.');
    });

    test('should throw error for invalid name - too long', () => {
      expect(() => new Character('JonathanTheGreat', 'Bowman')).toThrow('Invalid name. Name must be a string of 2 to 10 characters.');
    });

    test('should throw error for invalid type', () => {
      expect(() => new Character('John', 'InvalidType')).toThrow('Invalid type. Type must be one of: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
    });
  });

  describe('Subclasses', () => {
    test('Bowman should have correct properties', () => {
      const bowman = new Bowman('Robin');
      expect(bowman.name).toBe('Robin');
      expect(bowman.type).toBe('Bowman');
      expect(bowman.attack).toBe(25);
      expect(bowman.defence).toBe(25);
      expect(bowman.health).toBe(100);
      expect(bowman.level).toBe(1);
    });

    test('Swordsman should have correct properties', () => {
      const swordsman = new Swordsman('Arthur');
      expect(swordsman.name).toBe('Arthur');
      expect(swordsman.type).toBe('Swordsman');
      expect(swordsman.attack).toBe(40);
      expect(swordsman.defence).toBe(10);
      expect(swordsman.health).toBe(100);
      expect(swordsman.level).toBe(1);
    });

    test('Magician should have correct properties', () => {
      const magician = new Magician('Merlin');
      expect(magician.name).toBe('Merlin');
      expect(magician.type).toBe('Magician');
      expect(magician.attack).toBe(10);
      expect(magician.defence).toBe(40);
      expect(magician.health).toBe(100);
      expect(magician.level).toBe(1);
    });

    test('Undead should have correct properties', () => {
      const undead = new Undead('Dracula');
      expect(undead.name).toBe('Dracula');
      expect(undead.type).toBe('Undead');
      expect(undead.attack).toBe(25);
      expect(undead.defence).toBe(25);
      expect(undead.health).toBe(100);
      expect(undead.level).toBe(1);
    });

    test('Zombie should have correct properties', () => {
      const zombie = new Zombie('Walker');
      expect(zombie.name).toBe('Walker');
      expect(zombie.type).toBe('Zombie');
      expect(zombie.attack).toBe(40);
      expect(zombie.defence).toBe(10);
      expect(zombie.health).toBe(100);
      expect(zombie.level).toBe(1);
    });

    test('Daemon should have correct properties', () => {
      const daemon = new Daemon('Azazel');
      expect(daemon.name).toBe('Azazel');
      expect(daemon.type).toBe('Daemon');
      expect(daemon.attack).toBe(10);
      expect(daemon.defence).toBe(40);
      expect(daemon.health).toBe(100);
      expect(daemon.level).toBe(1);
    });
  });
});
