import express from 'express';
import {
  submitContact,
  getContacts,
  getContactById,
  updateContactStatus,
  deleteContact
} from '../controllers/contactController.js';

const router = express.Router();

router.post('/', submitContact);
router.get('/', getContacts);
router.get('/:id', getContactById);
router.patch('/:id', updateContactStatus);
router.delete('/:id', deleteContact);

export default router;
