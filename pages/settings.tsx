import { useState } from 'react';
import { useRouter } from 'next/router';
import { updateSettings } from '../lib/apiAccess.ts';

export default function Settings() {
  const router = useRouter();
  const [searchSettings, setSearchSettings] = useState({
    depth: '',
    documentType: '',
    section: '',
  });

  const handleInputChange = (event) => {
    setSearchSettings({
      ...searchSettings,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await updateSettings(searchSettings);
    router.push('/dashboard');
  };

  return (
    <div id="settings">
      <h1>Advanced Search Settings</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Depth of Search:
          <input
            type="text"
            name="depth"
            value={searchSettings.depth}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Document Type:
          <input
            type="text"
            name="documentType"
            value={searchSettings.documentType}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Section:
          <input
            type="text"
            name="section"
            value={searchSettings.section}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Update Settings</button>
      </form>
    </div>
  );
}