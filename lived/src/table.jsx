import React from 'react';

import './Pro.css';
const Table = () => {
  const startups = [
    { sno: '1.', name: 'WowIndia', description: 'A startup with WOW Ideas.' },
    { sno: '2.', name: 'Loreum Ipsum', description: 'Loreum Ipsum' },
    { sno: '2.', name: 'Loreum Ipsum', description: 'Loreum Ipsum' },
    { sno: '2.', name: 'Loreum Ipsum', description: 'Loreum Ipsum' },
    { sno: '2.', name: 'Loreum Ipsum', description: 'Loreum Ipsum' },
    { sno: '2.', name: 'Loreum Ipsum', description: 'Loreum Ipsum' },
    { sno: '0.0', name: 'Final Footer', description: 'Loreum Ipsum Text' },
  ];

  return (
    <div>
      <table className='table'>
        <thead>
          <tr>
            <th>SNO</th>
            <th>Startup Name</th>
            <th>Startup Description </th>
          </tr>
        </thead>
        <tbody>
          {startups.map((startup, index) => (
            <tr key={index} data-sno={startup.sno}>
              <td>{startup.sno}</td>
              <td>{startup.name}</td>
              <td>{startup.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
