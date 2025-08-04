import { ContextRules, FlavorText, TreasureTables, MagicItem, TreasureTableEntry } from '../types';
import contextRulesData from '../data/contextRules.json';
import treasureTablesData from '../data/treasureTables.json';
import magicItemsData from '../data/magicItems.json';
import flavorTextData from '../data/flavorText.json';

const contextRules: ContextRules = contextRulesData;
const treasureTables: TreasureTables = treasureTablesData;
const magicItems: MagicItem[] = magicItemsData;
const flavorText: FlavorText = flavorTextData;

function getContextDistribution(context: string) {
  const lowerCaseContext = context.toLowerCase();
  for (const type in contextRules.contextTypes) {
    if (contextRules.contextTypes[type].keywords.some(keyword => lowerCaseContext.includes(keyword))) {
      return contextRules.contextTypes[type].distribution;
    }
  }
  return contextRules.contextTypes.generic.distribution;
}

function generateCurrency(baseValue: number) {
  // Placeholder for currency generation logic
  // This will involve distributing baseValue into cp, sp, gp, pp
  // and adding flavor text from flavorText.currency
  return {
    gold: Math.floor(baseValue * 0.8),
    silver: Math.floor(baseValue * 1.5),
    copper: Math.floor(baseValue * 2),
    flavor: "A mix of common coins."
  };
}

function generateItems(baseValue: number, context: string) {
  // Placeholder for mundane item generation logic
  // This will involve selecting items and adding flavor text from flavorText.mundaneItems
  return [
    { name: "Rope", quantity: 1, flavor: "A sturdy coil of hempen rope." },
    { name: "Torch", quantity: 3, flavor: "Three flickering torches." }
  ];
}

function generateMagicItems(level: number, magicRatio: number) {
  // Placeholder for magic item generation logic
  // This will involve selecting magic items based on level and magicRatio
  // and adding flavor text from flavorText.magicItems
  return [
    { name: "Potion of Healing", rarity: "common", flavor: "A small vial of crimson liquid." }
  ];
}

export function generateTreasure(level: number, size: number, context: string) {
  const baseValue = level * 100 * size; // Simplified base value calculation
  const distribution = getContextDistribution(context);

  const currency = generateCurrency(baseValue * distribution.coinRatio);
  const items = generateItems(baseValue * distribution.itemRatio, context);
  const magicItems = generateMagicItems(level, distribution.magicRatio);

  return {
    currency,
    items,
    magicItems,
  };
}
