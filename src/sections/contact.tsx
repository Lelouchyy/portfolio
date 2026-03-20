import emailjs from '@emailjs/browser'
import { useState } from 'react'

const emailJsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
const emailJsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const emailJsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const hasEmailJsPlaceholders = [emailJsServiceId, emailJsTemplateId, emailJsPublicKey].some(
  (value) => !value || value.startsWith('your_'),
)

type FormValues = {
  firstName: string
  lastName: string
  email: string
  message: string
}

function Contact() {
  const [formValues, setFormValues] = useState<FormValues>({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  })
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const isFormComplete = Object.values(formValues).every((value) => value.trim() !== '')

  const handleFieldChange = (field: keyof FormValues, value: string) => {
    setFormValues((currentValues) => ({
      ...currentValues,
      [field]: value,
    }))

    if (errorMessage) {
      setErrorMessage('')
    }

    if (successMessage) {
      setSuccessMessage('')
    }
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!isFormComplete) {
      setErrorMessage('Please complete all fields before sending your message.')
      return
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(formValues.email.trim())) {
      setErrorMessage('Please enter a valid email address.')
      return
    }

    if (hasEmailJsPlaceholders) {
      setErrorMessage('EmailJS is not configured yet. Replace the placeholder values in your .env file and restart the Vite server.')
      return
    }

    const fullName = `${formValues.firstName.trim()} ${formValues.lastName.trim()}`

    try {
      setIsSubmitting(true)
      setErrorMessage('')
      setSuccessMessage('')

      await emailjs.send(
        emailJsServiceId,
        emailJsTemplateId,
        {
          from_name: fullName,
          from_email: formValues.email.trim(),
          message: formValues.message.trim(),
          reply_to: formValues.email.trim(),
          to_email: 'altr.reniedo.up@phinmaed.com',
        },
        {
          publicKey: emailJsPublicKey,
        },
      )

      setSuccessMessage('Your message has been sent successfully.')
      setFormValues({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
      })
    } catch {
      setErrorMessage('Message sending failed. Check your EmailJS service ID, template ID, public key, and template variables, then try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative flex scroll-mt-16 items-center overflow-hidden bg-[#080810] px-6 py-24 sm:px-10 md:px-10 md:py-20 lg:px-16">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(110,255,200,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(110,255,200,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
        }}
      />

      <div
        className="pointer-events-none absolute left-[-40px] top-[12%] h-[220px] w-[220px] rounded-full sm:h-[260px] sm:w-[260px] lg:h-[320px] lg:w-[320px]"
        style={{
          background: 'radial-gradient(circle, rgba(110,255,200,0.12), transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      <div
        className="pointer-events-none absolute bottom-[-60px] right-[8%] h-[200px] w-[200px] rounded-full sm:h-[240px] sm:w-[240px] lg:h-[300px] lg:w-[300px]"
        style={{
          background: 'radial-gradient(circle, rgba(255,110,247,0.1), transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl xl:max-w-7xl">
        <div className="mx-auto mb-10 max-w-3xl text-center lg:mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#6effc8]/20 px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#6effc8]" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-[#6effc8]">
              Contact Me
            </span>
          </div>

          <h2 className="mt-6 text-4xl font-extrabold leading-none tracking-tight text-[#e8e8f0] sm:text-5xl lg:text-6xl">
            Let&apos;s Build Something
            <br />
            <span className="text-[#6effc8]">Together.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-[#7070a0] sm:text-[15px] md:text-base">
            Reach out for internships, collaborations, freelance work, or project discussions.
            This section is the best place to send a direct message.
          </p>
        </div>

        <div className="rounded-[1.5rem] border border-white/8 bg-[linear-gradient(180deg,rgba(20,24,33,0.95),rgba(12,14,20,0.98))] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] sm:p-7 lg:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:gap-10">
            <div className="flex h-full flex-col justify-center">
              <div className="max-w-md">
                <p className="font-mono text-xs font-bold uppercase tracking-[0.28em] text-[#6effc8]">
                  Start a Conversation
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#f3f4f7] sm:text-4xl">
                  Let's talk about collaboration or project work.
                </h2>
                <p className="mt-5 max-w-md text-sm leading-relaxed text-[#8a8fae] sm:text-[15px]">
                  This section is for detailed inquiries. If you want to discuss a role, collaboration, or student project, send a short message here and I&apos;ll follow up by email.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  <div className="rounded-xl border border-white/8 bg-[#10141c]/70 px-4 py-4">
                    <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#6effc8]">
                      Current Focus
                    </p>
                    <p className="mt-2 text-sm text-[#d9dce7]">
                      Open to internship and entry-level opportunities.
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/8 bg-[#10141c]/70 px-4 py-4">
                    <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#6effc8]">
                      Best Use
                    </p>
                    <p className="mt-2 text-sm text-[#d9dce7]">
                      Share role details, project scope, or your main question.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <form className="rounded-[1.25rem] border border-white/8 bg-[#10141c]/75 p-5 sm:p-6 lg:p-7" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-xs font-medium uppercase tracking-[0.18em] text-[#8a8fae]">
                    First Name
                  </span>
                  <input
                    type="text"
                    placeholder="Alfie"
                    value={formValues.firstName}
                    onChange={(event) => handleFieldChange('firstName', event.target.value)}
                    required
                    className="w-full rounded-lg border border-white/10 bg-[#0b0f15] px-4 py-3 text-sm text-[#f3f4f7] outline-none transition-colors duration-150 placeholder:text-[#5b6378] focus:border-[#6effc8]/45"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-medium uppercase tracking-[0.18em] text-[#8a8fae]">
                    Last Name
                  </span>
                  <input
                    type="text"
                    placeholder="Reniedo"
                    value={formValues.lastName}
                    onChange={(event) => handleFieldChange('lastName', event.target.value)}
                    required
                    className="w-full rounded-lg border border-white/10 bg-[#0b0f15] px-4 py-3 text-sm text-[#f3f4f7] outline-none transition-colors duration-150 placeholder:text-[#5b6378] focus:border-[#6effc8]/45"
                  />
                </label>
              </div>

              <label className="mt-4 block">
                <span className="mb-2 block text-xs font-medium uppercase tracking-[0.18em] text-[#8a8fae]">
                  Email
                </span>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  value={formValues.email}
                  onChange={(event) => handleFieldChange('email', event.target.value)}
                  required
                  className="w-full rounded-lg border border-white/10 bg-[#0b0f15] px-4 py-3 text-sm text-[#f3f4f7] outline-none transition-colors duration-150 placeholder:text-[#5b6378] focus:border-[#6effc8]/45"
                />
              </label>

              <label className="mt-4 block">
                <span className="mb-2 block text-xs font-medium uppercase tracking-[0.18em] text-[#8a8fae]">
                  Message
                </span>
                <textarea
                  rows={5}
                  placeholder="Tell me about your project, role, or inquiry."
                  value={formValues.message}
                  onChange={(event) => handleFieldChange('message', event.target.value)}
                  required
                  className="w-full resize-none rounded-lg border border-white/10 bg-[#0b0f15] px-4 py-3 text-sm text-[#f3f4f7] outline-none transition-colors duration-150 placeholder:text-[#5b6378] focus:border-[#6effc8]/45"
                />
              </label>

              {errorMessage ? (
                <p className="mt-4 text-sm text-[#ff8a8a]">{errorMessage}</p>
              ) : null}

              {successMessage ? (
                <p className="mt-4 text-sm text-[#6effc8]">{successMessage}</p>
              ) : null}

              <div className="mt-5 flex justify-end">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-lg bg-[#6effc8] px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#080810] transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[0_0_24px_rgba(110,255,200,0.28)] disabled:cursor-not-allowed disabled:bg-[#6effc8]/60 disabled:shadow-none"
                  disabled={!isFormComplete || isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
