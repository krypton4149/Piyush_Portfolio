import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    emailjs.sendForm(
      'service_e7w68bg', // ✅ Replace with your working service ID
      'template_e5c5fst',
      form.current,
      '2LvMyArMZnItrPU5B'
    )
      .then((result) => {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        form.current.reset();
      }, (error) => {
        setSubmitStatus('error');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2>Get In Touch</h2>
          <p>Let's work together on your next project</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>
              I'm always interested in hearing about new projects and opportunities. 
              Feel free to reach out if you'd like to collaborate or just want to say hello!
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div>
                  <h4>Email</h4>
                  <p>webpiyush.01@gmail.com</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📱</div>
                <div>
                  <h4>Phone</h4>
                  <p>+91-8218058950</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div>
                  <h4>Location</h4>
                  <p>Noida, India</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <h4>Follow Me</h4>
              <div className="social-icons">
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

          <div className="contact-form">
            <h3>Send Me a Message</h3>
            <form ref={form} onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
              </div>

              <button type="submit" className="btn" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus === 'success' && (
                <div className="success-message">✅ Thank you for your message! I will get back to you soon.</div>
              )}
              {submitStatus === 'error' && (
                <div className="error-message">❌ Sorry, there was an error sending your message. Please try again.</div>
              )}
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact {
          background: #f8f9fa;
          padding: 100px 0;
        }
        
        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }
        
        .section-header h2 {
          color: #333;
          margin-bottom: 1rem;
        }
        
        .section-header p {
          color: #666;
          font-size: 1.1rem;
        }
        
        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }
        
        .contact-info h3,
        .contact-form h3 {
          color: #333;
          margin-bottom: 1.5rem;
        }
        
        .contact-info p {
          color: #666;
          line-height: 1.8;
          margin-bottom: 2rem;
        }
        
        .contact-details {
          margin-bottom: 2rem;
        }
        
        .contact-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        
        .contact-icon {
          font-size: 1.5rem;
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }
        
        .contact-item h4 {
          color: #333;
          margin-bottom: 0.25rem;
        }
        
        .contact-item p {
          color: #666;
          margin: 0;
        }
        
        .social-links h4 {
          color: #333;
          margin-bottom: 1rem;
        }
        
        .social-icons {
          display: flex;
          gap: 1.5rem;
          justify-content: flex-start;
          align-items: center;
          flex-wrap: wrap;
          margin-top: 0.5rem;
        }
        
        .social-icon {
          width: 44px;
          height: 44px;
          background: #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          font-size: 1.5rem;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
          transition: transform 0.2s, box-shadow 0.2s, background 0.2s;
          color: #667eea;
          border: 1.5px solid #e9ecef;
        }
        
        .social-icon:hover {
          transform: translateY(-4px) scale(1.08);
          box-shadow: 0 6px 18px rgba(102,126,234,0.15);
          background: #667eea;
          color: #fff;
        }
        
        .form-group {
          margin-bottom: 1.5rem;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          color: #333;
          font-weight: 500;
        }
        
        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 12px 16px;
          border: 2px solid #e9ecef;
          border-radius: 8px;
          font-size: 1rem;
          transition: border-color 0.3s ease;
          font-family: inherit;
        }
        
        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #667eea;
        }
        
        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }
        
        .contact-form .btn {
          width: 100%;
          padding: 15px;
          font-size: 1.1rem;
        }
        
        .contact-form .btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        
        .success-message {
          margin-top: 1rem;
          padding: 1rem;
          background: #d4edda;
          color: #155724;
          border-radius: 8px;
          text-align: center;
          font-weight: 500;
        }
        
        .error-message {
          margin-top: 1rem;
          padding: 1rem;
          background: #f8d7da;
          color: #721c24;
          border-radius: 8px;
          text-align: center;
          font-weight: 500;
        }
        
        @media (max-width: 768px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          
          .contact-item {
            flex-direction: column;
            text-align: center;
            gap: 0.5rem;
          }
          
          .social-icons {
            justify-content: center;
            gap: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
