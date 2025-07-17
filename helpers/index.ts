import bcrypt from 'bcryptjs'

export const hashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(12)
  return bcrypt.hash(password, salt)
}

export const fetcher = (url: string) =>
  fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json())
