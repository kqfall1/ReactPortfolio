import authCtrl from '../controllers/auth_controller.js';
import educationCtrl from '../controllers/education_controller.js';
import express from 'express';

const router = express.Router();

router.route('/')
    .get(educationCtrl.list)
    .post(authCtrl.requireSignin, authCtrl.isAdmin, educationCtrl.create)
    .delete(authCtrl.requireSignin, authCtrl.isAdmin, educationCtrl.removeMany);
router.route('/:educationId')
    .get(educationCtrl.read)
    .put(authCtrl.requireSignin, authCtrl.isAdmin, educationCtrl.update)
    .delete(authCtrl.requireSignin, authCtrl.isAdmin, educationCtrl.remove);
router.param('educationId', educationCtrl.educationByID);

export default router; 