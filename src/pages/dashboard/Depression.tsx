import { Heart, Sun, Users } from 'lucide-react';

const Depression = () => {
  const categories = [
    {
      title: 'Self-Care Activities',
      icon: Heart,
      color: 'bg-pink-50 text-pink-600',
      items: [
        'Take a warm bath or shower',
        'Spend time in nature',
        'Listen to uplifting music',
        'Practice gentle exercise',
        'Create something artistic'
      ]
    },
    {
      title: 'Daily Structure',
      icon: Sun,
      color: 'bg-yellow-50 text-yellow-600',
      items: [
        'Wake up at the same time each day',
        'Make your bed',
        'Open curtains for natural light',
        'Eat regular meals',
        'Plan one enjoyable activity'
      ]
    },
    {
      title: 'Social Connection',
      icon: Users,
      color: 'bg-blue-50 text-blue-600',
      items: [
        'Call a friend or family member',
        'Join online support groups',
        'Share your feelings with someone you trust',
        'Participate in community activities',
        'Volunteer to help others'
      ]
    }
  ];

  const quotes = [
    {
      text: "Even the darkest night will end and the sun will rise.",
      author: "Victor Hugo"
    },
    {
      text: "You are stronger than you know, braver than you believe, and more loved than you can imagine.",
      author: "Unknown"
    },
    {
      text: "The only way out is through.",
      author: "Robert Frost"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Depression Support</h1>
        <p className="text-xl text-slate-600">Tools and guidance to help you through difficult times</p>
      </div>

      <div className="grid gap-8">
        {categories.map((category, index) => {
          const Icon = category.icon;
          return (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg ${category.color} mr-4`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-semibold text-slate-800">{category.title}</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center p-4 bg-slate-50 rounded-xl">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                    <p className="text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl shadow-lg p-8 text-white">
          <h2 className="text-2xl font-semibold mb-6">Daily Affirmations</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {quotes.map((quote, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <p className="text-lg mb-4">{quote.text}</p>
                <p className="text-sm opacity-80">- {quote.author}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Depression;