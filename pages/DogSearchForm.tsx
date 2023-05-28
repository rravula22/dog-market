import React from 'react';

interface DogSearchFormProps {
  filter: string;
  sortOrder: 'asc' | 'desc';
  onFilterChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSortOrderChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const DogSearchForm: React.FC<DogSearchFormProps> = ({
  filter,
  sortOrder,
  onFilterChange,
  onSortOrderChange,
}) => {
  return (
    <div>
      <label htmlFor="filter">Filter by breed:</label>
        <input type="text" id="filter" value={filter} onChange={onFilterChange} />
        <label htmlFor="sortOrder">Sort by:</label>
        <select id="sortOrder" value={sortOrder} onChange={onSortOrderChange}>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
        </select>
    </div>
    );
};

export default DogSearchForm;