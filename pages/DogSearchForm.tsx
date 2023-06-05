import React from 'react'
import { Dog } from '../utils/typings'
import DataTable, { TableColumn } from 'react-data-table-component';

type Props = {
  dogs: Dog[],
}

function DogSearchForm({ dogs }: Props) {
  // const keys: string[] = Object.keys(dogs[0])
  // keys.map((key) => { return { name: key, selector: key, sortable: true } })
  // console.log(keys)
  return (
    // <DataTable
    //     columns={}
    //     data={}
    // />
    <div className="flex flex-col items-center justify-center">
      </div>
  )
}

export default DogSearchForm