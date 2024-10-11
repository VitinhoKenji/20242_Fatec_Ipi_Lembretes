import React from 'react';

const LembreteLista = ({ lembretes }) => {
  return (
    <ul className="list-group">
      {lembretes.map((lembrete, index) => (
        <li key={index} className="list-group-item">
          {lembrete}
        </li>
      ))}
    </ul>
  );
};

export default LembreteLista;
