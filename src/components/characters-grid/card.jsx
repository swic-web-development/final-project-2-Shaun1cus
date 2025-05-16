export default function Card({ character }) {
  return (
    <div className="w-48 rounded-lg bg-gray-800 p-2 shadow-md">
      <img
        src={character.image}
        alt={character.name}
        className="mx-auto mb-2 h-32 w-32 rounded-lg object-cover"
      />
      <h2 className="text-center text-base font-bold">{character.name}</h2>
      <p className="text-center text-xs text-gray-400">{character.species}</p>
      <p className="text-center text-xs text-gray-400">{character.status}</p>
      <p className="text-center text-xs text-gray-400">{character.gender}</p>
    </div>
  )
}
