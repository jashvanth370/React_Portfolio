import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'theme';

function readSavedTheme() {
  try {
    return localStorage.getItem(STORAGE_KEY) === 'light' ? 'light' : 'dark';
  } catch {
    return 'dark';
  }
}

/** Dark/light theme. Toggles `light-theme` on <body> and remembers the choice. */
export default function useTheme() {
  const [theme, setTheme] = useState(readSavedTheme);

  useEffect(() => {
    document.body.classList.toggle('light-theme', theme === 'light');
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      /* storage unavailable: theme still works for this session */
    }
  }, [theme]);

  const toggleTheme = useCallback(
    () => setTheme((t) => (t === 'light' ? 'dark' : 'light')),
    []
  );

  return { theme, toggleTheme };
}
