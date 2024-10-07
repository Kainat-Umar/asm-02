import React from 'react';
import TemplateCard from './TemplateCard';

const TemplateList = ({ templates }) => {
  return (
    <div className="template-list">
      {templates.map((template, index) => (
        <TemplateCard key={index} templateName={template} />
      ))}
    </div>
  );
};

export default TemplateList;
