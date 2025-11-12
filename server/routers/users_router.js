import authCtrl from '../controllers/auth_controller.js';
import express from 'express'; 
import userCtrl from '../controllers/user_controller.js'; 

const router = express.Router(); 

router.route('/')
    .get(authCtrl.requireSignIn, authCtrl.requireAdmin, userCtrl.list)
    .post(userCtrl.create)
    .delete(authCtrl.requireSignIn, authCtrl.requireAdmin, userCtrl.removeMany);
router.route('/:userId')
    .get(authCtrl.requireSignIn, authCtrl.requireAuthorization, userCtrl.read)
    .put(authCtrl.requireSignIn, authCtrl.requireAuthorization, userCtrl.update)
    .delete(authCtrl.requireSignIn, authCtrl.requireAuthorization, userCtrl.remove)
router.param('userId', userCtrl.userByID); 

export default router; 