import { Router } from 'express'
import {
  getAllAnimes,
  createNewAnime,
  updateAnime,
  getAnimeById,
  deleteAnime
} from '../handlers/animeHandlers'

const router = Router()

router.get('/', getAllAnimes)
router.post('/', createNewAnime)

router.get('/:id', getAnimeById)
router.put('/:id', updateAnime)
router.delete('/:id', deleteAnime)

export default router
