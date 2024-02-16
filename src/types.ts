// export type Status = 'Currently Airing' | 'Finished Airing' | 'Not Yet Airing'

export enum AnimeType {
  series = 'TV Series',
  movie = 'Movie',
  ova = 'OVA',
  ona = 'ONA',
  special = 'Special'
}

export enum Status {
  currently = 'Currently Airing',
  finished = 'Finished Airing',
  notyet = 'Not Yet Airing'
}

export enum Genre {
  action = 'Action',
  adventure = 'Adventure',
  comedy = 'Comedy',
  demons = 'Demons',
  drama = 'Drama',
  ecchi = 'Ecchi',
  fantasy = 'Fantasy',
  kids = 'Kids',
  isekai = 'Isekai',
  psychological = 'Psychological',
  magic = 'Magic',
  martialArts = 'Martial Arts',
  scifi = 'Sci-Fi',
  shounen = 'Shounen',
  sliceOfLife = 'Slice Of Life'
}

export interface Anime {
  id: number
  name: string
  type: AnimeType
  studios: string
  genre: Genre[]
  scores: number
  status: Status
}

export type NewAnime = Omit<Anime, 'id'>
