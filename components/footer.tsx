import Link from 'next/link'
import { footerLinks, social } from '@/lib/data'
import { Logo } from '@/components/logo'
import { InstagramIcon, YoutubeIcon, WhatsappIcon } from '@/components/social-icons'

export function Footer() {
  return (
    <footer className="bg-sand/70">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-2">
        <div className="flex flex-col justify-between gap-8 md:border-r md:border-border md:pr-10">
          <Logo variant="wordmark" />
          <div>
            <div className="mb-5 h-px w-full bg-border" />
            <div className="flex items-center gap-4 text-foreground/80">
              <a
                href={social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="transition-colors hover:text-foreground"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a
                href={social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="transition-colors hover:text-foreground"
              >
                <WhatsappIcon className="h-5 w-5" />
              </a>
              <a
                href={social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="transition-colors hover:text-foreground"
              >
                <YoutubeIcon className="h-5 w-5" />
              </a>
              <span className="ml-2 text-xs uppercase tracking-brand text-muted-foreground">
                © 2026 The Barter Story
              </span>
            </div>
          </div>
        </div>

        <nav aria-label="Footer" className="md:pl-6">
          <ul className="flex flex-col gap-3">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium uppercase tracking-brand text-foreground/80 transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-xs uppercase tracking-brand text-muted-foreground">
            Crafted by Techtical Solution
          </p>
        </nav>
      </div>
    </footer>
  )
}
