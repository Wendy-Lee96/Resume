import { useState, type ReactNode } from 'react'
import { Copy, Check, Mail, MessageCircle, Phone, MapPin, Zap, Eye, Rocket } from 'lucide-react'
import { contact, profile } from '../content'
import { useReveal } from '../hooks/useReveal'
import { pick, cardBg, iconBg, cardClass } from '../palette'
import { Eyebrow } from './Eyebrow'

function CopyRow({
  icon,
  label,
  value,
  color,
}: {
  icon: ReactNode
  label: string
  value: string
  color: string
}) {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      /* ignore */
    }
  }
  return (
    <div
      className="flex items-center gap-3 rounded-2xl border border-[var(--border)] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
      style={{ background: cardBg(color) }}
    >
      <div
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
        style={{ color, background: iconBg(color) }}
      >
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-xs text-[var(--muted)]">{label}</div>
        <div className="truncate text-sm font-medium">{value}</div>
      </div>
      <button
        onClick={copy}
        aria-label={`复制${label}`}
        className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--border)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
      >
        {copied ? <Check size={16} /> : <Copy size={16} />}
      </button>
    </div>
  )
}

export function Contact() {
  const { ref, visible } = useReveal<HTMLDivElement>()
  const pointsIcon = [Zap, Eye, Rocket]

  const rows = [
    { icon: <Mail size={18} />, label: '电子邮箱', value: profile.email },
    { icon: <MessageCircle size={18} />, label: '微信', value: profile.wechat },
    { icon: <Phone size={18} />, label: '电话', value: profile.phone },
    { icon: <MapPin size={18} />, label: '所在地', value: profile.location },
  ]

  return (
    <section id="contact" className="relative overflow-hidden px-4 py-24 sm:px-6">
      {/* 背景插图（居中铺满，低透明度） */}
      <img
        src="/images/office-scene.jpg"
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center opacity-[0.07] dark:opacity-[0.05]"
      />
      {/* 上下边缘渐隐遮罩，保证文字可读并与页面背景融合 */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[var(--bg)] via-transparent to-[var(--bg)]" />

      <div
        ref={ref}
        className={`relative mx-auto max-w-6xl reveal ${visible ? 'is-visible' : ''}`}
      >
        <Eyebrow>联系我</Eyebrow>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{contact.headline}</h2>
        <p className="mt-3 max-w-2xl text-[var(--muted)]">{contact.sub}</p>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.3fr_1fr]">
          <div className="grid gap-3">
            {rows.map((r, i) => (
              <CopyRow
                key={r.label}
                icon={r.icon}
                label={r.label}
                value={r.value}
                color={pick(i)}
              />
            ))}
          </div>

          <div className="grid gap-3">
            {contact.points.map((p, i) => {
              const Icon = pointsIcon[i]
              const c = pick(i + 2)
              return (
                <div key={p.title} className={cardClass} style={{ background: cardBg(c) }}>
                  <div className="flex items-center gap-3">
                    <span
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl"
                      style={{ color: c, background: iconBg(c) }}
                    >
                      <Icon size={20} />
                    </span>
                    <div>
                      <div className="text-sm font-semibold">{p.title}</div>
                      <div className="text-xs text-[var(--muted)]">{p.desc}</div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
