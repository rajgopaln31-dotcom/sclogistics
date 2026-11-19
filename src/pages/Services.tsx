import { Link } from 'react-router-dom';
import Icon, { type IconName } from '../components/Icon';
import Reveal from '../components/Reveal';
import PageHero from '../components/PageHero';
import Cta from '../components/Cta';
import { PHONE, PHONE_HREF } from '../data/site';

const SERVICES: { title: string; text: string; icon: IconName }[] = [
  { title: 'Corporate Transportation', text: 'Reliable daily movement for employees and teams, shaped around your workplace and shift requirements.', icon: 'bus' },
  { title: 'Event Transportation', text: 'Coordinated vehicle planning for conferences, corporate events and special occasions.', icon: 'cal' },
  { title: 'Airport Transfers', text: 'Prompt pickups and drop-offs that remove the uncertainty from business travel.', icon: 'plane' },
  { title: 'Outstation Travel', text: 'Comfortable vehicles and experienced drivers for journeys beyond usual city routes.', icon: 'route' },
  { title: 'Customized Solutions', text: 'Flexible route, fleet and support plans designed for each client’s specific operating needs.', icon: 'target' },
  { title: 'Safety & Efficiency', text: 'Trained drivers, clear controls, GPS-enabled vehicles and an operations team available around the clock.', icon: 'shield' },
];

export default function Services() {
  return (
    <>
      <PageHero eyebrow="Our services" title="Transportation, tailored" text="Practical, dependable services for the way organizations and people move today." image="bolero-2.jpg" />

      <section>
        <div className="container">
          <div className="eyebrow">What we do</div>
          <h2 className="big" style={{ maxWidth: 480 }}>One operating partner. Six ways to move.</h2>
          <p className="muted" style={{ maxWidth: 560, marginBottom: 40 }}>Our services are designed around safety, punctuality and the specific demands of each client.</p>
          <div className="s6">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} className="c">
                <span className="n">0{i + 1}</span>
                <div className="ico"><Icon name={s.icon} /></div>
                <h4>{s.title}</h4>
                <p>{s.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-soft">
        <div className="container two">
          <div>
            <div className="eyebrow">Read more</div>
            <h2 className="big">Discover how our solutions can elevate your transportation experience</h2>
            <p className="muted" style={{ marginBottom: 18 }}>Partner with us for reliable, safe and efficient journeys that exceed expectations.</p>
            <p className="muted">For specific details about shuttle car services, including rates, availability and reservation instructions, contact our team.</p>
          </div>
          <div className="help">
            <div className="eyebrow light">How we can help you?</div>
            <h4>Need service details or a custom route?</h4>
            <p>For rates, availability and reservation instructions, speak directly with our transport team.</p>
            <a className="ph" href={PHONE_HREF}><Icon name="phone" />{PHONE}</a>
            <Link className="btn btn-white" to="/contact">Contact us <Icon name="arrow" /></Link>
          </div>
        </div>
      </section>

      <section>
        <div className="container ev">
          <div className="pic">
            <img src="/images/bolero-1.jpg" alt="SCL fleet" />
            <div className="tag"><Icon name="leaf" />Cleaner mobility</div>
          </div>
          <div>
            <div className="eyebrow">Electric vehicle fleet</div>
            <h2 className="big">Investing in a better tomorrow</h2>
            <p className="muted" style={{ marginBottom: 20 }}>Our EV fleet brings clean, efficient and quiet transportation into daily client operations without compromising service.</p>
            <ul className="checks">
              {['Zero tailpipe emissions', 'Quieter, smoother journeys', 'Drivers trained in EV operation', '24/7 computerized operations support', 'Dedicated charging hub near Hyderabad’s IT corridor'].map((t) => (
                <li key={t}><Icon name="check" />{t}</li>
              ))}
            </ul>
            <div style={{ marginTop: 24 }}>
              <Link className="btn btn-navy" to="/contact">Plan an EV route <Icon name="arrow" /></Link>
            </div>
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
