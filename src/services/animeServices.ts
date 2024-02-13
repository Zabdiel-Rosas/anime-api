import { Anime, NewAnime } from '../types'
import animeData from './data.json'

const animes: Anime[] = animeData as Anime[]

const getAnimes = () => animes

const addAnime = (newAnimeData: NewAnime): Anime => {
  const newAnime = {
    id: Math.max(...animes.map((a) => a.id)) + 1,
    ...newAnimeData
  }

  animes.push(newAnime)
  return newAnime
}

const getOneAnime = (id: number): Anime | undefined => {
  const anime = animes.find((a) => a.id === id)
  return anime
}

const modifyAnime = (id: number, newData: Anime): Anime | undefined => {
  const index = animes.findIndex((a) => a.id === id)

  if (index !== -1) {
    const updatedAnime = { ...animes[index], ...newData }
    animes.splice(index, 1, updatedAnime)

    return updatedAnime
  }
}

const eraseAnime = (id: number): Anime | undefined => {
  const index = animes.findIndex((a) => a.id === id)

  if (index !== -1) {
    const deletedAnime = animes.splice(index, 1)
    return deletedAnime[0]
  }
}

export { getAnimes, addAnime, modifyAnime, getOneAnime, eraseAnime }
