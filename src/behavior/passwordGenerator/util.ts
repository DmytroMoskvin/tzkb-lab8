import { CharacterSets } from '.';

export const generatePassword = (length: number, characters: CharacterSets[]) => Array(length)
  .fill(characters.join(''))
  .map(c => c[Math.floor(Math.random() * c.length)])
  .join('');