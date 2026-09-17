import { useCallback, useRef, useState } from 'react'
import {
  Mic,
  HousePlug,
  Truck,
  Building2,
  Landmark,
  Network,
  Cloud,
  Map,
  Calendar,
  User,
  ChevronDown,
  ChevronUp,
  TrendingUp,
} from 'lucide-react'
import { projects } from '../content'
import { useReveal } from '../hooks/useReveal'
import { pick, cardBg, iconBg, chipBg } from '../palette'
import { Eyebrow } from './Eyebrow'

const icons = [Mic, HousePlug, Truck, Building2, Landmark, Network, Cloud, Map]

export function Projects() {
  const { ref, visible } = useReveal<HTMLDivElement>()
  const [active, setActive] = useState(0)
  const listRef = useRef<HTMLDivElement>(null)

  const project = projects[active]
  const Icon = icons[active % icons.length]
  const color = pick(active)

  const select = useCallback((i: number) => setActive(i), [])

  const step = useCallback(
    (dir: 1 | -1) => {
      setActive((v) => (v + dir + projects.length) % projects.length)
    },
    [],
  )

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault()
      step(1)
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault()
      step(-1)
    }
  }

  return (
    <section id="projects" className="px-4 py-24 sm:px-6">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl reveal ${visible ? 'is-visible' : ''}`}
      >
        <Eyebrow>项目案例</Eyebrow>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
          从 0 到 1 的产品构建与增长实践
        </h2>
        <p className="mt-3 max-w-2xl text-[var(--muted)]">
          覆盖 AI、智能家居、SaaS、ERP、数据平台与供应链等复杂业务系统，点击左侧切换查看详情。
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-[340px_1fr] lg:items-stretch">
          {/* ===== 左侧项目列表：外层占位跟随右侧高度，内层纵向滚动 ===== */}
          <div className="relative lg:min-h-[460px]">
            <div
              ref={listRef}
              tabIndex={0}
              onKeyDown={onKeyDown}
              className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-3 outline-none ring-[var(--accent)]/40 focus-visible:ring-2 max-lg:flex max-lg:gap-2 max-lg:overflow-x-auto max-lg:rounded-2xl lg:absolute lg:inset-0 lg:overflow-y-auto"
              aria-label="项目列表"
            >
            {projects.map((p, i) => {
              const ItemIcon = icons[i % icons.length]
              const c = pick(i)
              const isActive = i === active
              return (
                <button
                  key={p.name}
                  onClick={() => select(i)}
                  aria-current={isActive}
                  className={`group relative w-full shrink-0 rounded-2xl px-4 py-3.5 text-left transition-all duration-300 max-lg:w-52 lg:mb-1 ${
                    isActive
                      ? 'bg-[var(--bg)] shadow-sm'
                      : 'hover:bg-[var(--bg)]/60'
                  }`}
                >
                  {/* active indicator */}
                  <span
                    className={`absolute left-0 top-1/2 -translate-y-1/2 rounded-full transition-all duration-300 ${
                      isActive ? 'h-8 w-1 opacity-100' : 'h-0 w-1 opacity-0'
                    } max-lg:hidden`}
                    style={{ background: c }}
                  />
                  <div className="flex items-start gap-3">
                    <span
                      className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                      style={{ color: c, backgroundColor: chipBg(c) }}
                    >
                      <ItemIcon size={18} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex items-center justify-between gap-2">
                        <span
                          className={`truncate text-sm font-semibold ${isActive ? '' : ''}`}
                          style={isActive ? { color: c } : undefined}
                        >
                          {p.name}
                        </span>
                        <span className="shrink-0 text-xs tabular-nums text-[var(--muted)]">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                      </span>
                      <span className="mt-1 line-clamp-2 block text-xs leading-5 text-[var(--muted)]">
                        {p.desc}
                      </span>
                      <span className="mt-1.5 block text-xs font-medium text-[var(--muted)]">
                        {p.period}
                      </span>
                    </span>
                  </div>
                </button>
              )
            })}
            </div>
          </div>

          {/* ===== 右侧详情面板：高度由内容自适应 ===== */}
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 sm:p-8">
            <div key={active} className="animate-detail">
              {/* header */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <span
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl"
                    style={{ color, background: iconBg(color) }}
                  >
                    <Icon size={24} />
                  </span>
                  <div>
                    <h3 className="text-xl font-bold sm:text-2xl">{project.name}</h3>
                    <p className="mt-1 text-sm leading-6 text-[var(--muted)]">{project.desc}</p>
                  </div>
                </div>
                <div className="hidden shrink-0 text-sm font-semibold tabular-nums text-[var(--muted)] sm:block">
                  <span className="text-lg" style={{ color }}>
                    {String(active + 1).padStart(2, '0')}
                  </span>{' '}
                  / {String(projects.length).padStart(2, '0')}
                </div>
              </div>

              {/* meta */}
              <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[var(--muted)]">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar size={15} style={{ color }} />
                  {project.period}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <User size={15} style={{ color }} />
                  {project.role}
                </span>
              </div>

              {/* tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full px-3 py-1 text-xs font-medium"
                    style={{ color, background: chipBg(color) }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* overview */}
              <div
                className="mt-6 rounded-2xl p-4"
                style={{ background: cardBg(color) }}
              >
                <div
                  className="text-xs font-semibold uppercase tracking-wider"
                  style={{ color }}
                >
                  项目概述
                </div>
                <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{project.overview}</p>
              </div>

              {/* business value */}
              <div
                className="mt-4 rounded-2xl border p-4"
                style={{ borderColor: `${color}40`, background: cardBg(color) }}
              >
                <div
                  className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider"
                  style={{ color }}
                >
                  <TrendingUp size={15} />
                  商业价值
                </div>
                <p className="mt-2 text-sm font-medium leading-7" style={{ color }}>
                  {project.businessValue.summary}
                </p>
                <ul className="mt-3 space-y-2">
                  {project.businessValue.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-2 text-sm leading-6 text-[var(--muted)]"
                    >
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ background: color }}
                      />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              {/* results */}
              <div className="mt-6">
                <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
                  项目成果
                </div>
                <div
                  className={`mt-3 grid gap-3 ${project.results.length > 3 ? 'grid-cols-2 sm:grid-cols-4' : 'grid-cols-3'}`}
                >
                  {project.results.map((r, i) => {
                    const rc = pick(i)
                    return (
                      <div
                        key={r.label}
                        className="animate-detail rounded-2xl border border-[var(--border)] p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                        style={{ background: cardBg(rc), animationDelay: `${0.08 * i + 0.05}s` }}
                      >
                        <div
                          className="text-xl font-extrabold tabular-nums sm:text-2xl"
                          style={{ color: rc }}
                        >
                          {r.value}
                        </div>
                        <div className="mt-1 text-xs text-[var(--muted)]">{r.label}</div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* responsibilities + features */}
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
                    我的职责
                  </div>
                  <ul className="mt-3 space-y-2">
                    {project.responsibilities.map((r) => (
                      <li
                        key={r}
                        className="flex items-start gap-2 text-sm leading-6 text-[var(--muted)]"
                      >
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ background: color }}
                        />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
                    功能亮点
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.features.map((f, i) => {
                      const fc = pick(i + 1)
                      return (
                        <span
                          key={f}
                          className="rounded-lg px-2.5 py-1.5 text-xs font-medium"
                          style={{ color: fc, background: chipBg(fc) }}
                        >
                          {f}
                        </span>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* prev / next */}
            <div className="mt-8 flex items-center justify-between border-t border-[var(--border)] pt-5">
              <button
                onClick={() => step(-1)}
                className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] px-4 py-2 text-sm font-medium transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                <ChevronUp size={15} /> 上一个
              </button>
              <div className="flex gap-1.5">
                {projects.map((p, i) => (
                  <button
                    key={p.name}
                    onClick={() => select(i)}
                    aria-label={`切换到 ${p.name}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === active ? 'w-6' : 'w-1.5 bg-[var(--border)] hover:bg-[var(--muted)]'
                    }`}
                    style={i === active ? { background: pick(i) } : undefined}
                  />
                ))}
              </div>
              <button
                onClick={() => step(1)}
                className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] px-4 py-2 text-sm font-medium transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                下一个 <ChevronDown size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
