import Icon, { type IconName } from '../components/Icon';
import Reveal, { useInView } from '../components/Reveal';
import PageHero from '../components/PageHero';
import Cta from '../components/Cta';

interface Card { title: string; text: string; icon: IconName }

const SECURITY: Card[] = [
  { title: 'Late shift protection', text: 'Female employees are not scheduled as the first pickup or last drop between 20:00 and 06:00.', icon: 'shield' },
  { title: 'Escort protocol', text: 'When required, an authorized co-employee or security person accompanies the journey to the destination.', icon: 'users' },
  { title: 'Change communication', text: 'Transportation users are informed when vehicle or driver details change from those already shared.', icon: 'target' },
  { title: 'Professional standards', text: 'Drivers and staff are trained to maintain professional, efficient and respectful conduct.', icon: 'cursor' },
];
const FEATURES: Card[] = [
  { title: 'Fast response', text: 'Operations support designed to resolve daily changes quickly.', icon: 'clock' },
  { title: 'Efficient planning', text: 'Routes and fleet utilization shaped around real requirements.', icon: 'route' },
  { title: 'Real-time visibility', text: 'GPS-enabled operations for clearer journey oversight.', icon: 'target' },
  { title: 'Secure movement', text: 'Defined safety practices for passengers, teams and clients.', icon: 'shield' },
];
const SKILLS = [
  { name: 'Air Freight', value: 90 },
  { name: 'Land Freight', value: 96 },
  { name: 'Warehouse Store', value: 85 },
  { name: 'Products Delivery', value: 94 },
  { name: 'Clients Happy', value: 98 },
];

function SkillBar({ name, value }: { name: string; value: number }) {
  const { ref, seen } = useInView<HTMLDivElement>(0.3);
  return (
    <div className="bar" ref={ref}>
      <div className="t"><span>{name}</span><span>{value}%</span></div>
      <div className="tr"><div className="f" style={{ width: seen ? `${value}%` : 0 }} /></div>
    </div>
  );
}

export default function Infrastructure() {
  return (
    <>
      <PageHero eyebrow="Infrastructure" title="Operations that never stand still" text="People, systems and facilities working together around the clock." image="team-lightbox.jpg" />

      <section>
        <div className="container two">
          <Reveal>
            <div className="eyebrow">Our operations hub</div>
            <h2 className="big">Connected, computerized and always ready</h2>
            <p className="muted" style={{ marginBottom: 14 }}>Our Yousufguda and Madhapur offices operate 24/7 with high-speed connectivity and computerized workflows.</p>
            <p className="muted">Reservations, dispatch, fleet management and accounts operations are coordinated from dedicated operating hubs—giving clients responsive support and teams the information they need.</p>
            <div className="stats3">
              <div><b>2</b><span>Operating hubs</span></div>
              <div><b>24/7</b><span>Coordination</span></div>
              <div><b>1</b><span>EV charging hub</span></div>
            </div>
          </Reveal>
          <Reveal className="future">
            <img src="/images/swift-front.jpg" alt="SCL fleet" />
            <div className="tag"><small>Future ready</small><b>EV</b></div>
          </Reveal>
        </div>
      </section>

      <section className="bg-navy">
        <div className="container">
          <div className="eyebrow light">Security and care</div>
          <h2 className="big" style={{ marginBottom: 40 }}>Clear controls for safer journeys</h2>
          <div className="sec4">
            {SECURITY.map((c) => (
              <Reveal key={c.title}>
                <div className="ico"><Icon name={c.icon} /></div>
                <h4>{c.title}</h4>
                <p>{c.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '70px 0' }}>
        <div className="container">
          <div className="tips">
            <div><small>TIPS</small><h3>SCL Offering advantages</h3></div>
            <ul className="checks" style={{ margin: 0 }}>
              {['Hassle-free car rental services 24/7, 365 days.', 'A reliable and transparent business partner.', 'A relationship founded on values, integrity and customer satisfaction.', 'Consistently delivering high-quality services.'].map((t) => (
                <li key={t}><Icon name="check" />{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 20 }}>
        <div className="container">
          <div className="sec-head">
            <div className="eyebrow center">Our features</div>
            <h2>Control and visibility at every stage</h2>
          </div>
          <div className="feat4">
            {FEATURES.map((c) => (
              <Reveal key={c.title} className="c">
                <div className="ico"><Icon name={c.icon} /></div>
                <h4>{c.title}</h4>
                <p>{c.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-soft">
        <div className="container skills">
          <img src="/images/forklift.jpg" alt="Warehouse forklift" />
          <div>
            <div className="eyebrow">Our skills up</div>
            <h2 className="big" style={{ marginBottom: 30 }}>Experience across logistics operations</h2>
            {SKILLS.map((s) => <SkillBar key={s.name} {...s} />)}
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
