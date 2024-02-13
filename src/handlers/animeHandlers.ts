import { Request, Response } from 'express'
import { Anime } from '../types'
import {
  getAnimes,
  addAnime,
  getOneAnime,
  modifyAnime,
  eraseAnime
} from '../services/animeServices'

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
  res.send(addAnime(req.body))
}

//@desc Get Anime By Id
//@route GET /api/animes/:id
//@access public
const getAnimeById = (req: Request, res: Response) => {
  const id = Number(req.params.id)
  res.send(getOneAnime(id))
}

//@desc Update Anime
//@route PUT /api/animes/:id
//@access public
const updateAnime = (req: Request, res: Response) => {
  const id = Number(req.params.id)
  const dataToUpdate: Anime = req.body
  res.send(modifyAnime(id, dataToUpdate))
}

//@desc Delete Anime
//@route DELETE /api/animes/:id
//@access public
const deleteAnime = (req: Request, res: Response) => {
  const id = Number(req.params.id)
  res.send(eraseAnime(id))
}

export { getAllAnimes, createNewAnime, getAnimeById, updateAnime, deleteAnime }
