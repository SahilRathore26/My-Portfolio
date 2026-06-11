import { Mail, Linkedin, Github, Code } from "lucide-react"; // install lucide-react if not already

export default function Contact() {
  const contacts = [
    {
      icon: <Mail className="w-6 h-6 text-red-500" />,
      label: "Email",
      value: "saheelathore@gmail.com",
      link: "mailto:saheelathore@gmail.com",
    },
    {
      icon: <Linkedin className="w-6 h-6 text-blue-600" />,
      label: "LinkedIn",
      value: "linkedin.com/in/sahilrathore1",
      link: "http://www.linkedin.com/in/sahilrathore1",
    },
    {
      icon: <Github className="w-6 h-6 text-gray-900" />,
      label: "GitHub",
      value: "github.com/SahilRathore26",
      link: "https://github.com/SahilRathore26",
    },
    {
      icon: <Code className="w-6 h-6 text-yellow-600" />,
      label: "LeetCode",
      value: "leetcode.com/u/Sahilrathore_26",
      link: "https://leetcode.com/u/Sahilrathore_26/",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-10 text-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
        Contact Me
      </h2>
      <p className="text-gray-600 mb-8 text-base sm:text-lg max-w-2xl mx-auto">
        I’d love to connect! Feel free to reach out via email or connect on my socials below.
      </p>

      {/* Responsive grid for contacts */}
      <div className="grid gap-6 sm:grid-cols-2">
        {contacts.map((c, idx) => (
          <a
            key={idx}
            href={c.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-start space-x-4 bg-white shadow-md hover:shadow-lg transition rounded-xl p-5 text-left"
          >
            {c.icon}
            <div>
              <p className="font-semibold text-gray-800">{c.label}</p>
              <p className="text-blue-600 text-sm sm:text-base break-words">{c.value}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
