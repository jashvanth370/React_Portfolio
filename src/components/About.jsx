import Reveal from './Reveal';
import { asset } from '../utils';

const CV_PATH = 'assets/BalakirushnanJashvanth.pdf';

export default function About() {
  return (
    <section className="about" id="about">
      <Reveal as="h2" className="section-title">
        About Me
      </Reveal>

      <div className="about-content">
        <div className="about-visual">
          <div>
            <img src={asset('assets/13.jpeg')} alt="Jashvanth" className="about-image" />
          </div>
          <div className="cta-container">
            <a href={asset(CV_PATH)} className="cta-button cta-primary" download>
              Download CV
            </a>
            <a href={asset(CV_PATH)} className="cta-button cta-secondary" target="_blank" rel="noopener noreferrer">
              View Resume
            </a>
          </div>
        </div>

        <Reveal variant="reveal-right" className="about-text">
          <p className="about-description">
            I am a driven final-year undergraduate at the University of Kelaniya, specializing in Net-Centric
            Software Engineering. I have hands-on experience in full-stack development, creating responsive and
            user-focused applications using ASP.NET for the backend and modern frontend frameworks like React
            and Angular. I am comfortable working with PostgreSQL for relational data management and have
            experience integrating databases into scalable, well-structured applications. My projects combine
            clean architecture, intuitive design, and modern styling using Bootstrap, Tailwind CSS, and Sass,
            delivering seamless user experiences across devices.
          </p>
          <p>
            I am passionate about building practical, real-world solutions that solve problems effectively. I
            thrive at the intersection of design, logic, and user experience, writing maintainable, efficient
            code that meets both functional and visual requirements. Beyond coding, I bring strong collaboration
            skills, attention to detail, and a continuous learning mindset. Every project I work on reflects a
            commitment to quality, performance, and delivering software solutions that make a tangible impact.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
