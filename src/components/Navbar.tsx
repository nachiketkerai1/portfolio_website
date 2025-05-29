import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="flex justify-between items-center max-w-4xl mx-auto">
        <div className="text-xl font-bold">Nachiket Kerai</div>
        <ul className="flex gap-6 text-lg">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}


