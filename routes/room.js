import express from "express"
import roomController from '../controller/room.js'

let router = express.Router()

router.get('/',roomController.bookedRooms)
router.get('/customer',roomController.allCustomer)
router.post('/createRoom',roomController.createRoom)
router.delete('/:id',roomController.deleteRoom)
router.put('/:id',roomController.Booking)

export default router
