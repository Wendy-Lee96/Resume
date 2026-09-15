import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { nav, profile } from '../content'
import { ThemeToggle } from './ThemeToggle'

export function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = nav.map((n) => n.id)
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled
          ? 'border-b border-[var(--border)] bg-[var(--bg-soft)]/80 backdrop-blur'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#home" className="text-lg font-bold tracking-tight">
          {profile.siteName}
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className={`rounded-full px-3 py-1.5 text-sm transition ${
                active === n.id
                  ? 'text-[var(--accent)]'
                  : 'text-[var(--muted)] hover:text-[var(--fg)]'
              }`}
            >
              {n.label}
            </a>
          ))}
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="菜单"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg-soft)]"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-[var(--border)] bg-[var(--bg-soft)] px-4 py-3 md:hidden">
          <div className="grid gap-1">
            {nav.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-2 text-sm transition ${
                  active === n.id
                    ? 'bg-[var(--bg)] text-[var(--accent)]'
                    : 'text-[var(--muted)]'
                }`}
              >
                {n.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
