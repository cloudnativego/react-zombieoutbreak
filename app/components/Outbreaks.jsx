import React from 'react';
import OutbreakReport from './OutbreakReport.jsx';

export default ({outbreaks, onEdit, onDelete}) => {
  return (
    <ul className="outbreaks">{outbreaks.map(outbreak =>
      <li key={outbreak.id} className="outbreak">
        <OutbreakReport outbreak={outbreak}
          onEdit={onEdit.bind(null, outbreak.id)}
          onDelete={onDelete.bind(null, outbreak.id)}
          />
      </li>
    )}</ul>
  );
}
