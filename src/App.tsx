// src/App.tsx
// アプリケーション全体のルーティングとレイアウトを管理
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Results from './pages/Results'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="app">
      {/* 左下固定のナビゲーションメニュー */}
      <Navigation />
      
      {/* ページコンテンツエリア */}
      <main className="main-content">
        <Routes>
          {/* 各ページのルート定義 */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/results" element={<Results />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  )
}

export default App