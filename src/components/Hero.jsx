import Reveal from './Reveal';
import HashLink from './HashLink';
import TextRotator from './TextRotator';
import { SOCIAL } from '../config';
import { asset } from '../utils';

const ROTATOR_ITEMS = [
  {
    title: 'Software Engineer',
    subtitle: 'I engineer scalable architectures and intuitive web experiences.',
  },
  {
    title: 'Full Stack Developer',
    subtitle: 'Combining robust backend databases with modern frontend layouts.',
  },
  {
    title: 'Problem Solver',
    subtitle: 'Transforming complex business requirements into clean, optimized code.',
  },
];

const DESCRIPTION_STYLE = {
  fontSize: '1.15rem',
  marginTop: '20px',
  color: 'var(--text-color)',
  lineHeight: 1.8,
  opacity: 0.9,
};

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-wrapper">
        {/* Left */}
        <Reveal variant="reveal-left" className="hero-left">
          <div className="intro-bio">
            <h1 className="name">
              Hi, I'm <span>Balakirushnan Jashvanth</span>
            </h1>
            <h1 className="role">Software Engineer</h1>
            <p className="description" style={DESCRIPTION_STYLE}>
              Software Engineering undergraduate with hands-on industry experience as a Software Engineering
              Intern, contributing to real-world software applications. Experienced in full-stack development,
              API integration, and database management, with a strong focus on writing clean, maintainable
              code. Proven ability to work effectively in Agile team environments. Motivated to continue
              learning and contribute as an Associate Software Engineer in a collaborative and fast-paced
              development team.
            </p>
          </div>

          <div className="cta-container" style={{ marginTop: '30px', marginBottom: '25px', display: 'flex', gap: '15px' }}>
            <HashLink href="#projects" className="cta-button cta-primary">
              View My Work
            </HashLink>
            <HashLink href="#contact" className="cta-button cta-secondary">
              Get In Touch
            </HashLink>
          </div>

          <div className="social-icons">
            <a href={SOCIAL.github} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
              <i className="fab fa-github" />
            </a>
            <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
              <i className="fab fa-linkedin" />
            </a>
            <a href={SOCIAL.whatsapp} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="WhatsApp">
              <i className="fab fa-whatsapp" />
            </a>
            <a href={SOCIAL.email} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Email">
              <i className="fa-solid fa-envelope" />
            </a>
          </div>
        </Reveal>

        {/* Right */}
        <Reveal
          variant="reveal-right"
          className="about-visual"
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '2rem' }}
        >
          <div className="about-graphic">
            <img src={asset('assets/WhatsApp Image 2026-10-01 at 09.45.00.jpeg')} alt="Jashvanth" className="about-image" />
          </div>

          <div className="hero-content" style={{ width: '100%', textAlign: 'center' }}>
            <TextRotator items={ROTATOR_ITEMS} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
