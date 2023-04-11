export async function readBudgets(userId) {
  const response = await fetch(`http://localhost:3000/readBudgets`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: userId
  })
  const data = await response.json();
  return data.Items
}

export async function readBudgetItems(budgetId) {
  const response = await fetch(`http://localhost:3000/readBudgetItems` , {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: budgetId
  })
  const data = await response.json();
  return data
}