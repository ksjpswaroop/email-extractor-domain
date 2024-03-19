import React, { useState } from 'react';

interface AdvancedSearchProps {
  updateSettings: (settings: SearchSettingsSchema) => void;
}

interface SearchSettingsSchema {
  depth: string;
  documentType: string;
  pageSection: string;
}

const AdvancedSearch: React.FC<AdvancedSearchProps> = ({ updateSettings }) => {
  const [depth, setDepth] = useState<string>('');
  const [documentType, setDocumentType] = useState<string>('');
  const [pageSection, setPageSection] = useState<string>('');

  const handleDepthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDepth(event.target.value);
  };

  const handleDocumentTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDocumentType(event.target.value);
  };

  const handlePageSectionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPageSection(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateSettings({ depth, documentType, pageSection });
  };

  return (
    <form onSubmit={handleSubmit} id="advancedSearchOptions">
      <label>
        Depth of Search:
        <select value={depth} onChange={handleDepthChange}>
          <option value="mainSite">Main Site</option>
          <option value="entireDomain">Entire Domain</option>
        </select>
      </label>
      <label>
        Document Type:
        <select value={documentType} onChange={handleDocumentTypeChange}>
          <option value="pdf">PDF</option>
          <option value="word">Word Document</option>
        </select>
      </label>
      <label>
        Page Section:
        <select value={pageSection} onChange={handlePageSectionChange}>
          <option value="contactUs">Contact Us Page</option>
          <option value="aboutUs">About Us Page</option>
        </select>
      </label>
      <button type="submit">Update Search Settings</button>
    </form>
  );
};

export default AdvancedSearch;