import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { AuthProvider } from './context/AuthContext'
import { FavoritesProvider } from './context/FavoritesContext'
import { useScrollToHash } from './hooks/useScrollToHash'
import HomePage from './pages/HomePage'
import GalleryPage from './pages/GalleryPage'
import PetDetailsPage from './pages/PetDetailsPage'
import AboutPage from './pages/AboutPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ProfilePage from './pages/ProfilePage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  useScrollToHash()

  return (
    <AuthProvider>
      <FavoritesProvider>
        <div className="d-flex flex-column min-vh-100">
          <Navbar />
          <main className="flex-grow-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/ljubimci" element={<GalleryPage />} />
              <Route path="/ljubimci/:id" element={<PetDetailsPage />} />
              <Route path="/o-nama" element={<AboutPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/profil" element={<ProfilePage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </FavoritesProvider>
    </AuthProvider>
  )
}

export default App
