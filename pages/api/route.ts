import { EmailTemplate } from '../../components/email-template';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: 'Ceducaty <ceducaty@ceducaty.com>',
      to: ['gerardoperezsoria@gmail.com'],
      subject: 'Hello world',
      react: EmailTemplate({ emailContent:"Herry" }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
