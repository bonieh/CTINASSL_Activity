import { useState } from 'react'
import './App.css'

function HeadphoneArt() {
  return (
    <svg
      className="headphone-art"
      viewBox="0 0 760 620"
      role="img"
      aria-labelledby="headphone-title headphone-description"
    >
      <title id="headphone-title">A pair of cloud-blue over-ear headphones</title>
      <desc id="headphone-description">
        Studio headphones with a soft padded headband and plush ear cushions.
      </desc>
      <defs>
        <linearGradient id="band" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#f9fdff" />
          <stop offset="0.46" stopColor="#d8effa" />
          <stop offset="1" stopColor="#9ccde2" />
        </linearGradient>
        <linearGradient id="bandSide" x1="0" x2="1">
          <stop offset="0" stopColor="#a5d4e8" />
          <stop offset="0.5" stopColor="#e9f8ff" />
          <stop offset="1" stopColor="#80b8d1" />
        </linearGradient>
        <linearGradient id="cup" x1="0" x2="0.9" y1="0" y2="1">
          <stop offset="0" stopColor="#f5fcff" />
          <stop offset="0.52" stopColor="#c6e7f4" />
          <stop offset="1" stopColor="#8ebdd2" />
        </linearGradient>
        <linearGradient id="cushion" x1="0" x2="1" y1="0.1" y2="0.9">
          <stop offset="0" stopColor="#84b4c9" />
          <stop offset="0.44" stopColor="#d9f0fa" />
          <stop offset="1" stopColor="#91bfd2" />
        </linearGradient>
        <radialGradient id="shine" cx="30%" cy="24%" r="80%">
          <stop offset="0" stopColor="#fff" stopOpacity=".95" />
          <stop offset=".58" stopColor="#fff" stopOpacity=".13" />
          <stop offset="1" stopColor="#74a9c1" stopOpacity=".16" />
        </radialGradient>
        <filter id="soft-shadow" x="-30%" y="-30%" width="160%" height="180%">
          <feDropShadow dx="0" dy="24" stdDeviation="20" floodColor="#4a829e" floodOpacity=".2" />
        </filter>
      </defs>
      <ellipse cx="386" cy="535" rx="220" ry="31" fill="#6a9bb1" opacity=".14" />
      <g filter="url(#soft-shadow)" transform="rotate(-12 380 310)">
        <path
          d="M206 342V260C206 126 282 52 382 52c101 0 177 74 177 208v84"
          fill="none"
          stroke="#82b3c9"
          strokeLinecap="round"
          strokeWidth="84"
        />
        <path
          d="M205 330V250C205 120 282 51 382 51c100 0 177 69 177 199v80"
          fill="none"
          stroke="url(#band)"
          strokeLinecap="round"
          strokeWidth="69"
        />
        <path
          d="M229 299V247c0-112 61-174 153-174s153 62 153 174v52"
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeOpacity=".62"
          strokeWidth="5"
        />
        <path d="M222 301v91m316-91v91" stroke="#76a9bf" strokeWidth="21" strokeLinecap="round" />
        <path d="M235 296v96m290-96v96" stroke="url(#bandSide)" strokeWidth="14" strokeLinecap="round" />
        <g transform="rotate(-8 205 411)">
          <rect x="139" y="318" width="133" height="210" rx="58" fill="#78a9bf" />
          <rect x="131" y="308" width="131" height="211" rx="58" fill="url(#cup)" />
          <rect x="145" y="321" width="104" height="185" rx="48" fill="url(#shine)" />
          <rect x="159" y="340" width="80" height="150" rx="39" fill="url(#cushion)" />
          <rect x="176" y="359" width="48" height="112" rx="24" fill="#6e9eb3" opacity=".9" />
          <path d="M153 336c16-16 51-20 72-10" fill="none" stroke="#fff" strokeWidth="5" strokeLinecap="round" opacity=".76" />
          <circle cx="197" cy="512" r="4" fill="#5b8fa8" />
        </g>
        <g transform="rotate(8 559 411)">
          <rect x="493" y="318" width="133" height="210" rx="58" fill="#78a9bf" />
          <rect x="501" y="308" width="131" height="211" rx="58" fill="url(#cup)" />
          <rect x="514" y="321" width="104" height="185" rx="48" fill="url(#shine)" />
          <rect x="524" y="340" width="80" height="150" rx="39" fill="url(#cushion)" />
          <rect x="541" y="359" width="48" height="112" rx="24" fill="#6e9eb3" opacity=".9" />
          <path d="M528 336c16-16 51-20 72-10" fill="none" stroke="#fff" strokeWidth="5" strokeLinecap="round" opacity=".76" />
          <circle cx="565" cy="512" r="4" fill="#5b8fa8" />
        </g>
      </g>
      <g className="art-sparkle" fill="#fff">
        <path d="M115 183c4 19 10 25 29 29-19 4-25 10-29 29-4-19-10-25-29-29 19-4 25-10 29-29Z" />
        <path d="M635 184c3 13 7 17 20 20-13 3-17 7-20 20-3-13-7-17-20-20 13-3 17-7 20-20Z" />
        <circle cx="649" cy="292" r="5" />
        <circle cx="109" cy="330" r="4" />
      </g>
    </svg>
  )
}

function App() {
  const [bagCount, setBagCount] = useState(0)

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Sanvi Studio home">
          sanvi studio<span>®</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#story">Our story</a>
          <a href="#details">The details</a>
          <a href="#reviews">Reviews</a>
        </nav>
        <a className="bag-link" href="#product" aria-label={`Shopping bag, ${bagCount} items`}>
          Bag <span className="bag-count">{bagCount}</span>
          <svg viewBox="0 0 20 20" aria-hidden="true">
            <path d="M4.5 7h11l1 10h-13l1-10Z" />
            <path d="M7 7V5a3 3 0 0 1 6 0v2" />
          </svg>
        </a>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> Sound, softened.</p>
          <h1>Find your<br /><span>own frequency.</span></h1>
          <p className="hero-description">
            A quieter kind of statement. Meet the over-ear headphones made for wherever your mind wanders.
          </p>
          <a className="pill-button hero-button" href="#product">
            Meet your headphones <span aria-hidden="true">↗</span>
          </a>
          <div className="hero-note">
            <span className="note-line" />
            <span>Made for listening<br />a little closer</span>
          </div>
        </div>
        <div className="hero-art-wrap">
          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />
          <span className="art-label label-top"> SANVI STUDIO<br />SERIES Nº 01</span>
          <span className="art-label label-bottom">CLOUD BLUE · 2025</span>
          <HeadphoneArt />
          <a className="round-link" href="#details" aria-label="Explore headphone details">↓</a>
        </div>
        <div className="hero-index"><span>01</span> / 03</div>
      </section>

      <section className="ticker" aria-label="Product highlights">
        <div className="ticker-track">
          <span>Room to breathe</span><i>✳</i><span>Sound that stays with you</span><i>✳</i>
          <span>Room to breathe</span><i>✳</i><span>Sound that stays with you</span><i>✳</i>
        </div>
      </section>

      <section className="story section-pad" id="story">
        <div className="section-kicker"><span>01</span> A softer sound</div>
        <div className="story-content">
          <h2>For the songs<br />that <em>feel like</em><br />somewhere else.</h2>
          <div className="story-aside">
            <p>
              We believe good sound should feel like a deep breath. Sanvi Studio brings rich, thoughtful audio and all-day comfort into one beautifully simple pair.
            </p>
            <a className="text-link" href="#details">A little more about us <span>↗</span></a>
          </div>
        </div>
      </section>

      <section className="details section-pad" id="details">
        <div className="details-heading">
          <div className="section-kicker"><span>02</span> Thoughtfully tuned</div>
          <h2>Little things.<br /><em>Big feeling.</em></h2>
        </div>
        <div className="feature-grid">
          <article className="feature-card feature-blue">
            <span className="feature-number">01 / COMFORT</span>
            <div className="cushion-illustration" aria-hidden="true">
              <span /><span /><span />
            </div>
            <div className="feature-copy">
              <h3>A soft place to land.</h3>
              <p>Cloud-soft cushions and a featherlight fit, made for the long way home.</p>
            </div>
          </article>
          <article className="feature-card feature-cream">
            <span className="feature-number">02 / SOUND</span>
            <div className="sound-illustration" aria-hidden="true">
              <span /><span /><span /><span /><span /><span /><span />
            </div>
            <div className="feature-copy">
              <h3>In your own world.</h3>
              <p>Balanced, warm sound that lets every note have its moment.</p>
            </div>
          </article>
          <article className="feature-card feature-lilac">
            <span className="feature-number">03 / BATTERY</span>
            <div className="battery-illustration" aria-hidden="true">
              <span className="battery-shell"><span className="battery-fill" /></span>
              <span className="battery-spark">✳</span>
            </div>
            <div className="feature-copy">
              <h3>Keep the feeling going.</h3>
              <p>Up to 40 hours of listening, with a quick-charge boost when you need it.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="product section-pad" id="product">
        <div className="product-art">
          <span className="product-stamp">NEW<br />ARRIVAL</span>
          <HeadphoneArt />
        </div>
        <div className="product-info">
          <div className="section-kicker"><span>03</span> Your everyday escape</div>
          <h2>Cloud One</h2>
          <p className="product-subtitle">Wireless over-ear headphones</p>
          <p className="product-description">
            Easy on the ears, lovely to look at, and ready for all of your favorite sounds.
          </p>
          <div className="product-price">$149 <span>USD</span></div>
          <div className="color-choice">
            <span className="color-swatch" />
            <span>Cloud blue</span>
            <span className="color-stock">In stock</span>
          </div>
          <button className="pill-button add-button" type="button" onClick={() => setBagCount((count) => count + 1)}>
            Add to bag <span aria-hidden="true">＋</span>
          </button>
          <p className="shipping-note">Complimentary shipping · 30-day listening period</p>
        </div>
      </section>

      <section className="quote-section" id="reviews">
        <span className="quote-mark">“</span>
        <blockquote>Like my favorite corner of the world, but I can take it everywhere.</blockquote>
        <div className="quote-credit"><span className="quote-stars">★★★★★</span> — Camille R., verified listener</div>
      </section>

      <footer className="site-footer">
        <a className="wordmark footer-mark" href="#home">sanvi studio<span>®</span></a>
        <p>Take a moment. Take a listen.</p>
        <a className="footer-top" href="#home">Back to the top ↑</a>
        <small>© 2025 Sanvi Studio. Made for the in-between.</small>
      </footer>
    </main>
  )
}

export default App
