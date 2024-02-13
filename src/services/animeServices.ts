import { Anime } from '../types'
import animeData from './data.json'

const animes: Anime[] = animeData as Anime[]

export const getAnimes = () => animes
