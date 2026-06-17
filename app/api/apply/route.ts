import { NextResponse } from "next/server";

type ApplicationBody = {
  name?: string;
  age?: string;
  email?: string;
};

function getFormsparkId(): string | undefined {
  const direct =
    process.env.FORMSPARK_FORM_ID ??
    process.env.FORMSPARK_ID ??
    process.env.NEXT_PUBLIC_FORMSPARK_FORM_ID;

  if (direct) return direct.replace(/^https?:\/\/submit-form\.com\//, "");

  const url = process.env.FORMSPARK_URL ?? process.env.SUBMIT_FORM_URL;
  if (url) {
    const match = url.match(/submit-form\.com\/([^/?#]+)/);
    return match?.[1];
  }

  return undefined;
}

export async function POST(request: Request) {
  const body = (await request.json()) as ApplicationBody;

  const required = ["name", "age", "email"] as const;

  for (const field of required) {
    if (!body[field]?.toString().trim()) {
      return NextResponse.json(
        { error: `Missing field: ${field}` },
        { status: 400 },
      );
    }
  }

  const formId = getFormsparkId();

  if (!formId) {
    console.error(
      "Formspark form ID missing. Set FORMSPARK_FORM_ID in Vercel environment variables.",
    );
    return NextResponse.json(
      {
        error:
          "Waitlist is not configured. Set FORMSPARK_FORM_ID in Vercel.",
      },
      { status: 503 },
    );
  }

  const response = await fetch(`https://submit-form.com/${formId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: body.name,
      age: body.age,
      email: body.email,
      _email: {
        subject: `Plus One waitlist — ${body.name}`,
      },
    }),
  });

  if (!response.ok) {
    const detail = await response.text();
    console.error("Formspark error:", detail);
    return NextResponse.json(
      { error: "Failed to submit. Please try again." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
