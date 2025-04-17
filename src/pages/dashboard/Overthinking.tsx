import { BrainCog, Zap, PauseCircle, Music, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Overthinking = () => {
  const navigate = useNavigate();

  const signs = [
    "Replaying conversations or scenarios in your head",
    "Struggling to make simple decisions",
    "Always imagining worst-case outcomes",
    "Feeling mentally drained or anxious",
    "Over-analyzing others’ actions or your own behavior",
  ];

  const tips = [
    "Practice mindful breathing or guided meditation",
    "Limit decision fatigue — simplify small choices",
    "Journal your thoughts for 5 minutes a day",
    "Use grounding techniques (5-4-3-2-1 method)",
    "Redirect overthinking with creative or calming activities",
  ];

  return (
    <div className="max-w-5xl mx-auto px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">
          Understanding Overthinking
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Overthinking is when your thoughts become stuck in a loop, making it
          hard to act, rest, or focus. It's common—and manageable.
        </p>
      </div>

      {/* Signs of Overthinking */}
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
        <div className="flex items-center mb-6">
          <BrainCog className="h-6 w-6 text-indigo-600 mr-2" />
          <h2 className="text-2xl font-semibold text-slate-800">
            Common Signs
          </h2>
        </div>
        <ul className="list-disc list-inside text-slate-600 space-y-2">
          {signs.map((sign, i) => (
            <li key={i}>{sign}</li>
          ))}
        </ul>
      </div>

      {/* Helpful Tips */}
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
        <div className="flex items-center mb-6">
          <Zap className="h-6 w-6 text-green-600 mr-2" />
          <h2 className="text-2xl font-semibold text-slate-800">
            How to Manage It
          </h2>
        </div>
        <ul className="list-disc list-inside text-slate-600 space-y-2">
          {tips.map((tip, i) => (
            <li key={i}>{tip}</li>
          ))}
        </ul>
      </div>

      {/* Tools Section */}
      <div className="mb-16">
        <h3 className="text-xl font-semibold text-slate-800 mb-4">
          Helpful Tools
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <button
            onClick={() => navigate("/dashboard/meditation")}
            className="flex items-center w-full bg-indigo-50 hover:bg-indigo-100 transition p-5 rounded-xl shadow"
          >
            <PauseCircle className="h-6 w-6 text-indigo-600 mr-3" />
            <div>
              <h4 className="font-semibold text-indigo-700">
                Guided Meditation
              </h4>
              <p className="text-sm text-slate-600">
                Calm the noise in your mind
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
                Relax with peaceful sounds
              </p>
            </div>
          </button>
          <button
            onClick={() => navigate("/dashboard/affirmations")}
            className="flex items-center w-full bg-pink-50 hover:bg-pink-100 transition p-5 rounded-xl shadow"
          >
            <Sparkles className="h-6 w-6 text-pink-600 mr-3" />
            <div>
              <h4 className="font-semibold text-pink-700">
                Daily Affirmations
              </h4>
              <p className="text-sm text-slate-600">
                Replace overthinking with positivity
              </p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Overthinking;
