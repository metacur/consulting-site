// src/components/TileGrid.tsx
// グラフィカルなタイルレイアウトを実現するコンポーネント
import type { ReactNode } from 'react'
import './TileGrid.css'

// タイルアイテムのプロパティ型定義
interface TileItem {
  id: number
  content: ReactNode
  size?: 'small' | 'medium' | 'large'  // タイルのサイズ
  color?: string                        // 背景色
}

// コンポーネントのプロパティ型定義
interface TileGridProps {
  items: TileItem[]
  columns?: number  // グリッドのカラム数（デフォルト: 3）
}

function TileGrid({ items, columns = 3 }: TileGridProps) {
  return (
    <div 
      className="tile-grid" 
      style={{ 
        gridTemplateColumns: `repeat(auto-fit, minmax(${100 / columns}%, 1fr))` 
      }}
    >
      {items.map((item) => (
        <div
          key={item.id}
          className={`tile-item ${item.size || 'medium'}`}
          style={{ backgroundColor: item.color }}
        >
          <div className="tile-content">
            {item.content}
          </div>
        </div>
      ))}
    </div>
  )
}

export default TileGrid