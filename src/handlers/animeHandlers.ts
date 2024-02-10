import { Request, Response } from 'express'

//@desc Get All Animes
//@route GET /api/animes
//@access public
const getAllAnimes = (req: Request, res: Response) => {
  res.status(200).json({ message: 'Get all animes' })
}

//@desc Create New Anime
//@route POST /api/animes
//@access public
const createNewAnime = (req: Request, res: Response) => {
  res.status(201).json({ message: 'Create New Anime' })
}

export { getAllAnimes, createNewAnime }
