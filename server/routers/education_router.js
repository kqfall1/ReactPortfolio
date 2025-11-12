import authCtrl from '../controllers/auth_controller.js';
import educationCtrl from '../controllers/education_controller.js';
import express from 'express';

const router = express.Router();

router.route('/')
    .get(authCtrl.requireSignIn, authCtrl.requireAdmin, educationCtrl.list)
    .post(authCtrl.requireSignIn, authCtrl.requireAdmin, educationCtrl.create)
    .delete(authCtrl.requireSignIn, authCtrl.requireAdmin, educationCtrl.removeMany);
router.route('/:educationId')
    .get(authCtrl.requireSignIn, authCtrl.requireAuthorization, educationCtrl.read)
    .put(authCtrl.requireSignIn, authCtrl.requireAuthorization, educationCtrl.update)
    .delete(authCtrl.requireSignIn, authCtrl.requireAuthorization, educationCtrl.remove);
router.param('educationId', educationCtrl.educationByID);

export default router; 