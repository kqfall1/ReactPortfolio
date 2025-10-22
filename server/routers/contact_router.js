import authCtrl from '../controllers/auth_controller.js';
import contactCtrl from '../controllers/contact_controller.js';
import express from 'express'; 

const router = express.Router();

router.route('/')
    .get(authCtrl.requireSignin, authCtrl.isAdmin, contactCtrl.list)
    .post(contactCtrl.create)
    .delete(authCtrl.requireSignin, authCtrl.isAdmin, contactCtrl.removeAll);
router.route('/:contactId')
    /* I decided that only the admin users can read, write, or delete contacts because 
    contacts (that arise from the contact form on the website) are not owned by users. */ 
    .get(authCtrl.requireSignin, authCtrl.isAdmin, contactCtrl.read)
    .put(authCtrl.requireSignin, authCtrl.isAdmin, contactCtrl.update)
    .delete(authCtrl.requireSignin, authCtrl.isAdmin, contactCtrl.remove);
router.param('contactId', contactCtrl.contactByID);

export default router; 