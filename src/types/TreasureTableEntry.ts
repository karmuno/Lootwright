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

// Dummy runtime export to force Vite to include the interface definition
export const TreasureTableEntry: TreasureTableEntry = {} as TreasureTableEntry;
