import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Piyush Yadav</h3>
            <p>
              Software Engineer specializing in React Native & React.js development. 
              Creating cross-platform mobile experiences that matter.
            </p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Connect</h4>
            <ul>
              <li><a href="https://github.com/piyush-yadav01" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/piyush-yadav01/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="mailto:webpiyush.01@gmail.com">Email</a></li>
              <li><a href="tel:+918218058950">Phone</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Info</h4>
            <ul>
              <li>📧 webpiyush.01@gmail.com</li>
              <li>📱 +91-8218058950</li>
              <li>📍 Noida, India</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Piyush Yadav. All rights reserved.</p>
            <div className="footer-social">
            <a href="https://github.com/krypton4149" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <img src="/public/github.png" alt="GitHub" width="28" height="28" style={{display: 'block'}} />
                </a>
                <a href="https://www.linkedin.com/in/piyush-yadav01/" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <img src="/public/linkedin.png" alt="LinkedIn" width="28" height="28" style={{display: 'block'}} />
                </a>
                <a href="mailto:webpiyush.01@gmail.com" className="social-icon">
                  <img src="/public/gmail.png" alt="Gmail" width="28" height="28" style={{display: 'block'}} />
                </a>
                <a href="tel:+918218058950" className="social-icon">
                  <img src="/public/phone-call.png" alt="Phone" width="28" height="28" style={{display: 'block'}} />
                </a>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .footer {
          background: #2c3e50;
          color: white;
          padding: 60px 0 20px;
        }
        
        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }
        
        .footer-section h3 {
          color: #667eea;
          margin-bottom: 1rem;
          font-size: 1.5rem;
        }
        
        .footer-section h4 {
          color: #667eea;
          margin-bottom: 1rem;
          font-size: 1.2rem;
        }
        
        .footer-section p {
          color: #bdc3c7;
          line-height: 1.6;
          margin-bottom: 1rem;
        }
        
        .footer-section ul {
          list-style: none;
          padding: 0;
        }
        
        .footer-section ul li {
          margin-bottom: 0.5rem;
        }
        
        .footer-section ul li a {
          color: #bdc3c7;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        
        .footer-section ul li a:hover {
          color: #667eea;
        }
        
        .footer-section ul li {
          color: #bdc3c7;
        }
        
        .footer-bottom {
          border-top: 1px solid #34495e;
          padding-top: 2rem;
        }
        
        .footer-bottom-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }
        
        .footer-bottom p {
          color: #bdc3c7;
          margin: 0;
        }
        
        .footer-social {
          display: flex;
          gap: 1rem;
        }
        
        .social-link {
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          font-size: 1.2rem;
          transition: all 0.3s ease;
        }
        
        .social-link:hover {
          background: #667eea;
          transform: translateY(-2px);
        }
        
        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            text-align: center;
          }
          
          .footer-bottom-content {
            flex-direction: column;
            text-align: center;
          }
          
          .footer-social {
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  )
}

export default Footer 