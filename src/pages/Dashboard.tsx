import {
  BookOpen,
  Brain,
  HeartPulse,
  Music,
  Smile,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const problems = [
    {
      title: "Anxiety Management",
      description: "Tools and techniques to help manage anxiety and stress",
      icon: HeartPulse,
      path: "/dashboard/anxiety",
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Stress Management",
      description: "Tools and techniques to help manage stress",
      icon: HeartPulse,
      path: "/dashboard/stress",
      color: "bg-teal-50 text-teal-600",
    },
    {
      title: "Overthinking",
      description: "Tools and techniques to help manage overthinking",
      icon: Brain,
      path: "/dashboard/overthinking",
      color: "bg-orange-50 text-orange-600",
    },
    {
      title: "Depression Support",
      description: "Resources and guidance for dealing with depression",
      icon: Smile,
      path: "/dashboard/depression",
      color: "bg-purple-50 text-purple-600",
    },
  ];

  const solutions = [
    {
      title: "Meditation",
      description: "Guided meditation and mindfulness exercises",
      icon: Brain,
      path: "/dashboard/meditation",
      color: "bg-green-50 text-green-600",
    },
    {
      title: "Music Therapy",
      description: "Therapeutic music to calm your mind",
      icon: Music,
      path: "/dashboard/music-therapy",
      color: "bg-yellow-50 text-yellow-600",
    },
    {
      title: "Daily Shlokas",
      description: "Ancient wisdom for modern peace",
      icon: BookOpen,
      path: "/dashboard/shlokas",
      color: "bg-red-50 text-red-600",
    },
    {
      title: "Daily Affirmations",
      description: "Uplift your spirit with positive thoughts and intentions",
      icon: Sparkles,
      path: "/dashboard/affirmations",
      color: "bg-pink-50 text-pink-600",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">
          Mental Health Advisor
        </h1>
        <p className="text-xl text-slate-600">Because your mind matters</p>
      </div>

      {/* Problems Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold text-slate-800 mb-6 text-center">
          What You Might Be Facing
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {problems.map((item) => {
            const Icon = item.icon;
            return (
              <Link to={item.path} key={item.title} className="block group">
                <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
                  <div
                    className={`inline-block p-4 rounded-xl ${item.color} mb-6`}
                  >
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3 group-hover:text-indigo-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600">{item.description}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Solutions Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-slate-800 mb-6 text-center">
          Helpful Tools & Techniques
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((item) => {
            const Icon = item.icon;
            return (
              <Link to={item.path} key={item.title} className="block group">
                <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 h-full">
                  <div
                    className={`inline-block p-4 rounded-xl ${item.color} mb-4`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2 group-hover:text-indigo-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm">{item.description}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
