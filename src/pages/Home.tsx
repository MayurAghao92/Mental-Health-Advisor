import { SignInButton, useUser } from "@clerk/clerk-react";
import {
  BookOpen,
  Brain,
  Heart,
  Music,
  Space as Peace,
  Quote,
  Sparkles,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const { isSignedIn } = useUser();

  return (
    <div className="max-w-6xl mx-auto px-4">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
          Welcome to your space for peace
        </h1>
        <p className="text-xl text-slate-600 mb-8">
          Let's take care of your mind together
        </p>

        {!isSignedIn ? (
          <SignInButton mode="modal">
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition shadow-lg">
              Sign In to Get Started
            </button>
          </SignInButton>
        ) : (
          <button
            onClick={() => navigate("/questionnaire")}
            className="bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition shadow-lg"
          >
            Start Now
          </button>
        )}
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <Sparkles className="h-12 w-12 text-indigo-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Personalized Guidance</h3>
          <p className="text-slate-600">
            Get tailored recommendations based on your unique mental wellness
            journey
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <Heart className="h-12 w-12 text-indigo-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Holistic Approach</h3>
          <p className="text-slate-600">
            Combine modern techniques with traditional wisdom for complete
            well-being
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <Peace className="h-12 w-12 text-indigo-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Daily Practice</h3>
          <p className="text-slate-600">
            Access meditation, music therapy, and ancient wisdom for daily
            mental peace
          </p>
        </div>
      </div>

      {/* Quote of the Day */}
      <div className="bg-indigo-50 rounded-2xl shadow-lg p-8 mb-16 text-center">
        <Quote className="h-10 w-10 text-indigo-500 mx-auto mb-4" />
        <h2 className="text-xl md:text-2xl font-medium text-slate-800 mb-2">
          “You don’t have to control your thoughts. You just have to stop
          letting them control you.”
        </h2>
        <p className="text-slate-600">– Dan Millman</p>
      </div>

      {/* Explore Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
          Explore Wellness Resources
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div
            onClick={() => navigate("/dashboard/meditation")}
            className="cursor-pointer bg-white p-6 rounded-xl shadow hover:shadow-md transition"
          >
            <Brain className="h-8 w-8 text-indigo-600 mb-3" />
            <h3 className="font-semibold text-lg mb-1">Meditation</h3>
            <p className="text-slate-600 text-sm">
              Guided breathing exercises and mental calmness techniques
            </p>
          </div>
          <div
            onClick={() => navigate("/dashboard/music-therapy")}
            className="cursor-pointer bg-white p-6 rounded-xl shadow hover:shadow-md transition"
          >
            <Music className="h-8 w-8 text-indigo-600 mb-3" />
            <h3 className="font-semibold text-lg mb-1">Music Therapy</h3>
            <p className="text-slate-600 text-sm">
              Soothing Indian folk music to relax your mind
            </p>
          </div>
          <div
            onClick={() => navigate("/dashboard/shlokas")}
            className="cursor-pointer bg-white p-6 rounded-xl shadow hover:shadow-md transition"
          >
            <BookOpen className="h-8 w-8 text-indigo-600 mb-3" />
            <h3 className="font-semibold text-lg mb-1">Daily Shlokas</h3>
            <p className="text-slate-600 text-sm">
              Ancient affirmations for positivity and mindfulness
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="mb-20">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
          What Users Say
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <p className="text-slate-700 mb-4">
              “Mental health Advisor helped me discover peace in the chaos of
              daily life. The music therapy is a blessing!”
            </p>
            <span className="text-sm text-slate-500 font-medium">
              — Ananya K.
            </span>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <p className="text-slate-700 mb-4">
              “The questionnaire and personalized suggestions felt like talking
              to a therapist — without pressure.”
            </p>
            <span className="text-sm text-slate-500 font-medium">
              — Rahul M.
            </span>
          </div>
        </div>
      </div>

      {/* Peaceful Image */}
      <div className="text-center">
        <img
          src="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Peaceful meditation scene"
          className="rounded-2xl shadow-lg mb-8 w-full"
        />
      </div>
    </div>
  );
};

export default Home;
