import { GraduationCap, BookOpenCheck, Award } from "lucide-react"; // install lucide-react if not already

export default function Education() {
  const education = [
    {
      icon: <GraduationCap className="w-6 h-6 text-blue-600" />,
      title: "Bachelor of Engineering - CSE",
      place: "Chandigarh University (2021-25)",
      detail: "CGPA: 7.98",
    },
    {
      icon: <BookOpenCheck className="w-6 h-6 text-green-600" />,
      title: "Intermediate & High School",
      place: "CBSE - Govt Boys Sr. Sec. School, Delhi",
      detail: "",
    },
    {
      icon: <Award className="w-6 h-6 text-yellow-600" />,
      title: "Certifications",
      place: "",
      detail:
        "IBM Web Development, Dynamic UI, IoT (NPTEL), Computer Vision (IBM)",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-10">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center md:text-left">
        Education & Certifications
      </h2>

      {/* Responsive grid layout */}
      <div className="grid gap-6 sm:grid-cols-2">
        {education.map((edu, idx) => (
          <div
            key={idx}
            className="flex items-start space-x-4 bg-white shadow-md hover:shadow-lg transition rounded-xl p-5"
          >
            <div className="flex-shrink-0">{edu.icon}</div>
            <div>
              <h3 className="font-semibold text-lg sm:text-xl text-gray-800">
                {edu.title}
              </h3>
              {edu.place && (
                <p className="text-gray-600 text-sm sm:text-base">{edu.place}</p>
              )}
              {edu.detail && (
                <p className="text-gray-700 text-sm sm:text-base">{edu.detail}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

