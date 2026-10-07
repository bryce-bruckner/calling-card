import { ArrowUpRight, Mail } from 'lucide-react'
import { CopyEmailButton } from './copy-email-button'

const contacts = [
  {
    label: 'Handshake',
    value: 'app.joinhandshake.com/profiles/uqgguj',
    href: 'https://app.joinhandshake.com/profiles/uqgguj',
    icon: ArrowUpRight,
    external: true,
  },
  {
    label: 'Email',
    value: 'brucknerbryce@gmail.com',
    href: 'mailto:brucknerbryce@gmail.com',
    icon: Mail,
    external: false,
  },
]

export function CallingCard() {
  return (
    <article className="flex w-full max-w-xl flex-col gap-10 rounded-2xl bg-card p-8 text-card-foreground shadow-xl shadow-foreground/10 sm:p-12">
      <header className="flex flex-col gap-3">
        <p className="font-mono text-sm text-muted-foreground">
          Software Engineering
        </p>
        <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
          Bryce Bruckner
        </h1>
        <p className="text-sm text-muted-foreground">Looking for internships</p>
        <div className="h-1.5 w-16 rounded-full bg-primary" aria-hidden="true" />
      </header>

      <ul className="flex flex-wrap gap-2" aria-label="About">
        {['Coding', 'Still in school', 'Looking for internships'].map((item) => (
          <li
            key={item}
            className="rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground"
          >
            {item}
          </li>
        ))}
      </ul>

      <footer className="flex flex-col gap-3 border-t pt-8">
        <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          How to reach me
        </h2>
        <ul className="flex flex-col gap-2">
          {contacts.map(({ label, value, href, icon: Icon, external }) => (
            <li key={label} className="flex gap-2">
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-w-0 flex-1 items-center justify-between gap-4 rounded-xl bg-muted px-4 py-3 transition-colors hover:bg-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <span className="flex min-w-0 flex-col">
                  <span className="text-xs text-muted-foreground group-hover:text-primary-foreground">{label}</span>
                  <span className="truncate font-mono text-sm">{value}</span>
                </span>
                <Icon
                  className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary-foreground"
                  aria-hidden="true"
                />
                {external && <span className="sr-only">(opens in a new tab)</span>}
              </a>
              {!external && <CopyEmailButton email={value} />}
            </li>
          ))}
        </ul>
      </footer>
    </article>
  )
}
