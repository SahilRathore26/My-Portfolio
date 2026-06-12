export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-4 py-10 sm:py-16 md:py-24 bg-gradient-to-r from-blue-100 via-cyan-100 to-indigo-100">
      {/* Responsive Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6">
        Hi, I'm <span className="text-blue-600">Sahil Rathore</span> 👋
      </h1>

      {/* Responsive Summary */}
      <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl leading-relaxed">
        I am a Cloud Engineer at Infosol Technosol Pvt. Ltd. with a strong foundation in{" "}
        <span className="font-semibold text-blue-600">
          AWS Cloud Infrastructure
        </span>
        , DevOps practices, and system administration. I specialize in
        designing, deploying, and managing scalable cloud environments using{" "}
        <span className="font-semibold">
          EC2, VPC, IAM, S3, RDS, Load Balancers, CloudWatch, and CloudFront
        </span>
        . Passionate about automation, monitoring, security, and continuous
        improvement, I enjoy solving real-world infrastructure challenges and
        building reliable cloud solutions. My goal is to grow as a{" "}
        <span className="font-semibold text-indigo-600">
          Cloud & DevOps Engineer
        </span>{" "}
        while expanding my expertise in automation, containerization, and
        modern cloud technologies.
      </p>
    </section>
  );
}