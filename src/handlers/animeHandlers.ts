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
  res.status(200).json(getAnimes())
}

//@desc Create New Anime
//@route POST /api/animes
//@access public
const createNewAnime = (req: Request, res: Response) => {
  const createdAnime = addAnime(req.body)
  res.status(201).json(createdAnime)
}

//@desc Get Anime By Id
//@route GET /api/animes/:id
//@access public
const getAnimeById = (req: Request, res: Response) => {
  const id = Number(req.params.id)
  const anime = getOneAnime(id)

  anime && res.status(200).json(anime)
}

//@desc Update Anime
//@route PUT /api/animes/:id
//@access public
const updateAnime = (req: Request, res: Response) => {
  const id = Number(req.params.id)
  const dataToUpdate: Anime = req.body
  const updatedAnime = modifyAnime(id, dataToUpdate)

  updatedAnime && res.status(200).json(updatedAnime)
}

//@desc Delete Anime
//@route DELETE /api/animes/:id
//@access public
const deleteAnime = (req: Request, res: Response) => {
  const id = Number(req.params.id)
  const deletedAnime = eraseAnime(id)

  deletedAnime && res.status(204).json({})
}

export { getAllAnimes, createNewAnime, getAnimeById, updateAnime, deleteAnime }
