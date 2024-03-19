import React, { useState } from 'react';

interface DomainInputProps {
  onDomainSubmit: (domain: string[]) => void;
}

const DomainInput: React.FC<DomainInputProps> = ({ onDomainSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const domains = inputValue.split(',').map(domain => domain.trim());
    onDomainSubmit(domains);
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="domainInput">
        Enter domain(s):
        <input
          id="domainInput"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter domain(s), separated by commas"
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default DomainInput;