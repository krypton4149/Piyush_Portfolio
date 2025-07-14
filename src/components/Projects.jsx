import React, { useState } from 'react'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: '💼 WorkFleet App',
      description: 'React Native mobile app for freelancer/employer management with dual role support and project management modules',
      image: '/public/workfleet.png',
      category: 'mobile',
      technologies: ['React Native', 'Redux', 'API Integration'],
      link: 'https://play.google.com/store/apps/details?id=com.workfleet&hl=en_IN&pli=1',
      github: '#'
    },
    {
      id: 2,
      title: '🏖️ Sandlas - Caribbean Resort Website',
      description: 'A modern resort booking website inspired by Sandals Resorts, featuring resort selection, booking functionality, and Caribbean vacation experiences',
      image: '/public/sandlas.png',
      category: 'web',
      technologies: ['React', 'TypeScript', 'Vite', 'CSS'],
      link: 'https://sandlas.vercel.app',
      github: 'https://github.com/krypton4149/Sandlas'
    },
    {
      id: 3,
      title: '🎧 AudioVerse - Cross-Platform Audio & Book App',
      description: 'AudioVerse is a mobile app built using Expo + React Native, providing a seamless experience for audio streaming, podcasts, and curated book listings.',
      image: '/public/insurance.png',
      category: 'mobile',
      technologies: ['React Native', 'Supabase', 'Clerk'],
      link: 'https://github.com/krypton4149/audioverse-app',
      github: 'https://github.com/krypton4149/audioverse-app'
    },
    {
      id: 6,
      title: '💰 Expensify App - Open Source',
      description: 'Contributed to production-level React Native codebase, resolving 50+ issues',
      image: '/public/expensify.png',
      category: 'mobile',
      technologies: ['React Native', 'JavaScript', 'Git'],
      link: 'https://use.expensify.com/download',
      github: 'https://github.com/Expensify/App'
    }
  ]

  const filters = [
    { id: 'all', name: 'All' },
    { id: 'web', name: 'Web Apps' },
    { id: 'mobile', name: 'Mobile Apps' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2>My Projects</h2>
          <p>Some of my recent work</p>
        </div>
        
        <div className="filter-buttons">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.name}
            </button>
          ))}
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                {project.image.startsWith('http') || project.image.includes('.') ? (
                  <img src={project.image} alt={project.title} />
                ) : (
                  <div className="project-icon">{project.image}</div>
                )}
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.link} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                  <a href={project.github} className="btn" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .projects {
          padding: 100px 0;
          background: white;
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
        
        .filter-buttons {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }
        
        .filter-btn {
          padding: 10px 20px;
          border: 2px solid #667eea;
          background: transparent;
          color: #667eea;
          border-radius: 25px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 500;
        }
        
        .filter-btn:hover,
        .filter-btn.active {
          background: #667eea;
          color: white;
        }
        
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }
        
        .project-card {
          background: white;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }
        
        .project-image {
          height: 200px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        
        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
        
        .project-icon {
          font-size: 4rem;
        }
        
        .project-content {
          padding: 2rem;
        }
        
        .project-content h3 {
          color: #333;
          margin-bottom: 1rem;
          font-size: 1.5rem;
        }
        
        .project-content p {
          color: #666;
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }
        
        .project-technologies {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }
        
        .tech-tag {
          background: #f8f9fa;
          color: #667eea;
          padding: 0.25rem 0.75rem;
          border-radius: 15px;
          font-size: 0.85rem;
          font-weight: 500;
        }
        
        .project-links {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }
        
        .project-links .btn {
          flex: 1;
          text-align: center;
          padding: 0.75rem 1rem;
          font-size: 0.9rem;
        }
        
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
          
          .filter-buttons {
            gap: 0.5rem;
          }
          
          .filter-btn {
            padding: 8px 16px;
            font-size: 0.9rem;
          }
          
          .project-content {
            padding: 1.5rem;
          }
          
          .project-links {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  )
}

export default Projects 