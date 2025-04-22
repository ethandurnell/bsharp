'use client';

import { useEffect, useRef, useState } from 'react';

// adjust path if needed

export default function CanvasArea() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const [Stage, setStage] = useState<any>(null);
  const [Layer, setLayer] = useState<any>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('react-konva').then((mod) => {
        setStage(() => mod.Stage);
        setLayer(() => mod.Layer);
      });

      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    }
  }, []);

  if (!Stage || !Layer) return null;

  return (
    <div ref={containerRef} className="absolute inset-0">
      <Stage width={dimensions.width} height={dimensions.height}>
        <Layer>
          {/* We'll add shapes/text/etc here later */}
        </Layer>
      </Stage>
    </div>
  );
}
