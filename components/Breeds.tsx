import React from 'react';

type Props = {
    breeds: string[],
    selectedOptions: string[],
    handleBreedsChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

export default ({breeds, selectedOptions, handleBreedsChange}: Props) => {
  let isSelected: boolean = false;
    return (
      <div>
        <label
          className="block text-gray-700 text-sm font-bold mb-2 aria-disabled"
          htmlFor="breeds"
        >
          Breeds
        </label>
        <input
          type="text"
          name="breeds"
          id="breeds"
          onInput={() =>{isSelected = true}}
          placeholder='Select a breed'
          className="mt-1 text-gray-700 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          value={selectedOptions.join(", ")}
        />
        <select
          name="breeds"
          id="breeds"
          multiple={true}
          aria-selected={true}
          className="mt-1 block w-full text-gray-700 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          onInput={handleBreedsChange}
        >
          <option value="" disabled selected>
            Select a breed
          </option>
          {breeds.map((breed) => (
            <option className='text-gray-700' value={breed}>{breed}</option>
          ))}
        </select>
    </div>
    );
  }


