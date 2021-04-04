import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
  useContext,
} from 'react';

interface CountContextData {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
}

const CountContext = createContext({} as CountContextData);

export const CountProvider: React.FC = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
};

export function useCount() {
  const context = useContext(CountContext);

  if (!context) throw new Error('useCount must be used within a CountProvider');

  return context;
}
