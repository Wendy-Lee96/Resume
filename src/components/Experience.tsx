import { Briefcase } from 'lucide-react'
import { experiences } from '../content'
import { useReveal } from '../hooks/useReveal'
import { Eyebrow } from './Eyebrow'

export function Experience() {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <section id="experience" className="px-4 py-24 sm:px-6">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl reveal ${visible ? 'is-visible' : ''}`}
      >
        <Eyebrow>工作经历</Eyebrow>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">十年产品之路</h2>
        <p className="mt-3 max-w-2xl text-[var(--muted)]">
          从人力资源 SaaS 到数据中台，再到智慧人居与 AI 产品，持续把复杂业务转化为可落地体验。
        </p>

        <div className="relative mt-12 space-y-10">
          {/* timeline line */}
          <div className="absolute bottom-2 left-[19px] top-2 w-px bg-[var(--border)] md:left-1/2 md:-translate-x-px" />

          {experiences.map((exp, idx) => {
            const isLeft = idx % 2 === 0
            return (
              <div
                key={exp.company + exp.period}
                className="relative md:grid md:grid-cols-2 md:gap-8"
              >
                {/* dot */}
                <div className="absolute left-[11px] top-2 z-10 flex h-4 w-4 items-center justify-center rounded-full border-2 border-[var(--accent)] bg-[var(--bg)] md:left-1/2 md:-translate-x-1/2">
                  <div className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                </div>

                {/* time + company */}
                <div
                  className={`pl-12 md:pl-0 ${
                    isLeft ? 'md:pr-12 md:text-right' : 'md:col-start-2 md:pl-12 md:text-left'
                  }`}
                >
                  <div className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] md:justify-end">
                    <Briefcase size={14} className="hidden md:inline" />
                    {exp.period}
                  </div>
                  <h3 className="mt-1 text-xl font-bold">{exp.company}</h3>
                  <p className="text-sm font-medium text-[var(--muted)]">
                    {exp.title}
                    {exp.location && ` · ${exp.location}`}
                  </p>
                </div>

                {/* highlights */}
                <div
                  className={`pl-12 pt-4 md:pl-0 md:pt-0 ${
                    isLeft ? 'md:col-start-2 md:pl-12' : 'md:col-start-1 md:row-start-1 md:pr-12'
                  }`}
                >
                  <ul className="space-y-2">
                    {exp.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-[15px] leading-7 text-[var(--muted)]"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]/70" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
