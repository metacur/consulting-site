// src/pages/Services.tsx
// サービス紹介ページ - 提供するサービスを詳しく説明
function Services() {
  // サービス一覧データ
  const services = [
    {
      id: 1,
      icon: '📊',
      title: '経営戦略コンサルティング',
      description: '企業の現状分析から、中長期的な経営戦略の立案まで、経営の羅針盤となる戦略づくりをサポートします。',
      features: [
        '経営環境分析（SWOT分析、3C分析等）',
        '中期経営計画の策定支援',
        '事業ポートフォリオの最適化',
        '新規事業開発支援'
      ],
      color: '#2c5f8d'
    },
    {
      id: 2,
      icon: '⚙️',
      title: '業務改善・プロセス最適化',
      description: '現場の課題を可視化し、無駄を省き、生産性を向上させる業務プロセスの改善を実現します。',
      features: [
        '業務フロー分析・可視化',
        'ボトルネック特定と改善策立案',
        '業務標準化・マニュアル整備',
        '生産性向上施策の実行支援'
      ],
      color: '#4a8fc7'
    },
    {
      id: 3,
      icon: '💻',
      title: 'DX（デジタルトランスフォーメーション）推進',
      description: 'デジタル技術を活用した業務効率化・新たなビジネスモデルの創造を支援します。',
      features: [
        'DX戦略の策定',
        '業務システム導入支援',
        'データ活用・分析基盤構築',
        'IT人材育成プログラム'
      ],
      color: '#f39c12'
    },
    {
      id: 4,
      icon: '👥',
      title: '人材育成・組織開発',
      description: '企業の成長を支える人材の育成と、強い組織づくりをサポートします。',
      features: [
        '階層別研修プログラム設計',
        'リーダーシップ開発',
        '組織文化改革支援',
        '人事評価制度の構築'
      ],
      color: '#27ae60'
    },
    {
      id: 5,
      icon: '💰',
      title: '財務改善コンサルティング',
      description: '健全な財務基盤の構築と、持続的な収益構造の確立を支援します。',
      features: [
        '財務分析・診断',
        'コスト削減施策の立案',
        '資金繰り改善支援',
        '収益構造の見直し'
      ],
      color: '#16a085'
    },
    {
      id: 6,
      icon: '🔄',
      title: '事業承継サポート',
      description: '次世代へのスムーズな事業承継と、承継後の企業成長を支援します。',
      features: [
        '事業承継計画の策定',
        '後継者育成プログラム',
        '株式・資産の承継設計',
        '承継後の経営改革支援'
      ],
      color: '#8e44ad'
    }
  ]

  return (
    <div className="page services-page">
      <h1 className="page-title">サービス紹介</h1>
      <p className="page-subtitle">
        中小企業の課題に寄り添い、実践的なソリューションを提供します
      </p>

      {/* サービス概要 */}
      <section className="section">
        <div className="content-card" style={{
          background: 'linear-gradient(135deg, #2c5f8d 0%, #4a8fc7 100%)',
          color: 'white'
        }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>
            私たちのサービスの特徴
          </h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '2', opacity: '0.95' }}>
            理論だけでなく、現場で実践できる具体的な施策を提案します。
            経験豊富なコンサルタントが、プロジェクトの開始から成果が出るまで、
            継続的にサポートします。地域の特性を活かした、
            御社ならではのソリューションをご提供します。
          </p>
        </div>
      </section>

      {/* サービス一覧 */}
      <section className="section">
        <h2 className="section-title">提供サービス</h2>
        <div style={{
          display: 'grid',
          gap: '30px'
        }}>
          {services.map((service) => (
            <div key={service.id} className="content-card" style={{
              borderLeft: `5px solid ${service.color}`
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '20px',
                marginBottom: '1.5rem'
              }}>
                <div style={{
                  fontSize: '3rem',
                  lineHeight: '1',
                  flexShrink: 0
                }}>
                  {service.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontSize: '1.6rem',
                    color: service.color,
                    marginBottom: '0.8rem',
                    fontWeight: '600'
                  }}>
                    {service.title}
                  </h3>
                  <p style={{
                    fontSize: '1.05rem',
                    lineHeight: '1.8',
                    color: 'var(--text-dark)',
                    marginBottom: '1.5rem'
                  }}>
                    {service.description}
                  </p>
                </div>
              </div>

              <div style={{
                background: 'var(--bg-light)',
                padding: '1.5rem',
                borderRadius: '8px'
              }}>
                <h4 style={{
                  fontSize: '1.1rem',
                  color: 'var(--primary-color)',
                  marginBottom: '1rem',
                  fontWeight: '600'
                }}>
                  主なサービス内容
                </h4>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  display: 'grid',
                  gap: '0.8rem'
                }}>
                  {service.features.map((feature, index) => (
                    <li key={index} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      fontSize: '0.95rem',
                      lineHeight: '1.6'
                    }}>
                      <span style={{
                        display: 'inline-block',
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        backgroundColor: service.color,
                        flexShrink: 0
                      }} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* コンサルティングフロー */}
      <section className="section">
        <h2 className="section-title">コンサルティングの流れ</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px'
        }}>
          {[
            { step: 1, title: 'ヒアリング', desc: '現状の課題や目標をお伺いします' },
            { step: 2, title: '現状分析', desc: '詳細な調査・分析を実施します' },
            { step: 3, title: '提案', desc: '最適なソリューションをご提案します' },
            { step: 4, title: '実行支援', desc: '施策の実行をサポートします' },
            { step: 5, title: 'モニタリング', desc: '成果を測定し、改善を続けます' }
          ].map((flow) => (
            <div key={flow.step} className="content-card" style={{
              textAlign: 'center',
              padding: '2rem 1.5rem'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'var(--primary-color)',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                fontWeight: '700',
                margin: '0 auto 1rem'
              }}>
                {flow.step}
              </div>
              <h3 style={{
                fontSize: '1.2rem',
                color: 'var(--primary-color)',
                marginBottom: '0.8rem'
              }}>
                {flow.title}
              </h3>
              <p style={{
                fontSize: '0.9rem',
                lineHeight: '1.6',
                color: 'var(--text-light)'
              }}>
                {flow.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Services