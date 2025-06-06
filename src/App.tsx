import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import HextechChest from './components/HextechChest';
import Heart from './components/Heart';
import Letter from './components/Letter.tsx';
import Timeline from './components/Timeline';

// ScrollToTop component to handle scroll behavior
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // 모바일 환경을 위한 스크롤 처리
    const scrollToTop = () => {
      const mainElement = document.querySelector('main');
      if (mainElement) {
        mainElement.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
      window.scrollTo(0, 0);
    };

    scrollToTop();
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="relative w-full max-w-[390px] h-[844px] bg-[#F1E5D1] mx-auto overflow-hidden">
        {/* 상단 노치 */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-black rounded-b-3xl z-10" />
        
        {/* 모바일 화면 컨텐츠 */}
        <div className="relative w-full h-full bg-[#F1E5D1]">
          <Router>
            <ScrollToTop />
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
