import Link from 'next/link'
import { Instagram, Youtube } from 'lucide-react'
import { footerLinks, social } from '@/lib/data'
import { Logo } from '@/components/logo'

function WhatsappIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.74.46 3.44 1.32 4.94L2 22l5.3-1.39a9.86 9.86 0 004.74 1.21h.01c5.46 0 9.9-4.44 9.9-9.9a9.82 9.82 0 00-2.9-7 9.82 9.82 0 00-7-2.92zm0 18.13h-.01a8.2 8.2 0 01-4.18-1.15l-.3-.18-3.14.82.84-3.06-.2-.31a8.2 8.2 0 01-1.26-4.38c0-4.54 3.7-8.23 8.25-8.23a8.2 8.2 0 015.82 2.42 8.19 8.19 0 012.41 5.82c0 4.54-3.7 8.23-8.23 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.79.97-.14.16-.29.18-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.24.25-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43l-.48-.01c-.16 0-.43.06-.66.31-.22.24-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.16 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28z" />
    </svg>
  )
}

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
                <Instagram className="h-5 w-5" />
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
                <Youtube className="h-5 w-5" />
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
