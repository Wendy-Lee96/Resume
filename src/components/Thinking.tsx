import {
  Target,
  User,
  BarChart3,
  Cpu,
  TrendingUp,
  Lightbulb,
  UserCheck,
  Network,
  MousePointerClick,
  Bot,
  ChevronRight,
} from 'lucide-react'
import type { ReactNode } from 'react'
import { thinking } from '../content'
import { useReveal } from '../hooks/useReveal'
import { pick, cardBg, iconBg, chipBg, cardClass } from '../palette'
import { Eyebrow } from './Eyebrow'

const iconMap: Record<string, ReactNode> = {
  target: <Target size={18} />,
  user: <User size={18} />,
  chart: <BarChart3 size={18} />,
  cpu: <Cpu size={18} />,
  trend: <TrendingUp size={18} />,
}

const stepIcons = [Lightbulb, UserCheck, Network, MousePointerClick, Bot, TrendingUp]

export function Thinking() {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <section id="thinking" className="px-4 py-24 sm:px-6">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl reveal ${visible ? 'is-visible' : ''}`}
      >
        {/* ===== Header：左侧标题 + 右侧插图 ===== */}
        <Eyebrow>Product Thinking</Eyebrow>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
          我的产品思考<span className="grad-text">。</span>
        </h2>
        <p className="mt-3 max-w-xl text-[15px] leading-7 text-[var(--muted)]">
          {thinking.sub}
        </p>

        {/* ===== 六步流程卡片 ===== */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {thinking.steps.map((s, i) => {
            const color = pick(i)
            const StepIcon = stepIcons[i % stepIcons.length]
            const showArrow = i % 3 !== 2 && i !== thinking.steps.length - 1
            return (
              <div key={s.no} className="relative">
                <div
                  className={`group ${cardClass}`}
                  style={{ background: cardBg(color) }}
                >
                  <div className="flex items-start justify-between">
                    <span
                      className="flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110"
                      style={{ color, background: iconBg(color) }}
                    >
                      <StepIcon size={22} />
                    </span>
                    <span
                      className="text-2xl font-extrabold tabular-nums"
                      style={{
                        color,
                        opacity: 0.9,
                      }}
                    >
                      {s.no}
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{s.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full px-2.5 py-1 text-xs font-medium"
                        style={{ color, background: chipBg(color) }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 卡片间衔接箭头 */}
                {showArrow && (
                  <ChevronRight
                    size={20}
                    className="absolute -right-[18px] top-1/2 z-10 hidden -translate-y-1/2 text-[var(--muted)] lg:block"
                  />
                )}
              </div>
            )
          })}
        </div>

        {/* ===== 价值观横条 ===== */}
        <div className="mt-8 flex flex-col gap-5 rounded-3xl border border-[var(--border)] bg-[var(--card)] p-5 sm:p-6 lg:flex-row lg:items-center">
          <div className="flex flex-[1.3] items-start gap-3 lg:border-r lg:border-[var(--border)] lg:pr-6">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500/25 to-cyan-400/20 text-[var(--accent)]">
              {iconMap['target']}
            </span>
            <div>
              <div className="text-sm font-bold">{thinking.values[0].title}</div>
              <p className="mt-1 text-xs leading-5 text-[var(--muted)]">
                {thinking.values[0].desc}
              </p>
            </div>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-4 lg:grid-cols-4">
            {thinking.values.slice(1).map((v) => (
              <div key={v.title} className="flex items-start gap-2.5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--bg)] text-[var(--accent)]">
                  {iconMap[v.icon]}
                </span>
                <div>
                  <div className="text-xs font-bold sm:text-sm">{v.title}</div>
                  <p className="mt-0.5 text-[11px] leading-4 text-[var(--muted)] sm:text-xs">
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
