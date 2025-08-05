import treasureTablesData from '../data/treasureTables.json';
import { TreasureTables } from '../types/index.ts';
import { TreasureTableEntry } from '../types/TreasureTableEntry.ts';

const treasureTables: Types.TreasureTables = treasureTablesData;

export function getTreasureValue(level: number, size: number): number {
  // Placeholder: Implement actual DMG-compliant gold piece value calculation
  // This will likely involve looking up values in treasureTables based on CR ranges
  // For now, a simplified calculation:
  return level * 100 * size;
}

export function getMagicItemRarityDistribution(level: number): { [rarity: string]: number } {
  // Placeholder: Implement actual DMG-compliant magic item rarity distribution
  // This will involve looking up percentages based on CR ranges
  if (level <= 4) {
    return { common: 0.8, uncommon: 0.2 };
  } else if (level <= 10) {
    return { common: 0.5, uncommon: 0.3, rare: 0.2 };
  } else if (level <= 16) {
    return { uncommon: 0.4, rare: 0.3, 'very rare': 0.2, legendary: 0.1 };
  } else {
    return { rare: 0.3, 'very rare': 0.4, legendary: 0.3 };
  }
}

export function getTreasureTable(cr_range: string): Types.TreasureTableEntry | undefined {
  // This function assumes cr_range matches keys in individual_treasure
  return treasureTables.individual_treasure[cr_range];
}
