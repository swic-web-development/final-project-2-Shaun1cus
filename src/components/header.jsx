export default function Header() {
  return (
    <header className="bg-blue-500 p-4 text-white">
      <h1 className="text-3xl">Rick &amp; Morty</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="#home" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="#characters" className="hover:underline">
              Characters
            </a>
          </li>
          <li>
            <a href="#episodes" className="hover:underline">
              Episodes
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
