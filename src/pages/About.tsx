import { useState } from 'react';
import Icon, { type IconName } from '../components/Icon';
import Reveal from '../components/Reveal';
import Lightbox from '../components/Lightbox';
import PageHero from '../components/PageHero';
import Clients from '../components/Clients';
import Cta from '../components/Cta';

const GUIDE: { label: string; title: string; text: string; icon: IconName }[] = [
  { label: 'Our Vision', title: 'Lighting up futures', text: 'A world where seamless transportation creates unlimited possibilities and a clear path to progress.', icon: 'eye' },
  { label: 'Our Mission', title: 'Navigating success', text: 'Expertise, innovation and reliability that steer organizations and their people towards better outcomes.', icon: 'target' },
  { label: 'Our Philosophy', title: 'Pioneering excellence', text: 'Blending experience and innovation to set a higher standard for corporate transportation.', icon: 'route' },
  { label: 'Our Values', title: 'Nurturing trust', text: 'Reliability, innovation, integrity and collaboration guide the way we work every day.', icon: 'users' },
];
const TEAM = ['Alaxis D. Dowson', 'Salma Khatun', 'Salman Khan', 'Rs Ruhul Das'];
const FEEDBACK = [
  { text: 'Great experience and impressive product. It was a very professional and technically competent job from the whole team.', name: 'Thomas Smith' },
  { text: 'Excellent service supported by a professional team and dependable operations.', name: 'Ernest Smith' },
  { text: 'Greatest appreciation to you and your team for the outstanding job you did for us.', name: 'Salman Ahmed' },
];

export default function About() {
  const [lb, setLb] = useState<string | null>(null);
  return (
    <>
      <PageHero eyebrow="About Sri Chinimilli Logistics" title="A journey built on trust" text="Local expertise, disciplined operations and a clear commitment to safer movement." image="swift-front.jpg" />

      <section>
        <div className="container two">
          <Reveal>
            <div className="eyebrow">Our journey at a glance</div>
            <h2 className="big">From a clear idea to a trusted transport partner</h2>
            <p className="muted" style={{ marginBottom: 14 }}>Inaugurated in 2016, SCL swiftly emerged as a trusted and economical transportation solution for corporate clientele.</p>
            <p className="muted">With years of hands-on experience in logistics and travel, our team ensures smooth operations at every turn. Technology-driven processes put information within easy reach and reinforce our commitment to efficiency, transparency and quality.</p>
            <blockquote>
              &ldquo;We believe dependable transportation is built one safe, punctual journey at a time.&rdquo;
              <small><b style={{ color: 'var(--navy)' }}>Ch. Adinarayana</b><br />Managing Director</small>
            </blockquote>
          </Reveal>
          <Reveal className="about-img">
            <img src="/images/ertiga-front.jpg" alt="SCL Ertiga" />
            <div className="est"><small>Established</small><b>2016</b></div>
          </Reveal>
        </div>
      </section>

      <section className="bg-soft">
        <div className="container">
          <div className="sec-head">
            <div className="eyebrow center">What guides us</div>
            <h2>A clear direction for every journey</h2>
          </div>
          <div className="guide">
            {GUIDE.map((g) => (
              <Reveal key={g.label}>
                <Icon name={g.icon} />
                <small>{g.label}</small>
                <h4>{g.title}</h4>
                <p>{g.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="sec-head">
            <div className="eyebrow center">Team</div>
            <h2>Meet Our Amazing Team</h2>
            <p>The people coordinating every vehicle, route and passenger experience.</p>
          </div>
          <div className="team">
            <img src="/images/team-lightbox.jpg" alt="SCL team" />
            <div className="members">
              {TEAM.map((n, i) => (
                <div key={n}><small>0{i + 1}</small><h4>{n}</h4><span>Transport operations team</span></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-soft">
        <div className="container">
          <div className="sec-head">
            <div className="eyebrow center">Review</div>
            <h2>Client Feedbacks</h2>
          </div>
          <div className="fb">
            {FEEDBACK.map((f) => (
              <Reveal key={f.name}><p>&ldquo;{f.text}&rdquo;</p><b>{f.name}</b></Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="count">
        <div className="container">
          <div className="num"><b>22,800</b><span>Journeys and growing</span></div>
          <div className="t">Worlds Leading Contract Logistics Provider</div>
          <a href="/images/certificate.jpg" onClick={(e) => { e.preventDefault(); setLb('/images/certificate.jpg'); }}>
            <img className="cert" src="/images/certificate.jpg" alt="Safe Drive India certificate" />
          </a>
        </div>
      </div>
      <Lightbox src={lb} onClose={() => setLb(null)} />

      <Clients />
      <Cta />
    </>
  );
}
