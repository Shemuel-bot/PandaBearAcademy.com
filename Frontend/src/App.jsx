import { Link } from 'react-router-dom'
import './App.css'

function App() {
  const highlights = [
    {
      title: 'Video lessons',
      description: 'Clear, engaging instruction designed to make complex topics feel approachable.',
    },
    {
      title: 'Interactive exercises',
      description: 'Practice what you learn with hands-on activities that reinforce key concepts.',
    },
    {
      title: 'Support',
      description: 'Join a welcoming learning environment focused on curiosity, growth, and confidence.',
    },
  ]

  return (
    <div className="app-shell">
      <header className="topbar">
        <Link to="/" className="brand">Panda Bear Academy</Link>
        <nav className="nav-links" aria-label="Primary navigation">
          <Link to="/">Courses</Link>
          <Link to="/">Mission</Link>
          <Link to="/">Contact</Link>
          <Link to="/" className="nav-cta">Join Free</Link>
        </nav>
      </header>

      <main className="page">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Free education for everyone, everywhere</p>
            <h1>Learn boldly. Grow confidently. Build a brighter future.</h1>
            <p className="hero-text">
              We create accessible, high-quality learning experiences that help students master core skills,
              unlock opportunity, and thrive in a changing world.
            </p>
            <div className="hero-actions">
              <Link to="/" className="btn btn-primary">Explore Courses</Link>
              <Link to="/" className="btn btn-secondary">Watch Intro</Link>
            </div>
          </div>

          <div className="hero-card">
            <div className="card-glow" />
            <h3>Why learners choose us</h3>
            <div className="stats-grid">
              <div>
                <strong>100+</strong>
                <span>lessons</span>
              </div>
              <div>
                <strong>24/7</strong>
                <span>access</span>
              </div>
              <div>
                <strong>0</strong>
                <span>barriers</span>
              </div>
            </div>
          </div>
        </section>

        <section className="info-section">
          <div className="section-header">
            <p className="eyebrow">What we offer</p>
            <h2>Learning that feels clear, modern, and meaningful.</h2>
          </div>

          <div className="feature-grid">
            {highlights.map((item) => (
              <article key={item.title} className="feature-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="cta-strip">
          <h2>Start learning today—no cost, no gatekeeping.</h2>
          <Link to="/" className="btn btn-primary">Get Started</Link>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 Panda Bear Academy. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
