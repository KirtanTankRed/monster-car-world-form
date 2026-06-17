import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import FormPage from './pages/FormPage'
import CongratsPage from './pages/CongratsPage'
import AdminPage from './pages/AdminPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormPage />} />
        <Route path="/congrats" element={<CongratsPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
