import type { NextApiRequest, NextApiResponse } from 'next';
import { EmailTemplate } from '../../components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);



export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // const queryparams = req.query; // Para obtener los parámetros de la URL
    const {nombre, email, asunto, emailContent, remitente} = req.body; // Para obtener los datos del cuerpo de la solicitud (POST, PUT, etc.)


    const data = await resend.emails.send({
      from: 'Ceducaty México<direccion@ceducaty.com>',
      to: [email],
      subject: asunto,
      react: EmailTemplate({ emailContent }),
      reply_to: 'ceducaty@gmail.com'
    });
    
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};