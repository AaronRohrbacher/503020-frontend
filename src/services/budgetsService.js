export async function getUserBudgets(input) {
  const response = await fetch(`http://localhost:3000/readBudgets`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: input
  })
  const data = await response.json();
  return data.Items
}