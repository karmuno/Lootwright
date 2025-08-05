# Data Schema Guide

This document outlines the structure and purpose of the JSON data files located in the `src/data/` directory.

## `contextRules.json`

This file defines the rules for how the loot generation should be influenced by the user-provided context string.

-   **`contextTypes`**: An object where each key is a context type (e.g., `humanoid`, `undead`).
    -   **`description`**: A string describing the context type.
    -   **`keywords`**: An array of strings used to match the user's input to a context type.
    -   **`distribution`**: An object that defines the ratio of different loot types.
        -   `coinRatio`: The percentage of the total treasure value that should be coins.
        -   `itemRatio`: The percentage of the total treasure value that should be mundane items.
        -   `magicRatio`: The percentage of the total treasure value that should be magic items.

**Example:**
```json
"humanoid": {
  "description": "Higher coin ratios, practical gear, weapons",
  "keywords": ["bandit", "captain", "chief"],
  "distribution": {
    "coinRatio": 0.6,
    "itemRatio": 0.3,
    "magicRatio": 0.1
  }
}
```

---

## `flavorText.json`

This file contains templates and word lists for generating descriptive flavor text for items.

-   Each top-level key (`currency`, `mundaneItems`, `magicItems`) corresponds to a category of item.
-   **`templates`**: An array of string templates with placeholders (e.g., `{amount}`, `{item_type}`).
-   Other keys (e.g., `kingdom_era`, `quality`) are arrays of strings that are used to fill the placeholders in the templates.

**Example:**
```json
"currency": {
  "templates": [
    "A small pouch containing {amount} {currency_type} coins."
  ],
  "kingdom_era": [
    "a forgotten kingdom"
  ]
}
```

---

## `magicItems.json`

This file is a database of magic items, categorized by theme and rarity.

-   The top-level keys (`arcana`, `armaments`, `implements`, `relics`) represent different themes of magic items.
-   Within each theme, there are keys for each rarity (`common`, `uncommon`, `rare`, `veryRare`, `legendary`).
-   Each rarity key holds an array of strings, where each string is the name of a magic item.

**Example:**
```json
"arcana": {
  "common": [
    "Bead of Nourishment",
    "Candle of the Deep"
  ]
}
```

---

## `mundaneItems.json`

This file is a simple list of non-magical items.

-   The file is a single JSON array of strings, where each string is the name of a mundane item.

**Example:**
```json
[
  "Acid",
  "Alchemist's Fire"
]
```

---

## `treasureTables.json`

This file contains the rules for determining the amount of treasure and magic items based on the party's level, following the D&D 5e DMG.

-   **`treasureHoard`**: An object that defines the treasure for different challenge rating (CR) ranges.
    -   Each key (e.g., `"0-4"`) represents a CR range.
    -   `gp`: A string in dice notation (e.g., `"2d4*100"`) that determines the amount of gold pieces.
    -   `magicItems`: A string in dice notation that determines the number of magic items.
-   **`magicItemRolls`**: An object that defines how to determine the rarity of magic items.
    -   `themes`: An array of the available magic item themes.
    -   `rarityRolls`: An object where each key is a rarity and the value is the dice roll needed to obtain an item of that rarity.

**Example:**
```json
"treasureHoard": {
  "0-4": {
    "gp": "2d4*100",
    "magicItems": "1d4-1"
  }
}
```
