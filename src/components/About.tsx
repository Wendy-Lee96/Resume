import { MapPin, Mail, Phone, Download } from 'lucide-react'
import { about, profile } from '../content'
import { useReveal } from '../hooks/useReveal'
import { pick } from '../palette'
import { Eyebrow } from './Eyebrow'

const contactRows = [
  { icon: MapPin, value: profile.location },
  { icon: Mail, value: profile.email },
  { icon: Phone, value: profile.phone },
]

export function About() {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <section id="about" className="px-4 py-24 sm:px-6">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl reveal ${visible ? 'is-visible' : ''}`}
      >
        <Eyebrow>关于我</Eyebrow>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{about.headline}</h2>

        {/* 左右结构：左个人名片卡（高度自适应右侧）+ 右侧总结段与 bullet */}
        <div className="mt-8 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch">
          {/* 左：名片卡 */}
          <div className="lg:order-first">
            <div className="flex h-full flex-col gap-5 overflow-hidden rounded-3xl border border-[var(--border)] bg-gradient-to-b from-[var(--accent)]/10 via-[var(--card)] to-[var(--card)] p-4 shadow-sm sm:flex-row sm:items-center">
              {/* 插画：固定 320px 高，左侧 */}
              <div className="h-[260px] w-full shrink-0 overflow-hidden rounded-2xl sm:w-[200px]">
                <img
                  src="./images/ai-pm.jpg"
                  alt="全链路 AI 产品人插画风形象"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* 个人信息：右侧 */}
              <div className="flex-1 px-1">
                <h3 className="text-xl font-bold">
                  李文文 <span className="grad-text">Wendy</span>
                </h3>
                <p className="mt-1 text-sm font-medium text-[var(--muted)]">
                  {profile.title}
                </p>

                <ul className="mt-4 space-y-2.5">
                  {contactRows.map(({ icon: Icon, value }) => (
                    <li
                      key={value}
                      className="flex items-center gap-2.5 text-sm text-[var(--muted)]"
                    >
                      <Icon size={15} className="shrink-0 text-[var(--accent)]" />
                      <span className="truncate">{value}</span>
                    </li>
                  ))}
                </ul>

                {profile.resumeUrl && (
                  <a
                    href={profile.resumeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--accent)] transition hover:opacity-80"
                  >
                    <Download size={15} /> 查看我的简历
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* 右：总结段 + bullet */}
          <div className="flex flex-col justify-center gap-7">
            <div className="space-y-4 text-[15px] leading-7 text-[var(--muted)]">
              {about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {about.bullets.map((b, i) => {
                const c = pick(i)
                return (
                  <div
                    key={b}
                    className="flex items-start gap-3 text-[15px] font-medium leading-7"
                  >
                    <span
                      className="mt-2.5 h-2 w-2 shrink-0 rounded-full"
                      style={{ background: c }}
                    />
                    <span>{b}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
