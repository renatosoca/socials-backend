import { createTransport } from 'nodemailer';
import { readFileSync } from 'fs';
import { compile } from 'handlebars';

export const sendEmailRegister = async (email: string, name: string, lastName: string, token: string) => {
  try {
    const transport = createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const file = __dirname + `/../templates/emails/email-register.handlebars`;
    const template = compile(readFileSync(file, 'utf-8'));
    const html = template({ name, lastName, email, token });

    const sendEmail = await transport.sendMail({
      from: `Rena 👻 <u18215194@gmail.com>`,
      to: email,
      subject: 'Confirm account',
      html,
    })

    console.log(sendEmail.messageId)
    return sendEmail.messageId;
  } catch (error) {
    console.log(error)
    return error;
  }
}