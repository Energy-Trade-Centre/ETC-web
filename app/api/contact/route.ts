import { NextResponse } from 'next/server';

// Force the Node.js runtime — Resend SDK uses node-only APIs.
export const runtime = 'nodejs';

const TO = 'daniel@energytradecentre.com';
const FROM = 'ETC website <onboarding@resend.dev>'; // swap to noreply@energytradecentre.com once domain is verified
const RESEND_API = 'https://api.resend.com/emails';

type ContactPayload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  company?: string;
  role?: string;
  message?: string;
  // Honeypot — real users never fill this. If non-empty we silently 200.
  website?: string;
};

function escapeHtml(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function isEmail(s: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

export async function POST(req: Request) {
  let body: ContactPayload;
  try {
    body = (await req.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON' }, { status: 400 });
  }

  // Honeypot — bots tend to fill every field. Pretend success and drop.
  if (body.website && body.website.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  const firstName = (body.firstName || '').trim();
  const lastName = (body.lastName || '').trim();
  const email = (body.email || '').trim();
  const company = (body.company || '').trim();
  const role = (body.role || '').trim();
  const message = (body.message || '').trim();

  if (!firstName || !lastName || !email || !company) {
    return NextResponse.json({ ok: false, error: 'Missing required fields' }, { status: 400 });
  }
  if (!isEmail(email)) {
    return NextResponse.json({ ok: false, error: 'Invalid email' }, { status: 400 });
  }
  // Soft length caps — refuse pathological payloads.
  if (firstName.length > 100 || lastName.length > 100 || company.length > 200 || message.length > 5000) {
    return NextResponse.json({ ok: false, error: 'Field too long' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY missing — contact form cannot deliver email.');
    return NextResponse.json({ ok: false, error: 'Email service not configured' }, { status: 500 });
  }

  const fullName = `${firstName} ${lastName}`;
  const subject = `New contact form submission — ${role || 'unspecified role'} @ ${company}`;

  const text = [
    `New ETC website contact submission`,
    ``,
    `Name:    ${fullName}`,
    `Email:   ${email}`,
    `Company: ${company}`,
    `Role:    ${role || '—'}`,
    ``,
    `Message:`,
    message || '(none)',
    ``,
    `—`,
    `Submitted via energytradecentre.com/contact`,
  ].join('\n');

  const html = `
<!doctype html>
<html><body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:#111;max-width:560px;margin:0 auto;padding:24px">
  <h2 style="margin:0 0 16px">New contact form submission</h2>
  <table style="border-collapse:collapse;width:100%;font-size:14px;line-height:1.5">
    <tr><td style="padding:6px 0;width:120px;color:#555">Name</td><td style="padding:6px 0">${escapeHtml(fullName)}</td></tr>
    <tr><td style="padding:6px 0;color:#555">Email</td><td style="padding:6px 0"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
    <tr><td style="padding:6px 0;color:#555">Company</td><td style="padding:6px 0">${escapeHtml(company)}</td></tr>
    <tr><td style="padding:6px 0;color:#555">Role</td><td style="padding:6px 0">${escapeHtml(role) || '&mdash;'}</td></tr>
  </table>
  ${message ? `<h3 style="margin:24px 0 8px;font-size:14px">Message</h3><div style="padding:12px;background:#f7f7f7;border-radius:6px;white-space:pre-wrap;font-size:14px;line-height:1.5">${escapeHtml(message)}</div>` : ''}
  <p style="margin-top:32px;color:#999;font-size:12px">Submitted via energytradecentre.com/contact</p>
</body></html>`.trim();

  try {
    const resp = await fetch(RESEND_API, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM,
        to: [TO],
        reply_to: email,
        subject,
        text,
        html,
      }),
    });

    if (!resp.ok) {
      const errBody = await resp.text();
      console.error('Resend send failed', resp.status, errBody);
      return NextResponse.json({ ok: false, error: 'Send failed' }, { status: 502 });
    }
  } catch (err) {
    console.error('Resend send threw', err);
    return NextResponse.json({ ok: false, error: 'Send error' }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
