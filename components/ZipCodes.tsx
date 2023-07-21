import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import { ZipCode } from '../utils/typings';

type Props = {
  selectedZipCodes: String[];
  handleZipcodeChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Zipcodes = ({ selectedZipCodes, handleZipcodeChange }: Props) => {
  const [zipCodes, setZipCodes] = useState<ZipCode[]>([]);
  const [filteredList, setFilteredList] = useState<ZipCode[]>([]);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    fetch('/zipcodes.csv')
      .then(response => response.text())
      .then(csvData => {
        Papa.parse(csvData, {
          complete: (results) => {
            results.data.shift();
            const zipCodes = results.data.map((row: any) => {
              return { zipCode: row[0], city: row[3], state: row[6] };
            });
            setZipCodes(zipCodes);
            setFilteredList(zipCodes);
          }
        });
      })
      .catch(error => {
        console.error('Error fetching CSV file:', error);
      });
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchInput(value);
    const filtered = zipCodes.filter(
      zipCode =>
        zipCode.zipCode.includes(value) ||
        zipCode.city.toLowerCase().includes(value.toLowerCase()) ||
        zipCode.state.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredList(filtered);
  };

  return (
    <div>
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="zipcode">
        ZipCodes
      </label>
      <input
        type="text"
        placeholder="city/zipcode/state"
        id="zipcode"
        className="mt-1 text-gray-700 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        value={searchInput}
        onChange={handleInputChange}
      />
      <select
        id="zipcodes"
        multiple={true}
        aria-selected={true}
        className="mt-1 block w-full text-gray-700 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        onChange={handleZipcodeChange}
        defaultValue={selectedZipCodes.toString()}
      >
        {filteredList.map((zipCode) => (
          <option className="text-gray-700" key={zipCode.zipCode}>
            {zipCode.city}, {zipCode.state} {zipCode.zipCode}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Zipcodes;
