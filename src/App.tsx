import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import DetailBook from './pages/DetailBook/DetailBook'
import Home from './pages/Home'

const App: FC = () => {
  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/book/:id' element={<DetailBook />} />
      </Routes>
    </div>
  )
}

export default App
