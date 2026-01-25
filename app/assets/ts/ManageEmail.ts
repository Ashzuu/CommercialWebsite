import emailjs from '@emailjs/browser';

export class ManageEmail {
  private serviceId:string;
  private templateId:string;

  constructor() {
    this.serviceId = "service_md6z2fo";
    this.templateId = "template_24hbv7e";
    emailjs.init({
      publicKey: 'H5FE663Sp-7VW_CoC',
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