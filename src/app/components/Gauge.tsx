import React from 'react';

interface GaugeProps {
  value: number;
  color?: string;
  showLabels?: boolean;
  min?: string;
  max?: string;
}

export function Gauge({ value, color = "#ef4d23", showLabels, min, max }: GaugeProps) {
  const activeCount = Math.round((value / 100) * 40);
  const ticks = Array.from({ length: 40 });

  return (
    <div className="w-full max-w-[260px] mx-auto">
      <svg viewBox="0 0 200 120" className="w-full h-auto overflow-visible">
        {ticks.map((_, i) => {
          const angle = Math.PI + (i / 39) * Math.PI;
          const isActive = i < activeCount;
          const r = 80;
          const rInner = 70;
          const cx = 100;
          const cy = 100;
          
          const x1 = cx + rInner * Math.cos(angle);
          const y1 = cy + rInner * Math.sin(angle);
          const x2 = cx + r * Math.cos(angle);
          const y2 = cy + r * Math.sin(angle);

          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              strokeWidth={2.5}
              strokeLinecap="round"
              stroke={isActive ? color : "#d4d4d8"}
            />
          );
        })}
        <text
          x={100}
          y={105}
          textAnchor="middle"
          fontSize={22}
          fontWeight={600}
          fill="#171717"
        >
          {value}%
        </text>
      </svg>
      {showLabels && min && max && (
        <div className="flex justify-between items-center text-[11px] text-neutral-500 mt-2 px-6">
          <span>{min}</span>
          <span>{max}</span>
        </div>
      )}
    </div>
  );
}
