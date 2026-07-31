'use client'

import { useState, type FormEvent } from 'react'
import { Check } from 'lucide-react'
import { SiteButton } from '@/components/site-button'

type Fields = {
  name: string
  email: string
  phone: string
  venue: string
  date: string
  guests: string
  about: string
  why: string
}

const empty: Fields = {
  name: '',
  email: '',
  phone: '',
  venue: '',
  date: '',
  guests: '',
  about: '',
  why: '',
}

const labelClass = 'mb-2 block text-sm text-foreground/70'
const fieldClass =
  'w-full border border-input bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-accent'

export function ContactForm() {
  const [values, setValues] = useState<Fields>(empty)
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({})
  const [submitted, setSubmitted] = useState(false)

  const update = (key: keyof Fields) => (e: { target: { value: string } }) => {
    setValues((v) => ({ ...v, [key]: e.target.value }))
    setErrors((prev) => ({ ...prev, [key]: undefined }))
  }

  const validate = () => {
    const next: Partial<Record<keyof Fields, string>> = {}
    if (!values.name.trim()) next.name = 'Please enter your name.'
    if (!values.email.trim()) next.email = 'Please enter your email.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      next.email = 'Please enter a valid email.'
    if (!values.phone.trim()) next.phone = 'Please enter a contact number.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-start gap-4 border border-border bg-card p-8">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground">
          <Check className="h-6 w-6" />
        </span>
        <h3 className="font-serif text-2xl text-foreground">Thank you, {values.name}.</h3>
        <p className="max-w-md text-sm leading-relaxed text-foreground/75">
          Your enquiry has reached us. We&apos;ll be in touch soon to gently begin your story
          together.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} noValidate className="max-w-2xl">
      <div className="mb-6">
        <label htmlFor="name" className={labelClass}>
          Full name
        </label>
        <input
          id="name"
          type="text"
          value={values.name}
          onChange={update('name')}
          placeholder="Enter name..."
          className={fieldClass}
          aria-invalid={!!errors.name}
        />
        {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
      </div>

      <div className="mb-6 grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            type="email"
            value={values.email}
            onChange={update('email')}
            placeholder="Enter email..."
            className={fieldClass}
            aria-invalid={!!errors.email}
          />
          {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Contact no
          </label>
          <input
            id="phone"
            type="tel"
            value={values.phone}
            onChange={update('phone')}
            placeholder="Enter phone no..."
            className={fieldClass}
            aria-invalid={!!errors.phone}
          />
          {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
        </div>
      </div>

      <div className="mb-6 grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="venue" className={labelClass}>
            Venue details
          </label>
          <input
            id="venue"
            type="text"
            value={values.venue}
            onChange={update('venue')}
            placeholder="Type here..."
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="date" className={labelClass}>
            Start date of the event
          </label>
          <input
            id="date"
            type="date"
            value={values.date}
            onChange={update('date')}
            className={fieldClass}
          />
        </div>
      </div>

      <div className="mb-6 sm:max-w-[calc(50%-0.75rem)]">
        <label htmlFor="guests" className={labelClass}>
          Estimated guest count
        </label>
        <input
          id="guests"
          type="number"
          min="0"
          value={values.guests}
          onChange={update('guests')}
          placeholder="Type here..."
          className={fieldClass}
        />
      </div>

      <div className="mb-6">
        <label htmlFor="about" className={labelClass}>
          More about your event
        </label>
        <textarea
          id="about"
          rows={4}
          value={values.about}
          onChange={update('about')}
          placeholder="Type here..."
          className={`${fieldClass} resize-y`}
        />
      </div>

      <div className="mb-8">
        <label htmlFor="why" className={labelClass}>
          Why us?
        </label>
        <input
          id="why"
          type="text"
          value={values.why}
          onChange={update('why')}
          placeholder="Type here..."
          className={fieldClass}
        />
      </div>

      <SiteButton type="submit">Request A Quote</SiteButton>

      <p className="mt-6 max-w-lg text-xs leading-relaxed text-muted-foreground">
        By submitting this form, you agree that The Barter Story may use these details to respond to
        your enquiry. Read our{' '}
        <a href="/privacy" className="underline underline-offset-2 hover:text-foreground">
          Privacy Policy
        </a>
        .
      </p>
    </form>
  )
}
