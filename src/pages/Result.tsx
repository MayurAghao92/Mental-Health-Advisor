import { Brain } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { recommendations } from "../utils/Result";

interface LocationState {
  answers: number[];
  score: number;
}

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { score = 5 } = (location.state as LocationState) || {};

  const getAssessmentState = (score: number) => {
    if (score <= 3) return "critical";
    if (score <= 5) return "concerning";
    if (score <= 7) return "moderate";
    return "good";
  };

  const state = getAssessmentState(score);

  const result = recommendations[state];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
        <div className={`${result.color} p-4 rounded-xl mb-6`}>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Your Wellness Score</h3>
            <div className="text-4xl font-bold mb-2">{score}/10</div>
          </div>
        </div>

        <h2 className="text-3xl font-semibold text-slate-800 mb-6">
          {result.title}
        </h2>
        <p className="text-lg text-slate-600 mb-8">{result.description}</p>

        {result.issues.length > 0 && (
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-slate-700 mb-2">
              You might be experiencing:
            </h4>
            <ul className="list-disc list-inside text-slate-600 space-y-1">
              {result.issues.map((issue, index) => (
                <li key={index}>{issue}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {result.suggestions.map((suggestion, index) => (
            <div key={index} className="bg-indigo-50 p-6 rounded-xl">
              <p className="text-slate-700 font-medium">{suggestion}</p>
            </div>
          ))}
        </div>

        {state !== "good" && (
          <>
            <hr className="mb-6 border-slate-200" />
            <button
              onClick={() => navigate("/dashboard")}
              className="flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
            >
              <Brain className="mr-2 h-5 w-5" />
              Get access to our tools
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Result;
