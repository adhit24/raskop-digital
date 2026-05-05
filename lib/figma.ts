const FIGMA_API_BASE = "https://api.figma.com/v1";

function getFigmaToken() {
  const token = process.env.FIGMA_TOKEN;
  if (!token) {
    throw new Error("Missing FIGMA_TOKEN environment variable");
  }
  return token;
}

async function figmaFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${FIGMA_API_BASE}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${getFigmaToken()}`,
      ...(init?.headers ?? {}),
    },
    cache: "no-store",
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Figma API error ${res.status}: ${text || res.statusText}`);
  }

  return (await res.json()) as T;
}

export function getFigmaFile(fileKey: string) {
  return figmaFetch(`/files/${encodeURIComponent(fileKey)}`);
}

export function getFigmaImages(
  fileKey: string,
  ids: string[],
  options?: { format?: "png" | "jpg" | "svg" | "pdf"; scale?: number }
) {
  const searchParams = new URLSearchParams();
  searchParams.set("ids", ids.join(","));
  if (options?.format) searchParams.set("format", options.format);
  if (options?.scale) searchParams.set("scale", String(options.scale));

  return figmaFetch(`/images/${encodeURIComponent(fileKey)}?${searchParams.toString()}`);
}
