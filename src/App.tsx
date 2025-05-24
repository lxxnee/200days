import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import HextechChest from './components/HextechChest';
import Heart from './components/Heart';
import Letter from './components/Letter.tsx';
import Timeline from './components/Timeline';

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="relative w-full max-w-[390px] h-[844px] bg-[#F1E5D1] mx-auto overflow-hidden">
        {/* 상단 노치 */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-black rounded-b-3xl z-10" />
        
        {/* 모바일 화면 컨텐츠 */}
        <div className="relative w-full h-full bg-[#F1E5D1]">
          <Router>
            <Routes>
              <Route path="/" element={<AuthPage />} />
              <Route path="/heart" element={<Heart />} />
              <Route path="/chest" element={<HextechChest />} />
              <Route path="/openletter" element={<Letter />} />
              <Route path="/timeline" element={<Timeline />} />
            </Routes>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
