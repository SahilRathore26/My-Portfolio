import { Trophy, FileText, Code, Users } from "lucide-react"; // install lucide-react if not already

export default function Achievements() {
  const achievements = [
    {
      icon: <FileText className="w-6 h-6 text-blue-600" />,
      text: "Published research paper: 'Group Study Platform'",
    },
    {
      icon: <Code className="w-6 h-6 text-green-600" />,
      text: "Solved 200+ coding problems on LeetCode, GFG, etc.",
    },
    {
      icon: <Trophy className="w-6 h-6 text-yellow-600" />,
      text: "Selected at CU Project Expo 2023 for Smart Irrigation System",
    },
    {
      icon: <Users className="w-6 h-6 text-purple-600" />,
      text: "Management Coordinator – DSW, Chandigarh University",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-10">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center md:text-left">
        Achievements
      </h2>

      <div className="grid gap-6 sm:grid-cols-2">
        {achievements.map((a, idx) => (
          <div
            key={idx}
            className="flex items-start space-x-4 bg-white shadow-md hover:shadow-lg transition rounded-xl p-5"
          >
            <div className="flex-shrink-0">{a.icon}</div>
            <p className="text-gray-700 text-base sm:text-lg">{a.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
