import emailjs from '@emailjs/browser';
export class ManageEmail {
  private serviceId:string;
  private templateId:string;

  constructor() {
    const config = useRuntimeConfig();
    this.serviceId = config.public.emailjsServiceId ?? '';
    this.templateId = config.public.emailjsTemplateId ?? '';
    if(import.meta.client){
      emailjs.init({
        publicKey: config.public.emailjsPublicKey ?? '',
        blockHeadless: true,
        blockList: {
          list: ['foo@emailjs.com', 'bar@emailjs.com'],
          watchVariable: 'email',
        },
        limitRate: {
          throttle: 30000,
        },
      });
    }

  }

  public async sendEmail(templateParams:any):Promise<boolean> {
    // Cas où le serveur essaierai d'exécuter plutôt que le client
    if(!import.meta.client) return false;

    // Sinon, on essaie d'envoyer l'email
    let res:boolean;
    try {
      await emailjs.send(this.serviceId, this.templateId, templateParams);
      res = true;
    } catch (error) {
      console.log("[ManageEmail] Une erreur est survenue lors de l'envoi de l'email via EmailJS");
      res = false;
    }
    return res;
  }

}