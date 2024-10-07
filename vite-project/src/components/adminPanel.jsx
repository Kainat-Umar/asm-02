import React, { useState } from 'react';
import TemplateList from './TemplateList';
import RandomSelectButton from './RandomSelectButton';

const AdminPanel = () => {
  const templates = ['Coffee Shop', 'Restaurant', 'Foodly'];
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const selectRandomTemplate = () => {
    const randomIndex = Math.floor(Math.random() * templates.length);
    setSelectedTemplate(templates[randomIndex]);
  };

  return (
    <div className="admin-panel">
      <h1>Admin Panel</h1>
      <TemplateList templates={templates} />
      <RandomSelectButton onSelectRandom={selectRandomTemplate} />
      {selectedTemplate && <h2>Selected Template: {selectedTemplate}</h2>}
    </div>
  );
};

export default AdminPanel;