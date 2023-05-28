import React from 'react'
import Header from './Header'
import DogSearchForm from './DogSearchForm'
import { getDogs, getBreeds } from '../utils/fetchDogs'
import { get } from 'http'
type Props = {}

function DogSearchPage({}: Props) {
  const [breeds, setBreeds] = React.useState(()=>{
    return getBreeds();
  })
  const [zipCodes, setZipCodes] = React.useState(()=>{
    return getBreeds();
  })
  const [ageMin, setAgeMin] = React.useState(0)
  const [ageMax, setAgeMax] = React.useState(25)
  const handleBreedsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBreeds({...breeds})
  }
  const handleZipCodesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setZipCodes({...zipCodes})
  }
  const handleAgeMinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAgeMin(Number(event.target.value))
  }
  const handleAgeMaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAgeMax(Number(event.target.value))
  }
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    try {
      const response = await getDogs(await breeds, await zipCodes, ageMin, ageMax)
      if (response) {
        //route to search page
        window.location.href = '/DogSearchPage'
      } else {
        alert(`Login failed!`)
      }
    } catch (error) {
      console.error('Error fetching login details:', error)
    }
  }

  return (
    <div className="bg-[rgb(22,22,21)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0
    scrollbar-thin scrollbar-track-gray/20 scrollbar-thumb-[#F7AB0A]/80">
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white shadow-md rounded px-8 py-6 w-1/4">
          <h2 className="text-2xl font-bold mb-6">Search</h2>
          {/* breeds - an array of breeds
          zipCodes - an array of zip codes
            ageMin - a minimum age
            ageMax - a maximum age */}
          <form>
            <div className="mb-4">
              <button>setBreeds</button>
              <ul>
              </ul>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="zipCodes"
              >
                Zip Codes
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="zipCodes"
                id="zipCodes"
                onChange={handleZipCodesChange}
                required
              />
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="ageMin"
              >
                Minimum Age
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="ageMin"
                id="ageMin"
                value={ageMin}
                onChange={handleAgeMinChange}
                required
              />
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="ageMax"
              >
                Maximum Age
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="ageMax"
                id="ageMax"
                value={ageMax}
                onChange={handleAgeMaxChange}
                required
              />
              </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleSubmit}
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>        
    </div>
  )
}

export default DogSearchPage