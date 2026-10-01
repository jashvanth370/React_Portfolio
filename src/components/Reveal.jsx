import useReveal from '../hooks/useReveal';

/**
 * Wraps any element with the scroll-reveal animation.
 * variant: "reveal" (slide up) | "reveal-left" | "reveal-right"
 */
export default function Reveal({ as: Tag = 'div', variant = 'reveal', className = '', children, ...rest }) {
  const [ref, active] = useReveal();
  const classes = [variant, className, active ? 'active' : ''].filter(Boolean).join(' ');

  return (
    <Tag ref={ref} className={classes} {...rest}>
      {children}
    </Tag>
  );
}
