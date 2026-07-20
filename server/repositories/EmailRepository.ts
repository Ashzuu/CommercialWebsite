export class EmailRepository {
  public async sendEmail(serviceId: string, templateId: string, publicKey: string, params: Record<string, any>): Promise<boolean> {
    try {
      await $fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: {
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: params,
        },
      });
      return true;
    } catch (error: any) {
      console.error('[EmailRepository] Error calling EmailJS API:', error);
      return false;
    }
  }
}
