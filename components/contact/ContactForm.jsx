import { useState } from 'react';

const SERVICES = [
  'Digital Marketing',
  'Meta Ads',
  'Video Editing',
  'Graphic Design',
  'Social Media Management',
  'Website Services',
  'Promotional Ad Videos',
  'Other',
];

const INFO = [
  { ico: '📍', label: 'Address',        value: '42 Anna Salai, Guindy\nChennai, Tamil Nadu 600032' },
  { ico: '✉️', label: 'Email',          value: 'hello@traderoom.in'    },
  { ico: '📞', label: 'Phone',          value: '+91 98765 43210'       },
  { ico: '🕐', label: 'Business Hours', value: 'Mon – Sat: 9 AM – 7 PM IST' },
];

function validate(form) {
  const e = {};
  if (!form.name.trim())                              e.name    = 'Name is required';
  if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email   = 'Valid email required';
  if (!form.phone.trim())                             e.phone   = 'Phone number required';
  if (!form.service)                                  e.service = 'Please select a service';
  if (!form.desc.trim())                              e.desc    = 'Please describe your project';
  if (!form.captcha)                                  e.captcha = 'Please confirm you are not a robot';
  return e;
}

export default function ContactForm() {
  const [form, setForm]     = useState({ name: '', email: '', phone: '', service: '', desc: '', captcha: false });
  const [errors, setErrors] = useState({});
  const [done, setDone]     = useState(false);

  const set = (k) => (e) =>
    setForm((f) => ({ ...f, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setDone(true);
  };

  return (
    <section className="sec" style={{ background: 'var(--s)' }}>
      <div className="con">
        <div className="ct-g">

          {/* ── Contact Info ── */}
          <div>
            <p className="tag" style={{ marginBottom: '1.5rem' }}>Contact Information</p>

            {INFO.map(({ ico, label, value }) => (
              <div key={label} className="ci-item">
                <div className="ci-ico">{ico}</div>
                <div className="ci-txt">
                  <h4>{label}</h4>
                  <p>{value}</p>
                </div>
              </div>
            ))}

            <div style={{ marginTop: '2rem', padding: '2rem', background: 'var(--p)' }}>
              <p className="tag-w" style={{ marginBottom: '.6rem' }}>Office Location</p>
              <p style={{ fontSize: '.82rem', color: 'rgba(255,255,255,.5)', lineHeight: 1.7 }}>
                Located in Chennai&apos;s business district. Reach us by metro at Guindy
                station, or drive in via the Inner Ring Road.
              </p>
            </div>
          </div>

          {/* ── Form ── */}
          <div>
            {done ? (
              <div className="succ">
                <div className="succ-ico">✓</div>
                <h3>Successfully Submitted!</h3>
                <p>
                  Thank you for reaching out. We will review your request and contact you
                  within <strong>24 hours</strong> to discuss your project.
                </p>
                <button
                  className="btn btn-p"
                  style={{ marginTop: '1.75rem' }}
                  onClick={() => { setDone(false); setForm({ name: '', email: '', phone: '', service: '', desc: '', captcha: false }); setErrors({}); }}
                >
                  Send Another Message →
                </button>
              </div>
            ) : (
              <form className="cf" onSubmit={submit} noValidate>
                <p className="tag" style={{ marginBottom: '1rem' }}>Send Us a Message</p>

                <div className="fr2">
                  <div className="ff">
                    <label htmlFor="name">Full Name *</label>
                    <input id="name" type="text" placeholder="John Smith" value={form.name} onChange={set('name')} />
                    {errors.name && <span className="ff-err">{errors.name}</span>}
                  </div>
                  <div className="ff">
                    <label htmlFor="email">Email Address *</label>
                    <input id="email" type="email" placeholder="john@company.com" value={form.email} onChange={set('email')} />
                    {errors.email && <span className="ff-err">{errors.email}</span>}
                  </div>
                </div>

                <div className="fr2">
                  <div className="ff">
                    <label htmlFor="phone">Mobile Number *</label>
                    <input id="phone" type="tel" placeholder="+91 98765 43210" value={form.phone} onChange={set('phone')} />
                    {errors.phone && <span className="ff-err">{errors.phone}</span>}
                  </div>
                  <div className="ff">
                    <label htmlFor="service">Service Required *</label>
                    <select id="service" value={form.service} onChange={set('service')}>
                      <option value="">Select a Service...</option>
                      {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                    {errors.service && <span className="ff-err">{errors.service}</span>}
                  </div>
                </div>

                <div className="ff">
                  <label htmlFor="desc">Project Description *</label>
                  <textarea
                    id="desc"
                    placeholder="Tell us about your project, goals, timeline, and budget..."
                    value={form.desc}
                    onChange={set('desc')}
                    style={{ minHeight: 130 }}
                  />
                  {errors.desc && <span className="ff-err">{errors.desc}</span>}
                </div>

                <div>
                  <div className="cap">
                    <input type="checkbox" id="captcha" checked={form.captcha} onChange={set('captcha')} />
                    <label htmlFor="captcha">I&apos;m not a robot — I confirm this submission is genuine</label>
                  </div>
                  {errors.captcha && <span className="ff-err" style={{ display: 'block', marginTop: '.3rem' }}>{errors.captcha}</span>}
                </div>

                <button type="submit" className="btn btn-p" style={{ width: '100%', justifyContent: 'center', padding: '1rem', marginTop: '.4rem' }}>
                  Submit Message →
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
