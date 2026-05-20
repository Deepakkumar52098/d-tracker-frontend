/* eslint-disable react-hooks/set-state-in-effect */
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard'
import Transactions from './components/transactions/Transactions'
import Visualization from './components/visualization/Visualization'
import Goals from './components/goals/Goals'
import BooksRepo from './components/booksRepo/BooksRepo'
import MainLayout from './components/routes/MainLayout'
import Auth from './components/auth/Auth'
import { useSelector } from 'react-redux'


function App() {

  const { loginDetails } = useSelector((state) => state.userDetails)
  const isAuthenticated = !!loginDetails?.token

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={isAuthenticated ? "/dashboard" : "/auth"} />} />
        <Route path="/auth" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Auth />} />
        <Route element={isAuthenticated ? <MainLayout /> : <Navigate to="/auth" />}>
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
