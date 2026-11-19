import { CLIENT_LOGOS } from '../data/site';

export default function Clients() {
  return (
    <section className="clients-wrap">
      <div className="container">
        <div className="eyebrow">Clients we serve</div>
        <div className="logos">
          {CLIENT_LOGOS.map((n) => (
            <div key={n}>
              <img src={`/images/clients/${n}.png`} alt={`${n} logo`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
