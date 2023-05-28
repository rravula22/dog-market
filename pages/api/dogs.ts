import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // check if method is post
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' })
  }
  // check if token exists and is valid in cookie
  const token = req.cookies.authToken
  if (!token) {
    return res.status(401).json({ message: 'Not authenticated' })
  }
  // call api to get dogs fetch from env variable
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/dogs`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${token}`,
    },
    body: JSON.stringify({ breeds:[], zipCodes:[],ageMin:0,ageMax:39 }),
  })
  const data = await response.json()
  // check if response is ok
  if (!response.ok) {
    return res.status(422).json(data)
  }
  // return success
  return res.status(200).json(data)
}

