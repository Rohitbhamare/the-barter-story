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
  instagram: 'https://instagram.com/thebarterstory',
  whatsapp: 'https://wa.me/910000000000',
  youtube: 'https://youtube.com/@thebarterstory',
  email: 'hello@thebarterstory.com',
  handle: '@thebarterstory',
}

export type PortfolioItem = {
  title: string
  location: string
  image: string
  tone: string
}

export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Sonam & Robin',
    location: 'Goa, India',
    image: '/images/sonam-robin-wide.png',
    tone: 'oklch(0.72 0.06 60)',
  },
  {
    title: 'Mallika & Abhishek',
    location: 'Mumbai, India',
    image: '/images/mallika-abhishek.png',
    tone: 'oklch(0.5 0.12 145)',
  },
  {
    title: 'Keval & Urvashi',
    location: 'Goa, India',
    image: '/images/keval-urvashi.png',
    tone: 'oklch(0.28 0.01 60)',
  },
  {
    title: 'Uneza',
    location: 'Lonavala, India',
    image: '/images/uneza.png',
    tone: 'oklch(0.68 0.05 62)',
  },
  {
    title: 'Divya & Charmis',
    location: 'Krabi, Thailand',
    image: '/images/divya-charmis.png',
    tone: 'oklch(0.3 0.01 60)',
  },
  {
    title: 'Jaspunith & Jaspinder',
    location: 'Landour, India',
    image: '/images/jaspunith-jaspinder.png',
    tone: 'oklch(0.58 0.11 350)',
  },
  {
    title: 'Arpita & Jigar',
    location: 'Jaipur, India',
    image: '/images/arpita-jigar.png',
    tone: 'oklch(0.7 0.07 70)',
  },
]

export type FilmItem = {
  title: string
  subtitle: string
  image: string
}

export const filmItems: FilmItem[] = [
  {
    title: 'Abhishek & Mallika',
    subtitle: 'Wedding Film',
    image: '/images/mallika-abhishek.png',
  },
  {
    title: 'Sonam & Robin',
    subtitle: 'A Documentary Film',
    image: '/images/sonam-robin.png',
  },
  {
    title: 'Shalaka & Nikhil',
    subtitle: 'Wedding Film',
    image: '/images/shalaka-nikhil.png',
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
