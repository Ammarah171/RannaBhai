import { BrowserRouter, Routes, Route } from 'react-router-dom'

//pages & components
import Trend from './pages/TrendingRecipes'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='pages'>
          <Routes>
            <Route
              path='/'
              element={<Trend />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
