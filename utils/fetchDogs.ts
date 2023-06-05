
export const loginAuth = async (email: String, name: String) => {
    const path = "http://" + process.env.NEXT_PUBLIC_BASE_URL + '/api/login';
    const myURL = new URL(path);
    const response = await fetch(myURL.href, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
    })
    if (response.ok) {
        return true;
    }
    return false; 
    
}

export const logoutAuth = async () => {
    const path =  "http://" + process.env.NEXT_PUBLIC_BASE_URL + '/api/logout';
    const response = await fetch(path, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    const data = await response.json()
    // check if response is ok
    if (!response.ok) {
        return data;
    }
    return data;  
}

export const getDogs = async (breeds: String[], zipCodes: String[], ageMin: number, ageMax: number) => {
    const path =  "http://" + process.env.NEXT_PUBLIC_BASE_URL + '/api/dogs';
    const myURL = new URL(path);
    const response = await fetch(myURL.href, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ breeds, zipCodes, ageMin, ageMax }),
    })
    const data = await response.json()
    // check if response is ok
    if (!response.ok) {
        return data;
    }
    return data;  
}

export const getBreeds = async () => {
    const path =  "http://" + process.env.NEXT_PUBLIC_BASE_URL + '/api/breeds';
    const myURL = new URL(path);
    const response = await fetch(myURL.href, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    const data:[] = await response.json()
    // check if response is ok
    if (!response.ok) {
        return data;
    }
    return data;  
}

export const    getZipCodes = async () => {
    const path =  "http://" + process.env.NEXT_PUBLIC_BASE_URL + '/api/breeds';
    const myURL = new URL(path);
    const response = await fetch(myURL.href, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    const data = await response.json()
    // check if response is ok
    if (!response.ok) {
        return data;
    }
    return data;  
}