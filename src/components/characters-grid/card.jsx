export default function Card({ character }) {
  return (
    <div className="rounded-lg bg-gray-800 p-4 shadow-md">
      <img src={character.image} alt={character.name} className="mb-4 h-auto w-full rounded-lg" />
      <h2 className="text-xl font-bold">{character.name}</h2>
      <p className="text-gray-400">{character.species}</p>
      <p className="text-gray-400">{character.status}</p>
    </div>
  )
}
