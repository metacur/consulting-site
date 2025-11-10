// src/components/Navigation.tsx
// 左下に固定表示されるナビゲーションメニュー
// PC表示時は全テキスト表示、モバイルではハンバーガーメニュー
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navigation.css'

// メニュー項目の型定義
interface MenuItem {
  path: string
  label: string
  labelEn: string  // 英語表記を追加
}

function Navigation() {
  // メニューの開閉状態を管理（モバイル用）
  const [isOpen, setIsOpen] = useState(false)
  // 現在のページパスを取得
  const location = useLocation()

  // メニュー項目の定義
  const menuItems: MenuItem[] = [
    { path: '/', label: 'ホーム', labelEn: 'HOME' },
    { path: '/about', label: '会社概要', labelEn: 'ABOUT' },
    { path: '/services', label: 'サービス', labelEn: 'SERVICES' },
    { path: '/results', label: '実績', labelEn: 'RESULTS' },
    { path: '/contact', label: 'お問い合わせ', labelEn: 'CONTACT' },
  ]

  // メニュー開閉の切り替え（モバイル用）
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  // メニュー項目がアクティブかどうかを判定
  const isActive = (path: string) => {
    return location.pathname === path
  }

  return (
    <nav className={`navigation ${isOpen ? 'open' : ''}`}>
      {/* モバイル用メニュー開閉ボタン */}
      <button 
        className="nav-toggle" 
        onClick={toggleMenu}
        aria-label="メニューを開閉"
      >
        <span className="toggle-line"></span>
        <span className="toggle-line"></span>
        <span className="toggle-line"></span>
      </button>

      {/* メニュー項目リスト（PC表示時は常に表示） */}
      <ul className="nav-menu">
        {menuItems.map((item) => (
          <li key={item.path} className="nav-item">
            <Link
              to={item.path}
              className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
              onClick={() => setIsOpen(false)} // リンククリック時にメニューを閉じる
            >
              <span className="nav-label-en">{item.labelEn}</span>
              <span className="nav-label-ja">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>

      {/* メニュー開いている時の背景オーバーレイ（モバイル用） */}
      {isOpen && (
        <div 
          className="nav-overlay" 
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </nav>
  )
}

export default Navigation