import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Container from '@/views/Container';
import Home from '@/views/Home';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/container/:containerId" element={<Container />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
