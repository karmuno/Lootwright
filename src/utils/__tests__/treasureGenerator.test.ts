import { generateTreasure } from '../treasureGenerator';

describe('generateTreasure integration', () => {
  it('should generate treasure with expected structure for a generic context', () => {
    const level = 5;
    const size = 4;
    const context = 'a dusty old cave';

    const treasure = generateTreasure(level, size, context);

    expect(treasure).toHaveProperty('currency');
    expect(treasure).toHaveProperty('items');
    expect(treasure).toHaveProperty('magicItems');

    expect(treasure.currency).toHaveProperty('pp');
    expect(treasure.currency).toHaveProperty('gp');
    expect(treasure.currency).toHaveProperty('sp');
    expect(treasure.currency).toHaveProperty('cp');
    expect(treasure.currency).toHaveProperty('flavor');
    expect(typeof treasure.currency.flavor).toBe('string');

    expect(Array.isArray(treasure.items)).toBe(true);
    // Expect items to have name, quantity, and flavor
    if (treasure.items.length > 0) {
      expect(treasure.items[0]).toHaveProperty('name');
      expect(treasure.items[0]).toHaveProperty('quantity');
      expect(treasure.items[0]).toHaveProperty('flavor');
    }

    expect(Array.isArray(treasure.magicItems)).toBe(true);
    // Expect magic items to have name, rarity, and flavor
    if (treasure.magicItems.length > 0) {
      expect(treasure.magicItems[0]).toHaveProperty('name');
      expect(treasure.magicItems[0]).toHaveProperty('rarity');
      expect(treasure.magicItems[0]).toHaveProperty('flavor');
    }
  });

  it('should generate treasure with appropriate distribution based on context', () => {
    const level = 10;
    const size = 3;
    const humanoidContext = "bandit leader's hideout";
    const dragonContext = "ancient dragon's lair";

    const humanoidTreasure = generateTreasure(level, size, humanoidContext);
    const dragonTreasure = generateTreasure(level, size, dragonContext);

    // This is a simplified check. A more robust test would compare actual values
    // against expected ranges based on the contextRules.json distribution.
    // For now, we'll just check that they are not identical and have some values.
    expect(humanoidTreasure.currency.gp).toBeGreaterThan(0);
    expect(dragonTreasure.currency.gp).toBeGreaterThan(0);

    // Example of a more specific check (requires knowing the exact distribution logic)
    // For humanoid, expect more coins, for dragon, potentially more high-value magic items
    // This would require more detailed mock data or a more complex assertion.
    // For now, we'll just ensure they are different and plausible.
    expect(humanoidTreasure.currency.gp).not.toBe(dragonTreasure.currency.gp);
    expect(humanoidTreasure.items.length).not.toBe(dragonTreasure.items.length);
  });

  it('should scale treasure value with level and party size', () => {
    const level1 = 1;
    const size1 = 1;
    const level10 = 10;
    const size5 = 5;
    const context = 'generic dungeon';

    const treasure1 = generateTreasure(level1, size1, context);
    const treasure2 = generateTreasure(level10, size5, context);

    // Expect higher levels and sizes to result in more gold
    expect(treasure2.currency.gp).toBeGreaterThan(treasure1.currency.gp);
  });
});