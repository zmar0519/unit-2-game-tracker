import { Router } from 'express'
import * as gamesCtrl from '../controllers/games.js'

export {
  router
}

const router = Router()

router.get("/", tacosCtrl.index)
