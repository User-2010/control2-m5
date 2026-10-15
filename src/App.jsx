import './App.css'
import Header from './components/Header'
import TaskForm from './components/TaskForm'
import TaskCard from './components/TaskCard'
import TaskFilter from './components/TaskFilter'
import ModalEdit from './components/ModalEdit'
import { Routes, Route } from 'react-router-dom'

import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'
import TaskDetailPage from './pages/TaskDetailPage'

import Info from './about/Info'
import UiAbout from './about/UiAbout'
import AboutCard from './about/AboutCard'
function App() {
  return (
    <>
      <Header />


      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/tasks/:id' element={<TaskDetailPage />} />
      </Routes>
    </>
  )
}

export default App