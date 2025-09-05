export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-4 py-10 sm:py-16 md:py-24 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
      {/* Responsive Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6">
        Hi, I'm <span className="text-blue-600">Sahil Rathore</span> 👋
      </h1>

      {/* Responsive Summary */}
      <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl leading-relaxed">
        I am a passionate Computer Science Engineering student with a strong
        interest in{" "}
        <span className="font-semibold text-blue-600">
          Frontend Development
        </span>
        , <span className="font-semibold text-purple-600">AI</span>, and
        building impactful digital solutions. I enjoy turning complex problems
        into elegant, user-friendly applications using{" "}
        <span className="font-semibold">
          React, Tailwind CSS, and modern web technologies
        </span>
        . With hands-on experience in real-world projects and published research
        work, I aim to grow as a{" "}
        <span className="font-semibold text-pink-600">
          Full-Stack Developer
        </span>{" "}
        while exploring opportunities in AI and product building.
      </p>
    </section>
  );
}
