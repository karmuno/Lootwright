export interface Currency {
  name: string;
  amount: number;
  flavor?: string;
}

export interface Item {
  name: string;
  quantity: number;
  description?: string;
  flavor?: string;
}

export interface Treasure {
  currency: Currency[];
  items: Item[];
  magicItems: MagicItem[];
}

export interface TreasureTableRow {
  crRange: [number, number];
  gold: [number, number];
  gems: [number, number];
  magicItems: {
    common: number;
    uncommon: number;
    rare: number;
    veryRare: number;
    legendary: number;
  };
}

export interface TreasureTable {
  [key: string]: TreasureTableRow[];
}

export interface ContextRule {
  context: string;
  coinRatio: number;
  itemRatio: number;
  magicRatio: number;
}

export interface FlavorText {
  item: {
    templates: string[];
    descriptors: string[];
    origins: string[];
    timePeriods: string[];
    artisans: string[];
  };
  magicItem: {
    templates: string[];
    ownerArchetypes: string[];
    historicalEvents: string[];
    creationCircumstances: string[];
    quirks: string[];
  };
}
