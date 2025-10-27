import authCtrl from '../controllers/auth_controller.js';
import express from 'express'; 
import userCtrl from '../controllers/user_controller.js'; 

const router = express.Router(); 

router.route('/')
    .get(authCtrl.requireSignin, authCtrl.isAdmin, userCtrl.list)
    .post(userCtrl.create)
    .delete(authCtrl.requireSignin, authCtrl.isAdmin, userCtrl.removeMany);
router.route('/:userId')
    .get(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.read)
    .put(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.update)
    .delete(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.remove)
router.param('userId', userCtrl.userByID); 

export default router; 