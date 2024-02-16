import { AnimeType, Genre, NewAnime, Status } from '../types'

const isString = (value: unknown): boolean => {
  return typeof value === 'string'
}

const isAnimeType = (value: unknown): boolean => {
  const keys: AnimeType[] = Object.values(AnimeType)
  const typeValue: AnimeType = value as AnimeType

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

//TODO: Validate every parse function to check what happens when
// the argument gets a different type than the expected
const parseName = (nameFromRequest: unknown): string => {
  if (!isString(nameFromRequest)) {
    throw new Error('Incorrect or missing name')
  }

  return String(nameFromRequest)
}

const parseType = (typeFromRequest: unknown): AnimeType => {
  if (!isString(typeFromRequest) || !isAnimeType(typeFromRequest)) {
    throw new Error('Incorrect or missing type')
  }

  return typeFromRequest as AnimeType
}

const parseStudios = (studioFromRequest: unknown): string => {
  if (!isString(studioFromRequest)) {
    throw new Error('Incorrect or missing studios')
  }

  return String(studioFromRequest)
}

//TODO: fix bug for argument when is not of type string[]
const parseGenre = (genresFromRequest: string[]): Genre[] => {
  genresFromRequest.forEach((genre) => {
    if (!isString(genre) || !isGenre(genre)) {
      throw new Error('Incorrect type of genre')
    }
  })

  return genresFromRequest as Genre[]
}

const parseScores = (scoreFromRequest: string): number => {
  if (typeof scoreFromRequest !== 'number') {
    throw new Error('Incorrect or missing score')
  }

  return Number(scoreFromRequest)
}

const parseStatus = (statusFromRequest: unknown): Status => {
  if (!isString(statusFromRequest) || !isStatus(statusFromRequest)) {
    throw new Error('Incorrect or missing status')
  }

  return statusFromRequest as Status
}

const validateAnimeData = (reqBody: unknown): NewAnime => {
  const body = reqBody as {
    name: string
    type: string
    studios: string
    genre: string[]
    scores: string
    status: string
  }

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
