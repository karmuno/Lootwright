# **Lootwright: Intelligent Loot Generator for TTRPGs**

## **Design Document v1.0**

---

## **Executive Summary**

Lootwright is an intelligent treasure generation tool designed for Tabletop RPG Game Masters who need quick, balanced, and flavorful loot on-the-fly. When players go "off the map" or GMs need low-prep solutions, Lootwright generates contextually appropriate treasure parcels that feel authentic to the world while maintaining mechanical balance according to D\&D 5e guidelines.

---

## **Problem Statement**

**Primary Pain Points:**

* Treasure generation is time-consuming during live sessions  
* Generic random tables produce bland, disconnected loot  
* Balancing treasure value across party levels requires DMG consultation  
* Magic items lack personality and world connection

**Target User:** GMs running low-prep sessions who need immediate, balanced treasure that feels integrated into their world.

---

## **Product Vision**

### **Core Value Proposition**

"Generate balanced, flavorful treasure in seconds that feels like it belongs in your world."

### **Key Principles**

1. **Speed First:** Generate complete treasure parcels in under 3 seconds  
2. **Contextual Intelligence:** Adapt loot composition based on source context  
3. **Progressive Disclosure:** Simple by default, detailed on demand  
4. **DMG Compliance:** Strict adherence to D\&D 5e treasure balance guidelines

---

## **User Experience Design**

### **Input Interface**

**Simple Form Layout:**

Party Level: \[Dropdown: 1-20\]  
Party Size: \[Dropdown: 1-8\]  
Context: \[Text field: "bandit captain's chest"\]  
\[GENERATE LOOT\] button

### **Output Structure**

**Generated Treasure Display:**

💰 Currency  
\- 245 gold pieces  
\- 12 silver pieces    
\- Ancient coins bearing the symbol of a forgotten kingdom ↗️

🎒 Items  
\- Potion of Healing (2x)  
\- Masterwork dagger with obsidian grip ↗️  
\- Scroll of Magic Missile ↗️

🔮 Magic Items    
\- Ring of Protection (+1 AC, \+1 saves) ↗️  
  "Forged by the court mage of Valenhall before its fall"

**Expandable Details (↗️ click):**

* Currency: Historical context, mint origins, unusual denominations  
* Items: Craftsmanship details, previous owners, minor quirks  
* Magic Items: Creation story, previous wielders, activation quirks

---

## **Functional Requirements**

### **Core Generation Engine**

**Input Processing:**

* Parse context strings for treasure source type  
* Map party level to appropriate DMG treasure tables  
* Adjust for party size scaling

**Context Recognition:**

* **Humanoid Enemies:** Higher coin ratios, practical gear, weapons  
* **Undead/Constructs:** Magical components, ancient items, minimal coins  
* **Dragons/Hoards:** Massive coin quantities, high-value art, legendary items  
* **Religious Sites:** Holy symbols, blessed items, tithing coins  
* **Wilderness/Natural:** Survival gear, natural components, minimal currency

**Balance Compliance:**

* Implement DMG treasure tables (CR 0-4, 5-10, 11-16, 17+)  
* Calculate appropriate gold piece values by level  
* Distribute magic item rarities per DMG percentages  
* Scale total value for party size

### **Content Generation**

**Currency System:**

* Generate appropriate coin mixes (cp/sp/gp/pp)  
* Create contextual flavor for unusual denominations  
* Add historical details for ancient/foreign coins

**Magic Item Creation:**

* Pull from SRD magic item list for mechanical accuracy  
* Generate unique historical backstories  
* Create minor cosmetic variations  
* Add activation quirks and previous owner details

**Mundane Item Enhancement:**

* Transform basic items into interesting variants  
* Add craftsmanship quality descriptors  
* Include cultural/regional styling details

---

## **Technical Architecture**

### **Technology Stack**

**Frontend:** React with TypeScript **Styling:** Tailwind CSS **Data:** Static JSON files for item databases **State:** React hooks (no external storage required)

### **Core Components**

src/  
├── components/  
│   ├── LootGenerator.tsx     \# Main form interface  
│   ├── TreasureDisplay.tsx   \# Output formatting  
│   ├── ExpandableItem.tsx    \# Detail disclosure  
│   └── BalanceIndicator.tsx  \# DMG compliance display  
├── data/  
│   ├── treasureTables.json   \# DMG treasure guidelines  
│   ├── magicItems.json       \# SRD magic item database  
│   ├── contextRules.json     \# Source type behavior rules  
│   └── flavorText.json       \# Descriptive text fragments  
├── utils/  
│   ├── treasureGenerator.js  \# Core generation logic  
│   ├── contextParser.js      \# Input interpretation  
│   └── balanceCalculator.js  \# DMG compliance engine  
└── App.tsx

### **Key Algorithms**

**Context Classification:**

function classifyContext(contextString) {  
  const patterns \= {  
    humanoid: /bandit|captain|chief|warrior|guard/i,  
    undead: /lich|skeleton|zombie|wraith|tomb/i,  
    dragon: /dragon|hoard|lair/i,  
    religious: /temple|shrine|altar|priest/i,  
    wilderness: /cave|forest|ruins|ancient/i  
  };  
  // Return matched category or 'generic'  
}

**Treasure Distribution:**

function generateTreasure(level, size, context) {  
  const baseValue \= getTreasureValue(level, size);  
  const distribution \= getContextDistribution(context);  
    
  return {  
    currency: generateCurrency(baseValue \* distribution.coinRatio),  
    items: generateItems(baseValue \* distribution.itemRatio, context),  
    magicItems: generateMagicItems(level, distribution.magicRatio)  
  };  
}

---

## **Content Strategy**

### **Flavor Text Generation**

**Modular System:**

* Base templates by item type  
* Context-specific descriptors  
* Historical period variations  
* Cultural styling options

**Example Template:**

"This {item\_type} bears the {quality\_descriptor} of {cultural\_origin},   
likely crafted {time\_period} by {artisan\_type}."

### **Magic Item Backstories**

**Story Elements:**

* Previous owner archetype (hero, villain, scholar, etc.)  
* Historical event connection  
* Creation circumstances  
* Minor personality quirks

**Expansion Depth Levels:**

1. **Basic:** Single sentence description  
2. **Standard:** Paragraph with history and quirks  
3. **Detailed:** Full backstory with adventure hooks

---

## **Success Metrics**

### **Portfolio Demonstration Goals**

* **Speed:** Sub-3-second generation time  
* **Variety:** No duplicate outputs in 50 consecutive generations  
* **Balance:** 100% DMG compliance verification  
* **Engagement:** Average session time \>5 minutes (indicates exploration)

### **User Experience Indicators**

* Click-through rate on expandable details  
* Context variety in user inputs  
* Return usage patterns

---

## **Implementation Phases**

### **Phase 1: MVP (Portfolio Ready)**

**Duration:** 2-3 weeks

* Basic generation engine  
* Simple UI with core functionality  
* DMG-compliant treasure tables  
* Context recognition for 5 major categories  
* Expandable flavor text system

### **Phase 2: Enhanced Content (Future)**

* Expanded context recognition (20+ categories)  
* Deeper flavor text variety  
* Visual item representations  
* Export functionality

### **Phase 3: Advanced Features (Future)**

* Campaign-specific customization  
* GM preference learning  
* Adventure hook integration  
* Multi-system support

---

## **Risk Assessment**

### **Technical Risks**

* **Performance:** Large item databases may impact load times  
  * *Mitigation:* Lazy loading, data chunking  
* **Randomness Quality:** Repetitive outputs reduce perceived intelligence  
  * *Mitigation:* Weighted randomization, anti-repeat algorithms

### **Design Risks**

* **Complexity Creep:** Feature requests may compromise simplicity  
  * *Mitigation:* Strict scope adherence, progressive disclosure  
* **Balance Accuracy:** Misinterpreting DMG guidelines  
  * *Mitigation:* DMG reference verification, playtester feedback

---

## **Conclusion**

Lootwright addresses a genuine pain point in the TTRPG community while demonstrating technical proficiency in React development, algorithm design, and user experience thinking. The focused scope ensures deliverability while the extensible architecture shows scalability planning.

The tool's success will be measured not just by its technical execution, but by its ability to make GMs feel supported and empowered to create memorable gaming moments with minimal preparation time.

