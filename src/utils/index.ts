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
const parseGenre = (genresFromRequest: unknown): Genre[] => {
  const isArray = (arr: unknown): boolean => {
    return Array.isArray(arr)
  }

  if (!isArray(genresFromRequest)) {
    const err = new Error('The value passed is not an array!')
    err.name = 'genre'

    throw err
  } else {
    const arr = genresFromRequest as unknown[]

    if (arr.length === 0) {
      const err = new Error('The array must not be empty!')
      err.name = 'Genre'
      throw err
    }

    arr.forEach((elem) => {
      if (!isString(elem) || !isGenre(elem)) {
        const err = new Error(
          'One or more values from the array are not of type genre'
        )
        err.name = 'genre'

        throw err
      }
    })
  }

  return genresFromRequest as Genre[]
}

const parseScores = (scoreFromRequest: unknown): number => {
  if (typeof scoreFromRequest !== 'number') {
    const err = new Error('the value passed is incorrect')
    err.name = 'Score'
    throw err
  }

  return Number(scoreFromRequest)
}

const parseStatus = (statusFromRequest: unknown): Status => {
  if (!isString(statusFromRequest) || !isStatus(statusFromRequest)) {
    const err = new Error('the value is not of type status')
    err.name = 'Status'
    throw err
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
