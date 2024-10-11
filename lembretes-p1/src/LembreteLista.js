import React from 'react';

const LembreteLista = ({ lembretes }) => {
  return (
    <ul className="list-group shadow">
      {lembretes.map((lembrete, index) => (
        <li key={index} className="list-group-item 
        list-group-item-action d-flex justify-content-between 
        align-items-center" style={{wordBreak:'break-word'}}>
          {lembrete}
        </li>
      ))}
    </ul>
  );
};

export default LembreteLista;
