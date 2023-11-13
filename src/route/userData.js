import express from 'express';
import getAllData from '../controller/userData.js';
import auth from '../common/auth.js';
const router =express.Router();

router.get('/',auth.validate,getAllData);

export default router;