// src/pages/About.tsx
// 会社概要ページ - 会社情報を表示
function About() {
  return (
    <div className="page about-page">
      <h1 className="page-title">会社概要</h1>
      <p className="page-subtitle">
        地域に根ざし、中小企業の成長を支援するコンサルティングファーム
      </p>

      {/* 会社紹介 */}
      <section className="section">
        <h2 className="section-title">私たちについて</h2>
        <div className="content-card">
          <p style={{ fontSize: '1.1rem', lineHeight: '2', color: 'var(--text-dark)' }}>
            私たちは、地域の中小企業に特化したコンサルティングサービスを提供しています。
            大企業向けのコンサルティングとは異なり、地域の特性や中小企業ならではの課題に寄り添い、
            実践的で持続可能なソリューションをご提案します。
            <br /><br />
            創業以来、100社以上の企業様と共に成長してきました。
            経営戦略の立案から、業務改善、人材育成、DX推進まで、
            幅広い分野で実績を積み重ねています。
            <br /><br />
            「地域の未来を共に創る」を理念に、クライアント企業の成功が
            地域全体の活性化につながると信じ、日々活動しています。
          </p>
        </div>
      </section>

      {/* 会社情報 */}
      <section className="section">
        <h2 className="section-title">会社情報</h2>
        <div className="content-card">
          <table style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: '1rem'
          }}>
            <tbody>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <th style={{
                  textAlign: 'left',
                  padding: '16px 0',
                  width: '200px',
                  color: 'var(--primary-color)',
                  fontWeight: '600'
                }}>
                  会社名
                </th>
                <td style={{ padding: '16px 0' }}>
                  株式会社 地域コンサル◯◯◯◯◯◯◯◯
                </td>
              </tr>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <th style={{
                  textAlign: 'left',
                  padding: '16px 0',
                  color: 'var(--primary-color)',
                  fontWeight: '600'
                }}>
                  設立
                </th>
                <td style={{ padding: '16px 0' }}>
                  2015年◯月◯日
                </td>
              </tr>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <th style={{
                  textAlign: 'left',
                  padding: '16px 0',
                  color: 'var(--primary-color)',
                  fontWeight: '600'
                }}>
                  代表者
                </th>
                <td style={{ padding: '16px 0' }}>
                  代表取締役社長 ◯◯◯◯◯◯
                </td>
              </tr>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <th style={{
                  textAlign: 'left',
                  padding: '16px 0',
                  color: 'var(--primary-color)',
                  fontWeight: '600'
                }}>
                  所在地
                </th>
                <td style={{ padding: '16px 0' }}>
                  〒000-0000<br />
                  東京都◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯
                </td>
              </tr>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <th style={{
                  textAlign: 'left',
                  padding: '16px 0',
                  color: 'var(--primary-color)',
                  fontWeight: '600'
                }}>
                  資本金
                </th>
                <td style={{ padding: '16px 0' }}>
                  ◯◯◯◯万円
                </td>
              </tr>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <th style={{
                  textAlign: 'left',
                  padding: '16px 0',
                  color: 'var(--primary-color)',
                  fontWeight: '600'
                }}>
                  従業員数
                </th>
                <td style={{ padding: '16px 0' }}>
                  ◯◯名（2025年4月現在）
                </td>
              </tr>
              <tr>
                <th style={{
                  textAlign: 'left',
                  padding: '16px 0',
                  color: 'var(--primary-color)',
                  fontWeight: '600'
                }}>
                  事業内容
                </th>
                <td style={{ padding: '16px 0' }}>
                  中小企業向け経営コンサルティング<br />
                  業務改善・DX推進支援<br />
                  人材育成・組織開発支援<br />
                  事業承継サポート
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 企業理念 */}
      <section className="section">
        <h2 className="section-title">企業理念</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px'
        }}>
          <div className="content-card" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🎯</div>
            <h3 style={{
              fontSize: '1.3rem',
              color: 'var(--primary-color)',
              marginBottom: '1rem'
            }}>
              ミッション
            </h3>
            <p style={{ lineHeight: '1.8', color: 'var(--text-light)' }}>
              地域の中小企業の持続的な成長を支援し、地域経済の活性化に貢献する
            </p>
          </div>

          <div className="content-card" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>👁️</div>
            <h3 style={{
              fontSize: '1.3rem',
              color: 'var(--primary-color)',
              marginBottom: '1rem'
            }}>
              ビジョン
            </h3>
            <p style={{ lineHeight: '1.8', color: 'var(--text-light)' }}>
              地域で最も信頼されるビジネスパートナーとなり、100年続く企業づくりを支援する
            </p>
          </div>

          <div className="content-card" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>💎</div>
            <h3 style={{
              fontSize: '1.3rem',
              color: 'var(--primary-color)',
              marginBottom: '1rem'
            }}>
              バリュー
            </h3>
            <p style={{ lineHeight: '1.8', color: 'var(--text-light)' }}>
              誠実さ・実践主義・継続的サポート・地域への貢献
            </p>
          </div>
        </div>
      </section>

      {/* アクセス */}
      <section className="section">
        <h2 className="section-title">アクセス</h2>
        <div className="content-card">
          <h3 style={{
            fontSize: '1.2rem',
            marginBottom: '1rem',
            color: 'var(--primary-color)'
          }}>
            所在地
          </h3>
          <p style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>
            〒000-0000<br />
            東京都◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯<br />
            TEL: 03-1234-5678<br />
            FAX: 03-1234-5679<br />
            Email: 
          </p>
          <h3 style={{
            fontSize: '1.2rem',
            marginBottom: '1rem',
            color: 'var(--primary-color)'
          }}>
            交通アクセス
          </h3>
          <ul style={{ lineHeight: '2', paddingLeft: '1.5rem' }}>
            <li>東京メトロ◯◯線「◯◯駅」徒歩◯分</li>
            <li>JR山手線「◯◯駅」徒歩◯分</li>
            <li>都営新宿線「◯◯駅」徒歩◯分</li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default About