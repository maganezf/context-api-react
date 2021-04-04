import React, { createContext, useState, useContext } from 'react';

interface ThemeContextData {
  theme: {
    colors: {
      background: string;
      text: string;
    };
  };

  setTheme: React.Dispatch<
    React.SetStateAction<{
      colors: {
        background: string;
        text: string;
      };
    }>
  >;
}

const ThemeContext = createContext({} as ThemeContextData);

export const themes = {
  light: {
    colors: {
      background: 'white',
      text: 'black',
    },
  },

  dark: {
    colors: {
      background: '#252526',
      text: 'white',
    },
  },
};

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState(themes.light);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within a ThemeProvider');

  const { theme, setTheme } = context;
  return { theme, setTheme };
}
