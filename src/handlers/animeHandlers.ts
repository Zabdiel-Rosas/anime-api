import { Request, Response } from 'express'
import { getAnimes } from '../services/animeServices'

//@desc Get All Animes
//@route GET /api/animes
//@access public
const getAllAnimes = (req: Request, res: Response) => {
  res.send(getAnimes())
}

//@desc Create New Anime
//@route POST /api/animes
//@access public
const createNewAnime = (req: Request, res: Response) => {
  res.status(201).json({ message: 'Create New Anime' })
}

export { getAllAnimes, createNewAnime }
