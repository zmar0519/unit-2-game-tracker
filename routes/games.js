import { Router } from 'express'
import * as gamesCtrl from '../controllers/games.js'
import { isLoggedIn } from '../middleware/middleware.js'

export {
  router
}

const router = Router()

router.get('/', gamesCtrl.index)
router.post('/', isLoggedIn, gamesCtrl.create)
router.get('/:id', gamesCtrl.show)
router.get('/:id/edit', isLoggedIn, gamesCtrl.edit)
router.put('/:id', isLoggedIn, gamesCtrl.update)
router.delete('/:id', isLoggedIn, gamesCtrl.delete)
