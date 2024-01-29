import homeController from '../controller/index.js'
import express from 'express'
import RoomRoutes from './room.js'

let router=express.Router()

router.get('/',homeController.homePage)
router.use('/room',RoomRoutes)

export default router