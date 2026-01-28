import emailjs from '@emailjs/browser';
export class ManageEmail {
  private serviceId:string;
  private templateId:string;

  constructor() {
    const config = useRuntimeConfig();
    this.serviceId = config.public.emailjsServiceId ?? '';
    this.templateId = config.public.emailjsTemplateId ?? '';
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

  public async sendEmail(templateParams:any):Promise<boolean> {
    let res:boolean;
    try {
      await emailjs.send(this.serviceId, this.templateId, templateParams);
      res = true;
    } catch (error) {
      console.error(error);
      res = false;
    }
    return res;
  }

}