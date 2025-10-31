import authCtrl from '../controllers/auth_controller.js';
import contactCtrl from '../controllers/contact_controller.js';
import express from 'express'; 

const router = express.Router();

router.route('/')
    .get(authCtrl.requireSignin, authCtrl.isAdmin, contactCtrl.list)
    .post(contactCtrl.create)
    .delete(authCtrl.requireSignin, authCtrl.isAdmin, contactCtrl.removeMany);
router.route('/:contactId')
    .get(authCtrl.requireSignin, authCtrl.isAdmin, contactCtrl.read)
    .put(authCtrl.requireSignin, authCtrl.isAdmin, contactCtrl.update)
    .delete(authCtrl.requireSignin, authCtrl.isAdmin, contactCtrl.remove);
router.param('contactId', contactCtrl.contactByID);

export default router; 