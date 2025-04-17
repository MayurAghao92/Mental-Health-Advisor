import { BookOpen, RefreshCw } from "lucide-react";
import { useState } from "react";
import {  fullShlokas } from "../../utils/Shlokas";

// Utility function to pick N random items from an array
const getRandomItems = <T,>(array: T[], count: number): T[] => {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const Shlokas = () => {
  const [shlokas, setShlokas] = useState(() => getRandomItems(fullShlokas, 3));
  
  const refreshContent = () => {
    setShlokas(getRandomItems(fullShlokas, 7));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">
          Daily Shlokas & Affirmations
        </h1>
        <p className="text-xl text-slate-600">
          Ancient wisdom for modern peace
        </p>
      </div>

      <div className="grid gap-8">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-slate-800">
              Sanskrit Shlokas
            </h2>
            <button
              onClick={refreshContent}
              className="p-2 hover:bg-slate-100 rounded-full transition"
            >
              <RefreshCw className="h-5 w-5 text-slate-600" />
            </button>
          </div>

          <div className="space-y-8">
            {shlokas.map((shloka, index) => (
              <div
                key={index}
                className="border border-slate-200 rounded-xl p-6"
              >
                <div className="flex items-start mb-4">
                  <div className="p-2 bg-indigo-50 rounded-lg mr-4">
                    <BookOpen className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div>
                    <span className="text-sm text-indigo-600 font-medium">
                      {shloka.category}
                    </span>
                    <h3 className="text-xl font-semibold text-slate-800 mt-1">
                      {shloka.text}
                    </h3>
                  </div>
                </div>
                <p className="text-lg text-slate-700 mb-3">
                  {shloka.translation}
                </p>
                <p className="text-slate-600">{shloka.meaning}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shlokas;
