import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white justify-between p-5 flex gap-5 items-center">
      <h1 className="text-4xl font-bold text-blue-700">Artistly.</h1>
      <nav className="justify-center space-x-4 text-sm">
        <Link href="/" className="font-medium text-gray-700 hover:text-blue-600 transition">
          Home
        </Link>
        
        <Link href="/onboard" className="font-medium text-gray-700 hover:text-blue-600 transition">
          Onboard
        </Link>
        
      </nav>
      <Link href="/dashboard" className="font-medium font-xl text-gray-700 hover:text-blue-600 transition">
          Dashboard
        </Link>
    </header>
  );
}
