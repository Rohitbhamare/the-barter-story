import Link from 'next/link'
import type { ComponentProps } from 'react'
import { cn } from '@/lib/utils'

type Variant = 'solid' | 'outline'

const base =
  'inline-flex items-center justify-center px-9 py-4 text-xs font-medium uppercase tracking-brand transition-colors duration-300'

const variants: Record<Variant, string> = {
  solid: 'bg-foreground text-background hover:bg-accent',
  outline: 'border border-foreground/70 text-foreground hover:bg-foreground hover:text-background',
}

export function SiteButtonLink({
  variant = 'solid',
  className,
  ...props
}: ComponentProps<typeof Link> & { variant?: Variant }) {
  return <Link className={cn(base, variants[variant], className)} {...props} />
}

export function SiteButton({
  variant = 'solid',
  className,
  ...props
}: ComponentProps<'button'> & { variant?: Variant }) {
  return <button className={cn(base, variants[variant], className)} {...props} />
}
