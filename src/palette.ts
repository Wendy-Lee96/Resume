// 全站卡片统一调色板（与「产品思考」卡片风格一致）
// 用法：palette[i % palette.length]，配合 gradient-card / chip 样式
export const palette = [
  '#6366f1', // indigo
  '#0ea5e9', // sky
  '#10b981', // emerald
  '#f97316', // orange
  '#8b5cf6', // violet
  '#f43f5e', // rose
  '#14b8a6', // teal
  '#eab308', // amber
]

export const pick = (i: number) => palette[i % palette.length]

/** 卡片渐变底：从色调晕染过渡到卡片底色 */
export const cardBg = (color: string) =>
  `linear-gradient(150deg, ${color}22 0%, var(--card) 52%)`

/** 图标块渐变底 */
export const iconBg = (color: string) =>
  `linear-gradient(140deg, ${color}30, ${color}10)`

/** 小标签底 */
export const chipBg = (color: string) => `${color}16`

/** 通用卡片类名（圆角/边框/内边距/上浮） */
export const cardClass =
  'h-full rounded-3xl border border-[var(--border)] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-6'
