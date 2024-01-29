import homeController from "../controller/index.js";
import express from 'express'
import roomRoutes from './room.js'

let router=express.Router()

router.get('/',homeController.homePage)
router.use('/room',roomRoutes)

export default router