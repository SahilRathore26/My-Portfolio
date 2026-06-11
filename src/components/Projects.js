export default function Projects() {
  const projects = [
    {
      title: "NetflixGPT",
      desc: "Movie recommendation platform using GPT + TMDB API with React.js & Tailwind.",
      link: "http://netflix-gpt-1-nine.vercel.app/",
    },
    {
      title: "Smart Irrigation System",
      desc: "IoT-based project optimizing water usage in agriculture, selected at CU Expo.",
      link: "https://github.com/SahilRathore26",
    },
    {
      title: "Food Delivery App",
      desc: "Responsive React-based app with restaurant listing, menu display & filtering.",
      link: "https://github.com/SahilRathore26",
    },
    {
      title: "Depth Estimation",
      desc: "AI-powered depth estimation project deployed on Hugging Face Spaces.",
      link: "https://huggingface.co/spaces/Sahilrathore26/depth-estimation",
    },
    {
      title: "Book Finder",
      desc: "React app to search & explore books using external APIs with clean UI.",
      link: "https://github.com/SahilRathore26",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-10 bg-gradient-to-br from-green-50 via-teal-50 to-blue-100 rounded-xl shadow-md">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center md:text-left">
        Projects
      </h2>

      {/* Responsive Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, idx) => (
          <div
            key={idx}
            className="bg-white shadow-lg hover:shadow-2xl transition rounded-xl p-6 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">
                {p.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mb-4">
                {p.desc}
              </p>
            </div>
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-medium hover:underline mt-auto"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
