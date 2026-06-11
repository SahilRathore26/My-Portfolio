import { Code, Bug } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      icon: <Bug className="w-6 h-6 text-red-600" />,
      title: "Software Test Engineer (QA Apprentice)",
      place: "Bridging Technology • Mohali, India",
      detail: "Jan 2026 – Present",
      points: [
        "Performed UI testing and identified bugs to improve application quality",
        "Collaborated with developers to debug and resolve defects",
        "Improved application stability and issue resolution efficiency",
      ],
    },
    {
      icon: <Code className="w-6 h-6 text-green-600" />,
      title: "Frontend Developer Intern",
      place: "Rupyz • Gurugram, India",
      detail: "Aug 2025 – Dec 2025",
      points: [
        "Developed scalable and responsive UI using React.js and Tailwind CSS",
        "Integrated REST APIs for dynamic and real-time user experiences",
        "Optimized performance and managed complex state using Redux Toolkit",
      ],
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-10">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center md:text-left">
        Work Experience
      </h2>

      {/* Same grid system as Education */}
      <div className="grid gap-6 sm:grid-cols-2">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="flex items-start space-x-4 bg-white shadow-md hover:shadow-lg transition rounded-xl p-5"
          >
            <div className="flex-shrink-0">{exp.icon}</div>

            <div>
              <h3 className="font-semibold text-lg sm:text-xl text-gray-800">
                {exp.title}
              </h3>

              <p className="text-gray-600 text-sm sm:text-base">
                {exp.place}
              </p>

              <p className="text-gray-500 text-sm mb-2">
                {exp.detail}
              </p>

              <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-1">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}