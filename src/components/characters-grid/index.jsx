import Card from './card'

export default function CharactersGrid({ characters, moveUp, moveDown }) {
  return (
    <div className="flex flex-col gap-4">
      {characters.map((character) => (
        <div
          key={character.id}
          className="flex items-center justify-between rounded bg-gray-800 p-4"
        >
          <div className="flex-1">
            <Card character={character} />
          </div>
          <div className="ml-4 flex flex-col items-center">
            <button
              onClick={() => moveUp(character.id)}
              className="text-green-500 hover:text-green-300"
            >
              ▲
            </button>
            <button
              onClick={() => moveDown(character.id)}
              className="text-red-500 hover:text-red-300"
            >
              ▼
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
