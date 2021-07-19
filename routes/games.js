import { Router } from 'express'
import * as gamesCtrl from '../controllers/games.js'
import { isLoggedIn } from '../middleware/middleware.js'

export {
  router
}

const router = Router()

router.get('/', gamesCtrl.index)
router.post('/', isLoggedIn, gamesCtrl.create)
