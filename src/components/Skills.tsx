import { Sparkles, Wrench } from 'lucide-react'
import { skillGroups } from '../content'
import { useReveal } from '../hooks/useReveal'
import { pick, cardBg, iconBg, chipBg, cardClass } from '../palette'
import { Eyebrow } from './Eyebrow'

const groupIcons = [Sparkles, Wrench]

export function Skills() {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <section id="skills" className="px-4 py-24 sm:px-6">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl reveal ${visible ? 'is-visible' : ''}`}
      >
        <Eyebrow>专业技能</Eyebrow>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">我的能力地图</h2>

        {/* 左：插图（高度自适应右侧卡片） 右：两张能力卡 */}
        <div className="mt-8 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-stretch">
          <div className="overflow-hidden rounded-3xl">
            <img
              src="/images/data-cubes.jpg"
              alt=""
              aria-hidden
              className="h-full min-h-[240px] w-full object-cover dark:opacity-25 lg:min-h-[320px]"
              style={{
                maskImage:
                  'radial-gradient(ellipse 84% 80% at 50% 50%, #000 60%, transparent 100%)',
                WebkitMaskImage:
                  'radial-gradient(ellipse 84% 80% at 50% 50%, #000 60%, transparent 100%)',
              }}
            />
          </div>

          <div className="grid gap-4 lg:grid-rows-2">
            {skillGroups.map((g, gi) => {
              const c = pick(gi)
              const Icon = groupIcons[gi % groupIcons.length]
              return (
                <div key={g.group} className={cardClass} style={{ background: cardBg(c) }}>
                  <div className="flex items-center gap-3">
                    <span
                      className="flex h-11 w-11 items-center justify-center rounded-2xl"
                      style={{ color: c, background: iconBg(c) }}
                    >
                      <Icon size={20} />
                    </span>
                    <div className="text-lg font-semibold">{g.group}</div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {g.items.map((it, ii) => {
                      const ic = pick(gi + ii)
                      return (
                        <span
                          key={it}
                          className="rounded-full px-3 py-1.5 text-sm font-medium transition-transform duration-300 hover:-translate-y-0.5"
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
      </div>
    </section>
  )
}
