import { useState, type FormEvent } from 'react';
import Icon from './Icon';

interface ContactFormProps {
  full?: boolean;
}

type FieldName = 'name' | 'email' | 'message';

export default function ContactForm({ full = false }: ContactFormProps) {
  const [errors, setErrors] = useState<Partial<Record<FieldName, boolean>>>({});
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const val = (k: string) => String(data.get(k) ?? '').trim();
    const next: Partial<Record<FieldName, boolean>> = {
      name: !val('name'),
      email: !/^\S+@\S+\.\S+$/.test(val('email')),
      message: !val('message'),
    };
    setErrors(next);
    if (Object.values(next).some(Boolean)) {
      setSent(false);
      return;
    }
    // TODO: send `Object.fromEntries(data)` to your backend / email service here.
    setSent(true);
    form.reset();
    window.setTimeout(() => setSent(false), 5000);
  };

  return (
    <form onSubmit={onSubmit} noValidate>
      <div className="grid2">
        <div className="field">
          <label htmlFor="f-name">Full Name</label>
          <input id="f-name" name="name" placeholder="Enter your name" className={errors.name ? 'err' : ''} />
        </div>
        <div className="field">
          <label htmlFor="f-email">Email Address</label>
          <input id="f-email" name="email" type="email" placeholder="Enter email address" className={errors.email ? 'err' : ''} />
        </div>
        {full && (
          <div className="field">
            <label htmlFor="f-phone">Phone Number</label>
            <input id="f-phone" name="phone" type="tel" placeholder="Enter phone number" />
          </div>
        )}
        <div className={`field${full ? '' : ' full'}`}>
          <label htmlFor="f-subject">Subject</label>
          <input id="f-subject" name="subject" placeholder="How can we help?" />
        </div>
        <div className="field full">
          <label htmlFor="f-message">Message</label>
          <textarea id="f-message" name="message" placeholder="Tell us about your transport requirement" className={errors.message ? 'err' : ''} />
        </div>
      </div>
      <div style={{ marginTop: 18 }}>
        <button className="btn btn-orange" type="submit">
          Submit request <Icon name="arrow" />
        </button>
      </div>
      <div className={`ok${sent ? ' show' : ''}`}>Thank you! Our team will get back to you shortly.</div>
    </form>
  );
}
