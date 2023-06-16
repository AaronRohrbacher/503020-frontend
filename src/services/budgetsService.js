export async function createBudget (obj) {
  const json = JSON.stringify(obj)
  const response = await fetch(process.env.REACT_APP_BASE_API_URL + '/createBudget', {
    mode: 'no-cors',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: json
  })
  const data = await response.json()
  return data
}

export async function readBudgets (userId) {
  const response = await fetch(process.env.REACT_APP_BASE_API_URL + '/readBudgets', {
    mode: 'no-cors',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: userId
  })
  const data = await response.json()
  return data.Items
}

export async function readBudget (id) {
  const response = await fetch(process.env.REACT_APP_BASE_API_URL + '/readBudget', {
    mode: 'no-cors',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: id
  })
  const data = await response.json()
  return data.Items
}

export async function readBudgetItem (obj) {
  const json = JSON.stringify(obj)
  const response = await fetch(process.env.REACT_APP_BASE_API_URL + '/readBudgetItem', {
    mode: 'no-cors',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: json
  })
  const data = await response.json()
  return data.Items
}

export async function updateBudget (obj) {
  const json = JSON.stringify(obj)
  const response = await fetch(process.env.REACT_APP_BASE_API_URL + '/updateBudget', {
    mode: 'no-cors',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: json
  })
  const data = await response.json()
  return data
}

export async function createBudgetItem (obj) {
  const json = JSON.stringify(obj)
  const response = await fetch(process.env.REACT_APP_BASE_API_URL + '/createBudgetItem', {
    mode: 'no-cors',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: obj.jwt
    },
    body: json
  })
  const data = await response.json()
  return data
}

export async function readBudgetItems (budgetId) {
  const response = await fetch(process.env.REACT_APP_BASE_API_URL + '/readBudgetItems', {
    mode: 'no-cors',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: budgetId
  })

  const data = await response.json()
  console.log(data.totalByPayperiod)
  return data
}

export async function updateBudgetItem (obj) {
  const json = JSON.stringify(obj)
  const response = await fetch(process.env.REACT_APP_BASE_API_URL + '/updateBudgetItem', {
    mode: 'no-cors',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: json
  })
  const data = await response.json()
  return data
}
