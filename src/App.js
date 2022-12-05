import './App.css';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SearchPage from './SearchPage';

function App() {
  return (
    <div className="App">
      {/* Home */}
          {/* Header */}
          {/* Banner */}
              {/* Search */}
          {/* Cards */}
          {/* Footer */}
      {/* SearchPage */}
          {/* ... */}
    <Router>
      <Header />
      <Routes>
        <Route path='/search' element={<SearchPage />} />
        <Route path='/' element={<Home />} />
        {/* '/' should be at the last */}
      </Routes>
      <Footer />
    </Router>
    
    </div>
  );
}

export default App;
