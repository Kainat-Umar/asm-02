import React from 'react';

const TemplateCard = ({ templateName }) => {
  return (
    <div className="template-card">
      <h3>{templateName}</h3>
      <p>This is the {templateName} template.</p>
    </div>
  );
};

export default TemplateCard;
