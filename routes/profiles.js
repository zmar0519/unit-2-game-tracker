import { Router } from 'express'

export {
    router
}

const router = Router()

router.get('/', isLoggedIn, profilesCtrl.index)