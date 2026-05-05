import { NextResponse } from "next/server";
import { getFigmaFile } from "@/lib/figma";

export const runtime = "nodejs";

export async function GET(
  _request: Request,
  { params }: { params: { fileKey: string } }
) {
  try {
    const data = await getFigmaFile(params.fileKey);
    return NextResponse.json(data);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
