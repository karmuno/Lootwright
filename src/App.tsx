import React, { useState } from 'react';
import './App.css';
import LootGenerator from './components/LootGenerator';
import TreasureDisplay from './components/TreasureDisplay';
import { generateTreasure } from './utils/treasureGenerator';

function App() {
  const [treasure, setTreasure] = useState<any>(null); // Use a more specific type later

  const handleGenerateLoot = (level: number, size: number, context: string) => {
    const generated = generateTreasure(level, size, context);
    setTreasure(generated);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <header className="bg-white dark:bg-gray-800 shadow-md">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-center">Lootwright</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <LootGenerator onGenerate={handleGenerateLoot} />
          {treasure && <TreasureDisplay {...treasure} />}
        </div>
      </main>
      <footer className="bg-white dark:bg-gray-800 mt-8">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 dark:text-gray-400">© 2025 Lootwright. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;