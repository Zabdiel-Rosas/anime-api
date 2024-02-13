export type AnimeType = 'TV Series' | 'Movie' | 'OVA' | 'ONA' | 'Special'

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
}
