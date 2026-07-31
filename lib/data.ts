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
  slug?: string
  galleryImages?: string[]
  testimonial?: string
}

export type CoupleGallery = {
  slug: string
  title: string
  location: string
  coverImage: string
  galleryImages: string[]
  testimonial: string
  tone: string
}

export const coupleGalleries: CoupleGallery[] = [
  {
    slug: 'siddesh-ashwini',
    title: 'Siddesh & Ashwini',
    location: 'India',
    coverImage: '/images/sonam-robin-wide.png',
    galleryImages: [
      '/images/sonam-robin-wide.png',
      '/images/mallika-abhishek.png',
      '/images/keval-urvashi.png',
      '/images/uneza.png',
      '/images/divya-charmis.png',
      '/images/jaspunith-jaspinder.png',
      '/images/arpita-jigar.png',
      '/images/sonam-robin.png',
    ],
    testimonial:
      'Our wedding photos are nothing short of magical, thanks to your remarkable talent and keen eye for aesthetics. Each shot is a masterpiece, beautifully capturing the essence of our joy and love in ways we never imagined possible.',
    tone: 'oklch(0.72 0.06 60)',
  },
  {
    slug: 'shiv-divya',
    title: 'Shiv and Divya',
    location: 'India',
    coverImage: '/images/mallika-abhishek.png',
    galleryImages: [
      '/images/mallika-abhishek.png',
      '/images/keval-urvashi.png',
      '/images/uneza.png',
      '/images/divya-charmis.png',
      '/images/sonam-robin-wide.png',
      '/images/jaspunith-jaspinder.png',
      '/images/arpita-jigar.png',
    ],
    testimonial:
      'Some moments are too special to put into words — but you somehow managed to capture them all, frame by frame, heartbeat by heartbeat. Working with you felt effortless, like dancing in our own little world.',
    tone: 'oklch(0.5 0.12 145)',
  },
  {
    slug: 'neha-bhavneet',
    title: 'Neha and Bhavneet',
    location: 'India',
    coverImage: '/images/keval-urvashi.png',
    galleryImages: [
      '/images/keval-urvashi.png',
      '/images/uneza.png',
      '/images/divya-charmis.png',
      '/images/sonam-robin-wide.png',
      '/images/mallika-abhishek.png',
      '/images/arpita-jigar.png',
    ],
    testimonial:
      'A huge thank you to our terrific team! The captured moments made our wedding story come alive. Their keen eye for detail left us truly impressed.',
    tone: 'oklch(0.28 0.01 60)',
  },
  {
    slug: 'aryan-ishmeet',
    title: 'Aryan and Ishmeet',
    location: 'India',
    coverImage: '/images/uneza.png',
    galleryImages: [
      '/images/uneza.png',
      '/images/divya-charmis.png',
      '/images/sonam-robin-wide.png',
      '/images/mallika-abhishek.png',
      '/images/keval-urvashi.png',
    ],
    testimonial:
      'Every photo speaks in whispers — natural, candid, and soaked in elegance. Thank you for keeping our story alive for years.',
    tone: 'oklch(0.68 0.05 62)',
  },
  {
    slug: 'akshay-dipali',
    title: 'Akshay and Dipali',
    location: 'India',
    coverImage: '/images/divya-charmis.png',
    galleryImages: [
      '/images/divya-charmis.png',
      '/images/sonam-robin-wide.png',
      '/images/mallika-abhishek.png',
      '/images/keval-urvashi.png',
      '/images/uneza.png',
      '/images/jaspunith-jaspinder.png',
    ],
    testimonial:
      'Every celebration deserves to be remembered beautifully. Thank you for capturing every emotion, every smile, and every unforgettable moment of our special day.',
    tone: 'oklch(0.30 0.01 60)',
  },
  {
    slug: 'abhijeet-vaishanvee',
    title: 'Abhijeet and Vaishanvee',
    location: 'India',
    coverImage: '/images/jaspunith-jaspinder.png',
    galleryImages: [
      '/images/jaspunith-jaspinder.png',
      '/images/divya-charmis.png',
      '/images/sonam-robin-wide.png',
      '/images/mallika-abhishek.png',
      '/images/keval-urvashi.png',
      '/images/uneza.png',
    ],
    testimonial:
      'Thank you for turning our wedding into timeless memories. Every photograph reflects genuine emotions and beautiful storytelling.',
    tone: 'oklch(0.58 0.11 350)',
  },
  {
    slug: 'our-stories',
    title: 'Our Stories',
    location: 'Collection',
    coverImage: '/images/arpita-jigar.png',
    galleryImages: [
      '/images/arpita-jigar.png',
      '/images/sonam-robin-wide.png',
      '/images/mallika-abhishek.png',
      '/images/keval-urvashi.png',
      '/images/uneza.png',
      '/images/divya-charmis.png',
      '/images/jaspunith-jaspinder.png',
    ],
    testimonial:
      'A curated collection of our favourite wedding stories, moments, emotions and celebrations captured over the years.',
    tone: 'oklch(0.70 0.07 70)',
  },
]

export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Siddesh & Ashwini',
    location: 'India',
    image: '/images/sonam-robin-wide.png',
    tone: 'oklch(0.72 0.06 60)',
    slug: 'siddesh-ashwini',
  },
  {
    title: 'Shiv and Divya',
    location: 'India',
    image: '/images/mallika-abhishek.png',
    tone: 'oklch(0.5 0.12 145)',
    slug: 'shiv-divya',
  },
  {
    title: 'Neha and Bhavneet',
    location: 'India',
    image: '/images/keval-urvashi.png',
    tone: 'oklch(0.28 0.01 60)',
    slug: 'neha-bhavneet',
  },
  {
    title: 'Aryan and Ishmeet',
    location: 'India',
    image: '/images/uneza.png',
    tone: 'oklch(0.68 0.05 62)',
    slug: 'aryan-ishmeet',
  },
  {
    title: 'Akshay and Dipali',
    location: 'India',
    image: '/images/divya-charmis.png',
    tone: 'oklch(0.3 0.01 60)',
    slug: 'akshay-dipali',
  },
  {
    title: 'Abhijeet and Vaishanvee',
    location: 'India',
    image: '/images/jaspunith-jaspinder.png',
    tone: 'oklch(0.58 0.11 350)',
    slug: 'abhijeet-vaishanvee',
  },
  {
    title: 'Our Stories',
    location: 'Collection',
    image: '/images/arpita-jigar.png',
    tone: 'oklch(0.7 0.07 70)',
    slug: 'our-stories',
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
    videoUrl: 'ayQeLhzL03w',
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
