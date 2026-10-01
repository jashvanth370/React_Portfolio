/** Renders text where **double-star** segments are bold. */
export default function Rich({ text }) {
  return text
    .split('**')
    .map((segment, i) => (i % 2 === 1 ? <strong key={i}>{segment}</strong> : segment));
}
