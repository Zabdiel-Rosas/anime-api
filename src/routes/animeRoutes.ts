import { Router } from 'express'
import {
  getAllAnimes,
  createNewAnime,
  updateAnime,
  getAnimeById,
  deleteAnime
} from '../handlers/animeHandlers'

const router = Router()

router.route('/').get(getAllAnimes).post(createNewAnime)
router.route('/:id').get(getAnimeById).put(updateAnime).delete(deleteAnime)

export default router
