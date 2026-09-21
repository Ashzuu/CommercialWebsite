import type { H3Event} from 'h3';
import { createError, readBody } from 'h3';
import type { ContactData } from '../services/ContactService';
import { ContactService } from '../services/ContactService';

export class ContactController {
  private contactService: ContactService;

  constructor() {
    this.contactService = new ContactService();
  }

  public async handleContactSubmission(event: H3Event): Promise<{ success: boolean }> {
    const body = await readBody(event);

    if (!body || !body.nom || !body.prenom || !body.email || !body.objet || !body.message) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Tous les champs du formulaire doivent être remplis.',
      });
    }

    const contactData: ContactData = {
      nom: body.nom,
      prenom: body.prenom,
      email: body.email,
      objet: body.objet,
      message: body.message,
    };

    // 2. Validation du format de l'e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(contactData.email)) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Le format de l\'adresse e-mail est invalide.',
      });
    }

    // 3. Appel du service
    const success = await this.contactService.processContactForm(contactData);

    if (!success) {
      throw createError({
        statusCode: 500,
        statusMessage: 'Une erreur interne est survenue lors du traitement du message.',
      });
    }

    return { success: true };
  }
}
