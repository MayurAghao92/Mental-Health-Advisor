import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { questions } from "../utils/Questions";

const Questionnaire = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers, optionIndex];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate score (0-4 scale per question, normalized to 1-10)
      const totalScore = newAnswers.reduce(
        (sum, answer) => sum + (4 - answer),
        0
      );
      const normalizedScore = Math.round(
        (totalScore / (questions.length * 4)) * 9 + 1
      );

      navigate("/result", {
        state: {
          answers: newAnswers,
          score: normalizedScore,
        },
      });
    }
  };

  const question = questions[currentQuestion];

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-slate-800">
              Mental Health Assessment
            </h2>
            <span className="text-sm text-slate-500">
              Question {currentQuestion + 1} of {questions.length}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
              style={{
                width: `${((currentQuestion + 1) / questions.length) * 100}%`,
              }}
            ></div>
          </div>
        </div>

        <h3 className="text-xl text-slate-700 mb-6">{question.text}</h3>

        <div className="space-y-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              className="w-full text-left px-6 py-4 rounded-xl border border-slate-200 hover:border-indigo-500 hover:bg-indigo-50 transition-all duration-200"
            >
              <span className="text-slate-700">{option}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Questionnaire;
