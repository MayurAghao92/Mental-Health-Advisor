export const recommendations = {
  good: {
    title: "You're in a Good Place!",
    description:
      "Your responses indicate a positive state of mental well-being. Keep maintaining these healthy practices!",
    suggestions: [
      "Continue daily meditation",
      "Practice gratitude",
      "Maintain your support system",
    ],
    color: "bg-green-50 text-green-800",
    issues: [],
  },
  moderate: {
    title: "You're Doing Okay, with Room for Growth",
    description:
      "While you're managing well, there's opportunity to strengthen your mental wellness practices.",
    suggestions: [
      "Try guided meditation",
      "Explore music therapy",
      "Practice mindful breathing",
    ],
    color: "bg-blue-50 text-blue-800",
    issues: ["Occasional stress", "Mild anxiety", "Distraction"],
  },
  concerning: {
    title: "Let's Work on This Together",
    description:
      "Your responses suggest you're facing some challenges. We have tools and resources that can help.",
    suggestions: [
      "Start with gentle meditation",
      "Listen to calming music",
      "Practice daily affirmations",
    ],
    color: "bg-yellow-50 text-yellow-800",
    issues: ["Stress", "Anxiety", "Sleep disturbances"],
  },
  critical: {
    title: "We're Here to Support You",
    description:
      "Your responses indicate you're going through a difficult time. While exploring our resources, we strongly recommend reaching out to a mental health professional.",
    suggestions: [
      "Begin with basic breathing exercises",
      "Try soothing music therapy",
      "Read daily affirmations",
    ],
    color: "bg-red-50 text-red-800",
    issues: ["Depression", "Severe anxiety", "Burnout", "Isolation"],
  },
};
