import { EmailRepository } from '../repositories/EmailRepository';

export interface ContactData {
  nom: string;
  prenom: string;
  email: string;
  objet: string;
  message: string;
}

export class ContactService {
  private emailRepository: EmailRepository;

  constructor() {
    this.emailRepository = new EmailRepository();
  }

  public async processContactForm(data: ContactData): Promise<boolean> {
    // Nettoyage et formatage des données (suppression des espaces superflus)
    const formattedParams = {
      nom: data.nom.trim(),
      prenom: data.prenom.trim(),
      email: data.email.trim().toLowerCase(),
      objet: data.objet.trim(),
      message: data.message.trim(),
    };

    // Récupération de la configuration privée
    const config = useRuntimeConfig();
    const serviceId = config.emailjsServiceId;
    const templateId = config.emailjsTemplateId;
    const publicKey = config.emailjsPublicKey;

    if (!serviceId || !templateId || !publicKey) {
      console.error('[ContactService] Missing EmailJS server configuration.');
      return false;
    }

    // Appel du repository
    return await this.emailRepository.sendEmail(serviceId, templateId, publicKey, formattedParams);
  }
}
