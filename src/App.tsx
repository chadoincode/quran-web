import HomePage from './pages/HomePage'
import DetailSurahPage from './pages/DetailSurahPage'
import { Routes, Route } from 'react-router'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} /> 
        <Route path='/surah/:surahId' element={<DetailSurahPage />} /> 
      </Routes>
    </>
  )
}

export default App
