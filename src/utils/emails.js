import { API_KEY } from "../config/configEnv.js";
import { Resend } from 'resend';

export async function enviarCorreo(report) {
  const resend = new Resend(API_KEY);

  const { data, error } = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: [`${report.email}`], //persona al que se le envia el reporte
    subject: 'Reporte',
    html: `<strong>${report.mensaje}</strong>`, //mensaje del reporte
  });

  if (error) {
    return { error };
  }

  return { data };
}



