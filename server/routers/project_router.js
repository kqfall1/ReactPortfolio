import authCtrl from '../controllers/auth_controller.js';
import express from 'express'; 
import projectCtrl from '../controllers/project_controller.js';

const router = express.Router();

router.route('/')
    .get(projectCtrl.list)
    .post(authCtrl.requireSignin, authCtrl.isAdmin, projectCtrl.create)
    .delete(authCtrl.requireSignin, authCtrl.isAdmin, projectCtrl.removeMany);
router.route('/:projectId')
    .get(projectCtrl.read)
    .put(authCtrl.requireSignin, authCtrl.isAdmin, projectCtrl.update)
    .delete(authCtrl.requireSignin, authCtrl.isAdmin, projectCtrl.remove);
router.param('projectId', projectCtrl.projectByID);

export default router;