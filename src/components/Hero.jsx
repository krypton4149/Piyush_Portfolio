import React from 'react'

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Hi, I'm <span className="highlight">Piyush Yadav</span></h1>
            <h2>Software Engineer</h2>
            <p>
              I develop cross-platform applications using React Native & React.js, 
              creating responsive UIs and optimizing performance. Passionate about 
              clean code and innovative mobile solutions.
            </p>
            <div className="hero-buttons">
              <button className="btn" onClick={() => scrollToSection('projects')}>
                View My Work
              </button>
              <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
                Get In Touch
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-image">
              <img src="/image/Piyush.png" alt="Piyush Yadav" />
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          position: relative;
          overflow: hidden;
        }
        
        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
          opacity: 0.3;
        }
        
        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          position: relative;
          z-index: 1;
        }
        
        .hero-text h1 {
          margin-bottom: 1rem;
          font-size: 3.5rem;
          line-height: 1.1;
        }
        
        .hero-text h2 {
          font-size: 2rem;
          margin-bottom: 1.5rem;
          opacity: 0.9;
          font-weight: 400;
        }
        
                  .hero-text p {
            font-size: 1.2rem;
            margin-bottom: 2rem;
            opacity: 0.9;
            max-width: 500px;
            color: #fff;
          }
        
        .highlight {
          background: linear-gradient(45deg, #ffd700, #ffed4e);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .hero-buttons {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }
        
        .hero-buttons .btn {
          background: white;
          color: #667eea;
          border: 2px solid white;
        }
        
        .hero-buttons .btn:hover {
          background: transparent;
          color: white;
        }
        
        .hero-buttons .btn-secondary {
          background: transparent;
          color: white;
          border: 2px solid white;
        }
        
        .hero-buttons .btn-secondary:hover {
          background: white;
          color: #667eea;
        }
        
        .hero-image {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .profile-image {
          width: 300px;
          height: 300px;
          border-radius: 50%;
          overflow: hidden;
          border: 4px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }
        
        .profile-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
        
        @media (max-width: 768px) {
          .hero-content {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 2rem;
          }
          
          .hero-text h1 {
            font-size: 2.5rem;
          }
          
          .hero-text h2 {
            font-size: 1.5rem;
          }
          
          .hero-text p {
            font-size: 1rem;
          }
          
          .profile-image {
            width: 200px;
            height: 200px;
          }
          
          .hero-buttons {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  )
}

export default Hero 