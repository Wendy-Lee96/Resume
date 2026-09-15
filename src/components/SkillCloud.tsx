import { useMemo } from 'react'
import { skillGroups } from '../content'
import { pick } from '../palette'

const floatDelays = [
  '0s', '1.2s', '0.6s', '2.1s', '1.5s', '0.3s', '2.7s', '1.8s',
  '0.9s', '2.4s', '1.1s', '0.5s', '2.0s', '1.4s', '0.2s', '2.9s',
  '1.0s', '0.7s', '2.3s', '1.6s',
]

const floatDurations = [
  '5s', '6s', '4.5s', '7s', '5.5s', '6.5s', '4s', '7.5s',
  '5s', '6s', '4.5s', '7s', '5.5s', '6.5s', '4s', '7.5s',
  '5s', '6s', '4.5s', '7s',
]

const floatVectors = [
  { x: 8, y: -6 }, { x: -7, y: 8 }, { x: 6, y: 7 }, { x: -8, y: -5 },
  { x: 5, y: -8 }, { x: -6, y: -6 }, { x: 7, y: 5 }, { x: -5, y: 7 },
  { x: 8, y: 6 }, { x: -7, y: -7 }, { x: 6, y: -5 }, { x: -8, y: 8 },
  { x: 5, y: 6 }, { x: -6, y: 5 }, { x: 7, y: -8 }, { x: -5, y: -6 },
  { x: 8, y: 7 }, { x: -7, y: 6 }, { x: 6, y: -8 }, { x: -8, y: 5 },
]

// 预定义云状位置（百分比）
const positions: { left: number; top: number; size: 'sm' | 'base' | 'lg' }[] = [
  { left: 50, top: 8, size: 'lg' },
  { left: 20, top: 18, size: 'base' },
  { left: 78, top: 20, size: 'sm' },
  { left: 8, top: 36, size: 'base' },
  { left: 40, top: 30, size: 'sm' },
  { left: 68, top: 38, size: 'lg' },
  { left: 88, top: 48, size: 'sm' },
  { left: 28, top: 48, size: 'base' },
  { left: 52, top: 50, size: 'base' },
  { left: 12, top: 58, size: 'sm' },
  { left: 74, top: 60, size: 'base' },
  { left: 42, top: 66, size: 'lg' },
  { left: 62, top: 74, size: 'sm' },
  { left: 22, top: 76, size: 'base' },
  { left: 84, top: 78, size: 'base' },
  { left: 48, top: 86, size: 'sm' },
  { left: 6, top: 84, size: 'sm' },
  { left: 68, top: 90, size: 'sm' },
  { left: 32, top: 90, size: 'sm' },
  { left: 92, top: 30, size: 'sm' },
]

export function SkillCloud() {
  const tags = useMemo(
    () => skillGroups.flatMap((g) => g.items),
    [],
  )

  return (
    <div className="relative mx-auto h-72 w-72 select-none sm:h-80 sm:w-80 lg:h-96 lg:w-96">
      {/* subtle glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-[var(--accent)]/10 blur-[60px]" />

      {tags.slice(0, positions.length).map((tag, i) => {
        const pos = positions[i]
        const vec = floatVectors[i]
        const c = pick(i)
        const sizeClasses =
          pos.size === 'lg'
            ? 'px-4 py-2 text-sm font-semibold'
            : pos.size === 'base'
              ? 'px-3 py-1.5 text-[13px] font-medium'
              : 'px-2.5 py-1 text-xs'
        return (
          <span
            key={tag + i}
            className={`absolute inline-flex cursor-default items-center justify-center whitespace-nowrap rounded-full border shadow-sm transition-transform duration-300 ease-out hover:z-10 hover:scale-125 ${sizeClasses}`}
            style={
              {
                left: `${pos.left}%`,
                top: `${pos.top}%`,
                transform: 'translate(-50%, -50%)',
                animation: `cloud-float ${floatDurations[i]} ease-in-out ${floatDelays[i]} infinite alternate`,
                '--float-x': `${vec.x}px`,
                '--float-y': `${vec.y}px`,
                // 每颗气泡：自身主题色（22% 浓度）→ 白色（深色模式下过渡到卡片底色）
                background: `linear-gradient(135deg, ${c}38 0%, var(--cloud-to, #ffffff) 100%)`,
                borderColor: `${c}59`,
                color: c,
              } as React.CSSProperties
            }
          >
            {tag}
          </span>
        )
      })}
    </div>
  )
}
