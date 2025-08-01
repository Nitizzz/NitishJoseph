import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import RadarChartComponent from '../ui/RadarChart';

const data = [
  { name: 'Sem 1', GPA: 3.58, },
  { name: 'Sem 2', GPA: 3.44, },
  { name: 'Sem 3', GPA: 3.81, },
  { name: 'Sem 4', GPA: 3.57, },
  { name: 'Sem 5', GPA: 3.66, },
  { name: 'Sem 6', GPA: 3.84, },
];

export function AcademicProgression() {
  return (
    <div style={{ width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#000', color: '#fff', padding: '40px 0' }}>
      <div style={{ width: '100%', animation: 'fadeIn 1s ease-in-out' }}>
        <h2 style={{ textAlign: 'center', color: '#fff', marginBottom: '20px', marginTop:'20px' }}>Academic Progression (GPA)</h2>
        <ResponsiveContainer width="80%" height={400} style={{ margin: 'auto' }}>
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#555" />
            <XAxis dataKey="name" tick={{ fill: '#fff' }} />
            <YAxis tick={{ fill: '#fff' }} />
            <Tooltip contentStyle={{ backgroundColor: '#333', border: '1px solid #555' }} />
            <Legend wrapperStyle={{ color: '#fff' }} />
            <Line type="monotone" dataKey="GPA" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div style={{ width: '100%', marginTop: '50px' }}>
        <RadarChartComponent />
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}