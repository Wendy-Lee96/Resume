import { Boxes as ToolboxIcon, Search, PenTool, Code2, FileCheck } from 'lucide-react'
import { toolbox } from '../content'
import { useReveal } from '../hooks/useReveal'
import { pick, cardBg, iconBg, chipBg, cardClass } from '../palette'
import { Eyebrow } from './Eyebrow'

const toolIcons = [Search, PenTool, Code2, FileCheck]

export function Toolbox() {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <section id="toolbox" className="px-4 py-24 sm:px-6">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl reveal ${visible ? 'is-visible' : ''}`}
      >
        <Eyebrow>AI Toolbox</Eyebrow>
        <h2 className="mt-3 flex items-center gap-2 text-3xl font-bold sm:text-4xl">
          <ToolboxIcon className="text-[var(--accent)]" /> AI 工具箱
        </h2>
        <p className="mt-3 max-w-2xl text-[var(--muted)]">
          用于产品调研、原型推演、文档生成、界面探索、代码验证和交付提效。
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {toolbox.map((t, i) => {
            const c = pick(i)
            const Icon = toolIcons[i % toolIcons.length]
            return (
              <div key={t.group} className={cardClass} style={{ background: cardBg(c) }}>
                <div className="flex items-center gap-3">
                  <span
                    className="flex h-11 w-11 items-center justify-center rounded-2xl"
                    style={{ color: c, background: iconBg(c) }}
                  >
                    <Icon size={20} />
                  </span>
                  <div className="text-lg font-semibold">{t.group}</div>
                </div>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{t.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {t.items.map((it, ii) => {
                    const ic = pick(i + ii)
                    return (
                      <span
                        key={it}
                        className="rounded-full px-2.5 py-1 text-xs font-medium"
                        style={{ color: ic, background: chipBg(ic) }}
                      >
                        {it}
                      </span>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
