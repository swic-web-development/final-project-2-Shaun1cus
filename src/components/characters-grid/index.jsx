import Card from './card'

export default function CharactersGrid({ characters }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {characters.map((character) => (
        <Card key={character.id} character={character} />
      ))}
    </div>
  )
}
