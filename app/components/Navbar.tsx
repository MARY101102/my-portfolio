import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b px-8 py-4 flex justify-between items-center">
      <h1 className="font-bold text-xl">Sneha.dev</h1>

      <div className="flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
