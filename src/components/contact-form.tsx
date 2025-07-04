import { useState } from 'react';

interface ContactFormProps {
  open: boolean;
  onClose: () => void;
}

const ContactForm = ({ open, onClose }: ContactFormProps) => {
  const [form, setForm] = useState({ name: '', email: '', company_name: '', message: '', industry: '', phone: '', service_interest: '' });
  const [submitted, setSubmitted] = useState(false);

  if (!open) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // TODO: handle actual submission (API, etc)
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="relative bg-card text-card-foreground rounded-2xl shadow-2xl p-8 w-full max-w-md mx-4 animate-slide-in-right">
        <button
          className="absolute top-4 right-4 text-xl font-bold text-muted-foreground hover:text-foreground"
          onClick={onClose}
          aria-label="Close contact form"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center text-foreground font-light">Contact Us</h2>
        {submitted ? (
          <div className="text-center text-green-600 font-semibold py-8 font-light">Thank you! We'll be in touch soon.</div>
        ) : (
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
              className="bg-background text-foreground border border-border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="company_name"
              name="company_name"
              placeholder="Company Name"
              value={form.company_name}
              onChange={handleChange}
              required
              className="bg-background text-foreground border border-border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="industry"
              name="industry"
              placeholder="Industry"
              value={form.industry}
              onChange={handleChange}
              required
              className="bg-background text-foreground border border-border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
              className="bg-background text-foreground border border-border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="phone"
              name="phone"
              placeholder="Mobile or Phone Number"
              value={form.phone}
              onChange={handleChange}
              required
              className="bg-background text-foreground border border-border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="service_interest"
              name="service_interest"
              placeholder="Service of Interest"
              value={form.service_interest}
              onChange={handleChange}
              required
              className="bg-background text-foreground border border-border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              rows={4}
              className="bg-background text-foreground border border-border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="mt-2 bg-primary text-primary-foreground font-semibold rounded-lg px-6 py-2 hover:bg-primary/90 transition-colors font-light"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
