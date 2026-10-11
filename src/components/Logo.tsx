const LOGO_SOURCE =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-x2tQx82ljfkrRUf3or4xZOliqm93oa.png";

export function LogoMark({
  size = 40,
  className = "",
  glow = false,
}: {
  size?: number;
  className?: string;
  glow?: boolean;
}) {
  return (
    <img
      src={LOGO_SOURCE}
      width={size}
      height={size}
      alt="NOVA emblem"
      className={className}
      style={{
        mixBlendMode: "screen",
        borderRadius: "50%",
        objectFit: "cover",
        filter: glow ? "drop-shadow(0 0 8px rgb(0 190 255 / 0.55))" : undefined,
      }}
    />
  );
}

export function NovaEmblem({ glow = false }: { idp?: string; glow?: boolean }) {
  return (
    <image
      href={LOGO_SOURCE}
      x="0"
      y="0"
      width="100"
      height="100"
      preserveAspectRatio="xMidYMid meet"
      style={{
        mixBlendMode: "screen",
        borderRadius: "50%",
        objectFit: "cover",
        filter: glow ? "drop-shadow(0 0 8px rgb(0 190 255 / 0.55))" : undefined,
      }}
    />
  );
}

export { LOGO_SOURCE };

/* The supplied artwork has a black matte; screen blending makes that matte transparent
   against NOVA's dark interface while preserving the emblem's blue and metal details. */

/** @deprecated Kept for existing imports; the supplied raster mark is now the source of truth. */
export function NovaEmblemLegacy() {
  return <LogoMark size={100} />;
}
