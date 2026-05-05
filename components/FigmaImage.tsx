"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

type FigmaImagesResponse = {
  images?: Record<string, string>;
  err?: string;
};

type Props = {
  fileKey: string;
  nodeId: string;
  alt: string;
  className?: string;
  scale?: number;
};

export default function FigmaImage({
  fileKey,
  nodeId,
  alt,
  className,
  scale = 2,
}: Props) {
  const [src, setSrc] = useState<string | null>(null);
  const [failed, setFailed] = useState(false);

  const url = useMemo(() => {
    const sp = new URLSearchParams();
    sp.set("ids", nodeId);
    sp.set("format", "png");
    sp.set("scale", String(scale));
    return `/api/figma/images/${encodeURIComponent(fileKey)}?${sp.toString()}`;
  }, [fileKey, nodeId, scale]);

  useEffect(() => {
    let alive = true;
    setSrc(null);
    setFailed(false);

    fetch(url)
      .then((r) => r.json())
      .then((data: FigmaImagesResponse) => {
        const nextSrc = data?.images?.[nodeId];
        if (!alive) return;
        if (nextSrc) setSrc(nextSrc);
        else setFailed(true);
      })
      .catch(() => {
        if (!alive) return;
        setFailed(true);
      });

    return () => {
      alive = false;
    };
  }, [url, nodeId]);

  if (failed) {
    return (
      <div
        className={[
          "bg-navy/5 border border-navy/10 rounded-3xl flex items-center justify-center",
          className ?? "",
        ].join(" ")}
      >
        <span className="font-outfit text-xs text-navy/50">
          Tidak bisa memuat asset Figma (cek FIGMA_TOKEN).
        </span>
      </div>
    );
  }

  if (!src) {
    return (
      <div
        className={[
          "bg-navy/5 border border-navy/10 rounded-3xl animate-pulse",
          className ?? "",
        ].join(" ")}
      />
    );
  }

  return (
    <motion.img
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
    />
  );
}

