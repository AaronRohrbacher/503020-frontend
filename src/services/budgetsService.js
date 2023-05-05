export async function createBudget (obj) {
  const json = JSON.stringify(obj)
  const response = await fetch('http://localhost:3000/createBudget', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: json
  })
  const data = await response.json()
  return data
}

export async function readBudgets (userId) {
  const response = await fetch('http://localhost:3000/readBudgets', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: userId
  })
  const data = await response.json()
  return data.Items
}

export async function updateBudget (obj) {
  console.log(obj)
  const json = JSON.stringify(obj)
  const response = await fetch('http://localhost:3000/updateBudget', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: json
  })
  const data = await response.json()
  return data
}

export async function createBudgetItem (obj) {
  const json = JSON.stringify(obj)
  const response = await fetch('http://localhost:3000/createBudgetItem', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: json
  })
  const data = await response.json()
  return data
}

export async function readBudgetItems (budgetId) {
  const response = await fetch('http://localhost:3000/readBudgetItems', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: budgetId
  })

  const data = await response.json()
  return data
}
