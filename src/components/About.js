export default function About() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-10 bg-gradient-to-r from-purple-50 via-pink-50 to-blue-50 rounded-xl shadow-md">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center md:text-left">
        About Me
      </h2>

      <p className="text-gray-700 leading-relaxed text-base sm:text-lg md:text-xl">
        I am <span className="font-semibold text-blue-600">Sahil Rathore</span>,
        a Computer Science Engineering student at Chandigarh University,
        passionate about{" "}
        <span className="font-semibold text-purple-600">web development</span>,{" "}
        <span className="font-semibold text-pink-600">AI</span>, and solving
        real-world problems through technology. I’ve built projects like{" "}
        <span className="font-semibold">NetflixGPT</span>,{" "}
        <span className="font-semibold">Book Finder</span>,{" "}
        <span className="font-semibold">Food Delivery App</span>, and an{" "}
        <span className="font-semibold">AI-powered Depth Estimation tool</span>,
        gaining hands-on experience in{" "}
        <span className="font-semibold">
          React.js, Tailwind CSS, Firebase, MySQL
        </span>{" "}
        and API integration.
      </p>

      <p className="text-gray-700 leading-relaxed text-base sm:text-lg md:text-xl mt-6">
        Beyond academics, I’ve published a research paper, solved 200+ coding
        problems, and showcased projects at university expos. I believe in
        continuous learning, exploring new technologies, and combining
        creativity with code to build impactful solutions. My long-term vision
        is to grow into a{" "}
        <span className="font-semibold text-blue-600">
          Full-Stack Developer
        </span>{" "}
        and eventually evolve as an{" "}
        <span className="font-semibold text-purple-600">AI Generalist</span>,
        creating products that make a real difference.
      </p>
    </section>
  );
}
