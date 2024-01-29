import express from "express"
import IndexController from '../controller/index.js'
import roomRoutes from './room.js'

let router = express.Router()

router.get('/', IndexController.homePage)
router.use('/rooms',roomRoutes)

export default router
