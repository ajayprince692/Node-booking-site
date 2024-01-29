import express from 'express'
import roomController from '../controller/room.js'

const router=express.Router()

router.get('/',roomController.bookedRoom)
router.post('/room',roomController.createRoom)
router.get('/allcustomer',roomController.allCustomerData)
router.put('/:id',roomController.Booking)
router.delete('/:id',roomController.deleteById)
export default router
