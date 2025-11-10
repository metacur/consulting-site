// src/pages/Results.tsx
// 実績ページ - プロジェクト事例と数字で見る実績を表示
function Results() {
  // 実績データ
  const caseStudies = [
    {
      id: 1,
      industry: '製造業',
      company: 'A社様',
      challenge: '老舗製造業での生産性低下と人手不足',
      solution: '業務プロセスの可視化と自動化推進、作業標準の整備',
      result: '生産性30%向上、残業時間40%削減',
      period: '12ヶ月',
      color: '#2c5f8d'
    },
    {
      id: 2,
      industry: '小売業',
      company: 'B社様',
      challenge: 'EC事業参入による売上拡大の必要性',
      solution: 'ECサイト構築支援、デジタルマーケティング戦略立案',
      result: 'EC売上が全体の35%に到達、年商20%増加',
      period: '8ヶ月',
      color: '#4a8fc7'
    },
    {
      id: 3,
      industry: 'サービス業',
      company: 'C社様',
      challenge: '従業員のモチベーション低下と離職率の上昇',
      solution: '人事評価制度の刷新、キャリアパス設計、研修プログラム導入',
      result: '離職率を15%から5%に改善、従業員満足度向上',
      period: '10ヶ月',
      color: '#f39c12'
    },
    {
      id: 4,
      industry: '建設業',
      company: 'D社様',
      challenge: '二代目社長への事業承継と経営改革',
      solution: '事業承継計画策定、後継者育成、組織体制の再構築',
      result: 'スムーズな承継完了、承継後の売上15%増加',
      period: '18ヶ月',
      color: '#27ae60'
    },
    {
      id: 5,
      industry: '飲食業',
      company: 'E社様',
      challenge: 'コロナ禍での売上激減と経営危機',
      solution: 'テイクアウト・デリバリー事業の立ち上げ、コスト構造の見直し',
      result: '売上回復率120%達成、新規顧客層の開拓',
      period: '6ヶ月',
      color: '#16a085'
    },
    {
      id: 6,
      industry: 'IT業',
      company: 'F社様',
      challenge: '急成長に伴う組織体制の課題',
      solution: '組織構造の再設計、マネジメント層の育成、評価制度導入',
      result: '組織の安定化、売上成長率維持(前年比130%)',
      period: '9ヶ月',
      color: '#8e44ad'
    }
  ]

  // 数字で見る実績
  const statistics = [
    { value: '100+', label: 'プロジェクト実績', icon: '📋' },
    { value: '95%', label: 'クライアント満足度', icon: '⭐' },
    { value: '10年', label: '平均継続支援期間', icon: '📅' },
    { value: '25名', label: '専門コンサルタント', icon: '👥' }
  ]

  return (
    <div className="page results-page">
      <h1 className="page-title">実績紹介</h1>
      <p className="page-subtitle">
        100社以上の企業様と共に、確かな成果を積み重ねてきました
      </p>

      {/* 数字で見る実績 */}
      <section className="section">
        <h2 className="section-title">数字で見る実績</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '24px'
        }}>
          {statistics.map((stat, index) => (
            <div key={index} className="content-card" style={{
              textAlign: 'center',
              padding: '2.5rem 1.5rem',
              background: 'linear-gradient(135deg, #2c5f8d 0%, #4a8fc7 100%)',
              color: 'white'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                {stat.icon}
              </div>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                marginBottom: '0.5rem',
                lineHeight: '1'
              }}>
                {stat.value}
              </div>
              <div style={{
                fontSize: '1rem',
                opacity: '0.95',
                fontWeight: '500'
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 主要業界実績 */}
      <section className="section">
        <h2 className="section-title">主要業界での実績</h2>
        <div className="content-card">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
            gap: '20px',
            textAlign: 'center'
          }}>
            {[
              { icon: '🏭', name: '製造業' },
              { icon: '🏪', name: '小売業' },
              { icon: '🏗️', name: '建設業' },
              { icon: '🍽️', name: '飲食業' },
              { icon: '💻', name: 'IT業' },
              { icon: '🏥', name: '医療・介護' },
              { icon: '🎓', name: '教育' },
              { icon: '🚚', name: '運輸・物流' }
            ].map((industry, index) => (
              <div key={index} style={{
                padding: '1.5rem 1rem',
                borderRadius: '12px',
                background: 'var(--bg-light)',
                transition: 'transform 0.3s ease'
              }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
                  {industry.icon}
                </div>
                <div style={{
                  fontSize: '0.95rem',
                  color: 'var(--text-dark)',
                  fontWeight: '500'
                }}>
                  {industry.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 導入事例 */}
      <section className="section">
        <h2 className="section-title">導入事例</h2>
        <div style={{
          display: 'grid',
          gap: '30px'
        }}>
          {caseStudies.map((cs) => (
            <div key={cs.id} className="content-card" style={{
              borderTop: `4px solid ${cs.color}`
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '1.5rem',
                flexWrap: 'wrap',
                gap: '10px'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px'
                }}>
                  <span style={{
                    background: cs.color,
                    color: 'white',
                    padding: '6px 16px',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    fontWeight: '600'
                  }}>
                    {cs.industry}
                  </span>
                  <span style={{
                    fontSize: '1.2rem',
                    fontWeight: '600',
                    color: 'var(--text-dark)'
                  }}>
                    {cs.company}
                  </span>
                </div>
                <span style={{
                  fontSize: '0.9rem',
                  color: 'var(--text-light)',
                  background: 'var(--bg-light)',
                  padding: '4px 12px',
                  borderRadius: '12px'
                }}>
                  期間: {cs.period}
                </span>
              </div>

              <div style={{
                display: 'grid',
                gap: '1.5rem'
              }}>
                <div>
                  <h4 style={{
                    fontSize: '1.05rem',
                    color: 'var(--primary-color)',
                    marginBottom: '0.5rem',
                    fontWeight: '600'
                  }}>
                    課題
                  </h4>
                  <p style={{
                    fontSize: '0.95rem',
                    lineHeight: '1.7',
                    color: 'var(--text-dark)',
                    paddingLeft: '1rem',
                    borderLeft: '3px solid var(--bg-light)'
                  }}>
                    {cs.challenge}
                  </p>
                </div>

                <div>
                  <h4 style={{
                    fontSize: '1.05rem',
                    color: 'var(--primary-color)',
                    marginBottom: '0.5rem',
                    fontWeight: '600'
                  }}>
                    ソリューション
                  </h4>
                  <p style={{
                    fontSize: '0.95rem',
                    lineHeight: '1.7',
                    color: 'var(--text-dark)',
                    paddingLeft: '1rem',
                    borderLeft: '3px solid var(--bg-light)'
                  }}>
                    {cs.solution}
                  </p>
                </div>

                <div style={{
                  background: 'var(--bg-light)',
                  padding: '1.2rem',
                  borderRadius: '8px'
                }}>
                  <h4 style={{
                    fontSize: '1.05rem',
                    color: cs.color,
                    marginBottom: '0.5rem',
                    fontWeight: '600'
                  }}>
                    成果
                  </h4>
                  <p style={{
                    fontSize: '1rem',
                    lineHeight: '1.7',
                    color: 'var(--text-dark)',
                    fontWeight: '500'
                  }}>
                    {cs.result}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* お客様の声 */}
      <section className="section">
        <h2 className="section-title">お客様の声</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px'
        }}>
          {[
            {
              text: '現場を深く理解した上で、実践的な提案をいただきました。導入後も継続的にサポートしてくださり、確実に成果が出ています。',
              name: '製造業 A社 代表取締役',
              color: '#2c5f8d'
            },
            {
              text: '地域の特性を考慮したアドバイスが的確で、売上向上につながりました。長期的なパートナーとして信頼しています。',
              name: '小売業 B社 専務取締役',
              color: '#4a8fc7'
            },
            {
              text: '事業承継という大きな転機を、丁寧にサポートしていただきました。今では自信を持って経営に取り組めています。',
              name: '建設業 D社 代表取締役',
              color: '#27ae60'
            }
          ].map((voice, index) => (
            <div key={index} className="content-card" style={{
              borderLeft: `4px solid ${voice.color}`,
              background: 'var(--bg-light)'
            }}>
              <p style={{
                fontSize: '1rem',
                lineHeight: '1.8',
                color: 'var(--text-dark)',
                marginBottom: '1.5rem',
                fontStyle: 'italic'
              }}>
                「{voice.text}」
              </p>
              <p style={{
                fontSize: '0.9rem',
                color: voice.color,
                fontWeight: '600',
                textAlign: 'right'
              }}>
                {voice.name}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Results