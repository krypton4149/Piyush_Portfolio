import React from 'react'

const Experience = () => {
  const experience = [
    {
      id: 1,
      title: 'Software Engineer',
      company: 'Webnotics Solutions',
      period: 'Aug 2023 - Present',
      description: [
        'Developed and maintained cross-platform apps using React Native & React.js for both iOS and Android',
        'Led frontend development to create responsive UIs and improve page load times',
        'Integrated RESTful APIs, improving data flow and reducing latency',
        'Optimized UI using Redux to enhance performance'
      ],
      tech: ['React', 'JavaScript', 'React Native', 'Postman API', 'RESTful APIs', 'Redux']
    },
    {
      id: 2,
      title: 'Junior Frontend Developer',
      company: 'Umun Tech',
      period: 'Feb 2023 - Jul 2023',
      description: [
        'Built responsive web/mobile apps using React, Ionic, and Angular, boosting user engagement',
        'Worked on an insurance app with features like user authentication and policy management',
        'Implemented real-time chat with WebSocket using Angular and Spring Boot',
        'Developed grocery app components including UI and API integrations'
      ],
      tech: ['React', 'Node.js', 'WebSocket', 'API Integration', 'Angular', 'Ionic']
    }
  ]

  const education = {
    degree: 'Bachelor of Technology in Computer Science and Engineering',
    institution: 'Institute of Technology And Management [ITM], Gwalior',
    period: 'August 2019 - March 2023',
    gpa: '8.4/10.0'
  }

  const certifications = [
    'React Native - Coursera (Meta)',
    'AWS Cloud Practitioner - AWS'
  ]

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <h2>Experience & Education</h2>
          <p>My professional journey and academic background</p>
        </div>
        
        <div className="experience-content">
          <div className="experience-section">
            <h3>Work Experience</h3>
            <div className="timeline">
              {experience.map((job, index) => (
                <div key={job.id} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <div className="job-header">
                      <h4>{job.title}</h4>
                      <span className="company">{job.company}</span>
                      <span className="period">{job.period}</span>
                    </div>
                    <ul className="job-description">
                      {job.description.map((desc, idx) => (
                        <li key={idx}>{desc}</li>
                      ))}
                    </ul>
                    <div className="job-tech">
                      {job.tech.map((tech, idx) => (
                        <span key={idx} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="education-section">
            <h3>Education</h3>
            <div className="education-card">
              <h4>{education.degree}</h4>
              <p className="institution">{education.institution}</p>
              <p className="period">{education.period}</p>
              <p className="gpa">GPA: {education.gpa}</p>
            </div>
            
            <h3>Certifications</h3>
            <div className="certifications">
              {certifications.map((cert, index) => (
                <div key={index} className="certification-item">
                  <span className="cert-icon">🏆</span>
                  <span>{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .experience {
          background: white;
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
        
        .experience-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 4rem;
          align-items: start;
        }
        
        .experience-section h3,
        .education-section h3 {
          color: #333;
          margin-bottom: 2rem;
          font-size: 1.8rem;
        }
        
        .timeline {
          position: relative;
        }
        
        .timeline::before {
          content: '';
          position: absolute;
          left: 20px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: #e9ecef;
        }
        
        .timeline-item {
          position: relative;
          margin-bottom: 3rem;
          padding-left: 60px;
        }
        
        .timeline-marker {
          position: absolute;
          left: 11px;
          top: 0;
          width: 20px;
          height: 20px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 50%;
          border: 4px solid white;
          box-shadow: 0 0 0 2px #667eea;
        }
        
        .timeline-content {
          background: #f8f9fa;
          padding: 2rem;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
        
        .job-header {
          margin-bottom: 1rem;
        }
        
        .job-header h4 {
          color: #333;
          margin-bottom: 0.5rem;
          font-size: 1.3rem;
        }
        
        .company {
          color: #667eea;
          font-weight: 600;
          margin-right: 1rem;
        }
        
        .period {
          color: #666;
          font-size: 0.9rem;
        }
        
        .job-description {
          margin-bottom: 1.5rem;
          padding-left: 1.5rem;
        }
        
        .job-description li {
          color: #666;
          margin-bottom: 0.5rem;
          line-height: 1.6;
        }
        
        .job-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        
        .tech-tag {
          background: #667eea;
          color: white;
          padding: 0.25rem 0.75rem;
          border-radius: 15px;
          font-size: 0.85rem;
          font-weight: 500;
        }
        
        .education-card {
          background: #f8f9fa;
          padding: 2rem;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          margin-bottom: 2rem;
        }
        
        .education-card h4 {
          color: #333;
          margin-bottom: 1rem;
          font-size: 1.2rem;
        }
        
        .institution {
          color: #667eea;
          font-weight: 600;
          margin-bottom: 0.5rem;
          display: block;
        }
        
        .period {
          color: #666;
          margin-bottom: 0.5rem;
        }
        
        .gpa {
          color: #333;
          font-weight: 600;
        }
        
        .certifications {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .certification-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background: #f8f9fa;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        
        .cert-icon {
          font-size: 1.5rem;
        }
        
        .certification-item span:last-child {
          color: #333;
          font-weight: 500;
        }
        
        @media (max-width: 768px) {
          .experience-content {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          
          .timeline-item {
            padding-left: 40px;
          }
          
          .timeline-marker {
            left: 6px;
            width: 16px;
            height: 16px;
          }
          
          .timeline-content {
            padding: 1.5rem;
          }
          
          .job-tech {
            gap: 0.25rem;
          }
          
          .tech-tag {
            font-size: 0.8rem;
            padding: 0.2rem 0.6rem;
          }
        }
      `}</style>
    </section>
  )
}

export default Experience 