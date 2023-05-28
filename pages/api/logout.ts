import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // check if method is post
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }
  // clear cookie
  res.setHeader(
    'Set-Cookie',
    `authToken=; path=/; expires=${new Date(
      Date.now() - 1000 * 60 * 60 * 24 * 365
    ).toUTCString()};`
  )
  // return success
  return res.status(200).json({ message: 'Success' })
}


