interface Props {
  variant?: 'full' | 'compact'
  className?: string
}

/**
 * 等距立方体 3D 风格装饰插图（纯 SVG，无外部依赖，深浅主题通用）。
 * full：带椭圆平台 + 更多浮点，适合区块标题右侧。
 * compact：仅立方体 + 少量浮点，适合卡片内点缀。
 */
export function CubeIllustration({ variant = 'full', className = '' }: Props) {
  return (
    <svg
      viewBox="0 0 320 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="cube-top" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#eef2ff" />
          <stop offset="100%" stopColor="#c7d2fe" />
        </linearGradient>
        <linearGradient id="cube-left" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#818cf8" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
        <linearGradient id="cube-right" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#a5b4fc" />
          <stop offset="100%" stopColor="#818cf8" />
        </linearGradient>
        <linearGradient id="ring-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#818cf8" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
      </defs>

      {/* 平台 */}
      {variant === 'full' && (
        <ellipse cx="160" cy="196" rx="128" ry="26" fill="var(--card)" opacity="0.9" />
      )}

      {/* 立方体（整体轻微浮动） */}
      <g className="illus-float">
        {/* 左面 */}
        <path d="M108 86 L160 112 L160 168 L108 142 Z" fill="url(#cube-left)" />
        {/* 右面 */}
        <path d="M160 112 L212 86 L212 142 L160 168 Z" fill="url(#cube-right)" />
        {/* 顶面 */}
        <path d="M160 60 L212 86 L160 112 L108 86 Z" fill="url(#cube-top)" />
        {/* 网格分割线 */}
        <g stroke="#ffffff" strokeOpacity="0.55" strokeWidth="1.4">
          <path d="M134.5 73 L186.5 99 M134.5 127 L134.5 73 M186.5 155 L186.5 99" />
          <path d="M134.5 99 L186.5 73" strokeOpacity="0.35" />
        </g>
        {/* 轮廓 */}
        <path
          d="M108 86 L160 60 L212 86 L212 142 L160 168 L108 142 Z"
          stroke="#ffffff"
          strokeOpacity="0.8"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        {/* 高光点 */}
        <circle cx="150" cy="70" r="2.5" fill="#ffffff" opacity="0.9" />
      </g>

      {/* 左上：聊天气泡 */}
      <g className="illus-float-slow">
        <rect x="46" y="30" width="52" height="40" rx="14" fill="#818cf8" opacity="0.9" />
        <path d="M62 68 L58 80 L74 70 Z" fill="#818cf8" opacity="0.9" />
        <circle cx="64" cy="50" r="3.4" fill="#fff" />
        <circle cx="74" cy="50" r="3.4" fill="#fff" />
        <circle cx="84" cy="50" r="3.4" fill="#fff" />
      </g>

      {/* 右上：目标圆环 */}
      <g className="illus-float-slower">
        <circle cx="264" cy="52" r="20" fill="#fff" opacity="0.95" />
        <circle cx="264" cy="52" r="20" stroke="url(#ring-grad)" strokeWidth="5" fill="none" />
        <circle cx="264" cy="52" r="8" fill="url(#ring-grad)" />
      </g>

      {/* 左下：柱状图 */}
      <g className="illus-float-slower">
        <rect x="42" y="148" width="40" height="40" rx="12" fill="#eef2ff" opacity="0.95" />
        <rect x="51" y="166" width="6" height="12" rx="2" fill="#818cf8" />
        <rect x="61" y="158" width="6" height="20" rx="2" fill="#6366f1" />
        <rect x="71" y="162" width="6" height="16" rx="2" fill="#a5b4fc" />
      </g>

      {/* 右下：人物 */}
      <g className="illus-float">
        <circle cx="272" cy="160" r="20" fill="url(#ring-grad)" opacity="0.9" />
        <circle cx="272" cy="154" r="6" fill="#fff" />
        <path d="M261 170 Q272 160 283 170 L283 174 Q272 180 261 174 Z" fill="#fff" />
      </g>

      {/* 散点 */}
      <circle cx="22" cy="110" r="5" fill="#818cf8" opacity="0.8" className="illus-float" />
      <circle cx="300" cy="112" r="4" fill="#22d3ee" opacity="0.8" className="illus-float-slow" />
      <circle cx="120" cy="24" r="3" fill="#a5b4fc" opacity="0.9" className="illus-float-slower" />
      <circle cx="236" cy="196" r="3.5" fill="#818cf8" opacity="0.7" className="illus-float" />
    </svg>
  )
}
