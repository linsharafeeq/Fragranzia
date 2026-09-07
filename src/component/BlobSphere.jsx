export default function BlobSphere({
  size,
  className = "",
  color = "#0d3547",
  textColor = "#ffffff",
  lobes = 7,
  amplitude = 10,
  children,
  ...props
}) {
  const path = buildScallopPath(120, 120, 100, lobes, amplitude);

  return (
    <div
      className={`relative inline-block ${className}`}
      style={{
        ...(size && {
          width: size,
          height: size,
        }),
      }}
      {...props}
    >
      <svg viewBox="0 0 240 240" className="w-full h-full">
        <path fill={color} d={path} />
      </svg>
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "22%",
          color: textColor,
          fontWeight: 600,
        }}
      >
        {children}
      </div>
    </div>
  );
}

// Builds a smooth scalloped outline with evenly spaced lobes.
function buildScallopPath(cx, cy, radius, lobes, amplitude) {
  const steps = lobes * 2; // alternating peaks (out) and valleys (in)
  const pts = [];
  for (let i = 0; i < steps; i++) {
    const angle = (i / steps) * Math.PI * 2 - Math.PI / 2;
    const r = radius + (i % 2 === 0 ? amplitude : -amplitude);
    pts.push([cx + Math.cos(angle) * r, cy + Math.sin(angle) * r]);
  }

  // Catmull-Rom -> cubic Bézier for a smooth closed curve
  let d = `M ${pts[0][0].toFixed(2)} ${pts[0][1].toFixed(2)} `;
  const n = pts.length;
  for (let i = 0; i < n; i++) {
    const p0 = pts[(i - 1 + n) % n];
    const p1 = pts[i];
    const p2 = pts[(i + 1) % n];
    const p3 = pts[(i + 2) % n];
    const c1x = p1[0] + (p2[0] - p0[0]) / 6;
    const c1y = p1[1] + (p2[1] - p0[1]) / 6;
    const c2x = p2[0] - (p3[0] - p1[0]) / 6;
    const c2y = p2[1] - (p3[1] - p1[1]) / 6;
    d += `C ${c1x.toFixed(2)} ${c1y.toFixed(2)}, ${c2x.toFixed(2)} ${c2y.toFixed(2)}, ${p2[0].toFixed(2)} ${p2[1].toFixed(2)} `;
  }
  return d + "Z";
}
