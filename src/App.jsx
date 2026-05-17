import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Dashboard from './components/dashboard/Dashboard'
import Transactions from './components/transactions/Transactions'
import Visualization from './components/visualization/Visualization'
import Goals from './components/goals/Goals'
import BooksRepo from './components/booksRepo/BooksRepo'
import MainLayout from './components/routes/MainLayout'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
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
