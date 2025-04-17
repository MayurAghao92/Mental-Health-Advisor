import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Anxiety from "./pages/dashboard/Anxiety";
import Depression from "./pages/dashboard/Depression";
import Meditation from "./pages/dashboard/Meditation";
import MusicTherapy from "./pages/dashboard/MusicTherapy";
import Shlokas from "./pages/dashboard/Shlokas";
import Home from "./pages/Home";
import Questionnaire from "./pages/Questionnaire";
import Result from "./pages/Result";
import PrivateRoute from "./components/PrivateRoute";
import Affirmations from "./pages/dashboard/Affirmation";
import Overthinking from "./pages/dashboard/Overthinking";
import Stress from "./pages/dashboard/Stress";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-indigo-50">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/questionnaire"
              element={
                <PrivateRoute>
                  <Questionnaire />
                </PrivateRoute>
              }
            />
            <Route
              path="/result"
              element={
                <PrivateRoute>
                  <Result />
                </PrivateRoute>
              }
            />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/dashboard/anxiety"
              element={
                <PrivateRoute>
                  <Anxiety />
                </PrivateRoute>
              }
            />
            <Route
              path="/dashboard/depression"
              element={
                <PrivateRoute>
                  <Depression />
                </PrivateRoute>
              }
            />
            <Route
              path="/dashboard/meditation"
              element={
                <PrivateRoute>
                  <Meditation />
                </PrivateRoute>
              }
            />
            <Route
              path="/dashboard/music-therapy"
              element={
                <PrivateRoute>
                  <MusicTherapy />
                </PrivateRoute>
              }
            />
            <Route
              path="/dashboard/shlokas"
              element={
                <PrivateRoute>
                  <Shlokas />
                </PrivateRoute>
              }
            />
            <Route
              path="/dashboard/affirmations"
              element={
                <PrivateRoute>
                  <Affirmations />
                </PrivateRoute>
              }
            />

            <Route
              path="/dashboard/overthinking"
              element={
                <PrivateRoute>
                  <Overthinking />
                </PrivateRoute>
              }
            />
            <Route
              path="/dashboard/stress"
              element={
                <PrivateRoute>
                  <Stress />
                </PrivateRoute>
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
