import authCtrl from '../controllers/auth_controller.js';
import contactCtrl from '../controllers/contact_controller.js';
import express from 'express'; 

const router = express.Router();

router.route('/')
    .get(authCtrl.requireSignIn, authCtrl.requireAdmin, contactCtrl.list)
    .post(contactCtrl.create) 
    .delete(authCtrl.requireSignIn, authCtrl.requireAdmin, contactCtrl.removeMany);
router.route('/:contactId')
    .get(authCtrl.requireSignIn, authCtrl.requireAuthorization, contactCtrl.read)
    .put(authCtrl.requireSignIn, authCtrl.requireAuthorization, contactCtrl.update)
    .delete(authCtrl.requireSignIn, authCtrl.requireAuthorization, contactCtrl.remove);
router.param('contactId', contactCtrl.contactByID);

export default router; 