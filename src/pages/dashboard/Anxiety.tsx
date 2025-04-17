import { Moon, Sun, Wind } from 'lucide-react';

const Anxiety = () => {
  const breathingExercises = [
    {
      title: '4-7-8 Breathing',
      description: 'Inhale for 4 seconds, hold for 7 seconds, exhale for 8 seconds',
      icon: Wind,
      color: 'bg-blue-50 text-blue-600'
    },
    {
      title: 'Box Breathing',
      description: 'Inhale, hold, exhale, and hold again, each for 4 seconds',
      icon: Sun,
      color: 'bg-yellow-50 text-yellow-600'
    },
    {
      title: 'Deep Belly Breathing',
      description: 'Place hand on belly, breathe deeply to feel it rise and fall',
      icon: Moon,
      color: 'bg-purple-50 text-purple-600'
    }
  ];

  const tips = [
    'Practice mindfulness and stay in the present moment',
    'Maintain a regular sleep schedule',
    'Exercise regularly, even if it\'s just a short walk',
    'Limit caffeine and alcohol intake',
    'Connect with supportive friends or family members',
    'Write down your thoughts and feelings in a journal'
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Managing Anxiety</h1>
        <p className="text-xl text-slate-600">Simple techniques to help you find calm in moments of anxiety</p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-semibold text-slate-800 mb-6">Breathing Exercises</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {breathingExercises.map((exercise, index) => {
            const Icon = exercise.icon;
            return (
              <div key={index} className="p-6 rounded-xl bg-gradient-to-b from-white to-slate-50 border border-slate-100">
                <div className={`inline-block p-3 rounded-lg ${exercise.color} mb-4`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{exercise.title}</h3>
                <p className="text-slate-600">{exercise.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-slate-800 mb-6">Daily Tips for Anxiety Management</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {tips.map((tip, index) => (
            <div key={index} className="flex items-start p-4 bg-indigo-50 rounded-xl">
              <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-indigo-600 text-white rounded-full mr-3">
                {index + 1}
              </span>
              <p className="text-slate-700">{tip}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Anxiety;