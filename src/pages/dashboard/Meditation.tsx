import { Pause, Play, RefreshCw } from "lucide-react";
import { useEffect, useState } from "react";

const Meditation = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(60); // Default: 1 minute
  const [selectedTime, setSelectedTime] = useState(60);

  useEffect(() => {
    let interval: number;
    if (isRunning && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      setIsRunning(false);
    }
    return () => clearInterval(interval);
  }, [isRunning, time]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(selectedTime);
  };

  const techniques = [
    {
      title: "Mindful Breathing",
      description: "Focus on your breath, observing each inhale and exhale",
      duration: "1-3 minutes",
    },
    {
      title: "Body Scan",
      description: "Gradually focus attention on each part of your body",
      duration: "3-5 minutes",
    },
    {
      title: "Loving-Kindness",
      description: "Direct positive thoughts and wishes to yourself and others",
      duration: "5-7 minutes",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">
          Meditation Practice
        </h1>
        <p className="text-xl text-slate-600">
          Find peace through guided meditation and mindfulness
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
        <div className="text-center">
          <div className="text-6xl font-mono mb-8">{formatTime(time)}</div>

          <div className="mb-8">
            <select
              value={selectedTime}
              onChange={(e) => {
                setSelectedTime(Number(e.target.value));
                setTime(Number(e.target.value));
              }}
              className="px-4 py-2 rounded-lg border border-slate-200 mr-4"
              disabled={isRunning}
            >
              <option value={60}>1 minute</option>
              <option value={180}>3 minutes</option>
              <option value={300}>5 minutes</option>
              <option value={420}>7 minutes</option>
            </select>
          </div>

          <div className="flex justify-center gap-4">
            <button
              onClick={() => setIsRunning(!isRunning)}
              className="flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
            >
              {isRunning ? (
                <>
                  <Pause className="mr-2 h-5 w-5" />
                  Pause
                </>
              ) : (
                <>
                  <Play className="mr-2 h-5 w-5" />
                  Start
                </>
              )}
            </button>
            <button
              onClick={handleReset}
              className="flex items-center px-6 py-3 bg-slate-200 text-slate-700 rounded-lg hover:bg-slate-300 transition"
            >
              <RefreshCw className="mr-2 h-5 w-5" />
              Reset
            </button>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {techniques.map((technique, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-slate-800 mb-3">
              {technique.title}
            </h3>
            <p className="text-slate-600 mb-4">{technique.description}</p>
            <p className="text-sm text-indigo-600 font-medium">
              {technique.duration}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Meditation;
