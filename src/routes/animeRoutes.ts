import { Router } from 'express'
import { getAllAnimes, createNewAnime } from '../handlers/animeHandlers'

const router = Router()

router.get('/', getAllAnimes)

router.post('/', createNewAnime)

export default router
