// api for login
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // check if method is post
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }
  const { name, email } = req.body
  // check email formart
  if (!email || !email.includes('@')) {
    return res.status(422).json({ message: 'Invalid email address.' })
  }
  // check name
  if (!name || name.trim() === '') {
    return res.status(422).json({ message: 'Invalid name.' })
  }
  // call api to get jwt token fetch from env variable
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email }),
  })
  if (!response.ok) {
    return res.status(422).json({ message: 'Invalid credentials.' })
  }

  // return success
  return res.status(200).json({ message: 'Success' })
}
