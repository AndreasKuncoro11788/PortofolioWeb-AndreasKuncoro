import { useState } from 'react'
import { CheckCircle, Mail, MapPin, Phone, Send } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function Contact() {
  const { t } = useTranslation()
  const [status, setStatus] = useState('idle')
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => {
      console.log('Contact form submitted:', form)
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
    }, 1000)
  }

  const inputClass =
    'w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:focus:ring-blue-900'

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'andreas@email.com', href: 'mailto:andreas@email.com' },
    { icon: Phone, label: 'Phone', value: '+62 812 3456 7890', href: 'tel:+6281234567890' },
    { icon: MapPin, label: 'Location', value: 'Jakarta, Indonesia' },
  ]

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Hubungi <span className="text-blue-600 dark:text-blue-400">Saya</span>
        </h1>
        <p className="mt-3 text-gray-600 dark:text-gray-300">
          {t('contact.subtitle')}
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-5">
        <div className="space-y-4 lg:col-span-2">
          {contactInfo.map((item) => (
            <div
              key={item.label}
              className="flex items-start gap-4 rounded-2xl border border-gray-200 p-5 dark:border-gray-700"
            >
              <div className="rounded-lg bg-blue-50 p-3 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                <item.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="font-medium text-gray-900 hover:text-blue-600 dark:text-white"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="font-medium text-gray-900 dark:text-white">
                    {item.value}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-3">
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-200">
                  {t('contact.name')}
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder={t('contact.placeholderName')}
                  className={inputClass}
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-200">
                  {t('contact.email')}
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder={t('contact.placeholderEmail')}
                  className={inputClass}
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-200">
                {t('contact.subject')}
              </label>
              <input
                type="text"
                name="subject"
                required
                value={form.subject}
                onChange={handleChange}
                placeholder={t('contact.placeholderSubject')}
                className={inputClass}
              />
            </div>

            <div className="mt-4">
              <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-200">
                {t('contact.message')}
              </label>
              <textarea
                name="message"
                required
                rows="5"
                value={form.message}
                onChange={handleChange}
                placeholder={t('contact.placeholderMessage')}
                className={inputClass}
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700 disabled:opacity-50 sm:w-auto"
            >
              <Send className="h-4 w-4" />
              {status === 'sending'
                ? t('contact.sending')
                : t('contact.send')}
            </button>

            {status === 'success' && (
              <div className="mt-4 flex items-center gap-2 rounded-lg bg-green-50 p-3 text-sm text-green-700 dark:bg-green-900/30 dark:text-green-300">
                <CheckCircle className="h-5 w-5" />
                {t('contact.success')}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
