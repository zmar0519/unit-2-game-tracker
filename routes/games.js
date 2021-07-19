import { Router } from 'express'
import * as gamesCtrl from '../controllers/games.js'
import { isLoggedIn } from '../middleware/middleware.js'

export {
  router
}

const router = Router()

router.post('/', isLoggedIn, gamesCtrl.create)
router.get('/', gamesCtrl.index)
router.get('/:id', gamesCtrl.show)
