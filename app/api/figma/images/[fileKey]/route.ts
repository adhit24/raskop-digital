import { NextResponse } from "next/server";
import { getFigmaImages } from "@/lib/figma";

export const runtime = "nodejs";

export async function GET(
  request: Request,
  { params }: { params: { fileKey: string } }
) {
  try {
    const { searchParams } = new URL(request.url);
    const idsParam = searchParams.get("ids") ?? "";
    const ids = idsParam.split(",").map((s) => s.trim()).filter(Boolean);
    const format = (searchParams.get("format") ?? undefined) as
      | "png"
      | "jpg"
      | "svg"
      | "pdf"
      | undefined;
    const scaleRaw = searchParams.get("scale");
    const scale = scaleRaw ? Number(scaleRaw) : undefined;

    if (ids.length === 0) {
      return NextResponse.json(
        { error: "Missing required query param: ids" },
        { status: 400 }
      );
    }

    const data = await getFigmaImages(params.fileKey, ids, { format, scale });
    return NextResponse.json(data);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
