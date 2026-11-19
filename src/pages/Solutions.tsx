import { Link } from 'react-router-dom';
import Icon, { type IconName } from '../components/Icon';
import Reveal from '../components/Reveal';
import PageHero from '../components/PageHero';
import Cta from '../components/Cta';

const SOLUTIONS: { n: string; title: string; text: string; link: string; icon: IconName }[] = [
  { n: '01', title: 'Reliable, Cost-Effective Transport Solutions', text: 'Experience unparalleled business collaboration with SCL’s unique approach. Our flexibility allows us to deliver innovative and budget-friendly transport solutions. As trusted partners to corporate leaders, we remain dedicated to quality and affordability.', link: 'Know more', icon: 'route' },
  { n: '02', title: 'Safe Journeys with Trusted Transport', text: 'Safety is paramount. Drivers meet stringent criteria including background checks, minimum experience, valid licences and clear records. Rigorous training equips them to handle everyday and emergency situations.', link: 'Know more', icon: 'shield' },
  { n: '03', title: 'Efficient, Effective Transportation', text: 'Vehicles arrive 15 minutes early and GPS supports real-time tracking. Virtual fuel cards, audits, trained staff and fleet utilization reports reinforce our commitment to efficient, dependable service.', link: 'Discuss your requirement', icon: 'target' },
];

export default function Solutions() {
  return (
    <>
      <PageHero eyebrow="Solutions" title="Transportation solutions for every requirement" text="Corporate transport, event logistics, airport transfers, outstation travel and personalized mobility support." image="swift-front.jpg" />
      <section>
        <div className="container">
          <div className="sec-head">
            <div className="eyebrow center">Complete transport support</div>
            <h2>Discover the perfect transportation solution at SCL</h2>
            <p>Whether you are a business, event planner or individual traveller, we bring together the right vehicles, people and processes.</p>
          </div>
          <div>
            {SOLUTIONS.map((s) => (
              <Reveal key={s.n} className="sol">
                <div className="ico"><Icon name={s.icon} /></div>
                <div>
                  <small>{s.n}</small>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <Link className="link-arrow" to="/contact">{s.link} <Icon name="arrow" /></Link>
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
