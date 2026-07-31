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
    coverImage: "https://lh3.googleusercontent.com/d/1mRYi2FoAYW9p5Lqb2smOyS0EjvDzdLnW",
    galleryImages: [

      "https://lh3.googleusercontent.com/d/1UOJreuR9S3oySJbTdatsL_8prJNWkeTy",
      "https://lh3.googleusercontent.com/d/1mRYi2FoAYW9p5Lqb2smOyS0EjvDzdLnW",
      "https://lh3.googleusercontent.com/d/1yACyIsLLj5jqEgn3kNM0WHVMNrrv_5Y5",
      "https://lh3.googleusercontent.com/d/17Gyqsxis9l61owzLQUPxkADCR5wI23da",
      "https://lh3.googleusercontent.com/d/1-S3o7068LnhFA050HxIW4wrSywyWQ_Tx",
      "https://lh3.googleusercontent.com/d/13_SaaCp7iOswRZD-p9el95FtJfFUnxNq",
      "https://lh3.googleusercontent.com/d/1uHDHSKC4m3zo_ta_P2XvaPZXtzi-Qau7",
      "https://lh3.googleusercontent.com/d/14pimdt1bM_qw2MXbtaBwAqXD-HTBdfmO",
      "https://lh3.googleusercontent.com/d/1ItiCaRax23lAGoXpatzKFnMD4U3Tv74Y",
      "https://lh3.googleusercontent.com/d/1FANAuUdylMsTnznQHqAztlAqjPuAQokc",
      "https://lh3.googleusercontent.com/d/1n0nKfTDVH781_C81hdwt5tCKC7KYeQKX",

    ],
    testimonial:
      'Our wedding photos are nothing short of magical, thanks to your remarkable talent and keen eye for aesthetics. Each shot is a masterpiece, beautifully capturing the essence of our joy and love in ways we never imagined possible.',
    tone: 'oklch(0.72 0.06 60)',
  },
  {
    slug: 'shiv-divya',
    title: 'Shiv and Divya',
    location: 'India',
    coverImage: "https://lh3.googleusercontent.com/d/1gZ8kRPTlZH37O1FVAg2IKUJ7ZOgAV6Mm",
    galleryImages: [
      "https://lh3.googleusercontent.com/d/1B88CrhIeFMFwKN2731A4ziwGe4or11Fz",
      "https://lh3.googleusercontent.com/d/1Rmoz4R7Dfpjr3TEet_FlydxfSepWf_0g",
      "https://lh3.googleusercontent.com/d/1poYItZCKW0x2QWhOkI8Pr8mcg-IqEqdH",
      "https://lh3.googleusercontent.com/d/1gQlvo_rN-CFRMBK7MrHHej_uPTPebf5_",
      "https://lh3.googleusercontent.com/d/1gZ8kRPTlZH37O1FVAg2IKUJ7ZOgAV6Mm",
      "https://lh3.googleusercontent.com/d/19ugygqk0Ta_jqPR3zXMfWTfwnar3iglo",
      "https://lh3.googleusercontent.com/d/1lmC9gEeLDpho45ASX-OM6kAdHF6hAxBv",
      "https://lh3.googleusercontent.com/d/1lmCkJRmQMhUk8Up-jqeiboR5HiadBkKe",
      "https://lh3.googleusercontent.com/d/1LQhWnFF1kON8YVt25iQaX3BVLj0sKdwH",
      "https://lh3.googleusercontent.com/d/1MD7A1SM2qsV3KXTC8WhRRjMSaibCCPBH",
    ],
    testimonial:
      'Some moments are too special to put into words — but you somehow managed to capture them all, frame by frame, heartbeat by heartbeat. Working with you felt effortless, like dancing in our own little world.',
    tone: 'oklch(0.5 0.12 145)',
  },
  {
    slug: 'neha-bhavneet',
    title: 'Neha and Bhavneet',
    location: 'India',
    coverImage: "https://lh3.googleusercontent.com/d/1ThAPTwNmkyoWaD3HzNHRaWijpyOV7o4Z",
    galleryImages: [
      "https://lh3.googleusercontent.com/d/1OUIC5tu9_uZIaiYL93wCs1aVP4xELDYg",
      "https://lh3.googleusercontent.com/d/1mQqGZM5ZnO8KxNqAQQqSiYXNTOaa0Ye6",
      "https://lh3.googleusercontent.com/d/1ThAPTwNmkyoWaD3HzNHRaWijpyOV7o4Z",
      "https://lh3.googleusercontent.com/d/1HV-bb9nyUtlEoTf6QWBbR6GpZHsddojX",
      "https://lh3.googleusercontent.com/d/1lhuE5-mkUZOUdod4yJngnmOxGbtoQ2Se",
      "https://lh3.googleusercontent.com/d/17kvojFGuABQvTOY0SZz9c-OQZti_idKW",
      "https://lh3.googleusercontent.com/d/1PwzSlNAN1l2-lR0PGJBmy6TYrUMJk6Dd",
      "https://lh3.googleusercontent.com/d/1D-9_Vhygt-VU4c9uQjIHRNC_OiSv-9JO",
      "https://lh3.googleusercontent.com/d/1orfTOprUNT9YbCXTil5o7y_vikBTv_3H",
      "https://lh3.googleusercontent.com/d/1gnjdn2qvPolOEYKGDEBPTO_SehdDqaB6",
      "https://lh3.googleusercontent.com/d/1ODUnicj__5fTE9Cvidy6t5u6Z9c_xFeE",
      "https://lh3.googleusercontent.com/d/12ZbPSIVb24d2XewH1Bzdp3svyNawwDll",
    ],
    testimonial:
      'A huge thank you to our terrific team! The captured moments made our wedding story come alive. Their keen eye for detail left us truly impressed.',
    tone: 'oklch(0.28 0.01 60)',
  },
  {
    slug: 'aryan-ishmeet',
    title: 'Aryan and Ishmeet',
    location: 'India',
    coverImage: "https://lh3.googleusercontent.com/d/1ZOl0_0DJp6BzpquVgu1a9v4FLdBa565R",
    galleryImages: [
      "https://lh3.googleusercontent.com/d/19sOEztkpNQ3aqd7qQk7agNpAeRwDZjgh",
      "https://lh3.googleusercontent.com/d/1rGgRwFIHvAS0acca6pXWqDSKouXUg0pI",
      "https://lh3.googleusercontent.com/d/1YqxqpIi2lipe8STSc-FAEKenmXHXA51e",
      "https://lh3.googleusercontent.com/d/1jXFgx3FuSPy3CPHoA91_qBL2A-rRmLU5",
      "https://lh3.googleusercontent.com/d/1F7e9lwKPVHBC3LBEp2B24GjZfAFub9fZ",
      "https://lh3.googleusercontent.com/d/1id7Ity-LEKFin1gl4dywk8i1J55ohx7o",
      "https://lh3.googleusercontent.com/d/1xyZhoV0phZHm5GRaSYwk-mNH_wtUnNll",
      "https://lh3.googleusercontent.com/d/15Euef8ZNrAFY8qbzWbHSPaHf9AH59l4i",
      "https://lh3.googleusercontent.com/d/1fmyQ-rmkccoycGAbkiexije9oU7RqQUu",
      "https://lh3.googleusercontent.com/d/1GuqSebrz_TU7R3kLaW03U3RUw5_hFK6_",
      "https://lh3.googleusercontent.com/d/1XL_I_pTz1skckcRHGXuNFTeL-v7Fl_dp",
      "https://lh3.googleusercontent.com/d/1OYICVj6v9TnYGQSrNIbuB3UeQtpUnBHw",
    ],
    testimonial:
      'Every photo speaks in whispers — natural, candid, and soaked in elegance. Thank you for keeping our story alive for years.',
    tone: 'oklch(0.68 0.05 62)',
  },
  {
    slug: 'akshay-dipali',
    title: 'Akshay and Dipali',
    location: 'India',
    coverImage: "https://lh3.googleusercontent.com/d/1KXAaJyGXSMhs_Br4TDpbYiUCUPt5GV4U",

    galleryImages: [
      "https://lh3.googleusercontent.com/d/1nCJj3JECYRz4U4fxVs6kb9J4DbYKLYKo",
      "https://lh3.googleusercontent.com/d/1TQNxv2N9r03rPVt2qsqjCAWnxW2DsyHU",
      "https://lh3.googleusercontent.com/d/1fIONt0unjPw9xjSNrp_wjK4oP_uSi0_z",
      "https://lh3.googleusercontent.com/d/1hwpHslsgjiqnhzSqi9hBa97-qh1NlhdW",
      "https://lh3.googleusercontent.com/d/1eyuujHxQS_IvqqpGgrdz78KlmlGl_KPo",
      "https://lh3.googleusercontent.com/d/1qToqzqpmZ_G6RltUy1cCks1cyRUB4DmH",
      "https://lh3.googleusercontent.com/d/1-HqIUbHvhOi-zG8sB59JPhce-3F46aCa",
      "https://lh3.googleusercontent.com/d/1MP913lewAcdhHC22J6zSIeGNozKzJpFF",
      "https://lh3.googleusercontent.com/d/1e-n4p7EDPUQn-Lo0XOHVL4CCCyPILrKQ",
      "https://lh3.googleusercontent.com/d/15AEYve5J4oWsGugWjY2gQtvnfZONfsPg",
      "https://lh3.googleusercontent.com/d/1qMcmzaJP3bEz_o4Yh5hiFSyJUO7kolzJ",
      "https://lh3.googleusercontent.com/d/1Xcv-2IrHpsg0yxJIPUeXHMn37H1LZuzP",
      "https://lh3.googleusercontent.com/d/1WeygpXJdxIRlLnz6bbXX9lkM54bAhDrb",
      "https://lh3.googleusercontent.com/d/1Kg699wSauujGFsOEQnzi7pzXsc-Ra9zQ",
      "https://lh3.googleusercontent.com/d/1fAd6_jC6KzcqsHeri69rci2wCDteQfaI",
      "https://lh3.googleusercontent.com/d/1KXAaJyGXSMhs_Br4TDpbYiUCUPt5GV4U",
      "https://lh3.googleusercontent.com/d/1p8tcvXj-nV2THUPfIK_5Rcxw7qR_YYrx",
      "https://lh3.googleusercontent.com/d/19ezWHp5PU5bryPb0o2IrxeO6KrPyrZnw",
    ],
    testimonial:
      'Every celebration deserves to be remembered beautifully. Thank you for capturing every emotion, every smile, and every unforgettable moment of our special day.',
    tone: 'oklch(0.30 0.01 60)',
  },
  {
    slug: 'abhijeet-vaishanvee',
    title: 'Abhijeet and Vaishanvee',
    location: 'India',
    coverImage: "https://lh3.googleusercontent.com/d/11bupF9sAhrpGV3FASRQvT2AezKSh119N",
    galleryImages: [
      "https://lh3.googleusercontent.com/d/11bupF9sAhrpGV3FASRQvT2AezKSh119N",
      "https://lh3.googleusercontent.com/d/1SHBoAlzHPD7H--NrLN74pGcwFuXUMVe2",
      "https://lh3.googleusercontent.com/d/1ws6RPlGfMSFPL5oT50eiY_qtTyf-VNXX",
      "https://lh3.googleusercontent.com/d/1i4AYY17zwc5YSZB_0qoKbkeIv5bq2Fr8",
      "https://lh3.googleusercontent.com/d/1PYlAawUFUMBIJbvyurpoDhg8EfWXO_Ao",
      "https://lh3.googleusercontent.com/d/1ubnWMt_AF3ELy0Ui7yjwxpmk8nz1nYx0",
      "https://lh3.googleusercontent.com/d/17yiJK9N5F0njNBZHDAKTeFgcGSMitmru",
      "https://lh3.googleusercontent.com/d/1g9VSMcGBrWLJo0276yHMW4648DUQY_AH",
      "https://lh3.googleusercontent.com/d/1XtWnWPERM4ENO4nJ3zpa_XAaewv5mQPy",
      "https://lh3.googleusercontent.com/d/1-0E3XQO2e63zWy6czG0AxyPT-z9kIS1Q",
      "https://lh3.googleusercontent.com/d/1Tr8BAiQuekeqyWLF8EHMj_9IxlVJYvtX",
      "https://lh3.googleusercontent.com/d/1qS2BzDcP0U7Mn4n7PeU8-pgEDZdgsIyZ",
      "https://lh3.googleusercontent.com/d/1gJkyXfQbMeutKyWl_ricjiKNCnX6N9u6",
      "https://lh3.googleusercontent.com/d/1xTwo8m2oQN4LaAMGShiS49QkU1T7NoO1",
      "https://lh3.googleusercontent.com/d/1XWCuh26HlmS9FVDh7mOIVMAJBnPYU15-",
      "https://lh3.googleusercontent.com/d/1dlXtnSnjUZFT9DczQ-fioU64bzEUaLQM",
      "https://lh3.googleusercontent.com/d/1aiN1QNZ4AuEI6PNnTgS_6AAjvpOltUWZ",
      "https://lh3.googleusercontent.com/d/1LqtRI2CN-_f7PDi-yP7I_-7Sp1lSs8Vn",
      "https://lh3.googleusercontent.com/d/15ZHA8RsZaa4rxgTb-0HUZnNezpEsQa2K",
      "https://lh3.googleusercontent.com/d/1P9OBZY3sui20cDTYZFGsEX-_9xW2jWOW",
      "https://lh3.googleusercontent.com/d/11bupF9sAhrpGV3FASRQvT2AezKSh119N",
    ],
    testimonial:
      'Thank you for turning our wedding into timeless memories. Every photograph reflects genuine emotions and beautiful storytelling.',
    tone: 'oklch(0.58 0.11 350)',
  }
  // {
  //   slug: 'our-stories',
  //   title: 'Our Stories',
  //   location: 'Collection',
  //   coverImage: '/images/arpita-jigar.png',
  //   galleryImages: [
  //     '/images/arpita-jigar.png',
  //     '/images/sonam-robin-wide.png',
  //     '/images/mallika-abhishek.png',
  //     '/images/keval-urvashi.png',
  //     '/images/uneza.png',
  //     '/images/divya-charmis.png',
  //     '/images/jaspunith-jaspinder.png',
  //   ],
  //   testimonial:
  //     'A curated collection of our favourite wedding stories, moments, emotions and celebrations captured over the years.',
  //   tone: 'oklch(0.70 0.07 70)',
  // },
]

export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Siddesh & Ashwini',
    location: 'India',
    image: "https://lh3.googleusercontent.com/d/1mRYi2FoAYW9p5Lqb2smOyS0EjvDzdLnW",
    tone: 'oklch(0.72 0.06 60)',
    slug: 'siddesh-ashwini',
  },
  {
    title: 'Shiv and Divya',
    location: 'India',
    image: "https://lh3.googleusercontent.com/d/1_OPtX9rjBAcOeb6zTa4dheGfE3JeKbh_",
    tone: 'oklch(0.5 0.12 145)',
    slug: 'shiv-divya',
  },
  {
    title: 'Neha and Bhavneet',
    location: 'India',
    image: "https://lh3.googleusercontent.com/d/1880114Ge5-86lub2mA3HQm62rB3UHMet",
    tone: 'oklch(0.28 0.01 60)',
    slug: 'neha-bhavneet',
  },
  {
    title: 'Aryan and Ishmeet',
    location: 'India',
    image: "https://lh3.googleusercontent.com/d/1vl1VqbS-AeRABe4c856ETz2ZCGr-SsrI",
    tone: 'oklch(0.68 0.05 62)',
    slug: 'aryan-ishmeet',
  },
  {
    title: 'Akshay and Dipali',
    location: 'India',
    image: "https://lh3.googleusercontent.com/d/1ocRhtQkmG7YcfoB2ai77_hxaXysPSWCJ",
    tone: 'oklch(0.3 0.01 60)',
    slug: 'akshay-dipali',
  },
  {
    title: 'Abhijeet and Vaishanvee',
    location: 'India',
    image: '/images/jaspunith-jaspinder.png',
    tone: 'oklch(0.58 0.11 350)',
    slug: 'abhijeet-vaishanvee',
  // },
  // {
  //   title: 'Our Stories',
  //   location: 'Collection',
  //   image: '/images/arpita-jigar.png',
  //   tone: 'oklch(0.7 0.07 70)',
  //   slug: 'our-stories',
  // },
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
    videoUrl: 'blorrMMTzW0',
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
