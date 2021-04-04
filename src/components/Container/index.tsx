import React from 'react';

import '../../styles.css';

import { useTheme, themes } from '../../contexts/ThemeContext';

const Container: React.FC = ({ children }) => {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className="container"
      style={{
        background: theme.colors.background,
        color: theme.colors.text,
      }}
    >
      {children}

      <button
        onClick={() =>
          setTheme(theme === themes.light ? themes.dark : themes.light)
        }
      >
        {theme === themes.light
          ? 'Toggle to dark mode'
          : 'Toggle to light mode'}
      </button>
    </div>
  );
};

export default Container;
