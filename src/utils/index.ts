import { AnimeType, Genre, NewAnime, Status } from '../types'

const isString = (value: unknown): boolean => {
  return typeof value === 'string'
}

const isAnimeType = (value: unknown): boolean => {
  const keys: AnimeType[] = Object.values(AnimeType)
  const typeValue = value as AnimeType

  return keys.includes(typeValue)
}

const isGenre = (value: unknown): boolean => {
  const keys: Genre[] = Object.values(Genre)
  const genreValue: Genre = value as Genre

  return keys.includes(genreValue)
}

const isStatus = (value: unknown): boolean => {
  const keys: Status[] = Object.values(Status)
  const statusValue: Status = value as Status

  return keys.includes(statusValue)
}

const parseName = (nameFromRequest: unknown) => {
  if (!nameFromRequest || !(typeof nameFromRequest === 'string')) {
    throw new Error('The name must be a non-null, non-empty string!')
  }

  return nameFromRequest
}

const parseType = (typeFromRequest: unknown) => {
  if (!isString(typeFromRequest) || !isAnimeType(typeFromRequest)) {
    throw new Error('The Type must be a non-empty valid Anime Type string!')
  }

  return typeFromRequest as AnimeType
}

const parseStudios = (studioFromRequest: unknown) => {
  if (!studioFromRequest || !(typeof studioFromRequest === 'string')) {
    throw new Error('The studio must be a non-empty string!')
  }

  return studioFromRequest
}

const parseGenre = (genresFromRequest: unknown) => {
  if (!Array.isArray(genresFromRequest) || genresFromRequest.length === 0) {
    throw new Error('Genres must be a non-empty array')
  }

  const genresArray: string[] = genresFromRequest

  for (const elem of genresArray) {
    if (!isString(elem) || !isGenre(elem)) {
      throw new Error('One or more values from the array are not of type genre')
    }
  }

  return genresArray as Genre[]
}

const parseScores = (scoreFromRequest: unknown) => {
  if (!scoreFromRequest || !(typeof scoreFromRequest === 'number')) {
    throw new Error('Score must be a valid positive number!')
  }

  return scoreFromRequest
}

const parseStatus = (statusFromRequest: unknown) => {
  if (!isString(statusFromRequest) || !isStatus(statusFromRequest)) {
    throw new Error('Value passed must be a valid Anime Status!')
  }

  return statusFromRequest as Status
}

const validateAnimeData = (reqBody: Record<string, unknown>): NewAnime => {
  const body = reqBody

  const newAnime = {
    name: parseName(body.name),
    type: parseType(body.type),
    studios: parseStudios(body.studios),
    genre: parseGenre(body.genre),
    scores: parseScores(body.scores),
    status: parseStatus(body.status)
  }

  return newAnime
}

export default validateAnimeData
