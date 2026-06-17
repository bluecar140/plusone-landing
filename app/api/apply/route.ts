import { NextResponse } from "next/server";

type ApplicationBody = {
  firstName?: string;
  age?: string;
  city?: string;
  instagram?: string;
  email?: string;
  hasPlusOne?: string;
  relationshipStatus?: string;
  why?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as ApplicationBody;

  const required = [
    "firstName",
    "age",
    "city",
    "instagram",
    "email",
    "hasPlusOne",
    "relationshipStatus",
    "why",
  ] as const;

  for (const field of required) {
    if (!body[field]?.toString().trim()) {
      return NextResponse.json(
        { error: `Missing field: ${field}` },
        { status: 400 },
      );
    }
  }

  const formId = process.env.FORMSPREE_FORM_ID;

  if (!formId) {
    console.error(
      "FORMSPREE_FORM_ID is not set. Add it in Vercel → Settings → Environment Variables.",
    );
    return NextResponse.json(
      {
        error:
          "Waitlist is not configured yet. Set FORMSPREE_FORM_ID in your environment.",
      },
      { status: 503 },
    );
  }

  const response = await fetch(`https://formspree.io/f/${formId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      firstName: body.firstName,
      age: body.age,
      city: body.city,
      instagram: body.instagram,
      email: body.email,
      hasPlusOne: body.hasPlusOne,
      relationshipStatus: body.relationshipStatus,
      why: body.why,
      _subject: `Plus One application — ${body.firstName} (${body.city})`,
    }),
  });

  if (!response.ok) {
    const detail = await response.text();
    console.error("Formspree error:", detail);
    return NextResponse.json(
      { error: "Failed to submit application. Please try again." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
