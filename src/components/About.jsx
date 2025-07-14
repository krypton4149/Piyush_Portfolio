import React from 'react'

const About = () => {
  const skills = [
    { name: 'React Native', level: 95 },
    { name: 'React.js', level: 90 },
    { name: 'JavaScript', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Redux', level: 85 },
    { name: 'Node.js', level: 80 }
  ]

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2>About Me</h2>
          <p>Get to know me better</p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <h3>Who I Am</h3>
            <p>
              I'm a passionate Software Engineer with expertise in cross-platform 
              mobile development using React Native and React.js. Currently working 
              at Webnotics Solutions, I specialize in building responsive UIs and 
              optimizing application performance for both iOS and Android platforms.
            </p>
            <p>
              With experience in RESTful APIs, Redux state management, and real-time 
              features using WebSocket, I focus on creating seamless user experiences 
              and maintaining high code quality. I'm also an active open-source 
              contributor to the Expensify App project.
            </p>
            
                          <div className="about-stats">
                <div className="stat">
                  <h4>2+</h4>
                  <p>Years Experience</p>
                </div>
                <div className="stat">
                  <h4>50+</h4>
                  <p>Issues Resolved</p>
                </div>
                <div className="stat">
                  <h4>2</h4>
                  <p>Companies Worked</p>
                </div>
              </div>
          </div>
          
          <div className="skills-section">
            <h3>My Skills</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .about {
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
        
        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }
        
        .about-text h3 {
          color: #333;
          margin-bottom: 1.5rem;
        }
        
        .about-text p {
          margin-bottom: 1.5rem;
          line-height: 1.8;
        }
        
        .about-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-top: 2rem;
        }
        
        .stat {
          text-align: center;
          padding: 1.5rem;
          background: white;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
        
        .stat h4 {
          color: #667eea;
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }
        
        .stat p {
          color: #666;
          margin: 0;
        }
        
        .skills-section h3 {
          color: #333;
          margin-bottom: 2rem;
        }
        
        .skills-grid {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        
        .skill-item {
          background: white;
          padding: 1.5rem;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
        
        .skill-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }
        
        .skill-name {
          font-weight: 600;
          color: #333;
        }
        
        .skill-percentage {
          color: #667eea;
          font-weight: 600;
        }
        
        .skill-bar {
          width: 100%;
          height: 8px;
          background: #e9ecef;
          border-radius: 4px;
          overflow: hidden;
        }
        
        .skill-progress {
          height: 100%;
          background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
          border-radius: 4px;
          transition: width 1s ease-in-out;
        }
        
        @media (max-width: 768px) {
          .about-content {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          
          .about-stats {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          
          .stat {
            padding: 1rem;
          }
          
          .stat h4 {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </section>
  )
}

export default About 