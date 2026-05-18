import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard'
import Transactions from './components/transactions/Transactions'
import Visualization from './components/visualization/Visualization'
import Goals from './components/goals/Goals'
import BooksRepo from './components/booksRepo/BooksRepo'
import MainLayout from './components/routes/MainLayout'
import Auth from './components/auth/Auth'
import { useState } from 'react'


function App() {
  const token = localStorage.getItem('token')

  const [isAuthenticated, setIsAuthenticated] = useState(!!token)
  const handleLogin = () => {
    console.log("Logged In")
    setIsAuthenticated(true)
    localStorage.setItem('token', 'auth token')
  }

  console.log(isAuthenticated)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Navigate to={isAuthenticated ? "/dashboard" : "/auth"} /> } />
        <Route path="/auth" element={ isAuthenticated ? <Navigate to="/dashboard" /> : <Auth handleLogin={handleLogin} /> } />
        <Route element={isAuthenticated ? <MainLayout setIsAuthenticated={setIsAuthenticated} /> : <Navigate to="/auth" />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/visualization" element={<Visualization />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/booksRepo" element={<BooksRepo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
