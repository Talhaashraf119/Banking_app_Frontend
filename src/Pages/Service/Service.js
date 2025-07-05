import React from 'react';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';
import './service.css'

const Service = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    // Initialize animations when component mounts
    const cards = document.querySelectorAll('.service-card');
    cards.forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
    });
  }, []);

  return (
    <>
    <nav className="navbar">
    <div className="logo"></div>
    
    
    {/* Search Bar */}
    <div className="search-container">
      <input 
        type="text" 
        className="search-bar" 
        placeholder="Search transactions..." 
      />
    </div>

    <ul className="nav-links">
      <li><Link to="/home">Home</Link></li>
      <li><Link to="/service">Services</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/logout" className="logout-btn">Logout</Link></li>
    </ul>
  </nav>
    <div className="services-page">
      {/* Hero Banner */}
      <section className="services-hero">
        <div className="hero-content">
          <h1 className="hero-title animate-fade-in">
            Modern Banking Solutions for Your Financial Success
          </h1>
          <p className="hero-subtitle animate-fade-in-delay">
            Empowering millions of customers with innovative financial services
          </p>
          <div className="hero-illustration"></div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-main" ref={ref}>
        <h2 className="section-title">Our Banking Services</h2>
        
        <div className="services-grid">
          {[
            {
              icon: 'digital-banking',
              title: 'Digital Banking',
              desc: '24/7 access to your accounts through our award-winning mobile app'
            },
            {
              icon: 'loan',
              title: 'Personal Loans',
              desc: 'Competitive rates for all your personal financing needs'
            },
            {
              icon: 'solution',
              title: 'Investment Solutions',
              desc: 'Expert wealth management and portfolio services'
            },
            {
              icon: 'bank',
              title: 'Business Banking',
              desc: 'Tailored solutions for businesses of all sizes'
            },
            {
              icon: 'insurance',
              title: 'Insurance',
              desc: 'Comprehensive coverage for life and assets'
            },
            {
              icon: 'Premium-Support',
              title: 'Premium Support',
              desc: '24/7 dedicated customer service team'
            }
          ].map((service, index) => (
            <div 
              className="service-card" 
              key={index}
              style={{
                transition: `opacity 0.5s ${index * 0.1}s, transform 0.5s ${index * 0.1}s`,
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(20px)'
              }}
            >
              <img 
                src={`/images/${service.icon}.png`} 
                alt={service.title} 
                className="service-icon" 
              />
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <button className="service-cta">Learn More →</button>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="services-stats">
        <div className="stat-item">
          <CountUp end={inView ? 5 : 0} duration={2} suffix="M+" />
          <p>Happy Customers</p>
        </div>
        <div className="stat-item">
          <CountUp end={inView ? 150 : 0} duration={2} suffix="B+" />
          <p>Assets Managed</p>
        </div>
        <div className="stat-item">
          <CountUp end={inView ? 98 : 0} duration={2} suffix="%" />
          <p>Customer Satisfaction</p>
        </div>
      </section>

      {/* Feature Section */}
      <section className="services-feature">
        <div className="feature-content">
          <h2>Next-Gen Banking Technology</h2>
          <p>Experience seamless banking with our AI-powered financial solutions</p>
          <ul className="feature-list">
            <li>Real-time fraud detection</li>
            <li>Biometric authentication</li>
            <li>Smart financial insights</li>
            <li>API integration</li>
          </ul>
        </div>
        <div className="feature-illustration"></div>
      </section>
    </div>
    </>
  );
};

export default Service;