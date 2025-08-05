export interface ContextRule {
  description: string;
  keywords: string[];
  distribution: {
    coinRatio: number;
    itemRatio: number;
    magicRatio: number;
  };
}

// Dummy runtime export to force Vite to include the interface definition
export const ContextRule: ContextRule = {} as ContextRule;

export interface ContextRules {
  contextTypes: {
    [key: string]: ContextRule;
  };
}

// Dummy runtime export to force Vite to include the interface definition
export const ContextRules: ContextRules = {} as ContextRules;

export interface FlavorText {
  currency: {
    templates: string[];
    kingdom_era: string[];
    context_descriptor: string[];
  };
  mundaneItems: {
    templates: string[];
    quality: string[];
    material: string[];
    part_descriptor: string[];
    cultural_origin: string[];
    wear_tear: string[];
    age_descriptor: string[];
  };
  magicItems: {
    templates: string[];
    rarity: string[];
    creation_story_verb: string[];
    creator_type: string[];
    historical_event: string[];
    previous_owner_archetype: string[];
    quirk_descriptor: string[];
    creation_location: string[];
    activation_quirk: string[];
  };
}

// Dummy runtime export to force Vite to include the interface definition
export const FlavorText: FlavorText = {} as FlavorText;

export interface MagicItem {
  name: string;
  rarity: string;
  type: string;
  description: string;
  // Add other properties as needed based on magicItems.json structure
}

// Dummy runtime export to force Vite to include the interface definition
export const MagicItem: MagicItem = {} as MagicItem;

export interface TreasureTables {
  individual_treasure: {
    [key: string]: any; // Will be TreasureTableEntry after import fix
  };
  // Add other treasure table types as needed
}

// Dummy runtime export to force Vite to include the interface definition
export const TreasureTables: TreasureTables = {} as TreasureTables;

// Dummy export to ensure this file is treated as a module with runtime content by Vite
export const __dummy = true;

export * from './TreasureTableEntry';