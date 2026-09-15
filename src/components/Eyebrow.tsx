import type { ReactNode } from 'react'

/** 章节小标签：圆弧形浅底 pill（与「Product Thinking」一致） */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block rounded-full bg-[var(--accent)]/10 px-3 py-1 text-xs font-semibold text-[var(--accent)]">
      {children}
    </span>
  )
}
