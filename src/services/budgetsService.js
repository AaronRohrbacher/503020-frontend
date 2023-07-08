export async function createBudget (obj) {
  console.log(obj)
  const json = JSON.stringify(obj)
  const response = await fetch(process.env.REACT_APP_BASE_API_URL + '/createBudget', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: obj.token
    },
    body: json
  })
  const data = await response.json()
  return data
}

export async function readBudgets (obj) {
  const response = await fetch(process.env.REACT_APP_BASE_API_URL + '/readBudgets', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: obj.token
    },
    body: JSON.stringify({
      userId: obj.userId
    })
  })
  const data = await response.json()
  return data.Items
}

export async function readBudget (obj) {
  console.log(obj)
  const response = await fetch(process.env.REACT_APP_BASE_API_URL + '/readBudget', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: obj.token
    },
    body: JSON.stringify({
      id: obj.id
    })
  })
  const data = await response.json()
  return data.Items
}

export async function readBudgetItem (obj) {
  console.log(obj)
  const json = JSON.stringify(obj)
  const response = await fetch(process.env.REACT_APP_BASE_API_URL + '/readBudgetItem', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: obj.token
    },
    body: json
  })
  const data = await response.json()
  return data.Items
}

export async function updateBudget (obj) {
  const json = JSON.stringify(obj)
  const response = await fetch(process.env.REACT_APP_BASE_API_URL + '/updateBudget', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: obj.token
    },
    body: json
  })
  const data = await response.json()
  return data
}

export async function createBudgetItem (obj) {
  const json = JSON.stringify(obj)
  const response = await fetch(process.env.REACT_APP_BASE_API_URL + '/createBudgetItem', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: obj.token
    },
    body: json
  })
  const data = await response.json()
  return data
}

export async function readBudgetItems (obj) {
  console.log(obj)
  const response = await fetch(process.env.REACT_APP_BASE_API_URL + '/readBudgetItems', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: obj.token
    },
    body: JSON.stringify({
      budgetId: obj.budgetId
    })
  })
  const data = await response.json()
  return data
}

export async function updateBudgetItem (obj) {
  const json = JSON.stringify(obj)
  const response = await fetch(process.env.REACT_APP_BASE_API_URL + '/updateBudgetItem', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: obj.token
    },
    body: json
  })
  const data = await response.json()
  return data
}
