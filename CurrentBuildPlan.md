# Current Build Plan

This document outlines the immediate changes requested by the user.

## Task 1: Refine Currency Generation
- [x] Modify `generateCurrency` in `src/utils/treasureGenerator.ts` to implement a random ratio between pp, gp, sp, and cp, weighted based on player level.
- [ ] Ensure that currency types with a value of 0 are not displayed in the flavor text.
- [ ] Update flavor text to display the state of all coins, not just GP.

## Task 2: Populate Mundane Items from Player's Handbook
- [x] Locate Player's Handbook data in `/design` folder.
- [x] Modify `generateItems` in `src/utils/treasureGenerator.ts` to select actual mundane items.

## Task 3: Make Types a Global Namespace
- [x] Refactored `src/types/index.ts` to define all interfaces within a `Types` namespace.
- [x] Removed redundant `src/types/TreasureTableEntry.ts`.
- [x] Updated `tsconfig.json` to include `src/types/index.ts` for global type recognition.
- [x] Renamed `src/types/index.ts` to `src/types/global.d.ts`.
- [x] Updated `tsconfig.app.json` and `tsconfig.node.json` to include `"composite": true`.
- [x] Updated `tsconfig.json` to include `src/types/global.d.ts` in the `include` array.
