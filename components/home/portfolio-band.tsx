import Image from 'next/image'
import { SiteButtonLink } from '@/components/site-button'

export function PortfolioBand() {
  return (
    <section className="relative aspect-[16/6] min-h-[320px] w-full overflow-hidden">
      <Image
        src="https://lh3.googleusercontent.com/d/1E64oge2xt2j0TXBtkze_XZKYsbUunDp7"
        alt="Dreamy silhouette of a couple by the sea"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-foreground/15" />
      <div className="absolute inset-0 flex items-center justify-center">
        <SiteButtonLink
          href="/portfolio"
          variant="outline"
          className="border-background/80 bg-background/10 text-background backdrop-blur-sm hover:bg-background hover:text-foreground"
        >
          View Portfolio
        </SiteButtonLink>
      </div>
    </section>
  )
}
