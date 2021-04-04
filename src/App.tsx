import Counter from './components/Counter';
import Mirror from './components/Mirror';
import Container from './components/Container';

import { CountProvider } from './contexts/CountContext';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <CountProvider>
        <Container>
          <Counter />

          <Mirror />
        </Container>
      </CountProvider>
    </ThemeProvider>
  );
}

export default App;
