import './App.css'
import ListBudgets from './budgets/ListBudgets'

function App () {
  return (
    <div className="App">
      <header className="App-header">
        {<ListBudgets  />}
      </header>
    </div>
  )
}

export default App
