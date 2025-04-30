'use client'; // <- necessário

import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

export function CircularProgress() {
  const data = [
    { name: 'Progress', value: 50 },
    { name: 'Rest', value: 50 },
  ];
  
  const COLORS = ['#008cff', '#2d2d2d'];

  return (
    <PieChart width={180} height={180}>
      <Pie
        data={data}
        startAngle={90}
        endAngle={-270}
        innerRadius={62}
        outerRadius={80}
        dataKey="value"
        stroke="none"
        cornerRadius={30}
      >
        {data.map((_, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index]} />
        ))}
      </Pie>
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="white"
        fontSize={28}
      >
        50%
      </text>
    </PieChart>
  );
}
