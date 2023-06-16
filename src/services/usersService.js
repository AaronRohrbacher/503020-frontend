export async function createUser (obj) {
  const json = JSON.stringify(obj)
  const response = await fetch(process.env.REACT_APP_BASE_API_URL + '/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: json
  })
  const data = await response.json()
  return data
}

export async function login (obj) {
  if (process.env.REACT_APP_ENVIRONMENT === 'local') {
    return { userId: '1a' }
  }
  const json = JSON.stringify(obj)
  const response = await fetch(process.env.REACT_APP_BASE_API_URL + '/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: json
  })
  const data = await response.json()
  return data
}
