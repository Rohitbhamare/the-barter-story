export type NavLink = { label: string; href: string }

export const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Films', href: '/films' },
  { label: 'Contact', href: '/contact' },
]

export const footerLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Films', href: '/films' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy', href: '/privacy' },
]

export const social = {
  instagram: 'https://instagram.com/momentoflove',
  whatsapp: 'https://wa.me/910000000000',
  youtube: 'https://youtube.com/@momentoflove',
  email: 'hello@momentoflove.com',
  handle: '@momentoflove',
}

export type PortfolioItem = {
  title: string
  location: string
  image: string
  tone: string
  link?: string
}

export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Siddesh & Ashwini',
    location: 'India',
    image: '/images/sonam-robin-wide.png',
    tone: 'oklch(0.72 0.06 60)',
    link: 'https://drive.google.com/open?id=1jqd8e8tdof69Kk4mcxXJILjJ3dxRnII-&usp=drive_copy',
  },
  {
    title: 'Shiv and Divya',
    location: 'India',
    image: '/images/mallika-abhishek.png',
    tone: 'oklch(0.5 0.12 145)',
    link: 'https://drive.google.com/open?id=1GyAZs08EZF4YjfPiXf28nlrRplj2lSGf&usp=drive_copy',
  },
  {
    title: 'Neha and Bhavneet',
    location: 'India',
    image: '/images/keval-urvashi.png',
    tone: 'oklch(0.28 0.01 60)',
    link: 'https://drive.google.com/open?id=1DHE7IAEZdJC10JUjuJw4dcPIulVfpneR&usp=drive_copy',
  },
  {
    title: 'Aryan and Ishmeet',
    location: 'India',
    image: '/images/uneza.png',
    tone: 'oklch(0.68 0.05 62)',
    link: 'https://drive.google.com/open?id=1kQNQH0fqAtT7yquqdKV5Mz8nCs0OwvHo&usp=drive_copy',
  },
  {
    title: 'Akshay and Dipali',
    location: 'India',
    image: '/images/divya-charmis.png',
    tone: 'oklch(0.3 0.01 60)',
    link: 'https://drive.google.com/open?id=1_2so4-fXK3YFs_xIUx0UjfPUd0I5gu-T&usp=drive_copy',
  },
  {
    title: 'Abhijeet and Vaishanvee',
    location: 'India',
    image: '/images/jaspunith-jaspinder.png',
    tone: 'oklch(0.58 0.11 350)',
    link: 'https://drive.google.com/open?id=1PiPIRn_j1_ddRQILz5WAEvJlGufzXT8a&usp=drive_copy',
  },
  {
    title: 'Our Stories',
    location: 'Collection',
    image: '/images/arpita-jigar.png',
    tone: 'oklch(0.7 0.07 70)',
    link: 'https://drive.google.com/open?id=1HJTs7f9KMFobHhI3GGiJEFS2YDnuQ7lf&usp=drive_copy',
  },
]

export type FilmItem = {
  title: string
  subtitle: string
  image: string
  videoUrl?: string
}

export const filmItems: FilmItem[] = [
  {
    title: 'Film One',
    subtitle: 'Wedding Film',
    image: '/images/mallika-abhishek.png',
    videoUrl: 'https://drive.google.com/file/d/1HB-i2VpGVlMjWRQmhaf6rpX_pAR2Zt5V/view?usp=drive_link',
  },
  {
    title: 'Film Two',
    subtitle: 'A Documentary Film',
    image: '/images/sonam-robin.png',
    videoUrl: 'https://drive.google.com/file/d/1zDVfkZxPhSVp_ls6zO19YKKzSboBoKS-/view?usp=drive_link',
  },
]

export const instagramFeed: { src: string; alt: string }[] = [
  { src: '/images/insta-1.png', alt: 'Bride celebrating with flower petals' },
  { src: '/images/insta-2.png', alt: 'Couple sharing a kiss in black and white' },
  { src: '/images/insta-3.png', alt: 'Bride in a green lehenga beneath an arch' },
  { src: '/images/insta-4.png', alt: 'Couple in a tender embrace' },
  { src: '/images/insta-5.png', alt: 'Detail of an ornate jhumka earring' },
  { src: '/images/insta-6.png', alt: 'Bride by the sea at golden hour' },
]

export type Testimonial = {
  couple: string
  quote: string
}

export const testimonials: Testimonial[] = [
  {
    couple: 'Arpita & Jigar',
    quote:
      'Our wedding photos are nothing short of magical, thanks to your remarkable talent and keen eye for aesthetics. Each shot is a masterpiece, beautifully capturing the essence of our joy and love in ways we never imagined possible. Your dedication, creativity, and professionalism have given us timeless memories that we will treasure forever.',
  },
  {
    couple: 'Swangita & Sohil',
    quote:
      'Some moments are too special to put into words — but you somehow managed to capture them all, frame by frame, heartbeat by heartbeat. Working with you felt effortless, like dancing in our own little world while you quietly turned love into light and laughter. Every photo speaks in whispers — natural, candid, and soaked in elegance. Thank you for keeping our story alive for years.',
  },
  {
    couple: 'Sonam & Robin',
    quote:
      'A huge thank you to our terrific team! The captured moments made our wedding story come alive. Their keen eye for detail — noticing the subtle dance of shadows, capturing reflections at just the right shade — left us truly impressed. The balance between candid shots and carefully posed portraits has given us a timeless collection of memories, one that feels both authentic and artfully crafted.',
  },
]

export const featuredOn = ['Fearless', 'WedMeGood', 'MyWed', 'The Knot']
