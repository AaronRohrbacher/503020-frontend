import './App.css'
import ListBudgets from './budgets/ListBudgets'
import Login from './auth/Login'
import Budget from './budgets/Budget'
import { BrowserRouter, Route, Routes, Switch, Navigate, useNavigate, Router } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Budget />
    </div>
  )
}

export default App
