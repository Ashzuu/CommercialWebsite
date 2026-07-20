import { defineEventHandler } from 'h3';
import { ContactController } from '../controllers/ContactController';

const contactController = new ContactController();

export default defineEventHandler(async (event) => {
  return await contactController.handleContactSubmission(event);
});
