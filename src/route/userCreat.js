import express from 'express'
import mailVerify from '../controller/userCreat.js'

const router=express.Router()

router.post('/',mailVerify)


export default router