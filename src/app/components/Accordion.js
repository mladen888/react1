'use client';
import React, { useState } from 'react';

const Accordion = () => {
  const [openSection, setOpenSection] = useState();

  const toggleSection = (i) => {
    setOpenSection(openSection === i ? null : i);
  };

  const sections = [
    { title: 'Section 1', content: '1st section is opened' },
    { title: 'Section 2', content: '2nd section is opened' },
    { title: 'Section 3', content: '3rd section is opened' },
  ];

  return (
    <div>
      {sections.map((section, i) => (
        <div key={i}>
          <button onClick={() => toggleSection(i)}>
            {section.title}
          </button>
          {openSection === i && <div>{section.content}</div>}
        </div>
      ))}
    </div>
  );
};

export default Accordion;