import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const data = [
  { subject: 'Java DSA', A: 140, fullMark: 150 },
  { subject: 'Prompt Engineering', A: 135, fullMark: 150 },
  { subject: 'Python', A: 130, fullMark: 150 },
  { subject: 'React', A: 120, fullMark: 150 },
  { subject: 'C/C++', A: 85, fullMark: 150 },
];

const RadarChartComponent = () => {
  return (
    <div style={{ width: '100%', animation: 'fadeIn 2s ease-in-out' }}>
      <h2 style={{ textAlign: 'center', color: '#fff', marginBottom: '20px' }}>Skill Set Radar</h2>
      <ResponsiveContainer width="80%" height={400} style={{ margin: 'auto' }}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid stroke="#555" />
          <PolarAngleAxis dataKey="subject" tick={{ fill: '#fff' }} />
          <PolarRadiusAxis angle={30} domain={[0, 150]} tick={{ fill: 'none' }} axisLine={{ stroke: 'none' }} />
          <Radar name="Proficiency" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          <Legend wrapperStyle={{ color: '#fff' }} />
          <Tooltip contentStyle={{ backgroundColor: '#333', border: '1px solid #555' }} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RadarChartComponent;