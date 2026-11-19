import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon, { type IconName } from '../components/Icon';
import Reveal from '../components/Reveal';
import Lightbox from '../components/Lightbox';
import ContactForm from '../components/ContactForm';
import Clients from '../components/Clients';
import Cta from '../components/Cta';

interface Pillar { title: string; text: string; icon: IconName }

const PILLARS: Pillar[] = [
  { title: 'Our Vision', text: 'To lead the employee transport solutions industry through dependable service, innovation and efficiency.', icon: 'eye' },
  { title: 'Our Values', text: 'Customer focus, people, innovation and efficiency shape our work and long-term success.', icon: 'users' },
  { title: 'Our Commitment', text: 'To create lasting value for corporate clients through informed, responsive operations.', icon: 'target' },
  { title: 'Our Integrity', text: 'Open communication, teamwork and ethical conduct guide every professional relationship.', icon: 'route' },
  { title: 'Our Responsibility', text: 'Safer travel, thoughtful operations and a growing commitment to cleaner mobility.', icon: 'shield' },
];

const GALLERY: { file: string; cls: string }[] = [
  { file: 'team.jpg', cls: '' },
  { file: 'suv-1.jpg', cls: '' },
  { file: 'suv-2.jpg', cls: '' },
  { file: 'hero-fleet.jpg', cls: '' },
  { file: 'driver.jpg', cls: '' },
  { file: 'cars-row.jpg', cls: '' },
  { file: 'audience.jpg', cls: '' },
  { file: 'health-1.jpg', cls: '' },
  { file: 'health-2.jpg', cls: '' },
  { file: 'health-3.jpg', cls: '' },
];

const INSIGHTS = [
  { n: '01', img: 'fleet-row.jpg', title: 'Hello world!', text: 'Welcome to Sri Chinimilli Logistics and our company insights.' },
  { n: '02', img: 'ertiga-side.jpg', title: 'Be Smart About Packaging, Product Design', text: 'Practical perspectives on logistics, planning and efficient operations.' },
  { n: '03', img: 'ertiga-side.jpg', title: 'Drivers Deliver Much More Than Products', text: 'The people, discipline and responsibility behind dependable transport.' },
];

export default function Home() {
  const [lb, setLb] = useState<string | null>(null);
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="eyebrow light">Welcome to Sri Chinimilli Logistics Pvt. Ltd.</div>
          <h1>Efficient and Effective Transportation</h1>
          <p className="lead">A leading provider of transportation services in Hyderabad, committed to exceptional service for every client and employee.</p>
          <div className="btns">
            <Link className="btn btn-orange" to="/solutions">Explore our solutions <Icon name="arrow" /></Link>
            <Link className="btn btn-ghost" to="/contact">Speak to our team</Link>
          </div>
        </div>
        <div className="hero-stats">
          <div><b>Since 2016</b><span>Trusted operations</span></div>
          <div><b>24 / 7</b><span>Transport support</span></div>
          <div><b>GPS enabled</b><span>Real-time visibility</span></div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="sec-head">
            <div className="eyebrow center">Built around responsibility</div>
            <h2>Transportation that works for everyone</h2>
            <p>Every route, vehicle and interaction is planned around the people and businesses that depend on us.</p>
          </div>
          <div className="cards5">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} className="c">
                <span className="n">0{i + 1}</span>
                <div className="ico"><Icon name={p.icon} /></div>
                <h4>{p.title}</h4>
                <p>{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-soft">
        <div className="container two">
          <Reveal className="ov-img">
            <img src="/images/ertiga-badge.jpg" alt="SCL Ertiga" />
            <div className="badge10"><b>10</b><span>years of transport experience</span></div>
          </Reveal>
          <Reveal>
            <div className="eyebrow">Company overview</div>
            <h2 className="big">A dependable partner for every working day</h2>
            <p className="muted" style={{ marginBottom: 16 }}>Inaugurated in 2016, SCL quickly emerged as a trusted and economical transportation solution for corporate clients.</p>
            <p className="muted" style={{ marginBottom: 20 }}>Our owned and affiliated fleet, experienced operations team and technology-driven processes work together to keep daily movement smooth and information accessible.</p>
            <ul className="checks">
              {['Owned and affiliated vehicle network', 'Experienced logistics and travel professionals', 'Computerized reservations and fleet operations', 'Responsive support for changing requirements'].map((t) => (
                <li key={t}><Icon name="check" />{t}</li>
              ))}
            </ul>
            <div className="md"><b>Ch. Adinarayana</b><small>Managing Director</small></div>
            <Link className="link-arrow" to="/about">Discover our journey <Icon name="arrow" /></Link>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="svc-head">
            <div>
              <div className="eyebrow">What we do</div>
              <h2 className="big" style={{ margin: 0, maxWidth: 560 }}>Transport solutions shaped around your people</h2>
            </div>
            <Link className="link-arrow" to="/services">View all services <Icon name="arrow" /></Link>
          </div>
          <div className="svc-grid">
            <Link className="svc tall" to="/services" style={{ backgroundImage: 'url(/images/suv-2.jpg)' }}>
              <div><small>01</small><h3>Employee Transportation</h3><p>Consistent workplace travel designed around shifts, safety and punctuality.</p><span className="more">Learn more <Icon name="arrow" /></span></div>
            </Link>
            <Link className="svc" to="/services" style={{ backgroundImage: 'url(/images/cars-swift.jpg)' }}>
              <div><small>02</small><h3>Corporate &amp; Event Transport</h3><p>Coordinated travel for teams, conferences and special occasions.</p><span className="more">Learn more <Icon name="arrow" /></span></div>
            </Link>
            <Link className="svc" to="/services" style={{ backgroundImage: 'url(/images/cars-row.jpg)' }}>
              <div><small>03</small><h3>Electric Vehicle Fleet</h3><p>Cleaner mobility supported by our own charging infrastructure.</p><span className="more">Learn more <Icon name="arrow" /></span></div>
            </Link>
          </div>
        </div>
      </section>

      <section className="safety bg-navy">
        <div className="container">
          <div>
            <div className="eyebrow light">Safety in every shift</div>
            <h2>Promoting safety through thoughtful operations</h2>
          </div>
          <div>
            <p>Between 20:00 and 06:00, female employees are not scheduled as the first pickup or last drop. Where unavoidable, an authorized co-employee or security escort accompanies the journey.</p>
            <Link to="/infrastructure">See our safety controls <Icon name="arrow" /></Link>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="sec-head">
            <div className="eyebrow center">Our gallery</div>
            <h2>The people and fleet behind every journey</h2>
            <p>A closer look at SCL vehicles, teams, wellness initiatives and day-to-day operations.</p>
          </div>
          <div className="gallery">
            {GALLERY.map((g) => (
              <a
                key={g.file}
                href={`/images/${g.file}`}
                className={g.cls}
                onClick={(e) => { e.preventDefault(); setLb(`/images/${g.file}`); }}
              >
                <img src={`/images/${g.file}`} alt="SCL gallery" loading="lazy" />
              </a>
            ))}
          </div>
        </div>
      </section>
      <Lightbox src={lb} onClose={() => setLb(null)} />

      <section className="bg-soft">
        <div className="container cform">
          <Reveal>
            <div className="eyebrow">Start a conversation</div>
            <h2 className="big">Tell us what needs to move</h2>
            <p className="muted">Share your requirements and our team will help shape a safe, efficient transportation plan.</p>
            <div className="pills">
              {['Online tracking', 'Efficient routing', 'Support 24/7', 'Consistent service'].map((t) => (
                <span key={t}><Icon name="check" />{t}</span>
              ))}
            </div>
          </Reveal>
          <Reveal className="formcard">
            <h3>Your contact details</h3>
            <p>&nbsp;</p>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <div className="count">
        <div className="container">
          <div className="num"><b>22,800</b><span>Journeys and growing</span></div>
          <div className="t">Your Best Logistics Partner</div>
          <Link className="btn btn-orange" to="/contact">Make custom request <Icon name="arrow" /></Link>
        </div>
      </div>

      <Clients />

      <section className="bg-soft" id="insights">
        <div className="container">
          <div className="sec-head">
            <div className="eyebrow center">Insights</div>
            <h2>Perspectives on smarter movement</h2>
          </div>
          <div className="ins">
            {INSIGHTS.map((a) => (
              <Reveal key={a.n} className="a">
                <img src={`/images/${a.img}`} alt="" />
                <div className="b">
                  <small>Operations · {a.n}</small>
                  <h4>{a.title}</h4>
                  <p>{a.text}</p>
                  <a className="link-arrow" href="#" onClick={(e) => e.preventDefault()}>Read insight <Icon name="arrow" /></a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
