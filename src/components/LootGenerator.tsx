import React, { useState } from 'react';

interface LootGeneratorProps {
  onGenerate: (level: number, size: number, context: string) => void;
}

const LootGenerator: React.FC<LootGeneratorProps> = ({ onGenerate }) => {
  const [partyLevel, setPartyLevel] = useState<number>(1);
  const [partySize, setPartySize] = useState<number>(1);
  const [context, setContext] = useState<string>('');

  const handleGenerate = () => {
    onGenerate(partyLevel, partySize, context);
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Generate Loot</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="partyLevel" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Party Level</label>
          <select
            id="partyLevel"
            name="partyLevel"
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
            value={partyLevel}
            onChange={(e) => setPartyLevel(Number(e.target.value))}
          >
            {[...Array(20)].map((_, i) => (
              <option key={i + 1} value={i + 1}>{i + 1}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="partySize" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Party Size</label>
          <select
            id="partySize"
            name="partySize"
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
            value={partySize}
            onChange={(e) => setPartySize(Number(e.target.value))}
          >
            {[...Array(8)].map((_, i) => (
              <option key={i + 1} value={i + 1}>{i + 1}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="mb-6">
        <label htmlFor="context" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Context (e.g., "bandit captain's chest")</label>
        <input
          type="text"
          id="context"
          name="context"
          className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
          value={context}
          onChange={(e) => setContext(e.target.value)}
          placeholder="e.g., 'dragon's hoard', 'goblin cave'"
        />
      </div>
      <button
        type="button"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-indigo-700 dark:hover:bg-indigo-600"
        onClick={handleGenerate}
      >
        GENERATE LOOT
      </button>
    </div>
  );
};

export default LootGenerator;
