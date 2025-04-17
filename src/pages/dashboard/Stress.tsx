import { Brain, Flame, PauseCircle, Music, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Stress = () => {
  const navigate = useNavigate();

  const signs = [
    "Headaches, muscle tension, or fatigue",
    "Irritability or mood swings",
    "Feeling overwhelmed or restless",
    "Trouble sleeping or concentrating",
    "Increased heart rate or shallow breathing",
  ];

  const strategies = [
    "Practice deep breathing or body scanning",
    "Take short movement or nature breaks during the day",
    "Reduce multitasking — focus on one thing at a time",
    "Maintain a consistent sleep and meal routine",
    "Talk to someone — a friend, mentor, or counselor",
  ];

  return (
    <div className="max-w-5xl mx-auto px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">
          Managing Stress
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Stress is your body’s natural response to challenges. While it's
          normal, chronic stress can impact your health — physically and
          emotionally.
        </p>
      </div>

      {/* Signs of Stress */}
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
        <div className="flex items-center mb-6">
          <Flame className="h-6 w-6 text-red-600 mr-2" />
          <h2 className="text-2xl font-semibold text-slate-800">
            Common Signs of Stress
          </h2>
        </div>
        <ul className="list-disc list-inside text-slate-600 space-y-2">
          {signs.map((sign, i) => (
            <li key={i}>{sign}</li>
          ))}
        </ul>
      </div>

      {/* Coping Strategies */}
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
        <div className="flex items-center mb-6">
          <Brain className="h-6 w-6 text-green-600 mr-2" />
          <h2 className="text-2xl font-semibold text-slate-800">
            Healthy Coping Strategies
          </h2>
        </div>
        <ul className="list-disc list-inside text-slate-600 space-y-2">
          {strategies.map((tip, i) => (
            <li key={i}>{tip}</li>
          ))}
        </ul>
      </div>

      {/* Helpful Tools */}
      <div className="mb-16">
        <h3 className="text-xl font-semibold text-slate-800 mb-4">
          Recommended Tools
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <button
            onClick={() => navigate("/dashboard/meditation")}
            className="flex items-center w-full bg-indigo-50 hover:bg-indigo-100 transition p-5 rounded-xl shadow"
          >
            <PauseCircle className="h-6 w-6 text-indigo-600 mr-3" />
            <div>
              <h4 className="font-semibold text-indigo-700">Meditation</h4>
              <p className="text-sm text-slate-600">
                Regulate your nervous system
              </p>
            </div>
          </button>
          <button
            onClick={() => navigate("/dashboard/music-therapy")}
            className="flex items-center w-full bg-yellow-50 hover:bg-yellow-100 transition p-5 rounded-xl shadow"
          >
            <Music className="h-6 w-6 text-yellow-600 mr-3" />
            <div>
              <h4 className="font-semibold text-yellow-700">Music Therapy</h4>
              <p className="text-sm text-slate-600">
                Use sound to soothe your stress
              </p>
            </div>
          </button>
          <button
            onClick={() => navigate("/dashboard/affirmations")}
            className="flex items-center w-full bg-pink-50 hover:bg-pink-100 transition p-5 rounded-xl shadow"
          >
            <Sparkles className="h-6 w-6 text-pink-600 mr-3" />
            <div>
              <h4 className="font-semibold text-pink-700">Affirmations</h4>
              <p className="text-sm text-slate-600">
                Shift your mindset gently
              </p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stress;
