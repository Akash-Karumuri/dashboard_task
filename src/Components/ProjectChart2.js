import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function EmployeePerformanceChart() {

  const data = [
    { name: 'P1', Emp1: 60, Emp2: 60, Emp3: 60, Emp4: 60, Emp5: 80 },
    { name: 'P2', Emp1: 80, Emp2: 80, Emp3: 70, Emp4: 70, Emp5:88},
    { name: 'P3', Emp1: 90, Emp2: 60, Emp3: 80, Emp4:88},
    { name: 'P4', Emp1: 70, Emp2: 70, Emp3:88},
    { name: 'P5', Emp1: 60, Emp2:88, Emp3:88},
  ];

  const colors = {
    Emp1: '#66B2FF',
    Emp2: '#E6993C',
    Emp3: '#E673B3',
    Emp4: '#B2B266',
    Emp5: '#66CCB2',
    Emp6: '#99CC66',
    Emp7: '#9999FF'
  };

  const empAverages = {
    Emp1: '80% / 60%',
    Emp2: '80% / 60%',
    Emp3: '80% / 70%',
    Emp4: '80% / 70%',
    Emp5: '80% / 60%',
    Emp6: '80% / 70%',
    Emp7: '80% / 60%'
  };

  return (
    <div className="container-fluid text-white">
      <div className="row mb-4 px-5">
        {Object.keys(empAverages).map(emp => (
          <div key={emp} className="col text-center">
            <p style={{fontSize:"10px"}}>{emp}</p>
            <p className="mb-0 px-0" style={{fontSize:"10px"}}>{empAverages[emp]}</p>
          </div>
        ))}
      </div>
      
      <div className="row">
        <div className="col">
          <ResponsiveContainer width="100%" height={230}>
            <BarChart
              data={data}
              margin={{ top: 20, right: 0, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="0 0" strokeOpacity={0.1} vertical={false} />
              <XAxis dataKey="name" />
              <YAxis 
                domain={[0, 100]} 
                ticks={[0, 20, 40, 60, 80, 100]} 
                tickFormatter={(value) => `${value}%`} 
              />
              <Tooltip formatter={(value) => `${value}%`} />
              <Legend />
              {Object.keys(colors).map(emp => (
                <Bar 
                  key={emp} 
                  dataKey={emp} 
                  fill={colors[emp]} 
                  name={emp}
                />
              ))}
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}