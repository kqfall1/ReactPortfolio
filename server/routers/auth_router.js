import authCtrl from '../controllers/auth_controller.js';
import express from 'express';

const router = express.Router();
router.route('/signin').post(authCtrl.signin);
router.route('/signout').get(authCtrl.signout);

export default router; 