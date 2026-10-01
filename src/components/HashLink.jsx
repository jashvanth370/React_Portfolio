/** In-page anchor that scrolls smoothly to its target. */
export default function HashLink({ href, onClick, children, ...rest }) {
  const handleClick = (event) => {
    event.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
    if (onClick) onClick(event);
  };

  return (
    <a href={href} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
