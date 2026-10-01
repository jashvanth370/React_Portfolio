/** Round tech icon used in Experience and Projects. */
export default function TechPill({ title, icon }) {
  return (
    <span className="tech-pill" title={title}>
      <img src={icon} alt={title} />
    </span>
  );
}
