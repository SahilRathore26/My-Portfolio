export default function Skills() {
  const skills = [
    "C/C++",
    "JavaScript",
    "React.js",
    "Tailwind CSS",
    "Redux",
    "HTML",
    "CSS",
    "Bootstrap",
    "Firebase",
    "MySQL",
    "Git/GitHub",
    "API Integration",
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-10">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center md:text-left">
        Skills
      </h2>

      {/* Responsive grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md hover:shadow-lg transition transform hover:scale-105 rounded-lg p-4 sm:p-5 text-center font-medium text-gray-800 text-base sm:text-lg"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
