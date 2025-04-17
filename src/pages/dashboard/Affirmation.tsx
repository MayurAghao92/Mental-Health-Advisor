import { fullAffirmations } from "../../utils/Shlokas";

const Affirmations = () => {
    // Utility function to pick N random items from an array
const getRandomItems = <T,>(array: T[], count: number): T[] => {
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };
  const affirmations = getRandomItems(fullAffirmations,10);
    return (
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Daily Affirmations</h1>
          <p className="text-xl text-slate-600">Nourish your mind with positive thoughts</p>
        </div>
  
        <div className="grid md:grid-cols-2 gap-6">
          {affirmations.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-indigo-500 to-purple-500 text-white p-6 rounded-xl shadow-md"
            >
              <span className="text-sm opacity-80 mb-2 block">{item.category}</span>
              <p className="text-lg font-medium">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Affirmations;