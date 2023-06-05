import { useEffect, useState } from 'react'
import Header from './Header'
import DogSearchForm from './DogSearchForm'
import { getDogs, getBreeds, getZipCodes } from '../utils/fetchDogs'
import Breeds from '../components/Breeds'
import Zipcode from '../components/ZipCode'
type Props = {}

function DogSearchPage({}: Props) {
  const [selectedOptions, setBreeds] = useState<string[]>([]);
  const [breeds, setBreedsList] = useState<string[]>([]);
  const [zipCodes, setZipCodes] = useState(["35205","28027"])
  const [ageMin, setAgeMin] = useState(0)
  const [ageMax, setAgeMax] = useState(25)
  const [dogs, setDogs] = useState([])

  useEffect(() => {
    const fetchBreeds = async () => {
      const breeds = await getBreeds()
      setBreedsList(breeds)
    }
    fetchBreeds()
  }, [])
  useEffect(() => {
    const fetchZipCodes = async () => {
      const zipCodes = await getZipCodes()
      setZipCodes(zipCodes)
    }
    fetchZipCodes()
  }, [])

  const handleBreedsChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if(!selectedOptions.includes(event.target.value)) {
      setBreeds([...selectedOptions, event.target.value])
    }
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
      const response = await getDogs(breeds, zipCodes, ageMin, ageMax)
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
    <div >
      <Header />
      <div className="max-h-screen flex flex-gr items-start justify-items-start bg-gray-100">
        <form className="flex flex-wrap">
          <div className="w-full md:w-1/5">
            <Breeds breeds={breeds} selectedOptions={selectedOptions} handleBreedsChange={handleBreedsChange} />
          </div>
          <div className="w-full md:w-1/5">
            <label className="block">Select ZipCodes:</label>
            <Zipcode />
          </div>
          <div className="w-full md:w-1/5">
            <label className="block"> Minimum Age:</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="ageMax"
              id="ageMax"
              value={ageMax}
              onChange={handleAgeMaxChange}
              required
            />
          </div>
          <div className="w-full md:w-1/5">
            <label className="block"> Maximum Age:</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="ageMax"
              id="ageMax"
              value={ageMax}
              onChange={handleAgeMaxChange}
              required
            />
          </div>
          <div className="w-full md:w-1/5 py-5">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
              Search
            </button>
          </div>
        </form>
      </div>
      <DogSearchForm dogs={dogs} />        
    </div>  
  )
}

export default DogSearchPage
{/* <div className=" shadow-md bg-yellow-200">
<h2 className="text-2xl font-bold mb-6 text-black items-center">Search</h2>
<form className='flex flex-wrap'>
  <div className="mb-4">
  <label
      className="block text-gray-700 text-sm font-bold mb-2"
      htmlFor="breeds"
    >
      Breeds
    </label>
    <Breeds breeds={breeds} selectedOptions={selectedOptions} handleBreedsChange={handleBreedsChange}/>
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
</div> */}