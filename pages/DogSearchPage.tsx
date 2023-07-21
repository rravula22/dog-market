import { useEffect, useState } from 'react'
import Header from './Header'
import DogSearchForm from './DogSearchForm'
import { getDogs, getBreeds, getZipCodes } from '../utils/fetchDogs'
import Breeds from '../components/Breeds'
import Zipcodes from '../components/ZipCodes'
import { ZipCode } from '../utils/typings'
type Props = {}

function DogSearchPage({}: Props) {
  const [selectedOptions, setBreeds] = useState<String[]>([]);
  const [breeds, setBreedsList] = useState<String[]>([]);
  const [selectedZipCodes, setSelectedZipCodes] = useState<String[]>([]);
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

  const handleBreedsChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if(!selectedOptions.includes(event.target.value)) {
      setBreeds([...selectedOptions, event.target.value])
    }
  }
  const handleZipcodeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if(!selectedZipCodes?.includes(event.target.value)) {
      setSelectedZipCodes([...selectedZipCodes, event.target.value])
    }
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
      const response = await getDogs(breeds, selectedZipCodes, ageMin, ageMax)
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
        <form className="flex flex-auto">
          <div className="w-auto md:w-1/5 px-2">
            <Breeds breeds={breeds} selectedOptions={selectedOptions} handleBreedsChange={handleBreedsChange} />
          </div>
          <div className="w-full md:w-1/5 px-2">
            <Zipcodes selectedZipCodes={selectedZipCodes} handleZipcodeChange={handleZipcodeChange}/>
          </div>
          <div className="w-auto px-6 md:w-1/5">
            <label className="block"> Minimum Age:</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="ageMax"
              id="ageMax"
              value={ageMax}
              onChange={handleAgeMinChange}
              required
            />
          </div>
          <div className="w-auto px-6 md:w-1/5">
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
          <div className="w-auto px-6 md:w-1/5 py-5">
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