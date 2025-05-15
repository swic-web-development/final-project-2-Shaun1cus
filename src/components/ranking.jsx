export function moveUp(characters, id) {
  const index = characters.findIndex((char) => char.id === id)
  if (index > 0) {
    const updatedCharacters = [...characters]
    const temp = updatedCharacters[index - 1]
    updatedCharacters[index - 1] = updatedCharacters[index]
    updatedCharacters[index] = temp
    return updatedCharacters
  }
  return characters
}

export function moveDown(characters, id) {
  const index = characters.findIndex((char) => char.id === id)
  if (index < characters.length - 1) {
    const updatedCharacters = [...characters]
    const temp = updatedCharacters[index + 1]
    updatedCharacters[index + 1] = updatedCharacters[index]
    updatedCharacters[index] = temp
    return updatedCharacters
  }
  return characters
}
