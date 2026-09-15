export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] px-4 py-8 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 text-sm text-[var(--muted)] sm:flex-row">
        <span>
          © {new Date().getFullYear()} All rights reserved.
        </span>
      </div>
    </footer>
  )
}
