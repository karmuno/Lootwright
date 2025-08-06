# Current Build Plan

This document outlines the immediate changes requested by the user.

## Task 1: Refine Currency Generation
- [x] Modify `generateCurrency` in `src/utils/treasureGenerator.ts` to implement a random ratio between pp, gp, sp, and cp, weighted based on player level.
- [ ] Ensure that currency types with a value of 0 are not displayed in the flavor text.
- [ ] Update flavor text to display the state of all coins, not just GP.

## Task 2: Populate Mundane Items from Player's Handbook
- [x] Locate Player's Handbook data in `/design` folder.
- [x] Modify `generateItems` in `src/utils/treasureGenerator.ts` to select actual mundane items.
