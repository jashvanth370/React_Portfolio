import Reveal from './Reveal';
import { mediumArticles, mediumProfileUrl } from '../data/articles';

export default function Articles() {
  return (
    <section className="features articles-section" id="creations">
      <div className="articles-container">
        {/* Section Header */}
        <div className="articles-header">
          <Reveal as="h2" className="section-title">
            Articles &amp; Publications
          </Reveal>
          <Reveal as="p" className="articles-section-subtitle">
            Technical deep dives, system architecture breakdowns, and distributed computing insights published on Medium.
          </Reveal>
          <Reveal className="articles-profile-bar">
            <a
              href={mediumProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="medium-profile-btn"
              aria-label="View all articles on Medium (@jashvanth)"
            >
              <i className="fa-brands fa-medium" />
              <span>Read on Medium <strong>@jashvanth</strong></span>
              <i className="fa-solid fa-arrow-up-right-from-square" />
            </a>
          </Reveal>
        </div>

        {/* Medium Articles Grid */}
        <div className="articles-grid">
          {mediumArticles.map((article, index) => (
            <Reveal
              key={article.link}
              variant="reveal-up"
              className={`article-card${article.badge ? ' has-badge' : ''}`}
              style={{ animationDelay: `${index * 0.06}s` }}
            >
              {article.badge && <span className="article-badge">{article.badge}</span>}

              <div className="article-card-top">
                <span className="article-tag">
                  <i className={article.icon} />
                  <span>{article.tag}</span>
                </span>
                <span className="article-read-time">
                  <i className="fa-regular fa-clock" />
                  <span>{article.readTime}</span>
                </span>
              </div>

              <div className="article-card-main">
                <h3 className="article-title">
                  <a href={article.link} target="_blank" rel="noopener noreferrer">
                    {article.title}
                  </a>
                </h3>
                {article.subtitle && <p className="article-subtitle">{article.subtitle}</p>}
                <p className="article-excerpt">{article.excerpt}</p>
              </div>

              <div className="article-card-bottom">
                <span className="article-date">
                  <i className="fa-regular fa-calendar" />
                  <span>{article.date}</span>
                </span>

                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="article-read-link"
                  aria-label={`Read ${article.title} on Medium`}
                >
                  <span>Read Article</span>
                  <i className="fa-solid fa-arrow-right" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
