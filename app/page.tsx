import Image from "next/image";

export default function Home() {
  return (
    <main className="p-10 space-y-16">

      {/* ✅ H1 — Only ONE */}
      <section>
        <h1 className="text-4xl font-bold">
          Sneha | Web Developer & SEO Specialist in Sri Lanka
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl">
          I build fast, SEO-optimized websites using Next.js, Tailwind CSS and modern web technologies to help businesses grow online.
        </p>
      </section>

      {/* Section 1*/}
      <section>
        <h2 className="text-2xl font-semibold mb-4">My services</h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li>Website development (next.js,react)</li>
          <li>seo optimization & performance</li>
          <li>landing page design</li>
          <li>portfolio & Business websites</li>
        </ul>
      </section>

      <div className="mt-8 flex gap-4">
        <a href="/projects"
        className="px-6 py-3 border rounded-lg"
      >
        View projects
      </a>

      <a 
      href="/contact"
      className="px-6 py-3 border rounded-lg">
        Contact me
      </a>
      </div>

      <div className="mt-6 flex gap-4">
        <a 
        href=""
        target="_blank"
        className="px-4 py-2 border rounded-lg"
        >
          Whatsapp
        </a>

        <a 
        href="mailto:jeyakumarsneha21@gmail.com"
        className="px-4 py-2 border rounded-lg"

      >
        Email
      </a>
      </div>
 </main>
);
}