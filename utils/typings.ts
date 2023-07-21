interface Dog {
    id: string
    img: string
    name: string
    age: number
    zip_code: string
    breed: string
}

interface Location {
    zip_code: string
    latitude: number
    longitude: number
    city: string
    state: string
    county: string
}

interface ZipCode {
    zipCode: string;
    city: string;
    state: string;
}

export type { Dog, Location, ZipCode }