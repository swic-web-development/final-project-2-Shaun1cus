import Header from './components/header'
import CharactersGrid from './components/characters-grid'
import SearchBar from './components/search-bar.jsx'
import { moveUp, moveDown } from './components/ranking'
import { useState, useEffect } from 'react'

export default function App() {
  const [characters, setCharacters] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    async function fetchCharacters() {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character')
        const data = await response.json()

        const detailedCharacters = await Promise.all(
          data.results.map(async (character, index) => {
            // Add 'index' as the second parameters
            const characterResponse = await fetch(character.url)
            const characterData = await characterResponse.json()
            return {
              id: characterData.id,
              name: characterData.name,
              image: characterData.image,
              species: characterData.species,
              status: characterData.status,
              gender: characterData.gender,
              rank: index + 1, // Use the index here
            }
          }),
        )

        setCharacters(detailedCharacters)
      } catch (error) {
        console.error('Error fetching characters:', error)
      }
    }

    fetchCharacters()
  }, [])

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  function handleMoveUp(id) {
    setCharacters((prevCharacters) => moveUp(prevCharacters, id))
  }

  function handleMoveDown(id) {
    setCharacters((prevCharacters) => moveDown(prevCharacters, id))
  }

  return (
    <main className="min-h-screen bg-black p-6 text-white">
      <Header />
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <CharactersGrid
        characters={filteredCharacters}
        moveUp={handleMoveUp}
        moveDown={handleMoveDown}
      />
    </main>
  )
}
