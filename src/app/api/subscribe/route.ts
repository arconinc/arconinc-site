import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email } = schema.parse(body);

    const resend = new Resend(process.env.RESEND_API_KEY);

    // Add to Resend Audience if configured, otherwise send a notification email
    if (process.env.RESEND_AUDIENCE_ID) {
      await resend.contacts.create({
        email,
        audienceId: process.env.RESEND_AUDIENCE_ID,
        unsubscribed: false,
      });
    } else {
      // Fallback: notify via email
      await resend.emails.send({
        from: "Arcon Website <noreply@arconinc.com>",
        to: ["info@arconinc.com"],
        subject: "New Newsletter Signup",
        text: `New subscriber: ${email}\n\nPlease add this email to the Arcon updates list.`,
      });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Subscribe error:", err);
    return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 });
  }
}
