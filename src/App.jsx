import { useState, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(true)
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width >= 992 && width <= 1600) {
        setScale(0.9)
      } else if (width >= 700 && width <= 767) {
        setScale(0.8)
      } else if (width >= 600 && width < 700) {
        setScale(0.75)
      } else if (width <= 600) {
        setScale(0.5)
      } else {
        setScale(1)
      }
    }

    window.addEventListener('resize', handleResize)
    handleResize() // Initial check

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="app" style={{ transform: `scale(${scale})`, transformOrigin: 'top center' }}>
      <nav className="navbar">
        <div className="nav-content">
          <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <FaBars />
          </button>
          <h1>My Website</h1>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <div className="content-wrapper">
        <aside className={`left-menu ${isMenuOpen ? 'open' : 'closed'}`}>
          <h2>Menu</h2>
          <ul>
            <li><a href="#item1">Dashboard</a></li>
            <li><a href="#item2">Projects</a></li>
            <li><a href="#item3">Settings</a></li>
          </ul>
        </aside>

        <main className="main-content">
          <h2>Welcome to Our Platform</h2>
          <p>This is a modern, responsive website with an improved design and color scheme. The layout adapts seamlessly to different screen sizes while maintaining a professional and clean appearance.</p>
        </main>

        <aside className="right-panel">
          <h2>Quick Stats</h2>
          <p>View your latest activity and important notifications here.</p>
        </aside>
      </div>

      <footer className="footer">
        <p>&copy; 2024 My Website. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App