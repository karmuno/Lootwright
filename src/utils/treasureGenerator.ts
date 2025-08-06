import { ContextRules, FlavorText } from '../types/index.ts';
import * as contextRulesData from '../data/contextRules.json';
import * as magicItemsData from '../data/magicItems.json';
import * as flavorTextData from '../data/flavorText.json';
import * as mundaneItemsData from '../data/mundaneItems.json';
import { getRandomElement } from './randomUtils';
import { getMagicItemRarityDistribution } from './balanceCalculator';

const contextRules: ContextRules = contextRulesData;
const magicItems: any = magicItemsData;
const flavorText: FlavorText = flavorTextData;
const mundaneItems: string[] = (mundaneItemsData as any).default;

function getContextDistribution(context: string) {
  const lowerCaseContext = context.toLowerCase();
  for (const type in contextRules.contextTypes) {
    if (contextRules.contextTypes[type].keywords.some(keyword => lowerCaseContext.includes(keyword))) {
      return contextRules.contextTypes[type].distribution;
    }
  }
  return contextRules.contextTypes.generic.distribution;
}

function fixArticles(text: string): string {
    const words = text.split(' ');
    for (let i = 0; i < words.length - 1; i++) {
        const currentWord = words[i];
        const nextWord = words[i + 1];

        if (currentWord.toLowerCase() === 'a' || currentWord.toLowerCase() === 'an') {
            if (nextWord) {
                const firstChar = nextWord[0].toLowerCase();
                const startsWithVowel = ['a', 'e', 'i', 'o', 'u'].includes(firstChar);
                if (startsWithVowel) {
                    if (currentWord === 'a') words[i] = 'an';
                    if (currentWord === 'A') words[i] = 'An';
                } else {
                    if (currentWord === 'an') words[i] = 'a';
                    if (currentWord === 'An') words[i] = 'A';
                }
            }
        }
    }
    return words.join(' ');
}

function generateCurrency(baseValue: number, level: number) {
  let pp = 0;
  let gp = 0;
  let sp = 0;
  let cp = 0;

  // Define weights for coin distribution based on level
  // Higher levels should have a higher chance of platinum and gold
  let weights = { pp: 0, gp: 0.7, sp: 0.2, cp: 0.1 }; // Default for low levels

  if (level >= 5 && level < 11) {
    weights = { pp: 0.1, gp: 0.6, sp: 0.2, cp: 0.1 };
  } else if (level >= 11 && level < 17) {
    weights = { pp: 0.3, gp: 0.5, sp: 0.15, cp: 0.05 };
  } else if (level >= 17) {
    weights = { pp: 0.5, gp: 0.4, sp: 0.08, cp: 0.02 };
  }

  // Distribute value according to weights
  const ppValue = baseValue * weights.pp;
  const gpValue = baseValue * weights.gp;
  const spValue = baseValue * weights.sp;
  const cpValue = baseValue * weights.cp;

  pp = Math.floor(ppValue / 10);
  gp = Math.floor(gpValue);
  sp = Math.floor(spValue * 10);
  cp = Math.floor(cpValue * 100);

  // Account for rounding remainders
  const totalValue = pp * 10 + gp + sp / 10 + cp / 100;
  const remainder = baseValue - totalValue;
  cp += Math.round(remainder * 100);

  // Add randomness by exchanging coins
  // Exchange some GP for SP
  if (gp > 1) {
    const gpToExchange = Math.floor(Math.random() * (gp - 1));
    gp -= gpToExchange;
    sp += gpToExchange * 10;
  }

  // Exchange some SP for CP
  if (sp > 1) {
    const spToExchange = Math.floor(Math.random() * (sp - 1));
    sp -= spToExchange;
    cp += spToExchange * 10;
  }

  // Exchange some SP for GP
  if (sp >= 10) {
    const spToExchange = Math.floor(Math.random() * Math.floor(sp / 10)) * 10;
    sp -= spToExchange;
    gp += spToExchange / 10;
  }

  // Exchange some CP for SP
  if (cp >= 10) {
    const cpToExchange = Math.floor(Math.random() * Math.floor(cp / 10)) * 10;
    cp -= cpToExchange;
    sp += cpToExchange / 10;
  }

  // Ensure no negative values and round to nearest integer
  pp = Math.max(0, Math.round(pp));
  gp = Math.max(0, Math.round(gp));
  sp = Math.max(0, Math.round(sp));
  cp = Math.max(0, Math.round(cp));

  const currencyParts: string[] = [];
  if (pp > 0) currencyParts.push(`${pp} platinum`);
  if (gp > 0) currencyParts.push(`${gp} gold`);
  if (sp > 0) currencyParts.push(`${sp} silver`);
  if (cp > 0) currencyParts.push(`${cp} copper`);

  let flavor = '';
  if (currencyParts.length > 0) {
    const currencyTemplate = getRandomElement(flavorText.currency.templates);
    const kingdomEra = getRandomElement(flavorText.currency.kingdom_era);
    const contextDescriptor = getRandomElement(flavorText.currency.context_descriptor);

    flavor = fixArticles(currencyTemplate
      .replace('{amount}', currencyParts.join(', '))
      .replace('{currency_type}', '') // Not used with multiple types
      .replace('{kingdom_era}', kingdomEra)
      .replace('{context_descriptor}', contextDescriptor));
  } else {
    flavor = 'No coins found.';
  }

  return {
    pp,
    gp,
    sp,
    cp,
    flavor,
  };
}

function generateItems() {
  const items: { name: string; quantity: number; flavor: string }[] = [];
  const numItems = Math.floor(Math.random() * 3) + 1; // Generate 1 to 3 items

  for (let i = 0; i < numItems; i++) {
    const itemType = getRandomElement(mundaneItems); // Select a random mundane item
    const template = getRandomElement(flavorText.mundaneItems.templates);
    const quality = getRandomElement(flavorText.mundaneItems.quality);
    const material = getRandomElement(flavorText.mundaneItems.material);
    const partDescriptor = getRandomElement(flavorText.mundaneItems.part_descriptor);
    const culturalOrigin = getRandomElement(flavorText.mundaneItems.cultural_origin);
    const wearTear = getRandomElement(flavorText.mundaneItems.wear_tear);
    const ageDescriptor = getRandomElement(flavorText.mundaneItems.age_descriptor);

    const flavor = fixArticles(template
      .replace('{item_type}', itemType)
      .replace('{quality}', quality)
      .replace('{material}', material)
      .replace('{part_descriptor}', partDescriptor)
      .replace('{cultural_origin}', culturalOrigin)
      .replace('{wear_tear}', wearTear)
      .replace('{age_descriptor}', ageDescriptor));

    items.push({
      name: itemType,
      quantity: Math.floor(Math.random() * 5) + 1, // Random quantity for now
      flavor,
    });
  }

  return items;
}

function generateMagicItems(level: number, magicRatio: number) {
  const generatedMagicItems: { name: string; rarity: string; flavor: string }[] = [];
  const rarityDistribution = getMagicItemRarityDistribution(level);

  // Determine how many magic items to generate based on magicRatio
  // For simplicity, let's say magicRatio influences the chance of getting an item
  // and we try to generate up to 2 magic items.
  const numMagicItemsToAttempt = Math.floor(magicRatio * 3); // Adjust multiplier as needed

  for (let i = 0; i < numMagicItemsToAttempt; i++) {
    let selectedRarity: string | undefined;
    const rarityRoll = Math.random();
    let cumulativeProbability = 0;

    // Select rarity based on distribution
    for (const rarity in rarityDistribution) {
      cumulativeProbability += rarityDistribution[rarity];
      if (rarityRoll <= cumulativeProbability) {
        selectedRarity = rarity;
        break;
      }
    }

    if (selectedRarity) {
      const availableItems = magicItems[selectedRarity];
      if (availableItems && availableItems.length > 0) {
        const chosenItem: any = getRandomElement(availableItems);

        const template = getRandomElement(flavorText.magicItems.templates);
        const creationStoryVerb = getRandomElement(flavorText.magicItems.creation_story_verb);
        const creatorType = getRandomElement(flavorText.magicItems.creator_type);
        const historicalEvent = getRandomElement(flavorText.magicItems.historical_event);
        const previousOwnerArchetype = getRandomElement(flavorText.magicItems.previous_owner_archetype);
        const quirkDescriptor = getRandomElement(flavorText.magicItems.quirk_descriptor);
        const creationLocation = getRandomElement(flavorText.magicItems.creation_location);
        const activationQuirk = getRandomElement(flavorText.magicItems.activation_quirk);

        const flavor = template
          .replace('{item_name}', chosenItem.name)
          .replace('{rarity}', chosenItem.rarity)
          .replace('{item_type}', chosenItem.type)
          .replace('{creation_story_verb}', creationStoryVerb)
          .replace('{creator_type}', creatorType)
          .replace('{historical_event}', historicalEvent)
          .replace('{previous_owner_archetype}', previousOwnerArchetype)
          .replace('{quirk_descriptor}', quirkDescriptor)
          .replace('{creation_location}', creationLocation)
          .replace('{activation_quirk}', activationQuirk);

        generatedMagicItems.push({
          name: chosenItem.name,
          rarity: chosenItem.rarity,
          flavor,
        });
      }
    }
  }

  return generatedMagicItems;
}

export function generateTreasure(level: number, size: number, context: string) {
  const baseValue = level * 100 * size; // Simplified base value calculation
  const distribution = getContextDistribution(context);

  const currency = generateCurrency(baseValue * distribution.coinRatio, level);
  const items = generateItems();
  const magicItems = generateMagicItems(level, distribution.magicRatio);

  return {
    currency,
    items,
    magicItems,
  };
}