import Header from './components/header'
import CharactersGrid from './components/characters-grid'
import { useState, useEffect } from 'react'

export default function App() {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    async function fetchCharacters() {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character')
        const data = await response.json()

        const detailedCharacters = await Promise.all(
          data.results.map(async (character) => {
            const characterResponse = await fetch(character.url)
            const characterData = await characterResponse.json()
            return characterData.result.properties
          }),
        )

        setCharacters(detailedCharacters)
        console.log(detailedCharacters)
      } catch (error) {
        console.error('Error fetching characters:', error)
      }
    }
    fetchCharacters()
  }, [])

  return (
    <main className="min-h-screen bg-black p-6 text-white">
      <Header />
      <CharactersGrid characters={characters} />
      <h1 className="text-3xl text-red-500">Aww, geez...</h1>
    </main>
  )
}
