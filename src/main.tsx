// src/main.tsx
// アプリケーションのエントリーポイント
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './App.css'

// React 18のcreateRoot APIを使用してレンダリング
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* BrowserRouterでルーティング機能を有効化 */}
    <BrowserRouter basename="/consulting-site">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)