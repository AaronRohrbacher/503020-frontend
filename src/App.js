import './App.css'
import ListBudgets from './budgets/ListBudgets'
import Login from './auth/Login'
import Budget from './budgets/Budget'

function App () {
  return (
    <div className="App">
      <header className="App-header">
        <Budget />
      </header>
    </div>
  )
}

export default App
