import { EmailTemplate, AutoReplyEmailTemplate } from '../../../components/EmailTemplate';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

export async function POST(request: Request) {
  try {
    const {
      email,
      subject,
      name,
      phone,
      code,
      location,
      eventDate,
      services,
      event,
      referral,
      message,
      isAutoReply,
    } = await request.json();

    if (!isAutoReply) {
      const emailContent = await EmailTemplate({
        name,
        email,
        phone,
        code,
        location,
        eventDate,
        services,
        event,
        referral,
        message,
      });

      if (emailContent) {
        const msg = {
          to: 'contact@contact.onefocusphotography.co.in',
          from: email,
          subject: subject,
          html: emailContent.toString(),
        };

        try {
          await sgMail.send(msg);
          return Response.json({ success: true });
        } catch (error) {
          return Response.json({ error }, { status: 400 });
        }
      } else {
        return Response.json({ error: 'Failed to generate email content' }, { status: 500 });
      }
    } else {
      const autoReplyContent = await AutoReplyEmailTemplate({ name: name });

      if (autoReplyContent) {
        const msg = {
          to: email,
          from: 'contact@onefocusphotography.co.in',
          subject: subject,
          html: autoReplyContent.toString(),
        };

        try {
          await sgMail.send(msg);
          return Response.json({ success: true });
        } catch (error) {
          return Response.json({ error }, { status: 400 });
        }
      } else {
        return Response.json({ error: 'Failed to generate auto-reply content' }, { status: 500 });
      }
    }
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}