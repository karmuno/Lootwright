export interface ContextRule {
  description: string;
  keywords: string[];
  distribution: {
    coinRatio: number;
    itemRatio: number;
    magicRatio: number;
  };
}

export interface ContextRules {
  contextTypes: {
    [key: string]: ContextRule;
  };
}

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

export interface MagicItem {
  name: string;
  rarity: string;
  type: string;
  description: string;
  // Add other properties as needed based on magicItems.json structure
}

export interface TreasureTableEntry {
  cr_range: string;
  currency: {
    cp?: string;
    sp?: string;
    gp?: string;
    pp?: string;
  };
  gems?: string[];
  art_objects?: string[];
  magic_items?: {
    rarity: string;
    roll: string;
  }[];
}

export interface TreasureTables {
  individual_treasure: {
    [key: string]: TreasureTableEntry;
  };
  // Add other treasure table types as needed
}