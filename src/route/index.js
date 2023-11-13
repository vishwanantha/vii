import express from 'express'
import userCreate from './userCreat.js'
import login from './login.js'
import userData from './userData.js'
const router=express()
router.use('/user',userCreate)
router.use('/login',login)
router.use('/use',userData)
export default router