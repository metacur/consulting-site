// src/pages/Home.tsx
// トップページ
import { useEffect, useState } from 'react'
import './Home.css'

function Home() {
  // スクロール位置の状態管理
  const [scrollY, setScrollY] = useState(0)

  // スクロールイベントの監視
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // コンテンツセクションへスムーススクロール
  const scrollToContent = () => {
    const contentSection = document.getElementById('content-section')
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // タイルグリッド用のカラーパレット
  const tileColors = [
    '#1a3a52', '#2c5f8d', '#3d7cb8', '#4a8fc7',
    '#5fa3d0', '#76b7dd', '#8dc5e8', '#a5d4f0',
    '#1e4d6b', '#2f6894', '#4080b5', '#5098ce'
  ]

  // 背景タイルのデータ生成（60個のタイル）
  const tiles = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    color: tileColors[i % tileColors.length],
    delay: (i % 10) * 0.1
  }))

  return (
    <div className="home-page">
      {/* ファーストビュー（フルスクリーン） */}
      <section className="hero-section">
        {/* 背景タイルグリッド */}
        <div className="tile-background">
          {tiles.map((tile) => (
            <div
              key={tile.id}
              className="background-tile"
              style={{
                backgroundColor: tile.color,
                animationDelay: `${tile.delay}s`
              }}
            />
          ))}
        </div>

        {/* グラデーションオーバーレイ */}
        <div className="hero-overlay" />

        {/* 左上: 会社名 */}
        <div className="company-name">
          <h2 className="company-name-main">地域密着コンサル企業sample</h2>
          <p className="company-name-sub">REGIONAL CONSULTING PARTNERS</p>
        </div>

        {/* 右側中段: メインメッセージ */}
        <div 
          className="hero-message"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
            opacity: 1 - scrollY / 500
          }}
        >
          <h1 className="hero-title">
            <span className="hero-title-line">地域の未来を</span>
            <span className="hero-title-line">共に創る</span>
          </h1>
          <p className="hero-subtitle">
            Creating the future of the region together
          </p>
          <div className="hero-description">
            <p>中小企業の皆様に寄り添い、</p>
            <p>持続的な成長を支援する</p>
            <p>地域密着型コンサルティングファーム</p>
          </div>
        </div>

        {/* 右下: スクロール案内 */}
        <div className="scroll-indicator" onClick={scrollToContent}>
          <div className="scroll-line" />
          <span className="scroll-text">SCROLL</span>
        </div>
      </section>

      {/* コンテンツセクション */}
      <section id="content-section" className="content-section">
        {/* サービス概要 */}
        <div className="service-grid">
          <div className="service-card service-card-large">
            <div className="service-card-content">
              <span className="service-number">01</span>
              <h3 className="service-title">経営戦略</h3>
              <p className="service-description">
                持続可能な成長戦略の立案と実行支援
              </p>
            </div>
          </div>

          <div className="service-card">
            <div className="service-card-content">
              <span className="service-number">02</span>
              <h3 className="service-title">業務改善</h3>
              <p className="service-description">
                効率化と生産性向上
              </p>
            </div>
          </div>

          <div className="service-card">
            <div className="service-card-content">
              <span className="service-number">03</span>
              <h3 className="service-title">DX推進</h3>
              <p className="service-description">
                デジタル化による変革支援
              </p>
            </div>
          </div>

          <div className="service-card">
            <div className="service-card-content">
              <span className="service-number">04</span>
              <h3 className="service-title">人材育成</h3>
              <p className="service-description">
                組織の成長を支える人づくり
              </p>
            </div>
          </div>

          <div className="service-card service-card-accent">
            <div className="service-card-content">
              <h3 className="service-title-large">100+</h3>
              <p className="service-description">プロジェクト実績</p>
            </div>
          </div>

          <div className="service-card">
            <div className="service-card-content">
              <span className="service-number">05</span>
              <h3 className="service-title">財務改善</h3>
              <p className="service-description">
                健全な経営基盤の構築
              </p>
            </div>
          </div>

          <div className="service-card">
            <div className="service-card-content">
              <span className="service-number">06</span>
              <h3 className="service-title">事業承継</h3>
              <p className="service-description">
                次世代への引き継ぎ支援
              </p>
            </div>
          </div>
        </div>

        {/* 強み */}
        <div className="strengths-section">
          <h2 className="section-heading">
            <span className="section-heading-en">OUR STRENGTHS</span>
            <span className="section-heading-ja">選ばれる理由</span>
          </h2>

          <div className="strengths-grid">
            <div className="strength-card">
              <div className="strength-icon">01</div>
              <h3 className="strength-title">地域密着型</h3>
              <p className="strength-description">
                地域の特性を熟知した専門家が、現場に寄り添いながら最適なソリューションを提供します。
              </p>
            </div>

            <div className="strength-card">
              <div className="strength-icon">02</div>
              <h3 className="strength-title">実践的アプローチ</h3>
              <p className="strength-description">
                理論だけでなく、実際の現場で活用できる具体的な施策を、一緒に実行していきます。
              </p>
            </div>

            <div className="strength-card">
              <div className="strength-icon">03</div>
              <h3 className="strength-title">成果へのこだわり</h3>
              <p className="strength-description">
                目に見える成果を出すまで、継続的にサポート。クライアント企業の成長が私たちの喜びです。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home