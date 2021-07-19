import { Router } from 'express'
import * as game from "../controllers/tacos.js"
import { isLoggedIn } from '../middleware/middleware.js'

export {
  router
}

const router = Router()

router.get("/", )
