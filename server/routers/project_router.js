import authCtrl from '../controllers/auth_controller.js';
import express from 'express'; 
import projectCtrl from '../controllers/project_controller.js';

const router = express.Router();
console.log('projectCtrl.create:', typeof projectCtrl.create);

router.route('/')
    .get(authCtrl.requireSignIn, authCtrl.requireAdmin, projectCtrl.list)
    .post(authCtrl.requireSignIn, authCtrl.requireAdmin, projectCtrl.create)
    .delete(authCtrl.requireSignIn, authCtrl.requireAdmin, projectCtrl.removeMany);
router.route('/:projectId')
    .get(authCtrl.requireSignIn, authCtrl.requireAuthorization, projectCtrl.read)
    .put(authCtrl.requireSignIn, authCtrl.requireAuthorization, projectCtrl.update)
    .delete(authCtrl.requireSignIn, authCtrl.requireAuthorization, projectCtrl.remove);
router.param('projectId', projectCtrl.projectByID);

export default router;