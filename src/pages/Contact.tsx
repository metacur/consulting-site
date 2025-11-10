// src/pages/Contact.tsx
// お問い合わせページ - フォームUI（送信機能は未実装）
import { useState } from 'react'

function Contact() {
  // フォームの状態管理
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    inquiry: '',
    message: ''
  })

  // 送信完了メッセージの表示状態
  const [isSubmitted, setIsSubmitted] = useState(false)

  // 入力値の変更ハンドラー
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // フォーム送信ハンドラー（バックエンド未実装のためデモ動作）
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // 実際の実装では、ここでAPIにデータを送信
    console.log('送信データ:', formData)
    
    // 送信完了メッセージを表示
    setIsSubmitted(true)
    
    // フォームをリセット
    setFormData({
      company: '',
      name: '',
      email: '',
      phone: '',
      inquiry: '',
      message: ''
    })
    
    // 3秒後にメッセージを非表示
    setTimeout(() => {
      setIsSubmitted(false)
    }, 3000)
  }

  return (
    <div className="page contact-page">
      <h1 className="page-title">お問い合わせ</h1>
      <p className="page-subtitle">
        お気軽にご相談ください。初回相談は無料です
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '30px',
        marginBottom: '4rem'
      }}>
        {/* 電話でのお問い合わせ */}
        <div className="content-card" style={{
          background: 'linear-gradient(135deg, #2c5f8d 0%, #4a8fc7 100%)',
          color: 'white',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📞</div>
          <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>
            お電話でのお問い合わせ
          </h3>
          <p style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '0.5rem' }}>
            03-1234-5678
          </p>
          <p style={{ fontSize: '0.95rem', opacity: '0.9' }}>
            受付時間: 平日 9:00〜18:00
          </p>
        </div>

        {/* メールでのお問い合わせ */}
        <div className="content-card" style={{
          background: 'linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)',
          color: 'white',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✉️</div>
          <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>
            メールでのお問い合わせ
          </h3>
          <p style={{
            fontSize: '1.2rem',
            fontWeight: '600',
            marginBottom: '0.5rem',
            wordBreak: 'break-all'
          }}>
            info@xxxxxxxxxxx.xxx
          </p>
          <p style={{ fontSize: '0.95rem', opacity: '0.9' }}>
            24時間受付・2営業日以内に返信
          </p>
        </div>
      </div>

      {/* お問い合わせフォーム */}
      <section className="section">
        <h2 className="section-title">お問い合わせフォーム</h2>
        
        {/* 送信完了メッセージ */}
        {isSubmitted && (
          <div style={{
            background: '#d4edda',
            color: '#155724',
            padding: '1rem 1.5rem',
            borderRadius: '8px',
            marginBottom: '2rem',
            border: '1px solid #c3e6cb',
            animation: 'fadeIn 0.3s ease'
          }}>
            ✓ お問い合わせを受け付けました。担当者より折り返しご連絡いたします。
          </div>
        )}

        <div className="content-card">
          <form onSubmit={handleSubmit}>
            {/* 会社名 */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{
                display: 'block',
                fontSize: '0.95rem',
                fontWeight: '600',
                color: 'var(--text-dark)',
                marginBottom: '0.5rem'
              }}>
                会社名 <span style={{ color: '#e74c3c' }}>*</span>
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '0.8rem',
                  fontSize: '1rem',
                  border: '2px solid #e0e0e0',
                  borderRadius: '6px',
                  transition: 'border-color 0.3s ease',
                  outline: 'none'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--primary-color)'}
                onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
              />
            </div>

            {/* お名前 */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{
                display: 'block',
                fontSize: '0.95rem',
                fontWeight: '600',
                color: 'var(--text-dark)',
                marginBottom: '0.5rem'
              }}>
                お名前 <span style={{ color: '#e74c3c' }}>*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '0.8rem',
                  fontSize: '1rem',
                  border: '2px solid #e0e0e0',
                  borderRadius: '6px',
                  transition: 'border-color 0.3s ease',
                  outline: 'none'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--primary-color)'}
                onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
              />
            </div>

            {/* メールアドレス */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{
                display: 'block',
                fontSize: '0.95rem',
                fontWeight: '600',
                color: 'var(--text-dark)',
                marginBottom: '0.5rem'
              }}>
                メールアドレス <span style={{ color: '#e74c3c' }}>*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '0.8rem',
                  fontSize: '1rem',
                  border: '2px solid #e0e0e0',
                  borderRadius: '6px',
                  transition: 'border-color 0.3s ease',
                  outline: 'none'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--primary-color)'}
                onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
              />
            </div>

            {/* 電話番号 */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{
                display: 'block',
                fontSize: '0.95rem',
                fontWeight: '600',
                color: 'var(--text-dark)',
                marginBottom: '0.5rem'
              }}>
                電話番号
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '0.8rem',
                  fontSize: '1rem',
                  border: '2px solid #e0e0e0',
                  borderRadius: '6px',
                  transition: 'border-color 0.3s ease',
                  outline: 'none'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--primary-color)'}
                onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
              />
            </div>

            {/* お問い合わせ種別 */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{
                display: 'block',
                fontSize: '0.95rem',
                fontWeight: '600',
                color: 'var(--text-dark)',
                marginBottom: '0.5rem'
              }}>
                お問い合わせ種別 <span style={{ color: '#e74c3c' }}>*</span>
              </label>
              <select
                name="inquiry"
                value={formData.inquiry}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '0.8rem',
                  fontSize: '1rem',
                  border: '2px solid #e0e0e0',
                  borderRadius: '6px',
                  transition: 'border-color 0.3s ease',
                  outline: 'none',
                  backgroundColor: 'white'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--primary-color)'}
                onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
              >
                <option value="">選択してください</option>
                <option value="consult">コンサルティング依頼</option>
                <option value="estimate">お見積もり依頼</option>
                <option value="information">資料請求</option>
                <option value="other">その他</option>
              </select>
            </div>

            {/* お問い合わせ内容 */}
            <div style={{ marginBottom: '2rem' }}>
              <label style={{
                display: 'block',
                fontSize: '0.95rem',
                fontWeight: '600',
                color: 'var(--text-dark)',
                marginBottom: '0.5rem'
              }}>
                お問い合わせ内容 <span style={{ color: '#e74c3c' }}>*</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={8}
                style={{
                  width: '100%',
                  padding: '0.8rem',
                  fontSize: '1rem',
                  border: '2px solid #e0e0e0',
                  borderRadius: '6px',
                  transition: 'border-color 0.3s ease',
                  outline: 'none',
                  resize: 'vertical'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--primary-color)'}
                onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
              />
            </div>

            {/* 送信ボタン */}
            <button
              type="submit"
              style={{
                width: '100%',
                padding: '1rem',
                fontSize: '1.1rem',
                fontWeight: '600',
                color: 'white',
                background: 'linear-gradient(135deg, #2c5f8d 0%, #4a8fc7 100%)',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                boxShadow: '0 4px 12px rgba(44, 95, 141, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 6px 16px rgba(44, 95, 141, 0.4)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(44, 95, 141, 0.3)'
              }}
            >
              送信する
            </button>
          </form>

          {/* 注意事項 */}
          <div style={{
            marginTop: '2rem',
            padding: '1.5rem',
            background: 'var(--bg-light)',
            borderRadius: '8px',
            fontSize: '0.9rem',
            lineHeight: '1.8',
            color: 'var(--text-light)'
          }}>
            <p style={{ marginBottom: '0.5rem' }}>
              ※ お問い合わせいただいた内容は、弊社の個人情報保護方針に基づき適切に管理いたします。
            </p>
            <p>
              ※ 2営業日以内にご返信いたします。お急ぎの場合はお電話にてお問い合わせください。
            </p>
          </div>
        </div>
      </section>

      {/* アクセス情報 */}
      <section className="section">
        <h2 className="section-title">アクセス</h2>
        <div className="content-card">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem'
          }}>
            <div>
              <h3 style={{
                fontSize: '1.2rem',
                color: 'var(--primary-color)',
                marginBottom: '1rem'
              }}>
                所在地
              </h3>
              <p style={{ lineHeight: '1.8' }}>
                〒000-0000<br />
                東京都◯◯◯◯◯◯◯◯◯◯◯◯◯◯<br />
                ◯◯◯◯◯◯◯<br />
                <br />
                TEL: 03-1234-5678<br />
                FAX: 03-1234-5679<br />
                Email: info@xxxxxxxxx.xxx
              </p>
            </div>
            <div>
              <h3 style={{
                fontSize: '1.2rem',
                color: 'var(--primary-color)',
                marginBottom: '1rem'
              }}>
                営業時間
              </h3>
              <p style={{ lineHeight: '1.8' }}>
                平日 9:00〜18:00<br />
                （土日祝日は休業）
              </p>
              <h3 style={{
                fontSize: '1.2rem',
                color: 'var(--primary-color)',
                marginTop: '2rem',
                marginBottom: '1rem'
              }}>
                アクセス
              </h3>
              <ul style={{ lineHeight: '2', paddingLeft: '1.5rem' }}>
                <li>東京◯◯線「◯◯駅」徒歩◯分</li>
                <li>JR山手線「◯◯駅」徒歩◯分</li>
                <li>都営新宿線「◯◯駅」徒歩◯分</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact