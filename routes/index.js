import express from "express"
import indexController from '../controller/index.js'
import roomRoutes from './room.js'

let router = express.Router()

router.get('/', indexController.homePage)
router.use('/rooms',roomRoutes)

export default router