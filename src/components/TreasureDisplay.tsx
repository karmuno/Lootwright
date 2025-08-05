import React from 'react';

interface TreasureDisplayProps {
  currency: {
    pp: number;
    gp: number;
    sp: number;
    cp: number;
    flavor: string;
  };
  items: { name: string; quantity: number; flavor: string }[];
  magicItems: { name: string; rarity: string; flavor: string }[];
}

const TreasureDisplay: React.FC<TreasureDisplayProps> = ({ currency, items, magicItems }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Generated Treasure</h2>

      {/* Currency */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">💰 Currency</h3>
        <p className="text-gray-700 dark:text-gray-300">
          {currency.gp} gold pieces, {currency.sp} silver pieces, {currency.cp} copper pieces
          {currency.pp > 0 && `, ${currency.pp} platinum pieces`}
        </p>
        <p className="text-gray-600 dark:text-gray-400 text-sm italic">{currency.flavor}</p>
      </div>

      {/* Mundane Items */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">🎒 Items</h3>
        {items.length > 0 ? (
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
            {items.map((item, index) => (
              <li key={index}>
                {item.name} ({item.quantity}x) - <span className="text-gray-600 dark:text-gray-400 text-sm italic">{item.flavor}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-700 dark:text-gray-300">No mundane items generated.</p>
        )}
      </div>

      {/* Magic Items */}
      <div>
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">🔮 Magic Items</h3>
        {magicItems.length > 0 ? (
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
            {magicItems.map((item, index) => (
              <li key={index}>
                {item.name} ({item.rarity}) - <span className="text-gray-600 dark:text-gray-400 text-sm italic">{item.flavor}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-700 dark:text-gray-300">No magic items generated.</p>
        )}
      </div>
    </div>
  );
};

export default TreasureDisplay;
