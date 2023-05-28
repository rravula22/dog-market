import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // check if method is post
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  // call api to get dogs fetch from env variable
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/dogs/breeds`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    }
  })
  const data = await response.json()
  // check if response is ok
  if (!response.ok) {
    return res.status(422).json(data)
  }
  // return success
  return res.status(200).json(data)
}

