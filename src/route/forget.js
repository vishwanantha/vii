import express from 'express'
import forget from '../controller/forget.js'
const rornter =express.Router();
rornter.post('/',forget.forgetPassword)
rornter.get('/getres/:id/:token',forget.getForgetres)
rornter.post('/updatepassword',forget.updatePassword)

export default rornter;