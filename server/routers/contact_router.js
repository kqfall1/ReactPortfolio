import authCtrl from '../controllers/auth_controller.js';
import contactCtrl from '../controllers/contact_controller.js';
import express from 'express'; 

const router = express.Router();

router.route('/')
    .get(contactCtrl.list)
    .post(authCtrl.requireSignin, contactCtrl.create) 
    .delete(authCtrl.requireSignin, authCtrl.requireAdmin, contactCtrl.removeMany);
router.route('/:contactId')
    .get(authCtrl.requireSignin, authCtrl.requireAdmin, contactCtrl.read)
    .put(authCtrl.requireSignin, authCtrl.requireAdmin, contactCtrl.update)
    .delete(authCtrl.requireSignin, authCtrl.requireAdmin, contactCtrl.remove);
router.param('contactId', contactCtrl.contactByID);

export default router; 