import Image from "next/image";

export default function Home() {
  return (
    <section className="min-h-screen bg-blue-500 flex flex-col justify-center items-center px-6 text-center space-y-6">
      <Image
        src="/nachiket.jpg"
        alt="Nachiket Kerai"
        width={300}
        height={300}
        className="rounded-full object-cover shadow-md"
      />

      <h1 className="text-5xl font-bold">Hi! I’m Nachiket Kerai 👋</h1>

      <p className="text-lg text-gray-700 max-w-2xl">
        Computer Engineering @ UW–Madison. Focused on computer architecture,
        embedded systems, and robotics.
      </p>

      <div className="flex gap-4">
        <a
          href="/projects"
          className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-blue-200 transition"
        >
          View Projects
        </a>

        <a
          href="/resume.pdf"
          className="bg-gray-900 px-4 py-2 rounded hover:bg-gray-400"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
