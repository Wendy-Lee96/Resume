import { ArrowDown, Download } from 'lucide-react'
import { profile, stats } from '../content'
import { useReveal } from '../hooks/useReveal'
import { SkillCloud } from './SkillCloud'
import { pick, cardBg } from '../palette'

export function Hero() {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-4 pt-24 sm:px-6"
    >
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[var(--accent)]/20 blur-[120px]" />
        <div className="absolute right-[5%] top-[30%] h-[320px] w-[320px] rounded-full bg-[var(--accent-2)]/20 blur-[120px]" />
      </div>

      <div
        ref={ref}
        className={`mx-auto w-full max-w-6xl reveal ${visible ? 'is-visible' : ''}`}
      >
        <div className="flex flex-col-reverse items-start gap-8 lg:flex-row lg:items-center">
          <div className="flex-1 lg:self-start">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
              {profile.title}
            </p>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
              用 AI 赋能业务落地
              <br />
              <span className="grad-text">用产品思维创造真实价值</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base text-[var(--muted)] sm:text-lg">
              专注于智慧人居与智能家居场景的研发落地，把复杂的设备接入、状态流转与多角色协作，转化为简单可用的产品体验。
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:opacity-90"
              >
                查看项目案例
              </a>
              {profile.resumeUrl && (
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-6 py-3 text-sm font-semibold transition hover:border-[var(--accent)]"
                >
                  <Download size={16} /> 查看我的简历
                </a>
              )}
            </div>
          </div>

          <div className="shrink-0">
            <SkillCloud />
          </div>
        </div>

        {/* stats wall */}
        <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((s, i) => {
            const c = pick(i)
            return (
              <div
                key={s.label}
                className="group relative flex h-[120px] flex-col justify-center overflow-hidden rounded-2xl border border-[var(--border)] px-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ background: cardBg(c) }}
              >
                <div
                  className="text-3xl font-extrabold tabular-nums leading-tight sm:text-4xl"
                  style={{ color: c }}
                >
                  {s.value}
                </div>
                <div className="mt-1 truncate text-sm text-[var(--muted)]">
                  {s.label}
                </div>
                {/* 标签下方渐变横线（hover 拉满） */}
                <div
                  className="mt-3 h-1 rounded-full transition-all duration-500 group-hover:w-full"
                  style={{ width: '28%', background: c }}
                />
              </div>
            )
          })}
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 sm:block">
        <a
          href="#about"
          className="flex h-12 w-12 animate-bounce items-center justify-center rounded-full border border-white/40 bg-[var(--card)]/25 text-[var(--muted)] shadow-lg shadow-black/5 backdrop-blur-md backdrop-saturate-150 transition hover:border-[var(--accent)]/40 hover:text-[var(--accent)]"
          aria-label="向下滚动"
        >
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  )
}
