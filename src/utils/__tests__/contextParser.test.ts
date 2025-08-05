import { classifyContext } from '../contextParser';

describe('classifyContext', () => {
  it('should correctly classify humanoid contexts', () => {
    expect(classifyContext("bandit captain's chest")).toBe('humanoid');
    expect(classifyContext('orc camp')).toBe('humanoid');
  });

  it('should correctly classify undead contexts', () => {
    expect(classifyContext("lich's lair")).toBe('undead');
    expect(classifyContext('zombie horde')).toBe('undead');
  });

  it('should correctly classify dragon contexts', () => {
    expect(classifyContext("dragon's hoard")).toBe('dragon');
    expect(classifyContext("ancient wyrm's den")).toBe('dragon');
  });

  it('should correctly classify religious contexts', () => {
    expect(classifyContext('temple ruins')).toBe('religious');
    expect(classifyContext("priest's quarters")).toBe('religious');
  });

  it('should correctly classify wilderness contexts', () => {
    expect(classifyContext('cave entrance')).toBe('wilderness');
    expect(classifyContext('forest clearing')).toBe('wilderness');
  });

  it('should return generic for unrecognized contexts', () => {
    expect(classifyContext('random barrel')).toBe('generic');
    expect(classifyContext('unknown location')).toBe('generic');
  });

  it('should be case-insensitive', () => {
    expect(classifyContext('Bandit')).toBe('humanoid');
    expect(classifyContext('DRAGON')).toBe('dragon');
  });
});