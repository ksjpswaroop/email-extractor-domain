import React, { useState } from 'react';

interface ResultsFilterProps {
  emailList: Array<string>;
  filterResults: (filter: string, sort: string) => void;
}

const ResultsFilter: React.FC<ResultsFilterProps> = ({ emailList, filterResults }) => {
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('');

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    filterResults(filter, sort);
  };

  return (
    <div id="resultsFilter">
      <form onSubmit={handleSubmit}>
        <label>
          Filter:
          <input type="text" value={filter} onChange={handleFilterChange} />
        </label>
        <label>
          Sort by:
          <select value={sort} onChange={handleSortChange}>
            <option value="">Select...</option>
            <option value="domain">Domain</option>
            <option value="date">Date Found</option>
            <option value="keyword">Keyword</option>
          </select>
        </label>
        <input type="submit" value="Apply" />
      </form>
    </div>
  );
};

export default ResultsFilter;