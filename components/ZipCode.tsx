import React, { useEffect, useState } from 'react'
import csv from 'csv-parser';
import  Papa from 'papaparse';

const Zipcode = () => {
    const [zipCodes, setZipCodes] = useState<string[]>([]);

    useEffect(() => {
        Papa.parse('zipCodes.csv', {
            header: true,
            skipEmptyLines: true,
            complete: function (results) {
                console.log(results.data);
            },
          });
    }, []);
    return (
      <select>
        {zipCodes.map((zipCode) => (
          <option key={zipCode} value={zipCode}>
            {zipCode}
          </option>
        ))}
      </select>
    );
}

export default Zipcode
