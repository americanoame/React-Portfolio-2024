import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';

const App = () => {
  return (
<BrowserRouter>
  <main>
    <Navbar />
  </main>
</BrowserRouter>
  )
}

export default App